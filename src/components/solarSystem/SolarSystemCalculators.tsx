import React, { useState } from 'react';
import { Calculator, Clock } from 'lucide-react';
import { WORLDS_COMPARISON_DATA } from '../../data/solarSystemData';

export const SolarSystemCalculators: React.FC = () => {
  const [userAge, setUserAge] = useState<number>(25);
  const [userWeight, setUserWeight] = useState<number>(70); // kg or lbs
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');

  const [sortField, setSortField] = useState<'name' | 'rotation' | 'orbit' | 'tilt'>('orbit');

  const planets = WORLDS_COMPARISON_DATA.filter(
    (w) => w.category === 'Terrestrial Planet' || w.category === 'Gas Giant' || w.category === 'Ice Giant' || w.category === 'Dwarf Planet'
  );

  const sortedPlanets = [...planets].sort((a, b) => {
    if (sortField === 'name') return a.name.localeCompare(b.name);
    if (sortField === 'rotation') return a.rotationPeriodHours - b.rotationPeriodHours;
    if (sortField === 'orbit') return a.orbitalPeriodDays - b.orbitalPeriodDays;
    return a.axialTiltDegrees - b.axialTiltDegrees;
  });

  return (
    <section id="calculators-section" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-8 shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Calculator className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>INTERACTIVE COMPUTATIONAL ATLAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white mt-1">
            SOLAR SYSTEM CALCULATORS & PHYSICS
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1 max-w-3xl">
            Calculate your age on other worlds, your relative gravitational weight, sunlight travel times, atmospheric compositions, and early protoplanetary migration.
          </p>
        </div>
      </div>

      {/* ⏰ 1. LIGHT CLOCK: SUNLIGHT TRAVEL TIME CALCULATOR */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/80 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-cyan-500" />
            <span>LIGHT CLOCK: SUNLIGHT TRAVEL DURATION ACROSS THE SYSTEM</span>
          </span>
          <span className="text-xs font-mono text-slate-500">Speed of Light = 299,792 km/s</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 font-mono text-xs">
          {planets.slice(0, 8).map((p) => {
            const lightMins = (p.sunDistanceAU * 8.333).toFixed(1);
            return (
              <div key={p.id} className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-white/10 text-center space-y-1">
                <span className="text-slate-500 text-[10px] uppercase block font-bold truncate">{p.name}</span>
                <div className="text-cyan-700 dark:text-cyan-300 font-bold text-sm">
                  {parseFloat(lightMins) > 60 ? `${(parseFloat(lightMins) / 60).toFixed(1)} hrs` : `${lightMins} min`}
                </div>
                <span className="text-[9px] text-slate-400 block">{p.sunDistanceAU} AU</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🎂 2. AGE ON OTHER WORLDS CALCULATOR */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              "How Old Would You Be on Other Worlds?"
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
              Calculated using true sidereal orbital periods relative to Earth's 365.25 day year.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <label className="text-slate-700 dark:text-slate-300 font-bold">Your Earth Age:</label>
            <input
              type="number"
              min="1"
              max="120"
              value={userAge}
              onChange={(e) => setUserAge(Math.max(1, Number(e.target.value)))}
              className="w-20 bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-xl px-3 py-1.5 text-center font-bold text-cyan-600 dark:text-cyan-300 outline-none"
            />
            <span>Years</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 font-mono text-xs">
          {planets.slice(0, 8).map((p) => {
            const planetYears = (userAge / (p.orbitalPeriodDays / 365.25)).toFixed(2);
            return (
              <div key={p.id} className="bg-slate-100 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 text-center space-y-1">
                <span className="text-slate-500 text-[10px] uppercase font-bold block truncate">{p.name}</span>
                <div className="text-emerald-700 dark:text-emerald-300 font-extrabold text-base">{planetYears}</div>
                <span className="text-[10px] text-slate-400 block">{p.name} Years</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ⚖️ 3. WEIGHT ON OTHER WORLDS CALCULATOR */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              "Your Relative Weight Across the System"
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
              Calculated using surface gravitational acceleration ($F = m \cdot g$).
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <label className="text-slate-700 dark:text-slate-300 font-bold">Body Weight:</label>
            <input
              type="number"
              min="1"
              max="500"
              value={userWeight}
              onChange={(e) => setUserWeight(Math.max(1, Number(e.target.value)))}
              className="w-20 bg-white dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-xl px-3 py-1.5 text-center font-bold text-cyan-600 dark:text-cyan-300 outline-none"
            />
            <button
              onClick={() => setWeightUnit(weightUnit === 'kg' ? 'lbs' : 'kg')}
              className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 font-bold text-cyan-700 dark:text-cyan-300"
            >
              {weightUnit.toUpperCase()}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 font-mono text-xs">
          {planets.slice(0, 8).map((p) => {
            const w = (userWeight * p.gravityRelativeEarth).toFixed(1);
            return (
              <div key={p.id} className="bg-slate-100 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 text-center space-y-1">
                <span className="text-slate-500 text-[10px] uppercase font-bold block truncate">{p.name}</span>
                <div className="text-amber-700 dark:text-amber-300 font-extrabold text-base">{w} {weightUnit}</div>
                <span className="text-[9px] text-slate-400 block">{p.gravityRelativeEarth}g force</span>
              </div>
            );
          })}
        </div>

        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-mono">
          ⚠️ <strong>SCIENTIFIC CAVEAT:</strong> Gas giants (Jupiter, Saturn, Uranus, Neptune) have NO solid surface! Their weight values are calculated at the defined 1-bar atmospheric reference pressure level.
        </div>
      </div>

      {/* 📊 4. SORTABLE DAY / YEAR / AXIAL TILT COMPARISON TABLE */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
            Day, Year & Axial Tilt Comparative Telemetry Table
          </h3>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-slate-500">Sort by:</span>
            {(['name', 'rotation', 'orbit', 'tilt'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setSortField(f)}
                className={`px-3 py-1 rounded-xl uppercase font-bold border transition-all ${
                  sortField === f
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 border-cyan-600'
                    : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 text-[10px] uppercase">
                <th className="p-3">World</th>
                <th className="p-3">Category</th>
                <th className="p-3">Rotation Period (Day)</th>
                <th className="p-3">Orbital Period (Year)</th>
                <th className="p-3">Axial Tilt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5">
              {sortedPlanets.map((p) => (
                <tr key={p.id} className="hover:bg-slate-100 dark:hover:bg-slate-950/60">
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{p.name}</td>
                  <td className="p-3 text-cyan-700 dark:text-cyan-300">{p.category}</td>
                  <td className="p-3 text-slate-700 dark:text-slate-300">{p.rotationPeriodFormatted}</td>
                  <td className="p-3 text-emerald-700 dark:text-emerald-300 font-bold">{p.orbitalPeriodFormatted}</td>
                  <td className="p-3 text-amber-700 dark:text-amber-300 font-bold">{p.axialTiltDegrees}°</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
};
