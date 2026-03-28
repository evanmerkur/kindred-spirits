import { motion } from "motion/react";
import { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Accessibility() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-warm-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Our Commitment</span>
          <h1 className="text-5xl md:text-6xl mb-8 italic">Accessibility Statement</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[40px] p-12 md:p-16 shadow-sm border border-stone-100 text-stone-700 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-serif mb-4 text-stone-900">Our Commitment to Accessibility</h2>
            <p className="text-lg leading-relaxed">
              Silver Care Companions is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We aim to comply with all applicable standards, including **WCAG 2.1 AA standards**.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif mb-4 text-stone-900">Ongoing Efforts</h2>
            <p className="leading-relaxed">
              We are continually improving the user experience for everyone and applying the relevant accessibility standards. We regularly audit our website and implement updates to ensure that our digital content is as accessible as possible.
            </p>
          </section>

          <section className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100">
            <h2 className="text-2xl font-serif mb-6 text-stone-900">Accessibility Feedback & Contact Us</h2>
            <p className="leading-relaxed mb-8">
              If you experience any difficulty in accessing any part of this website, or if you have any feedback regarding the accessibility of our site, please contact us immediately. We will work with you to provide the information, item, or transaction you seek through an alternate communication method that is accessible for you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-stone-400">Call Us</p>
                  <p className="text-lg font-medium text-stone-800">615-241-6881</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-stone-400">Email Us</p>
                  <p className="text-lg font-medium text-stone-800">info@silvercarecompanions.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-stone-400">Mailing Address</p>
                <p className="text-lg font-medium text-stone-800">Serving the Greater Nashville Area</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
