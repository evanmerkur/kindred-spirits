import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="card-rounded p-12 md:p-20 grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl mb-8 italic">Let's start a <br />conversation.</h1>
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
    </div>
  );
}
