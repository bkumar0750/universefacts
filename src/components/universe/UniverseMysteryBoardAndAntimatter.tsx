import React from 'react';
import { HelpCircle, Layers, ShieldCheck } from 'lucide-react';

export const UniverseMysteryBoardAndAntimatter: React.FC = () => {
  const MYSTERIES = [
    { title: 'DARK MATTER PHYSICAL NATURE', status: 'UNKNOWN', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
    { title: 'DARK ENERGY EQUATION OF STATE', status: 'UNKNOWN', badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
    { title: 'HUBBLE TENSION EXPANSION DISCREPANCY', status: 'ACTIVE DISAGREEMENT', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
    { title: 'PRIMORDIAL BLACK HOLE SEEDS', status: 'ACTIVE RESEARCH', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
    { title: 'FIRST GALAXY BRIGHTNESS (JWST)', status: 'ACTIVE RESEARCH', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    { title: 'MATTER / ANTIMATTER ASYMMETRY', status: 'OPEN PARADOX', badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
    { title: 'QUANTUM GRAVITY UNIFICATION', status: 'UNKNOWN', badge: 'bg-slate-500/20 text-slate-300 border-slate-500/40' },
    { title: 'COSMIC SPATIAL GEOMETRY', status: 'CONSTRAINED FLAT', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
    { title: 'MULTIVERSE & BEYOND HORIZON', status: 'SPECULATIVE', badge: 'bg-pink-500/20 text-pink-300 border-pink-500/40' }
  ];

  const SCALES_MICRO_MACRO = [
    'QUARKS & LEPTONS (10⁻¹⁸ m)',
    'PROTONS & NEUTRONS (10⁻¹⁵ m)',
    'ATOMS & NUCLEI (10⁻¹⁰ m)',
    'MOLECULES & MATTER (10⁻⁶ m)',
    'STARS & PLANETS (10⁹ m)',
    'GALAXIES & HALOS (10²¹ m)',
    'COSMIC WEB FILAMENTS (10²⁴ m)',
    'OBSERVABLE UNIVERSE (10²⁶ m)'
  ];

  return (
    <section id="mystery-board-and-antimatter" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl transition-colors">
      
      {/* 1. FEATURE 15: THE COSMIC MYSTERY BOARD */}
      <div className="space-y-6">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
            <HelpCircle className="w-4 h-4 text-purple-500" />
            <span>FEATURE 15 · THE COSMIC MYSTERY BOARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            THE COSMIC MYSTERY BOARD
          </h2>
        </div>

        {/* Dashboard Box */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-purple-500/40 text-white space-y-3 font-mono shadow-2xl">
          <div className="text-purple-400 font-bold text-xs uppercase border-b border-white/10 pb-2">
            UNSOLVED COSMOLOGICAL PARADOXES &amp; FRONTIERS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            {MYSTERIES.map((m) => (
              <div key={m.title} className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 space-y-2 flex flex-col justify-between">
                <span className="text-xs font-bold text-slate-200">{m.title}</span>
                <span className={`px-2.5 py-0.5 rounded border text-[10px] font-bold self-start ${m.badge}`}>
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. FEATURE 16: MATTER-ANTIMATTER ASYMMETRY */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
            <ShieldCheck className="w-4 h-4 text-indigo-500" />
            <span>FEATURE 16 · MATTER-ANTIMATTER SURVIVAL PARADOX</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            WHY DID MATTER SURVIVE ANTIMATTER ANNIHILATION?
          </h3>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-indigo-500/40 text-white space-y-4 font-mono shadow-xl">
          <p className="font-sans text-xs text-slate-300 leading-relaxed">
            In the early hot universe, equal quantities of matter and antimatter should have been created and completely mutual-annihilated into pure photons. Yet today, our universe consists almost entirely of matter (1 extra matter particle per ~10⁹ annihilation pairs). The physical origin of this Baryon Asymmetry remains an open fundamental physics problem.
          </p>
        </div>
      </div>

      {/* 3. FEATURE 18: FROM QUARKS TO COSMOS (MICRO TO MACRO) */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10 font-mono text-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Layers className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 18 · FROM QUARKS TO COSMOS (MICRO TO MACRO)</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            THE COMPLETE SCALE HIERARCHY
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          {SCALES_MICRO_MACRO.map((s, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-slate-950 border border-cyan-500/30 text-cyan-300 font-bold text-[11px]">
              {s}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
