import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Heart, 
  Coffee, 
  BookOpen, 
  Car, 
  Laptop,
  Calendar, 
  MessageCircle, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  UserCheck,
  ShieldCheck
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-light italic">
              Helping Your Loved One Stay <br />
              <span className="text-olive">Connected, Engaged, and Supported.</span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 max-w-lg leading-relaxed">
              We support older adults who feel isolated, need social engagement, or would benefit from regular companionship visits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-olive">Explore Services</Link>
              <Link to="/about" className="px-8 py-3 rounded-full border border-stone-300 font-medium hover:bg-stone-100 transition-colors">
                Learn Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="/assets/Hero_Nashville.png" 
              alt="A kind caregiver and an elderly woman sharing a smile on a Nashville porch." 
              className="w-full rounded-[40px] shadow-2xl object-cover aspect-[4/5]" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute -bottom-6 -left-6 bg-cream p-8 rounded-3xl shadow-xl max-w-[240px] border border-stone-100 hidden md:block">
              <p className="font-serif italic text-lg leading-snug text-stone-700">
                "Having someone to talk to makes every day feel like a gift."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-px bg-olive/30"></div>
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-400">Michael, Client</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-100/50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-olive mx-auto mb-8 opacity-40" />
          <h2 className="text-4xl md:text-5xl mb-8">Our Heart & Mission</h2>
          <p className="text-xl text-stone-600 leading-relaxed italic">
            "At Silver Care Companions, we believe that aging should be a season of connection, not isolation. 
            Our focus is purely on the human side of care—companionship, conversation, and the simple 
            joys of shared moments. We aren't medical professionals; we are friends, listeners, 
            and dedicated companions for the journey."
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-warm-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Process Clarity</span>
            <h2 className="text-5xl md:text-6xl mb-6">How It Works</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              We make the process simple and transparent, so you can focus on your loved one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
            {/* Icons Row */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto text-olive">
                <Phone className="w-10 h-10" />
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto text-olive">
                <UserCheck className="w-10 h-10" />
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto text-olive">
                <Heart className="w-10 h-10" />
              </div>
            </div>

            {/* Titles Row */}
            <div className="text-center">
              <h3 className="text-3xl font-serif text-stone-900">Step 1: The Discovery Call</h3>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-serif text-stone-900">Step 2: The Care Meeting</h3>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-serif text-stone-900">Step 3: Heartfelt Care</h3>
            </div>

            {/* Descriptions Row */}
            <div className="text-center">
              <p className="text-xl text-stone-800 leading-relaxed">
                A brief, no-pressure conversation to share the needs of your loved one and see if we are a good fit.
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl text-stone-800 leading-relaxed">
                We meet with the senior and family to listen and align on a personalized plan for moving forward together.
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl text-stone-800 leading-relaxed">
                We begin scheduled visits focused on meaningful engagement, reliable companionship, and peace of mind for the family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className="py-24 bg-olive text-cream px-6 relative overflow-hidden">
        {/* Background decorative shape */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-[1.1]">
              Designed for Families <br />
              Who Want Peace of <br />
              Mind
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-0.5">Safety & Reliability</h4>
                  <p className="text-cream/80 text-sm leading-relaxed max-w-md">Full background checks and drug tests on all companions. We prioritize consistency so you see the same familiar face every time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-0.5">Emotional Sensitivity</h4>
                  <p className="text-cream/80 text-sm leading-relaxed max-w-md">We match based on personality and compatibility, ensuring your loved one feels truly understood and valued.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-0.5">Post-Visit Reporting</h4>
                  <p className="text-cream/80 text-sm leading-relaxed max-w-md">Detailed reports sent after every visit to family members or anyone who would like to stay updated.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-serif mb-0.5">No Hidden Costs</h4>
                  <p className="text-cream/80 text-sm leading-relaxed max-w-md">Transparent flat-rate pricing. No long-term contracts or surprise fees. Peace of mind shouldn't be complicated.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/assets/Connection_Hands.png" 
              alt="Close-up of two people holding hands, representing a supportive and caring connection." 
              className="rounded-[60px] w-full h-[700px] object-cover shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            {/* Subtle overlay shape behind image as seen in screenshot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/5 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="card-rounded p-12 md:p-20 grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl mb-8 italic">Let's start a <br />conversation.</h2>
              <p className="text-lg text-stone-600 mb-12">
                Whether you're looking for support for yourself or a loved one, 
                we're here to listen and help you find the perfect companion.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm-bg flex items-center justify-center text-olive">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-stone-700 font-medium">615-241-6881</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm-bg flex items-center justify-center text-olive">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-stone-700 font-medium">info@silvercarecompanions.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-warm-bg flex items-center justify-center text-olive">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-stone-700 font-medium">Serving the Greater Nashville Area</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 bg-stone-50 rounded-3xl p-12"
                >
                  <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif">Message Sent!</h3>
                  <p className="text-stone-600">
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-olive font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Your Name</label>
                      <input id="name" name="name" type="text" required className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-olive transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Email Address</label>
                      <input id="email" name="email" type="email" required className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-olive transition-colors" placeholder="jane@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-stone-500 uppercase tracking-wider">How can we help?</label>
                    <textarea id="message" name="message" rows={4} required className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-olive transition-colors" placeholder="Tell us a little about your needs..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-olive w-full py-5 text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
