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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const subject = `New Contact Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:info@silvercarecompanions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&q=80&w=800" 
                alt="Older person having a meal with a younger companion" 
                className="pill-image w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800" 
                alt="Two people holding hands" 
                className="pill-image w-full h-[400px] object-cover mt-12"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cream p-8 rounded-3xl shadow-xl max-w-[240px] border border-stone-100 hidden md:block">
              <p className="font-serif italic text-lg leading-snug text-stone-700">
                "Having someone to talk to makes every day feel like a gift."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-px bg-olive/30"></div>
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-400">Margaret, Client</span>
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

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto text-olive">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif">Step 1: Schedule a Consultation</h3>
              <p className="text-stone-600 leading-relaxed">We learn about your loved one’s personality, needs, and interests.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto text-olive">
                <UserCheck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif">Step 2: Personalized Match</h3>
              <p className="text-stone-600 leading-relaxed">We carefully match based on interests and compatibility for a real connection.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-olive/10 flex items-center justify-center mx-auto text-olive">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif">Step 3: Ongoing Visits and Support</h3>
              <p className="text-stone-600 leading-relaxed">Consistent, trusted companionship you can rely on, visit after visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Section */}
      <section className="py-24 bg-olive text-cream px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.1,-69.2,70.1,-59.1,79.6,-46.5C89.1,-33.9,96.1,-18.9,95.8,-3.9C95.5,11.1,87.9,26.1,78.2,39.2C68.5,52.3,56.7,63.5,43.1,71.2C29.5,78.9,14.7,83.1,-0.5,83.9C-15.7,84.7,-31.4,82.1,-45.4,74.7C-59.4,67.3,-71.7,55.1,-79.8,40.9C-87.9,26.7,-91.8,10.5,-90.4,-5.2C-89,-20.9,-82.3,-36.1,-72.1,-48.6C-61.9,-61.1,-48.2,-70.9,-34.2,-77.7C-20.2,-84.5,-5.9,-88.3,8.7,-84.8C23.3,-81.3,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-5xl md:text-6xl mb-10 leading-tight">Designed for Families Who Want Peace of Mind</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Safety & Reliability</h4>
                  <p className="text-cream/70 leading-relaxed">Full background checks and drug tests on all companions. We prioritize consistency so you see the same familiar face every time.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Emotional Sensitivity</h4>
                  <p className="text-cream/70 leading-relaxed">We match based on personality and compatibility, ensuring your loved one feels truly understood and valued.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">Post-Visit Reporting</h4>
                  <p className="text-cream/70 leading-relaxed">Detailed reports sent after every visit to family members or anyone who would like to stay updated.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl mb-2">No Hidden Costs</h4>
                  <p className="text-cream/70 leading-relaxed">Transparent flat-rate pricing. No long-term contracts or surprise fees. Peace of mind shouldn't be complicated.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?auto=format&fit=crop&q=80&w=800" 
              alt="Silver Care Companion" 
              className="rounded-[40px] w-full h-[600px] object-cover shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cream/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="card-rounded p-12 md:p-20 grid lg:grid-cols-2 gap-20">
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
                  <span className="text-stone-700 font-medium">(615) 123-4567</span>
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Your Name</label>
                  <input name="name" type="text" required className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-olive transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Email Address</label>
                  <input name="email" type="email" required className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-olive transition-colors" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">How can we help?</label>
                <textarea name="message" rows={4} required className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-olive transition-colors" placeholder="Tell us a little about your needs..."></textarea>
              </div>
              <button type="submit" className="btn-olive w-full py-5 text-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
