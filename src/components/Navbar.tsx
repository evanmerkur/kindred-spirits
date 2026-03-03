import { motion } from "motion/react";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-warm-bg/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="text-olive w-6 h-6 fill-olive/20" />
          <span className="font-serif text-2xl font-semibold text-stone-900">Kindred Spirits</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            link.href.startsWith("#") || (link.href.startsWith("/#") && !isHome) ? (
              <a key={link.name} href={link.href} className="hover:text-olive transition-colors">{link.name}</a>
            ) : (
              <Link key={link.name} to={link.href} className="hover:text-olive transition-colors">{link.name}</Link>
            )
          ))}
          <button className="btn-olive">Get in Touch</button>
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
          <button className="btn-olive w-full">Get in Touch</button>
        </motion.div>
      )}
    </nav>
  );
}
