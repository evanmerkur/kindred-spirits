import { motion } from "motion/react";
import { 
  Clock, 
  CheckCircle2, 
  Calendar,
  ShieldCheck,
  UserCheck,
  Heart
} from "lucide-react";
import { useEffect } from "react";

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Pricing & Policy</span>
          <h1 className="text-5xl md:text-6xl mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We believe in clear, unhurried time. Our pricing is designed to ensure 
            your loved one receives the unhurried attention they deserve.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card-rounded p-12 bg-olive text-cream shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-8 h-8 opacity-60" />
                <span className="text-sm font-semibold uppercase tracking-widest opacity-80">Standard Companion Visit</span>
              </div>
              
              <div className="mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-light">$250</span>
                  <span className="text-xl opacity-60">/ visit</span>
                </div>
                <p className="text-cream/70 mt-4 text-lg">
                  Each visit is a dedicated 2.5-hour block of time.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cream/40" />
                  <span className="text-lg">2.5 Hours of Focused Time</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cream/40" />
                  <span className="text-lg">Personalized Companion Match</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cream/40" />
                  <span className="text-lg">No Long-Term Contracts</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cream/40" />
                  <span className="text-lg">Consistent Companion Every Visit</span>
                </div>
              </div>

              <button className="w-full py-5 bg-cream text-olive rounded-2xl font-bold text-xl hover:bg-white transition-colors">
                Book a Consultation
              </button>
            </div>
          </motion.div>

          {/* Policy & Peace of Mind */}
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="card-rounded p-10 border border-stone-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-olive" />
                <h3 className="text-2xl font-serif">Cancellation Policy</h3>
              </div>
              <p className="text-stone-600 leading-relaxed text-lg">
                We understand that things come up. While we strive to be flexible, 
                we kindly request **24 hours notice** for any cancellations or 
                rescheduling. This allows us to manage our companions' schedules 
                and ensure we can serve all our families effectively.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-serif px-2">Designed for Peace of Mind</h3>
              
              <div className="grid gap-6">
                <div className="flex items-start gap-5 p-6 bg-stone-50 rounded-3xl border border-stone-100">
                  <ShieldCheck className="w-8 h-8 text-olive shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">Safety First</h4>
                    <p className="text-sm text-stone-500">Full background checks and drug tests on all companions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-stone-50 rounded-3xl border border-stone-100">
                  <UserCheck className="w-8 h-8 text-olive shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">Reliability</h4>
                    <p className="text-sm text-stone-500">Consistent faces you can trust and rely on every single time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-stone-50 rounded-3xl border border-stone-100">
                  <Heart className="w-8 h-8 text-olive shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">No Hidden Costs</h4>
                    <p className="text-sm text-stone-500">Transparent flat-rate pricing with no surprise fees or complicated billing.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
