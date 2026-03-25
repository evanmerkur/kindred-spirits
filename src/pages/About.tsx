import { motion } from "motion/react";
import { Heart, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-6xl mb-8 italic">The Heart Behind <br />Silver Care Companions</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800" 
              alt="Hands of an elderly and young person" 
              className="rounded-[40px] w-full h-[500px] object-cover shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-lg text-stone-600 leading-relaxed"
          >
            <p>
              Silver Care Companions wasn't born out of a business plan, but out of a lifetime of observation and a deeply rooted family value. 
            </p>
            <p>
              Growing up, I had the privilege of watching my father. He didn't just "check in" on our elderly relatives; he truly *spent time* with them. Whether it was sitting on a porch for hours listening to stories I'm sure he'd heard a dozen times, or making a special trip just to bring a favorite treat, he treated every elderly member of our family with a level of dignity and genuine friendship that stayed with me.
            </p>
            <p>
              He taught me, without ever saying a word, that aging shouldn't mean being forgotten or isolated. He showed me that a simple afternoon of presence could be the most valuable thing you could give someone.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-stone-100 rounded-[40px] p-12 md:p-16 relative overflow-hidden mb-20"
        >
          <Quote className="absolute top-10 left-10 w-20 h-20 text-olive/5 -z-0" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-8 font-serif italic text-stone-800">
              "I watched my father treat his elderly relatives with a level of dignity and genuine friendship that stayed with me."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-olive/30"></div>
              <span className="text-sm uppercase tracking-widest font-bold text-stone-400">Our Foundation</span>
              <div className="w-12 h-px bg-olive/30"></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-stone-600 leading-relaxed space-y-6 max-w-2xl mx-auto"
        >
          <p>
            Those values became my own. I realized that there are so many seniors in our community who have incredible stories to tell and a wealth of wisdom to share, but they lack that consistent, meaningful connection.
          </p>
          <p>
            Silver Care Companions is my way of honoring that legacy. We aren't just providing a service; we are carrying forward a tradition of respect, patience, and genuine companionship. We treat your loved ones the way my father treated ours—with a heart that truly values their presence.
          </p>
          <div className="pt-12 text-center">
            <Heart className="w-12 h-12 text-olive mx-auto mb-4 opacity-40" />
            <p className="font-serif italic text-2xl text-stone-800 mb-8">For the journey, together.</p>
            <Link to="/contact" className="btn-olive">Get in Touch</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
