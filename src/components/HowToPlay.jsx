import React from 'react';
import { SwipeUp, MousePointerClick, ArrowUp, ArrowDown, Sparkles } from 'lucide-react';

const HowToPlay = () => {
  return (
    <section id="how" className="relative w-full py-20 bg-[#0A0E27] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_10%,rgba(0,240,255,0.1),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(255,0,110,0.08),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(187,0,255,0.08),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(90deg,#00F0FF,#FF006E,#BB00FF)]">How to Play</h2>
          <p className="text-white/70 mt-3">Simple controls, deep flow. Master the rhythm to go the distance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3">
              <MousePointerClick className="w-5 h-5 text-cyan-200" />
            </div>
            <h3 className="font-semibold">Tap or Click</h3>
            <p className="text-white/70 text-sm mt-1">Jump over hazards. Hold for higher jumps. Double-tap for a double jump.</p>
          </div>

          <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3">
              <SwipeUp className="w-5 h-5 text-pink-300" />
            </div>
            <h3 className="font-semibold">Swipe Up/Down</h3>
            <p className="text-white/70 text-sm mt-1">Switch lanes or slide under obstacles. Designed for one-handed play.</p>
          </div>

          <div className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5 text-purple-300" />
            </div>
            <h3 className="font-semibold">Collect & Boost</h3>
            <p className="text-white/70 text-sm mt-1">Grab coins and power-ups. Activate shields, magnets, and score multipliers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
