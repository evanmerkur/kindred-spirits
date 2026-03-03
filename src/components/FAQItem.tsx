import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  key?: number | string;
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-rounded overflow-hidden border border-stone-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
      >
        <span className="text-xl font-serif text-stone-800">{question}</span>
        {isOpen ? <ChevronUp className="text-olive" /> : <ChevronDown className="text-stone-400" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="px-8 pb-8 text-stone-600 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}
