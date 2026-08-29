import React, { useState } from 'react';
import { Scale, Sun, Eye, Ruler } from 'lucide-react';
import { WORLDS_COMPARISON_DATA } from '../../data/solarSystemData';

export const SolarScaleSimulator: React.FC = () => {
  const [scaleMode, setScaleMode] = useState<'visual' | 'trueDistance'>('visual');
  const [paramView, setParamView] = useState<'size' | 'distance' | 'orbit' | 'lightTime'>('size');

  const majorPlanets = WORLDS_COMPARISON_DATA.filter(
    (w) => w.category === 'Terrestrial Planet' || w.category === 'Gas Giant' || w.category === 'Ice Giant'
  );

  // Maximum value for proportional bars
  const maxDiameter = Math.max(...majorPlanets.map((p) => p.diameterKM));
  const maxDistance = Math.max(...majorPlanets.map((p) => p.sunDistanceAU));
  const maxOrbit = Math.max(...majorPlanets.map((p) => p.orbitalPeriodDays));

  // Light time in minutes from Sun (1 AU = 8.33 minutes)
  const getLightTimeMinutes = (au: number) => (au * 8.333).toFixed(1);

  return (
    <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-6 shadow-xl">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Scale className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>INTERACTIVE SCALE SIMULATOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            REAL SCALE VS VISUAL SCALE
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            "Planetary distances are so enormous that a true-scale screen visualization would make the planets nearly invisible."
          </p>
        </div>

        {/* Mode Toggle Controls */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-slate-950 p-1.5 rounded-2xl border border-slate-200 dark:border-white/10 font-mono text-xs">
          <button
            onClick={() => setScaleMode('visual')}
            className={`px-4 py-2 rounded-xl transition-all font-bold flex items-center gap-1.5 ${
              scaleMode === 'visual'
                ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>VISUAL MODE</span>
          </button>

          <button
            onClick={() => setScaleMode('trueDistance')}
            className={`px-4 py-2 rounded-xl transition-all font-bold flex items-center gap-1.5 ${
              scaleMode === 'trueDistance'
                ? 'bg-amber-600 dark:bg-amber-500 text-white dark:text-slate-950 shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Ruler className="w-3.5 h-3.5" />
            <span>TRUE DISTANCE MODE</span>
          </button>
        </div>
      </div>

      {/* Parameter View Selection Buttons */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        <button
          onClick={() => setParamView('size')}
          className={`px-3.5 py-1.5 rounded-xl border transition-all ${
            paramView === 'size'
              ? 'bg-purple-600 dark:bg-purple-500/20 text-white dark:text-purple-300 border-purple-600 font-bold'
              : 'bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10'
          }`}
        >
          📏 Planetary Size (Diameter)
        </button>

        <button
          onClick={() => setParamView('distance')}
          className={`px-3.5 py-1.5 rounded-xl border transition-all ${
            paramView === 'distance'
              ? 'bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border-cyan-600 font-bold'
              : 'bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10'
          }`}
        >
          ☀️ Sun Distance (AU)
        </button>

        <button
          onClick={() => setParamView('orbit')}
          className={`px-3.5 py-1.5 rounded-xl border transition-all ${
            paramView === 'orbit'
              ? 'bg-emerald-600 dark:bg-emerald-500/20 text-white dark:text-emerald-300 border-emerald-600 font-bold'
              : 'bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10'
          }`}
        >
          🔄 Orbital Period (Days)
        </button>

        <button
          onClick={() => setParamView('lightTime')}
          className={`px-3.5 py-1.5 rounded-xl border transition-all ${
            paramView === 'lightTime'
              ? 'bg-amber-600 dark:bg-amber-500/20 text-white dark:text-amber-300 border-amber-600 font-bold'
              : 'bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10'
          }`}
        >
          ⚡ Sunlight Travel Time
        </button>
      </div>

      {/* Mode Explanation Callout Banner */}
      <div className="glass-panel p-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30 text-xs font-sans text-amber-900 dark:text-amber-200 flex items-start gap-3">
        <Sun className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold block font-mono text-amber-800 dark:text-amber-300">
            {scaleMode === 'visual' ? 'VISUAL MODE ACTIVE:' : 'TRUE DISTANCE SCIENTIFIC MODE ACTIVE:'}
          </strong>
          {scaleMode === 'visual'
            ? 'Planets are enlarged so their surface details, atmospheres, and rings are easily visible and comparable on a standard screen.'
            : 'If Earth were a 1-centimeter marble on screen, Neptune would be located more than 2.3 kilometers away! In true scale, space is almost entirely empty.'}
        </div>
      </div>

      {/* Proportional Scale Bars for 8 Major Planets */}
      <div className="space-y-4 pt-2">
        {majorPlanets.map((planet) => {
          let percentage = 0;
          let displayValue = '';

          if (paramView === 'size') {
            percentage = (planet.diameterKM / maxDiameter) * 100;
            displayValue = `${planet.diameterFormatted} (${(planet.diameterKM / 12756).toFixed(2)}x Earth)`;
          } else if (paramView === 'distance') {
            percentage = scaleMode === 'trueDistance'
              ? (planet.sunDistanceAU / maxDistance) * 100
              : Math.pow(planet.sunDistanceAU / maxDistance, 0.45) * 100;
            displayValue = `${planet.sunDistanceFormatted}`;
          } else if (paramView === 'orbit') {
            percentage = (planet.orbitalPeriodDays / maxOrbit) * 100;
            displayValue = `${planet.orbitalPeriodFormatted}`;
          } else {
            const mins = parseFloat(getLightTimeMinutes(planet.sunDistanceAU));
            percentage = (planet.sunDistanceAU / maxDistance) * 100;
            displayValue = mins > 60 ? `${(mins / 60).toFixed(2)} hours` : `${mins} minutes`;
          }

          return (
            <div key={planet.id} className="space-y-1 font-mono text-xs">
              <div className="flex items-center justify-between font-bold">
                <span className="text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  <span>{planet.name}</span>
                  <span className="text-[10px] text-slate-500 font-normal">[{planet.category}]</span>
                </span>
                <span className="text-cyan-700 dark:text-cyan-300 font-mono text-[11px]">{displayValue}</span>
              </div>

              <div className="w-full h-4 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-white/10 relative">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700 shadow-sm"
                  style={{ width: `${Math.max(percentage, 2)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
