import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Contact Us</span>
          <h1 className="text-5xl md:text-6xl mb-6">Let's Start a Conversation</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Whether you're looking for support for yourself or a loved one, 
            we're here to listen and help you find the perfect companion.
          </p>
        </motion.div>

        <div className="card-rounded p-12 md:p-20 grid lg:grid-cols-2 gap-20 bg-warm-bg">
          <div>
            <h2 className="text-4xl mb-8 italic font-serif">Reach Out Directly</h2>
            <p className="text-lg text-stone-600 mb-12 leading-relaxed">
              We understand that choosing care is a personal decision. 
              Feel free to call or email us, or use the form to share a bit about your situation.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-olive shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-400 uppercase tracking-wider">Phone</p>
                  <span className="text-stone-700 font-medium text-lg">(615) 123-4567</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-olive shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-400 uppercase tracking-wider">Email</p>
                  <span className="text-stone-700 font-medium text-lg">info@silvercarecompanions.com</span>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-olive shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-400 uppercase tracking-wider">Location</p>
                  <span className="text-stone-700 font-medium text-lg">Serving the Greater Nashville Area</span>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Your Name</label>
                <input name="name" type="text" required className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-olive transition-colors" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">Email Address</label>
                <input name="email" type="email" required className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-olive transition-colors" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-stone-500 uppercase tracking-wider">How can we help?</label>
              <textarea name="message" rows={6} required className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-olive transition-colors" placeholder="Tell us a little about your needs..."></textarea>
            </div>
            <button type="submit" className="btn-olive w-full py-5 text-lg shadow-lg hover:shadow-xl transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
