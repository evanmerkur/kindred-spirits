import { motion } from "motion/react";
import { useEffect } from "react";

export default function IntakeForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">New Client</span>
          <h1 className="text-5xl md:text-6xl mb-6 italic">New Companion Intake Form</h1>
          <p className="text-xl text-stone-600">
            Please fill out the form below to help us understand your needs and provide the best possible care.
          </p>
        </motion.div>

        <div className="card-rounded bg-white p-4 md:p-8 shadow-sm border border-stone-100 flex justify-center">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLScQ4mJQfen_i6El3JJsuqILUaLepQ19puD_i3tg_I_ZCtqUpg/viewform?embedded=true" 
            width="100%" 
            height="1200" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="rounded-xl"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
