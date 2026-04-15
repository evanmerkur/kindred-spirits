import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  alt: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "beyond-a-visit",
    title: "Beyond a Visit: The Surprising Science of Meaningful Senior Social Engagement",
    date: "MARCH 15, 2026",
    excerpt: "Discover how intentional social interaction triggers cognitive resilience and emotional well-being in older adults.",
    image: "/assets/Hero_Nashville.png",
    alt: "A kind caregiver and an elderly woman sharing a smile on a Nashville porch, representing meaningful social engagement.",
    url: "https://silvercarecompanions.substack.com/p/beyond-a-visit-the-surprising-science"
  },
  {
    id: "5-ways-to-reconnect",
    title: "5 Compassionate Ways to Reconnect When a Senior Loved One Withdraws",
    date: "APRIL 2, 2026",
    excerpt: "Practical strategies for families to bridge the gap and rebuild connection when a loved one begins to isolate.",
    image: "/assets/Connection_Hands.png",
    alt: "Close-up of two people holding hands, representing a supportive and caring connection.",
    url: "https://silvercarecompanions.substack.com/p/5-compassionate-ways-to-reconnect"
  },
  {
    id: "nashville-neighbor",
    title: "The Nashville Neighbor: Curated Local Support Resources (Porch swings to support groups)",
    date: "APRIL 10, 2026",
    excerpt: "A curated guide to the best local resources in Middle Tennessee for seniors and their families.",
    image: "/assets/Hero_Nashville.png",
    alt: "A scenic view of a Nashville porch, representing local community support and resources.",
    url: "https://silvercarecompanions.substack.com/p/the-nashville-neighbor-curated-local"
  }
];

export default function Blog() {
  useEffect(() => {
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

        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[20px] overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 flex flex-col h-full border border-stone-100"
            >
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="aspect-[16/10] overflow-hidden block">
                <img 
                  src={post.image} 
                  alt={post.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </a>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[12pt] text-stone-400 font-sans uppercase tracking-[0.2em] mb-4 font-bold">
                  {post.date}
                </span>
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:text-olive transition-colors">
                  <h3 className="text-[20pt] font-serif text-[#1D3557] leading-tight mb-4 group-hover:text-olive transition-colors">
                    {post.title}
                  </h3>
                </a>
                <p className="text-[14pt] text-stone-600 font-sans line-clamp-3 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1D3557] font-sans font-bold hover:gap-3 transition-all group/link"
                  >
                    Read More <ArrowRight className="w-4 h-4 text-olive" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
