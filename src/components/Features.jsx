import React from 'react';
import { Shield, Zap, Coins, Compass, Gauge, Stars } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: <Gauge className="w-5 h-5" />,
    title: '60 FPS Smoothness',
    desc: 'Optimized runner with silky animations and responsive controls.'
  },
  {
    icon: <Coins className="w-5 h-5" />,
    title: 'Coins & Combos',
    desc: 'Collect glowing coins, build combos, and chase new highs.'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Power-Ups',
    desc: 'Shield, magnet, speed boost, and multipliers with juicy VFX.'
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Dynamic Obstacles',
    desc: 'Dodge spikes, blades, and moving walls with clear telegraphing.'
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: 'Three-Lane Flow',
    desc: 'Tap to jump, swipe to switch lanes, and master the rhythm.'
  },
  {
    icon: <Stars className="w-5 h-5" />,
    title: 'Premium Neon Aesthetic',
    desc: 'Glass UI, parallax city, and holographic gradients throughout.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative w-full py-20 bg-[#050714] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(0,240,255,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,0,110,0.10),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(187,0,255,0.10),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(90deg,#00F0FF,#FF006E,#BB00FF)]">Built for Flow</h2>
          <p className="text-white/70 mt-3">A polished, addictive runner that feels right from the first jump.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-pink-500/30 border border-white/10 text-cyan-100 flex items-center justify-center mb-3">
                {it.icon}
              </div>
              <h3 className="font-semibold text-lg">{it.title}</h3>
              <p className="text-white/70 text-sm mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
