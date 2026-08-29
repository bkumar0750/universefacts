import React, { useState } from 'react';
import { Flame, ShieldAlert, Layers } from 'lucide-react';
import { FIRST_SECOND_EPOCHS } from '../../data/universeAtlasData';

export const UniverseBigBangAndInflation: React.FC = () => {
  const [gridScale, setGridScale] = useState<number>(1);
  const [activeEpochIdx, setActiveEpochIdx] = useState<number>(0);

  const ELEMENTS_ORIGIN = [
    { element: 'Hydrogen (H) & Helium (He)', source: 'Big Bang Nucleosynthesis (First 3 Minutes)', pct: '~98% of primordial matter' },
    { element: 'Carbon (C) & Oxygen (O)', source: 'Low & Intermediate-Mass Stars (Nuclear Fusion)', pct: 'Essential life building blocks' },
    { element: 'Iron (Fe) & Nickel (Ni)', source: 'Core Collapse Supernovae (Type II)', pct: 'Planetary core chemistry' },
    { element: 'Gold (Au) & Platinum (Pt)', source: 'Neutron Star Mergers (kilonova r-process)', pct: 'Heavy precious metals' }
  ];

  return (
    <section id="big-bang-and-inflation" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
          <Flame className="w-4 h-4 text-purple-500" />
          <span>SECTION 9-14 · BIG BANG, COSMIC INFLATION &amp; CHEMICAL ORIGIN</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          THE BIG BANG: CORRECTING THE EXPLOSION MYTH
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          The Big Bang was <strong>NOT an explosion occurring at one point inside pre-existing empty space</strong>. Rather, the Big Bang describes the early, hot, dense state of the universe where <strong>space itself expanded everywhere simultaneously</strong>.
        </p>
      </div>

      {/* Grid Expansion Simulation Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Interactive Expanding Grid Canvas */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-purple-500/40 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between font-mono text-xs text-purple-300">
            <span className="font-bold">SPACE METRIC GRID EXPANSION</span>
            <span>Expansion Scale: {gridScale}x</span>
          </div>

          {/* Grid Box */}
          <div className="relative w-full aspect-square max-w-sm mx-auto rounded-2xl border border-purple-500/40 bg-[#030617] overflow-hidden flex items-center justify-center p-4">
            <div
              className="w-full h-full border border-purple-500/30 grid grid-cols-4 grid-rows-4 gap-2 transition-transform duration-500"
              style={{ transform: `scale(${1 + (gridScale - 1) * 0.2})` }}
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="border border-purple-500/20 bg-purple-950/20 rounded flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-2 font-mono text-xs">
            <span className="text-slate-400 text-[10px]">Drag slider to expand space grid:</span>
            <input
              type="range"
              min={1}
              max={5}
              value={gridScale}
              onChange={(e) => setGridScale(parseInt(e.target.value))}
              className="w-1/2 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>

        {/* Informational Cards */}
        <div className="space-y-4 font-mono text-xs">
          
          <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-500/30 text-purple-900 dark:text-purple-200 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-xs uppercase">
              <ShieldAlert className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>COSMIC INFLATION THEORY (10⁻³⁶ SECONDS)</span>
            </div>
            <p className="font-sans text-xs leading-relaxed">
              Inflation proposes an extremely brief period of exponential spatial stretching in the first fraction of a second (10⁻³⁶s to 10⁻³²s), expanding space volume by a factor of at least 10²⁶, smoothing out curvature and density variations.
            </p>
            <span className="inline-block text-[10px] font-bold text-purple-700 dark:text-purple-300 uppercase pt-1">
              STATUS: LEADING SCIENTIFIC MODEL (NOT DIRECTLY PHOTOGRAPHED)
            </span>
          </div>

          {/* Timeline of First Seconds */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-3">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold uppercase text-[10px]">THE FIRST SECOND TIMELINE &amp; BBN</span>
            <div className="flex flex-wrap gap-1">
              {FIRST_SECOND_EPOCHS.map((ep, idx) => (
                <button
                  key={ep.time}
                  onClick={() => setActiveEpochIdx(idx)}
                  className={`px-2.5 py-1 rounded text-[10px] cursor-pointer transition-all ${
                    activeEpochIdx === idx ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-400'
                  }`}
                >
                  {ep.time}
                </button>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white flex justify-between">
                <span>{FIRST_SECOND_EPOCHS[activeEpochIdx].title}</span>
                <span className="text-cyan-600 dark:text-cyan-400">{FIRST_SECOND_EPOCHS[activeEpochIdx].status}</span>
              </div>
              <p className="font-sans text-xs text-slate-700 dark:text-slate-300">
                {FIRST_SECOND_EPOCHS[activeEpochIdx].desc}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Cosmic Chemical Evolution Chain */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-500" />
          <span>COSMIC CHEMICAL EVOLUTION: WHERE DID THE ELEMENTS COME FROM?</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          {ELEMENTS_ORIGIN.map((item) => (
            <div key={item.element} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-amber-700 dark:text-amber-400 font-bold block text-sm">{item.element}</span>
              <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase block">{item.source}</span>
              <p className="text-slate-700 dark:text-slate-300 font-sans text-xs">{item.pct}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
