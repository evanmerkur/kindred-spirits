import FAQItem from "../components/FAQItem";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const faqs = [
  {
    question: "Is this medical care?",
    answer: "No. Silver Care Companions provides non-medical companionship and daily support. We focus on social interaction, emotional support, and daily activities rather than clinical or medical treatments."
  },
  {
    question: "Do you provide personal hygiene support?",
    answer: "No. Our services are strictly companion-based. We do not provide hands-on personal care like bathing or dressing, ensuring our relationship remains focused on friendship and engagement."
  },
  {
    question: "How are companions screened?",
    answer: "Yes, your safety and peace of mind are our top priorities. Background checks and drug tests are performed on all companions before they join our team."
  },
  {
    question: "What if my loved one does not connect with their companion?",
    answer: "Although it does not always work out, we understand that chemistry is important. We will do our best to find a companion that is the right fit for your loved one's personality and interests."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve all of Nashville and the surrounding areas."
  },
  {
    question: "Do you require contracts?",
    answer: "No. We believe in earning your trust every day, so we do not require long-term contracts."
  }
];

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 min-h-[70vh]">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-olive font-medium tracking-widest uppercase text-xs mb-4 block">Common Questions</span>
          <h2 className="text-5xl md:text-6xl mb-6">Frequently Asked</h2>
          <p className="text-lg text-stone-600">
            Everything you need to know about our companion care services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-24 text-center p-12 bg-stone-100 rounded-[40px]">
          <h3 className="text-3xl font-serif mb-4">Still have questions?</h3>
          <p className="text-stone-600 mb-8">We're here to help you find the best care for your loved one.</p>
          <Link to="/contact" className="btn-olive">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
