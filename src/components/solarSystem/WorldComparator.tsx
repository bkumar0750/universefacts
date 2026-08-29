import React, { useState } from 'react';
import { Columns, Check } from 'lucide-react';
import { WORLDS_COMPARISON_DATA } from '../../data/solarSystemData';

export const WorldComparator: React.FC = () => {
  const [selectedWorldIds, setSelectedWorldIds] = useState<string[]>(['earth', 'mars', 'jupiter']);

  const toggleWorldSelection = (id: string) => {
    if (selectedWorldIds.includes(id)) {
      if (selectedWorldIds.length > 2) {
        setSelectedWorldIds(selectedWorldIds.filter((wId) => wId !== id));
      }
    } else {
      if (selectedWorldIds.length < 4) {
        setSelectedWorldIds([...selectedWorldIds, id]);
      }
    }
  };

  const selectedWorlds = WORLDS_COMPARISON_DATA.filter((w) => selectedWorldIds.includes(w.id));
  const maxDiameter = Math.max(...selectedWorlds.map((w) => w.diameterKM));

  return (
    <section id="compare-worlds" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-6 shadow-xl">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-800 dark:text-indigo-300">
            <Columns className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>INTERACTIVE COMPARISON MODE · SELECT 2 TO 4 WORLDS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            COMPARE WORLDS SIDE-BY-SIDE
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            Compare planetary diameter, surface gravity, mass, atmospheres, and magnetic fields side-by-side with proportional visual spheres.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-500">Selected:</span>
          <span className="font-bold text-indigo-700 dark:text-indigo-300 bg-slate-100 dark:bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10">
            {selectedWorldIds.length} / 4 Worlds
          </span>
        </div>
      </div>

      {/* World Selection Buttons */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-slate-500 font-bold uppercase block">
          SELECT WORLDS TO COMPARE:
        </span>
        <div className="flex flex-wrap gap-2">
          {WORLDS_COMPARISON_DATA.map((w) => {
            const isSelected = selectedWorldIds.includes(w.id);
            return (
              <button
                key={w.id}
                onClick={() => toggleWorldSelection(w.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500/20 dark:text-indigo-300 border-indigo-600 font-bold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-indigo-500/40'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-indigo-300" />}
                <span>{w.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Proportional Spheres Visualization Header */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30 bg-slate-950 text-white space-y-4">
        <span className="text-xs font-mono text-indigo-400 font-bold uppercase block">
          PROPORTIONAL SPHERE SIZE COMPARISON
        </span>

        <div className="flex flex-wrap items-end justify-around gap-6 py-6 border-b border-white/10 min-h-[160px]">
          {selectedWorlds.map((w) => {
            const ratio = w.diameterKM / maxDiameter;
            const pxSize = Math.max(Math.round(ratio * 120), 16);
            return (
              <div key={w.id} className="flex flex-col items-center gap-2">
                <div
                  className="rounded-full bg-gradient-to-tr from-indigo-600 via-cyan-400 to-amber-300 shadow-lg flex items-center justify-center transition-all duration-500"
                  style={{ width: `${pxSize}px`, height: `${pxSize}px` }}
                />
                <span className="text-xs font-mono font-bold text-white">{w.name}</span>
                <span className="text-[10px] font-mono text-cyan-300">{w.diameterFormatted}</span>
              </div>
            );
          })}
        </div>

        {/* 14 Metric Grid Comparison Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-indigo-300 text-[11px] uppercase">
                <th className="p-3 w-48">Parameter</th>
                {selectedWorlds.map((w) => (
                  <th key={w.id} className="p-3 text-white font-bold">{w.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300 text-[11px]">
              <tr>
                <td className="p-3 font-semibold text-slate-400">Category</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3 text-cyan-300 font-bold">{w.category}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Diameter (KM)</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3">{w.diameterFormatted}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Surface Gravity</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3 text-amber-300 font-bold">{w.gravityMetersPerSecSq} m/s² ({w.gravityRelativeEarth}g)</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Mass (vs Earth)</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3">{w.massFormatted}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Sun Distance (AU)</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3">{w.sunDistanceFormatted}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Orbital Period</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3 text-emerald-300 font-bold">{w.orbitalPeriodFormatted}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Rotation Day</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3">{w.rotationPeriodFormatted}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Axial Tilt</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3">{w.axialTiltDegrees}°</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Mean Temperature</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3 text-rose-300">{w.tempFormatted}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Known Moons</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3 text-purple-300 font-bold">{w.moonCount}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Has Ring System</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3">{w.hasRings ? 'Yes ✅' : 'No ❌'}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Atmosphere</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3 font-sans leading-tight">{w.atmosphereGases}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Magnetic Field</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3 font-sans leading-tight">{w.magneticField}</td>
                ))}
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-400">Key Missions</td>
                {selectedWorlds.map((w) => (
                  <td key={w.id} className="p-3 font-sans text-cyan-300">{w.notableMissions}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </section>
  );
};
