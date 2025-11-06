import React from 'react';
import { Rocket, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/40 to-pink-500/40 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.35)]">
            <Rocket className="h-5 w-5 text-cyan-200" />
          </div>
          <span className="font-bold text-white tracking-wide">Neon Rush</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How to Play</a>
          <a href="#footer" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <button className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 border border-white/15 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
