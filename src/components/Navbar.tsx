import { motion } from "motion/react";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Our Story", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "New Companion Intake Form", href: "/intake-form" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-warm-bg/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <div className="flex items-center gap-2">
            <Heart className="text-olive w-6 h-6 fill-olive/20" />
            <span className="font-serif text-2xl font-semibold text-stone-900">Silver Care Companions</span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-olive font-bold ml-8 -mt-1 hidden lg:block">
            Non Medical Companion Care for Seniors
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            link.href.startsWith("#") || (link.href.startsWith("/#") && !isHome) ? (
              <a key={link.name} href={link.href} className="hover:text-olive transition-colors">{link.name}</a>
            ) : (
              <Link key={link.name} to={link.href} className="hover:text-olive transition-colors">{link.name}</Link>
            )
          ))}
          <Link to="/contact" className="btn-olive">Get in Touch</Link>
        </div>

        <button 
          className="md:hidden text-stone-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-warm-bg border-b border-stone-200 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            link.href.startsWith("#") || (link.href.startsWith("/#") && !isHome) ? (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-serif">{link.name}</a>
            ) : (
              <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-serif">{link.name}</Link>
            )
          ))}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="btn-olive w-full text-center">Get in Touch</Link>
        </motion.div>
      )}
    </nav>
  );
}
