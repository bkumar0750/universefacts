import React, { useState } from 'react';
import { Orbit } from 'lucide-react';
import { LAGRANGE_POINTS_DATA } from '../../data/solarSystemExtendedData';

export const LagrangeAndEclipses: React.FC = () => {
  const [selectedLPoint, setSelectedLPoint] = useState<string>('l2');
  const [eclipseType, setEclipseType] = useState<'solar' | 'lunar' | 'transit'>('solar');
  const [moonPositionPct, setMoonPositionPct] = useState<number>(50); // % aligned

  const activePoint = LAGRANGE_POINTS_DATA.find((p) => p.id === selectedLPoint) || LAGRANGE_POINTS_DATA[1];

  return (
    <section id="lagrange-and-eclipses" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-12 shadow-xl">
      
      {/* ⚖️ 1. LAGRANGE POINTS INTERACTIVE ENGINE */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Orbit className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>ORBITAL MECHANICS ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            LAGRANGE POINTS — PLACES WHERE GRAVITY BALANCES
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            Positions in space where gravitational forces of two large bodies (Sun & Earth) equal the centripetal force required for a small object to move with them.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {LAGRANGE_POINTS_DATA.map((lp) => (
            <button
              key={lp.id}
              onClick={() => setSelectedLPoint(lp.id)}
              className={`px-4 py-2 rounded-xl uppercase font-bold border transition-all ${
                selectedLPoint === lp.id
                  ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 border-cyan-600 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
              }`}
            >
              {lp.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Selected L-Point Card */}
        <div className="glass-panel p-6 rounded-2xl border border-cyan-500/40 bg-slate-950 text-white space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <h3 className="text-2xl font-display font-bold text-white">{activePoint.name}</h3>
            <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
              activePoint.stability.includes('Stable') ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
            }`}>
              {activePoint.stability}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">{activePoint.description}</p>
          <div className="text-xs font-mono text-cyan-300">📍 Position: {activePoint.position}</div>

          <div className="pt-2 border-t border-white/10 text-xs font-mono">
            <span className="text-slate-400 font-bold block uppercase mb-1">FAMOUS SPACECRAFT DEPLOYED AT THIS POINT:</span>
            <div className="flex flex-wrap gap-2">
              {activePoint.famousSpacecraft.map((sc, i) => (
                <span key={i} className="bg-white/10 px-2.5 py-1 rounded-lg text-emerald-300 border border-white/10">
                  {sc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🌑 2. SHADOWS & ECLIPSES SIMULATOR */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/80 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase block">
              INTERACTIVE LIGHT & SHADOW LABORATORY
            </span>
            <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
              Solar Eclipse, Lunar Eclipse & Transits
            </h3>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            {(['solar', 'lunar', 'transit'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setEclipseType(t)}
                className={`px-3 py-1.5 rounded-xl uppercase font-bold border transition-all ${
                  eclipseType === t
                    ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-slate-950 border-purple-600'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Alignment Control Slider */}
        <div className="space-y-2 font-mono text-xs">
          <div className="flex justify-between text-slate-600 dark:text-slate-400">
            <span>Alignment offset: {moonPositionPct}%</span>
            <span>{moonPositionPct === 50 ? '✅ TOTAL ECLIPSE ALIGNMENT' : 'Partial Alignment'}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={moonPositionPct}
            onChange={(e) => setMoonPositionPct(Number(e.target.value))}
            className="w-full accent-purple-500 cursor-pointer"
          />
        </div>

        {/* Rays Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-cyan-400 font-bold uppercase text-[10px] block">UMBRA SHADOW zone</span>
            <p className="font-sans text-xs text-slate-300">The dark central cone of complete shadow where light is 100% blocked.</p>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-amber-400 font-bold uppercase text-[10px] block">PENUMBRA SHADOW zone</span>
            <p className="font-sans text-xs text-slate-300">The lighter outer region of partial shadow where light is only partially blocked.</p>
          </div>
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-emerald-400 font-bold uppercase text-[10px] block">ANTUMBRA zone</span>
            <p className="font-sans text-xs text-slate-300">The region beyond the umbra tip causing Annular "Ring of Fire" solar eclipses.</p>
          </div>
        </div>

      </div>

    </section>
  );
};
