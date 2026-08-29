import React from 'react';
import { ShieldCheck, CheckCircle, XCircle } from 'lucide-react';
import { MYTH_VS_REALITY_LIST } from '../../data/universeAtlasData';

export const UniverseOpenQuestionsAndMythBuster: React.FC = () => {
  const BADGES = [
    { name: 'OBSERVED', color: 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-500/40' },
    { name: 'MEASURED', color: 'bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border-cyan-500/40' },
    { name: 'ESTIMATED', color: 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-500/40' },
    { name: 'INFERRED', color: 'bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-500/40' },
    { name: 'MODELLED', color: 'bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-500/40' },
    { name: 'HYPOTHESIS', color: 'bg-rose-500/20 text-rose-800 dark:text-rose-300 border-rose-500/40' },
    { name: 'SPECULATIVE', color: 'bg-slate-500/20 text-slate-800 dark:text-slate-300 border-slate-500/40' },
    { name: 'UNKNOWN', color: 'bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border-indigo-500/40' }
  ];

  return (
    <section id="open-questions-and-mythbuster" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-500" />
          <span>SECTION 70, 93, 94 &amp; 96 · SCIENTIFIC CONFIDENCE &amp; MYTHBUSTER</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          COSMIC MYTHS VS SCIENTIFIC REALITIES
        </h2>
      </div>

      {/* 1. Scientific Confidence System Badges Display */}
      <div className="space-y-3 font-mono text-xs">
        <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase text-[10px] block">
          UNIVERSEFACT SCIENTIFIC CONFIDENCE SYSTEM (TRANSPARENCY SYSTEM)
        </span>
        <div className="flex flex-wrap gap-2">
          {BADGES.map((b) => (
            <span key={b.name} className={`px-3 py-1 rounded-xl border text-[11px] font-bold ${b.color}`}>
              {b.name}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Myth vs Reality Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        {MYTH_VS_REALITY_LIST.map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>MYTH: {item.myth}</span>
            </div>
            <div className="flex items-start gap-2 text-emerald-700 dark:text-emerald-300 font-sans text-xs border-t border-slate-200 dark:border-white/5 pt-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed"><strong>REALITY:</strong> {item.reality}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
