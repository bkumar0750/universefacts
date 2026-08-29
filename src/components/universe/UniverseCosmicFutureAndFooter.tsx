import React, { useState } from 'react';
import { Clock, Sparkles } from 'lucide-react';

export const UniverseCosmicFutureAndFooter: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'heat-death' | 'big-rip' | 'big-crunch'>('heat-death');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="cosmic-future-and-footer" className="space-y-10 animate-fade-in-up">
      
      {/* 1. Future of the Universe Scenarios */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-6 shadow-2xl transition-colors">
        
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Clock className="w-4 h-4 text-cyan-500" />
            <span>SECTION 84, 85 &amp; 86 · THE FUTURE OF THE UNIVERSE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            ULTIMATE COSMIC SCENARIOS
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveScenario('heat-death')}
            className={`px-4 py-2 rounded-xl border cursor-pointer ${
              activeScenario === 'heat-death' ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold' : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            1. HEAT DEATH / BIG FREEZE (FAVORED MODEL)
          </button>
          <button
            onClick={() => setActiveScenario('big-rip')}
            className={`px-4 py-2 rounded-xl border cursor-pointer ${
              activeScenario === 'big-rip' ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold' : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            2. BIG RIP (DYNAMIC DARK ENERGY)
          </button>
          <button
            onClick={() => setActiveScenario('big-crunch')}
            className={`px-4 py-2 rounded-xl border cursor-pointer ${
              activeScenario === 'big-crunch' ? 'bg-rose-500/20 text-rose-900 dark:text-rose-200 border-rose-400 font-bold' : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            3. BIG CRUNCH (RECOLLAPSE)
          </button>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-xs font-sans space-y-2">
          {activeScenario === 'heat-death' && (
            <>
              <span className="font-mono text-cyan-700 dark:text-cyan-300 font-bold block text-sm">HEAT DEATH / BIG FREEZE:</span>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                As space continues accelerating outward under dark energy, star formation declines over trillions of years (10¹⁴ yrs). Black holes eventually evaporate via Hawking radiation (10¹⁰⁰ yrs), leaving maximum entropy and dark cosmic space.
              </p>
            </>
          )}
          {activeScenario === 'big-rip' && (
            <>
              <span className="font-mono text-purple-700 dark:text-purple-300 font-bold block text-sm">BIG RIP SCENARIO:</span>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                If phantom dark energy density increases over time, the expansion rate would grow infinite, tearing apart galaxy clusters, stars, planets, atoms, and spacetime itself in a finite future.
              </p>
            </>
          )}
          {activeScenario === 'big-crunch' && (
            <>
              <span className="font-mono text-rose-700 dark:text-rose-300 font-bold block text-sm">BIG CRUNCH SCENARIO:</span>
              <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                If dark energy density reverses sign and gravity overcomes metric expansion, the universe would re-collapse back into a high-density, high-temperature singularity state.
              </p>
            </>
          )}
        </div>

      </div>

      {/* 2. Multiverse & Simulation Disclaimer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-purple-700 dark:text-purple-400 font-bold">MULTIVERSE SCENARIOS</span>
            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-800 dark:text-purple-300 text-[10px] font-bold">HYPOTHETICAL</span>
          </div>
          <p className="font-sans text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            Theories of eternal inflation allow for other bubble universes. However, there is currently zero direct observational confirmation of other universes.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-amber-700 dark:text-amber-400 font-bold">SIMULATION HYPOTHESIS</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-300 text-[10px] font-bold">PHILOSOPHICAL</span>
          </div>
          <p className="font-sans text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            The simulation hypothesis is a philosophical thought experiment, not an empirical cosmological theory supported by observational metrics.
          </p>
        </div>
      </div>

      {/* 3. Final Cosmic Message Banner & CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-cyan-500/40 text-center space-y-6 text-white shadow-2xl">
        <div className="space-y-3 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-cyan-300 tracking-tight leading-tight">
            "THE UNIVERSE IS NOT JUST WHAT WE KNOW."
          </h3>
          <p className="text-lg sm:text-xl font-sans text-slate-300 italic font-light">
            "IT IS ALSO WHAT WE ARE STILL TRYING TO UNDERSTAND. EVERY ANSWER OPENS ANOTHER QUESTION."
          </p>
        </div>

        <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={scrollToTop}
            className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-cyan-500/20 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>EXPLORE THE UNKNOWN →</span>
          </button>
        </div>
      </div>

    </section>
  );
};
