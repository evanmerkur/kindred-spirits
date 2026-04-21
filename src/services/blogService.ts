export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
  slug: string;
  image?: string;
}

const SUBSTACK_URL = "/api/blog-feed";

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    // Adding a timestamp as a cache-buster to ensure we get the latest feed
    const cacheBuster = `?t=${new Date().getTime()}`;
    const response = await fetch(`${SUBSTACK_URL}${cacheBuster}`);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Blog fetch failed:", response.status, errorData);
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    
    const posts: BlogPost[] = await response.json();
    console.log(`Successfully received ${posts.length} blog posts as JSON.`);

    // Still perform any final cleaning or decoding needed on the frontend
    return posts.map(post => {
      // Clean snippet and title if they have entities
      const decode = (text: string) => {
        const doc = new DOMParser().parseFromString(text, "text/html");
        return doc.documentElement.textContent || text;
      };

      return {
        ...post,
        title: decode(post.title),
        contentSnippet: decode(post.contentSnippet).slice(0, 160) + "..."
      };
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
