import { motion } from "motion/react";
import { Heart, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl italic text-stone-900 leading-[1.1]">
              The Heart Behind <br />Silver Care Companions
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/assets/Steady_Companion.png" 
                alt="A companion and a senior adult walking together in a sunny park." 
                className="rounded-[40px] w-full h-[600px] object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-stone-600 leading-relaxed space-y-6"
          >
            <p>
              Those values became my own. I realized that there are so many seniors in our community who have incredible stories to tell and a wealth of wisdom to share, but they lack that consistent, meaningful connection.
            </p>
            <p>
              Silver Care Companions is my way of honoring that legacy. We aren't just providing a service; we are carrying forward a tradition of respect, patience, and genuine companionship. We treat your loved ones the way my father treated ours—with a heart that truly values their presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vital Spark Section */}
      <section className="bg-stone-100/50 pt-24 pb-12 px-6 border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4 italic text-stone-800">The Vital Spark of Connection</h2>
              <h3 className="text-sm uppercase tracking-widest font-bold text-olive">Why Social Engagement Matters</h3>
            </div>
            
            <p className="text-xl text-stone-600 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
              At Silver Care Companions, we know that social interaction isn't just a "nice-to-have"—it is a vital pillar of health. Research shows that consistent social engagement is as impactful on longevity as physical exercise.
            </p>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-serif italic text-stone-800">Cognitive Vitality</h3>
                <p className="text-stone-600 leading-relaxed">Meaningful conversation is a workout for the brain, helping to maintain mental sharpness and memory.</p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-serif italic text-stone-800">Emotional Resilience</h3>
                <p className="text-stone-600 leading-relaxed">Having a companion to share stories with significantly reduces the risks of isolation-induced depression and anxiety.</p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-serif italic text-stone-800">Heart Health</h3>
                <p className="text-stone-600 leading-relaxed">Staying connected is proven to lower stress hormones and blood pressure, leading to a stronger, healthier heart.</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <p className="text-2xl md:text-3xl text-stone-700 leading-tight italic font-serif">
                "Our companions don't just visit, they engage, listen and reconnect seniors to the joy of being seen and heard."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section with extra padding to avoid footer overlap */}
      <section className="pt-12 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Heart className="w-12 h-12 text-olive mx-auto mb-6 opacity-40" />
            <p className="font-serif italic text-3xl text-stone-800 mb-10">For the journey, together.</p>
            <Link to="/contact" className="btn-olive px-12 py-5 text-lg shadow-xl">Get in Touch</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
