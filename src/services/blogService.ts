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

const SUBSTACK_RSS_URL = "https://silvercarecompanions.substack.com/feed";
const PROXY_URL = "https://api.allorigins.win/get?url=";

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log("[BlogService] Attempting to fetch posts...");
    
    // First, try the local backend bridge (works in Preview/Node environments)
    let feedData: any;
    try {
      const response = await fetch(`/api/blog-feed?t=${Date.now()}`);
      if (response.ok) {
        feedData = await response.json();
        console.log("[BlogService] Success via Internal Bridge.");
        return feedData;
      }
    } catch (e) {
      console.warn("[BlogService] Internal bridge unavailable, switching to Universal Client Bridge.");
    }

    // FALLBACK: Use a public CORS proxy to fetch the RSS directly from Substack
    // This allows the site to work on static hosts like GitHub Pages
    const proxyResponse = await fetch(`${PROXY_URL}${encodeURIComponent(SUBSTACK_RSS_URL)}&t=${Date.now()}`);
    if (!proxyResponse.ok) throw new Error("Universal bridge failed.");
    
    const json = await proxyResponse.json();
    const xmlText = json.contents;
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const items = Array.from(xmlDoc.querySelectorAll("item"));
    
    console.log(`[BlogService] Universal Bridge Success: Found ${items.length} items.`);

    return items.map((item) => {
      const title = item.querySelector("title")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      const guid = item.querySelector("guid")?.textContent || "";
      
      let content = "";
      const contentEncoded = item.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/", "encoded")[0] || 
                             item.getElementsByTagName("content:encoded")[0];
      content = contentEncoded?.textContent || item.querySelector("description")?.textContent || "";

      let image = "/assets/Hero_Nashville.png";
      const mediaContent = item.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "content")[0];
      if (mediaContent?.getAttribute("url")) {
        image = mediaContent.getAttribute("url")!;
      } else {
        const match = content.match(/<img[^>]+src="([^">]+)"/);
        if (match) image = match[1];
      }
      
      const slug = link.split("/").pop()?.split("?")[0] || guid;
      
      // Boutique decoding
      const decode = (text: string) => {
        const doc = new DOMParser().parseFromString(text, "text/html");
        return doc.documentElement.textContent || text;
      };

      return {
        title: decode(title),
        link,
        pubDate,
        content,
        contentSnippet: decode(content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ")).slice(0, 160) + "...",
        guid,
        isoDate: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        slug,
        image,
      };
    });
  } catch (error) {
    console.error("[BlogService] Critical Failure:", error);
    return [];
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
