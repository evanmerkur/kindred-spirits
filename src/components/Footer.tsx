import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-stone-200 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Heart className="text-olive w-5 h-5 fill-olive/20" />
            <span className="font-serif text-xl font-semibold text-stone-900">Silver Care Companions</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium ml-7">
            Non Medical Companion Care for Seniors
          </span>
        </Link>
        
        <p className="text-stone-400 text-sm">
          © 2024 Silver Care Companions. All rights reserved.
        </p>

        <div className="flex gap-8 text-sm text-stone-500">
          <Link to="/blog" className="hover:text-olive transition-colors">Blog</Link>
          <Link to="/accessibility" className="hover:text-olive transition-colors">Accessibility Statement</Link>
          <Link to="/privacy-policy" className="hover:text-olive transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
