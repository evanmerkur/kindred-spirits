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
    
    const xmlText = await response.text();
    console.log("Blog feed XML received, length:", xmlText.length);
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    
    // Check for parsing errors
    const parserError = xmlDoc.querySelector("parsererror");
    if (parserError) {
      console.error("XML Parsing Error:", parserError.textContent);
      throw new Error("Failed to parse RSS feed");
    }

    const items = Array.from(xmlDoc.querySelectorAll("item"));
    console.log(`Found ${items.length} blog items in feed.`);

    if (items.length === 0) {
      console.warn("No items found. XML Head:", xmlText.slice(0, 200));
    }

    return items.map((item) => {
      const title = item.querySelector("title")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      const guid = item.querySelector("guid")?.textContent || "";
      
      // Handle namespaced content:encoded
      let content = "";
      const contentEncoded = item.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/", "encoded")[0] || 
                             item.getElementsByTagName("content:encoded")[0] ||
                             item.getElementsByTagName("encoded")[0];
      
      if (contentEncoded) {
        content = contentEncoded.textContent || "";
      } else {
        content = item.querySelector("description")?.textContent || "";
      }

      // Extract image from multiple possible sources
      let image = "/assets/Hero_Nashville.png";
      
      // 1. Try media:content
      const mediaContent = item.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "content")[0] ||
                           item.getElementsByTagName("media:content")[0];
      
      if (mediaContent && mediaContent.getAttribute("url")) {
        image = mediaContent.getAttribute("url")!;
      } 
      // 2. Try enclosure
      else {
        const enclosure = item.querySelector("enclosure");
        if (enclosure && enclosure.getAttribute("url") && enclosure.getAttribute("type")?.startsWith("image/")) {
          image = enclosure.getAttribute("url")!;
        }
        // 3. Fallback to regex in content
        else {
          const imgRegex = /<img[^>]+src="([^">]+)"/;
          const match = content.match(imgRegex);
          if (match) image = match[1];
        }
      }
      
      // Extract slug from link
      const slug = link.split("/").pop()?.split("?")[0] || guid;
      
      // Simple snippet extraction: remove HTML tags, decode entities, and truncate
      const decodedContent = new DOMParser().parseFromString(
        content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
        "text/html"
      ).documentElement.textContent || "";

      const contentSnippet = decodedContent.slice(0, 160) + "...";

      return {
        title: new DOMParser().parseFromString(title, "text/html").documentElement.textContent || title,
        link,
        pubDate,
        content,
        contentSnippet,
        guid,
        isoDate: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        slug,
        image,
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
