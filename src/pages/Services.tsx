import { motion } from "motion/react";
import { 
  MessageCircle, 
  Coffee, 
  BookOpen, 
  Car, 
  Laptop,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const companionshipServices = [
  { icon: <MessageCircle className="w-5 h-5" />, title: "Conversation", description: "Sharing stories, discussing current events, or simply enjoying a quiet moment together." },
  { icon: <Coffee className="w-5 h-5" />, title: "Games", description: "Playing cards, board games, or puzzles to keep the mind active and engaged." },
  { icon: <Car className="w-5 h-5" />, title: "Outings", description: "Going for a gentle walk in the park or enjoying a meal together at a local restaurant." },
  { icon: <Heart className="w-5 h-5" />, title: "Shared Hobbies", description: "Assisting with cherished hobbies, crafts, or other creative interests." }
];

const practicalSupport = [
  { icon: <Car className="w-5 h-5" />, title: "Errands", description: "Assistance with light errands to keep the household running smoothly." },
  { icon: <Car className="w-5 h-5" />, title: "Grocery Trips", description: "Accompanying your loved one for grocery shopping or picking up essentials." },
  { icon: <Calendar className="w-5 h-5" />, title: "Appointment Reminders", description: "Gentle reminders for appointments and medication schedules." }
];

const connectionSupport = [
  { icon: <Laptop className="w-5 h-5" />, title: "Video Calls", description: "Setting up and assisting with video calls to see family and friends." },
  { icon: <Laptop className="w-5 h-5" />, title: "Photo Sharing", description: "Helping view and share digital photos of grandchildren and loved ones." },
  { icon: <Laptop className="w-5 h-5" />, title: "Technology Help", description: "Simple tech support for tablets, phones, and computers." }
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Our Services</span>
          <h1 className="text-5xl md:text-6xl mb-6">Support for the Everyday</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Our services are strictly non-medical, focusing on enhancing quality of life 
            through emotional support and practical daily assistance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {/* Companionship */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                <Heart className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif">Companionship</h2>
            </div>
            <div className="space-y-6">
              {companionshipServices.map((s, i) => (
                <div key={i} className="card-rounded p-6 border border-stone-100 hover:border-olive/20 transition-colors">
                  <h3 className="font-semibold text-stone-800 mb-2 flex items-center gap-2">
                    {s.icon} {s.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Support */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                <Car className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif">Practical Support</h2>
            </div>
            <div className="space-y-6">
              {practicalSupport.map((s, i) => (
                <div key={i} className="card-rounded p-6 border border-stone-100 hover:border-olive/20 transition-colors">
                  <h3 className="font-semibold text-stone-800 mb-2 flex items-center gap-2">
                    {s.icon} {s.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connection Support */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                <Laptop className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif">Connection Support</h2>
            </div>
            <div className="space-y-6">
              {connectionSupport.map((s, i) => (
                <div key={i} className="card-rounded p-6 border border-stone-100 hover:border-olive/20 transition-colors">
                  <h3 className="font-semibold text-stone-800 mb-2 flex items-center gap-2">
                    {s.icon} {s.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Typical Visit Visualization */}
        <div className="card-rounded bg-stone-100 p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-olive text-white flex items-center justify-center mx-auto mb-8">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-6">What a Typical Visit Looks Like</h2>
            <p className="text-lg text-stone-600 mb-10">
              We focus on meaningful time. A typical 2.5-hour visit is designed to be relaxed, 
              unhurried, and deeply personal.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <CheckCircle2 className="text-olive w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-800">Arrival & Connection</h4>
                  <p className="text-sm text-stone-500">Starting with tea and conversation to catch up on the day.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <CheckCircle2 className="text-olive w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-800">Active Engagement</h4>
                  <p className="text-sm text-stone-500">A gentle walk in the park or playing a favorite board game.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <CheckCircle2 className="text-olive w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-800">Practical Help</h4>
                  <p className="text-sm text-stone-500">Assisting with mail organization or a quick grocery run.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <CheckCircle2 className="text-olive w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-stone-800">Family Connection</h4>
                  <p className="text-sm text-stone-500">A video call with grandchildren or sharing new family photos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* After-Visit Reporting Section */}
        <div className="mt-24 py-24 border-t border-stone-200">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/assets/Steady_Companion.png" 
                alt="Senior walking with companion, representing our companionship services" 
                className="rounded-[40px] w-full h-[400px] object-cover shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif">Consistent Communication</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                We believe that peace of mind comes from staying informed. After every single visit, 
                I provide a detailed Post Visit Report sent directly to the family or anyone who 
                would like to stay updated on the person I am visiting with.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="text-olive w-5 h-5" />
                  <span>Summary of the day's activities</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="text-olive w-5 h-5" />
                  <span>Observations on overall well-being</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="text-olive w-5 h-5" />
                  <span>Updates on any health or safety concerns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="mt-24 text-center p-12 bg-olive text-cream rounded-[40px]">
          <h2 className="text-4xl font-serif mb-6">Ready to find a companion?</h2>
          <p className="text-cream/80 text-lg mb-10 max-w-2xl mx-auto">
            We're here to provide the social engagement and emotional support your loved one deserves.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-cream text-olive rounded-full font-bold text-lg hover:bg-white transition-colors">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
