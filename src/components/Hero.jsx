import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, Volume2, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-[#0A0E27]">
      {/* 3D Spline Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability overlays (don't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0E27] to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 border border-white/15 shadow-[0_0_30px_rgba(0,240,255,0.25)]"
        >
          <Rocket className="w-4 h-4 text-cyan-300" />
          <span className="text-xs tracking-wider uppercase text-cyan-200">Premium Endless Runner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-[linear-gradient(90deg,#00F0FF,40%,#FF006E,80%,#BB00FF)] drop-shadow-[0_0_25px_rgba(0,240,255,0.35)]"
        >
          Neon Rush
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-white/80"
        >
          Dash through a cyber-night city, dodge obstacles, and chase your high score in a trippy neon universe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center gap-4"
        >
          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-200 border border-cyan-300/30 backdrop-blur-md transition-colors shadow-[0_0_20px_rgba(0,240,255,0.25)]">
            <Play className="w-5 h-5" />
            <span className="font-semibold">Play</span>
          </button>

          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white/90 border border-white/15 backdrop-blur-md transition-colors">
            <Volume2 className="w-5 h-5" />
            <span>Sound</span>
          </button>
        </motion.div>

        {/* Mini HUD preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 grid grid-cols-3 gap-3"
        >
          <div className="rounded-xl px-4 py-3 bg-white/10 border border-white/15 backdrop-blur-md text-left">
            <div className="text-xs text-white/60">Distance</div>
            <div className="text-lg font-bold tracking-wide">1,240 m</div>
          </div>
          <div className="rounded-xl px-4 py-3 bg-white/10 border border-white/15 backdrop-blur-md text-left">
            <div className="text-xs text-white/60">Coins</div>
            <div className="text-lg font-bold tracking-wide text-yellow-300">256</div>
          </div>
          <div className="rounded-xl px-4 py-3 bg-white/10 border border-white/15 backdrop-blur-md text-left flex items-center gap-2">
            <Trophy className="w-4 h-4 text-pink-300" />
            <div>
              <div className="text-xs text-white/60">High Score</div>
              <div className="text-lg font-bold tracking-wide">9,980</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
