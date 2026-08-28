import React, { useState } from 'react';
import { planetsData } from '../data/planetsData';
import type { Planet } from '../types';
import { Check, Plus, X, GitCompare } from 'lucide-react';

export const PlanetCompareTool: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(['earth', 'mars']);

  const togglePlanet = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((p) => p !== id));
      }
    } else {
      if (selectedIds.length < 4) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const selectedPlanets: Planet[] = selectedIds
    .map((id) => planetsData.find((p) => p.id === id))
    .filter(Boolean) as Planet[];

  return (
    <div className="rounded-2xl glass-panel border border-slate-200 dark:border-white/10 p-6 space-y-6">
      
      <div>
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <GitCompare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Celestial Comparison Dashboard</span>
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
          Select between 2 and 4 worlds to compare physical dimensions, gravitational pull, surface thermal range, and orbital metrics.
        </p>
      </div>

      {/* Selector Pills */}
      <div className="flex flex-wrap gap-2">
        {planetsData.map((planet) => {
          const isSelected = selectedIds.includes(planet.id);
          return (
            <button
              key={planet.id}
              onClick={() => togglePlanet(planet.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                isSelected
                  ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-400 border border-slate-300 dark:border-white/10 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              {isSelected ? <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{planet.name}</span>
            </button>
          );
        })}
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {selectedPlanets.map((planet) => (
          <div
            key={planet.id}
            className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-4 relative group"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">{planet.name}</h3>
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">{planet.type}</span>
              </div>
              {selectedIds.length > 2 && (
                <button
                  onClick={() => togglePlanet(planet.id)}
                  className="p-1 rounded bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Metrics */}
            <div className="space-y-3 divide-y divide-slate-200 dark:divide-white/5 text-xs font-mono">
              <div className="pt-2">
                <span className="text-slate-600 dark:text-slate-400 block text-[10px] uppercase font-bold">Diameter</span>
                <span className="text-slate-900 dark:text-white font-bold text-sm">{planet.physical.diameter}</span>
              </div>

              <div className="pt-2">
                <span className="text-slate-600 dark:text-slate-400 block text-[10px] uppercase font-bold">Mass</span>
                <span className="text-cyan-700 dark:text-cyan-300 font-bold">{planet.physical.mass}</span>
              </div>

              <div className="pt-2">
                <span className="text-slate-600 dark:text-slate-400 block text-[10px] uppercase font-bold">Gravity</span>
                <span className="text-emerald-700 dark:text-emerald-300 font-bold">{planet.physical.gravity}</span>
              </div>

              <div className="pt-2">
                <span className="text-slate-600 dark:text-slate-400 block text-[10px] uppercase font-bold">Average Temp</span>
                <span className="text-amber-700 dark:text-amber-300 font-bold">{planet.physical.averageTemp}</span>
              </div>

              <div className="pt-2">
                <span className="text-slate-600 dark:text-slate-400 block text-[10px] uppercase font-bold">Distance from Sun</span>
                <span className="text-purple-700 dark:text-purple-300 font-bold">{planet.orbit.distanceFromSun}</span>
              </div>

              <div className="pt-2">
                <span className="text-slate-600 dark:text-slate-400 block text-[10px] uppercase font-bold">Day Length</span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{planet.orbit.dayLength}</span>
              </div>

              <div className="pt-2">
                <span className="text-slate-600 dark:text-slate-400 block text-[10px] uppercase font-bold">Known Moons</span>
                <span className="text-slate-900 dark:text-white font-bold">{planet.moonCount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
