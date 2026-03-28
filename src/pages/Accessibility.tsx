import { motion } from "motion/react";
import { useEffect } from "react";

export default function Accessibility() {
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
          <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Commitment</span>
          <h1 className="text-5xl md:text-6xl mb-8 italic">Accessibility Statement</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-stone-100 rounded-[40px] p-12 md:p-16 text-stone-700"
        >
          <p className="text-xl leading-relaxed mb-8">
            Silver Care Companions is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We aim to comply with WCAG 2.1 AA standards.
          </p>
          <p className="leading-relaxed">
            We are continually improving the user experience for everyone and applying the relevant accessibility standards. If you experience any difficulty in accessing any part of this website, please feel free to call us at 615-241-6881 or email us at info@silvercarecompanions.com and we will work with you to provide the information, item, or transaction you seek through an alternate communication method or that is accessible for you consistent with applicable law.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
