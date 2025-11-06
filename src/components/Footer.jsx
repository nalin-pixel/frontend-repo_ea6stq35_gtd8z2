import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="w-full py-10 bg-[#050714] text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-white/70 text-sm">
          © {new Date().getFullYear()} Neon Rush • Built with passion <Heart className="inline w-4 h-4 text-pink-400" />
        </div>
        <div className="flex items-center gap-3 text-white/80">
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition">
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition">
            <Twitter className="w-4 h-4" />
            <span className="text-sm">Twitter/X</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
