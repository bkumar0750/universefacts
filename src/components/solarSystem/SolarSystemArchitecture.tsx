import React, { useState } from 'react';
import { Compass, ShieldAlert } from 'lucide-react';

export const SolarSystemArchitecture: React.FC = () => {
  const [viewMode, setViewMode] = useState<'distance' | 'density' | 'orbit' | 'light' | 'gravity'>('distance');

  const architectureNodes = [
    { id: 'sun', title: 'The Sun (Sol)', dist: '0.0 AU', detail: '99.86% of system mass', light: '0 sec', density: '1.41 g/cm³', gravity: '274 m/s²' },
    { id: 'terrestrials', title: 'Inner Rocky Planets', dist: '0.39 – 1.52 AU', detail: 'Mercury, Venus, Earth, Mars', light: '3 – 12 min', density: 'High (3.9 – 5.5 g/cm³)', gravity: '3.7 – 9.8 m/s²' },
    { id: 'asteroids', title: 'Main Asteroid Belt', dist: '2.2 – 3.2 AU', detail: 'Millions of rocks & Ceres', light: '18 – 26 min', density: 'Extremely Sparse', gravity: 'Microgravity' },
    { id: 'giants', title: 'Outer Giant Planets', dist: '5.2 – 30.1 AU', detail: 'Jupiter, Saturn, Uranus, Neptune', light: '43 min – 4.1 hrs', density: 'Low (0.69 – 1.64 g/cm³)', gravity: '8.7 – 24.8 m/s²' },
    { id: 'kuiper', title: 'Kuiper Belt & Scattered Disk', dist: '30 – 1,000 AU', detail: 'Frozen ices, Pluto, Eris, Arrokoth', light: '4.1 – 138 hrs', density: 'Very Low', gravity: 'Negligible' },
    { id: 'heliopause', title: 'Heliopause Boundary', dist: '~120 AU', detail: 'Solar wind meets interstellar plasma', light: '16.6 hrs', density: 'Interstellar Medium', gravity: 'Solar Dominated' },
    { id: 'oort', title: 'Oort Cloud Reservoir', dist: '2,000 – 100,000 AU', detail: 'Trillions of icy cometary nuclei', light: '11.5d – 1.58 Light-Years', density: 'Near Vacuum', gravity: 'Sun Gravitational Edge' },
    { id: 'interstellar', title: 'Interstellar Space', dist: '> 100,000 AU', detail: 'Beyond Sun gravitational sphere of influence', light: '> 1.6 Light-Years', detail2: 'Local Interstellar Cloud', gravity: 'Galactic Tidal Force' }
  ];

  return (
    <section id="architecture-map" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-8 shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>SOLAR SYSTEM ARCHITECTURE ATLAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white mt-1">
            THE STRUCTURAL MAP OF OUR SYSTEM
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1 max-w-3xl">
            From the core nuclear engine of Sol through planetary orbits, the Kuiper Belt, heliopause magnetic shield, and distant Oort Cloud.
          </p>
        </div>

        {/* View Mode Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {(['distance', 'density', 'orbit', 'light', 'gravity'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setViewMode(m)}
              className={`px-3 py-1.5 rounded-xl uppercase font-bold border transition-all ${
                viewMode === m
                  ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 border-cyan-600 font-extrabold'
                  : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* ⚠️ DISTANCES COMPRESSED SCIENTIFIC CAVEAT NOTICE */}
      <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-mono flex items-center gap-2">
        <ShieldAlert className="w-4 h-4 text-amber-500 flex-shrink-0" />
        <span>
          <strong>DISTANCES COMPRESSED FOR VISIBILITY:</strong> In actual scale, the Oort Cloud is 2,000x farther than Neptune!
        </span>
      </div>

      {/* 🗺️ INTERACTIVE MAP PIPELINE */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {architectureNodes.map((node, i) => (
          <div
            key={node.id}
            className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-3 shadow-sm hover:border-cyan-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="font-bold text-cyan-600 dark:text-cyan-400">ZONE #{i + 1}</span>
                <span className="text-slate-400">{node.dist}</span>
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">{node.title}</h3>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-300 leading-snug">{node.detail}</p>
            </div>

            {/* Dynamic View Mode Metric Display */}
            <div className="pt-3 border-t border-slate-200 dark:border-white/10 font-mono text-[11px] space-y-1">
              {viewMode === 'distance' && (
                <div className="text-cyan-700 dark:text-cyan-300 font-bold">Distance: {node.dist}</div>
              )}
              {viewMode === 'density' && (
                <div className="text-emerald-700 dark:text-emerald-300 font-bold">Density: {node.density}</div>
              )}
              {viewMode === 'orbit' && (
                <div className="text-purple-700 dark:text-purple-300 font-bold">Region: {node.detail}</div>
              )}
              {viewMode === 'light' && (
                <div className="text-amber-700 dark:text-amber-300 font-bold">Light Time: {node.light}</div>
              )}
              {viewMode === 'gravity' && (
                <div className="text-rose-700 dark:text-rose-300 font-bold">Gravity: {node.gravity}</div>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
