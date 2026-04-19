import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchBlogPosts, BlogPost } from "../services/blogService";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const data = await fetchBlogPosts();
      setPosts(data);
      setLoading(false);
    }
    loadPosts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-[#F5F1EB] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-[#1D3557] mb-6">
            🛡️ Nashville Healthy Aging Resources & Stories
          </h1>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-pulse text-stone-400 font-serif text-2xl">Fetching latest stories...</div>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[20px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 flex flex-col h-full border border-stone-100"
              >
                <Link to={`/blog/${post.slug}`} className="aspect-[16/10] overflow-hidden block">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[12pt] text-stone-400 font-sans uppercase tracking-[0.2em] mb-4 font-bold">
                    {new Date(post.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <Link to={`/blog/${post.slug}`} className="hover:text-olive transition-colors">
                    <h3 className="text-[20pt] font-serif text-[#1D3557] leading-tight mb-4 group-hover:text-olive transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-[14pt] text-stone-600 font-sans line-clamp-3 mb-8 leading-relaxed">
                    {post.contentSnippet}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-[#1D3557] font-sans font-bold hover:gap-3 transition-all group/link"
                    >
                      Read More <ArrowRight className="w-4 h-4 text-olive" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-stone-500 font-sans text-xl">No stories found. Please check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
