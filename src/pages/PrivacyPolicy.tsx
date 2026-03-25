import { motion } from "motion/react";
import { useEffect } from "react";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Trust & Security</span>
          <h1 className="text-5xl md:text-6xl mb-6 italic">Privacy Policy</h1>
          <p className="text-xl text-stone-600">
            Your trust is our most valuable asset. We are committed to protecting the privacy and dignity of every individual we serve.
          </p>
        </motion.div>

        <div className="space-y-12 text-stone-700 leading-relaxed">
          <section className="card-rounded p-8 md:p-12 bg-stone-50 border border-stone-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif">Our Commitment to Confidentiality</h2>
            </div>
            <p className="text-lg mb-6">
              At Silver Care Companions, we understand that we are invited into the most private spaces of our clients' lives. We hold this invitation with the utmost respect and professional integrity.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-stone-900 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-olive" /> Personal Information
                </h3>
                <p className="text-sm text-stone-600">
                  We keep all client personal information strictly private. This includes names, addresses, contact details, and any sensitive documentation shared with us during the course of our service.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-stone-900 flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-olive" /> Information Learned in Service
                </h3>
                <p className="text-sm text-stone-600">
                  Any information learned while helping or visiting a client—whether it's personal stories, family dynamics, or daily routines—is treated as strictly confidential and is never shared outside of necessary care coordination with authorized family members.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-stone-900">Information We Collect</h2>
            <p>
              We only collect information that is necessary to provide high-quality companion care and ensure the safety of our clients. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Contact information for the client and their primary family representatives.</li>
              <li>Emergency contact details and relevant non-medical background information.</li>
              <li>Preferences, interests, and hobbies to help us provide better companionship.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-stone-900">How We Use Information</h2>
            <p>
              Information is used solely for the purpose of providing and improving our companion care services. We do not sell, rent, or trade client information to third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-stone-900">Post-Visit Reports</h2>
            <p>
              As part of our service, we provide Post-Visit Reports to authorized family members. These reports contain observations from our time together and are shared only with the individuals explicitly designated by the client or their legal representative.
            </p>
          </section>

          <section className="pt-12 border-t border-stone-200">
            <p className="text-sm text-stone-400 italic">
              Last Updated: March 25, 2026. If you have any questions regarding our privacy practices, please contact us directly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
