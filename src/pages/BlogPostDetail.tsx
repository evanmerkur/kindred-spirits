import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { fetchBlogPostBySlug, BlogPost } from "../services/blogService";
import NewsletterForm from "../components/NewsletterForm";

export default function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (slug) {
        const data = await fetchBlogPostBySlug(slug);
        setPost(data);
      }
      setLoading(false);
      window.scrollTo(0, 0);
    }
    loadPost();
  }, [slug]);

  const getSanitizedContent = (content: string, featuredImage?: string) => {
    if (!content) return "";
    
    // Create a temporary element to parse the HTML string
    const div = document.createElement("div");
    div.innerHTML = content;
    
    // Find the first image in the entire content
    const firstImg = div.querySelector("img");
    
    if (firstImg) {
      // 1. Check for URL match (stripping queries)
      const featuredBase = featuredImage?.split("?")[0];
      const imgBase = firstImg.src.split("?")[0];
      const isUrlMatch = featuredBase && imgBase && (imgBase.includes(featuredBase) || featuredBase.includes(imgBase));
      
      // 2. Check for "early" appearance (within first 100 chars of text)
      let charCountBefore = 0;
      const walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
      let node = walker.nextNode();
      
      while(node) {
        if (node.contains(firstImg) || node === firstImg) break;
        if (node.nodeType === Node.TEXT_NODE) {
          charCountBefore += (node.textContent || "").trim().length;
        }
        if (charCountBefore >= 100) break;
        node = walker.nextNode();
      }
      
      const isEarlyImage = charCountBefore < 100;

      if (isUrlMatch || isEarlyImage) {
        // Find the top-level parent of this image within our div to remove
        // Substack often wraps images in <figure> or <div> wraps
        let elementToRemove: HTMLElement | null = firstImg;
        while (elementToRemove && elementToRemove.parentElement !== div) {
          elementToRemove = elementToRemove.parentElement;
        }
        elementToRemove?.remove();
      }
    }
    
    return div.innerHTML;
  };

  if (loading) {
    return (
      <div className="pt-32 pb-24 px-6 bg-[#F5F1EB] min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-stone-400 font-serif text-2xl">Loading heartfelt guidance...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-32 pb-24 px-6 bg-[#F5F1EB] min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-[#1D3557] mb-6">Post Not Found</h1>
        <Link to="/blog" className="btn-olive flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-[#F5F1EB] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-stone-500 hover:text-olive transition-colors mb-8 font-sans font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-serif text-[#1D3557] mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-stone-400 font-sans text-sm uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.pubDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Silver Care Companions
            </div>
          </div>
        </motion.div>

        {post.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12 rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-stone prose-lg max-w-none mb-24"
        >
          <div 
            className="blog-content text-[18pt] text-stone-700 font-sans leading-relaxed space-y-8"
            dangerouslySetInnerHTML={{ __html: getSanitizedContent(post.content, post.image) }}
          />
        </motion.article>

        <div className="border-t border-stone-200 pt-24">
          <NewsletterForm />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h2 {
          font-family: serif;
          color: #1D3557;
          font-size: 2.5rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .blog-content h3 {
          font-family: serif;
          color: #1D3557;
          font-size: 2rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content img {
          border-radius: 1.5rem;
          margin: 3rem 0;
          box-shadow: 0 20px 50px -20px rgba(0,0,0,0.1);
        }
        .blog-content ul, .blog-content ol {
          margin-left: 1.5rem;
          margin-bottom: 2rem;
          list-style-type: disc;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
        }
        .blog-content blockquote {
          border-left: 4px solid #789B8D;
          padding-left: 2rem;
          font-style: italic;
          color: #789B8D;
          margin: 3rem 0;
        }
      `}} />
    </div>
  );
}
