import React from 'react';
import { HelpCircle, Compass, Sparkles, ArrowRight } from 'lucide-react';

export const UniverseTheUnknownAndFinalJourney: React.FC = () => {
  const UNKNOWN_FRONTIERS = [
    { q: 'WHAT IS DARK MATTER?', category: 'PARTICLE PHYSICS', status: 'UNSOLVED' },
    { q: 'WHAT IS DARK ENERGY?', category: 'COSMOLOGY', status: 'UNSOLVED' },
    { q: 'WHY DOES MATTER DOMINATE ANTIMATTER?', category: 'BARYON ASYMMETRY', status: 'UNSOLVED' },
    { q: 'WHAT HAPPENED AT THE SINGULARITY (t=0)?', category: 'QUANTUM GRAVITY', status: 'UNSOLVED' },
    { q: 'IS THE TOTAL UNIVERSE SPATIAL VOLUME INFINITE?', category: 'TOPOLOGY', status: 'UNCONSTRAINED' },
    { q: 'WHAT LIES BEYOND OUR OBSERVABLE PARTICLE HORIZON?', category: 'HORIZON PHYSICS', status: 'UNOBSERVABLE' },
    { q: 'ARE OTHER BUBBLE UNIVERSES POSSIBLE?', category: 'MULTIVERSE MODEL', status: 'SPECULATIVE' },
    { q: 'WHAT IS THE ULTIMATE UNIFIED THEORY OF PHYSICS?', category: 'THEORY OF EVERYTHING', status: 'OPEN FRONTIER' }
  ];

  const FINAL_JOURNEY_STEPS = [
    'EARTH',
    'SOLAR SYSTEM',
    'MILKY WAY',
    'LOCAL GROUP',
    'COSMIC WEB',
    'OBSERVABLE UNIVERSE',
    '13.8 BILLION YEARS',
    'UNKNOWN'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="the-unknown-and-final-journey" className="space-y-10 animate-fade-in-up">
      
      {/* 1. FEATURE 19: THE BIGGEST QUESTION */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-6 shadow-2xl transition-colors">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <HelpCircle className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 19 · THE ULTIMATE EXISTENTIAL INQUIRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            WHY DOES SOMETHING EXIST AT ALL?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 text-white space-y-1">
            <span className="text-cyan-400 font-bold block">1. PHYSICS PERSPECTIVE</span>
            <p className="font-sans text-xs text-slate-300">
              Explores how vacuum quantum fluctuations and field symmetry breaking dynamically produce matter and expansion.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-purple-500/30 text-white space-y-1">
            <span className="text-purple-400 font-bold block">2. COSMOLOGY PERSPECTIVE</span>
            <p className="font-sans text-xs text-slate-300">
              Measures large-scale metric curvature, energy density distributions, and initial cosmological conditions.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 text-white space-y-1">
            <span className="text-amber-400 font-bold block">3. PHILOSOPHICAL PERSPECTIVE</span>
            <p className="font-sans text-xs text-slate-300">
              Asks why physical laws exist rather than total non-existence (Leibniz's fundamental question).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 text-white space-y-1">
            <span className="text-emerald-400 font-bold block">4. HUMAN REFLECTIVE PERSPECTIVE</span>
            <p className="font-sans text-xs text-slate-300">
              Acknowledges humanity as conscious fragments of the universe reflecting back upon its own 13.8B year history.
            </p>
          </div>
        </div>
      </div>

      {/* 2. FEATURE 20: UNKNOWN AS A FIRST-CLASS DESTINATION */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-rose-500/40 dark:bg-[#08020d] bg-white/90 space-y-6 shadow-2xl transition-colors">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300">
            <Compass className="w-4 h-4 text-rose-500" />
            <span>FEATURE 20 · UNKNOWN AS A FIRST-CLASS DESTINATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            🌌 DESTINATION: THE UNKNOWN
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {UNKNOWN_FRONTIERS.map((f) => (
            <div key={f.q} className="p-4 rounded-2xl bg-slate-950 border border-rose-500/30 text-white flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] text-rose-400 font-bold block">{f.category}</span>
                <div className="font-bold text-xs text-slate-200">{f.q}</div>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/40">
                {f.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SIGNATURE FINAL JOURNEY SCREEN */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-cyan-500/40 text-center space-y-8 text-white shadow-2xl font-mono">
        
        {/* Ribbon Sequence */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          {FINAL_JOURNEY_STEPS.map((step, idx) => (
            <React.Fragment key={step}>
              <span className={`px-3 py-1.5 rounded-xl border ${
                step === 'UNKNOWN'
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 font-extrabold animate-pulse'
                  : 'bg-slate-900 text-slate-300 border-white/10'
              }`}>
                {step}
              </span>
              {idx < FINAL_JOURNEY_STEPS.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Signature Identity Quote */}
        <div className="space-y-3 max-w-3xl mx-auto font-sans">
          <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-cyan-300 tracking-tight leading-tight">
            "THE GREATEST MAP HUMANITY HAS EVER MADE STILL HAS MORE QUESTIONS THAN ANSWERS."
          </h3>
          <p className="text-sm sm:text-base text-slate-400 italic">
            Welcome to UniverseFact — an interactive map of what humanity knows, how we know it, and where the unknown begins.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={scrollToTop}
            className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-cyan-500/20 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>RETURN TO COSMIC HERO →</span>
          </button>
        </div>

      </div>

    </section>
  );
};
