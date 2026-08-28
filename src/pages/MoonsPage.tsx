import React, { useState } from 'react';
import { moonsData } from '../data/moonsData';
import { Moon as MoonIcon } from 'lucide-react';
import { SourceBadge } from '../components/SourceBadge';

export const MoonsPage: React.FC = () => {
  const [selectedParent, setSelectedParent] = useState<string>('All');

  const parentPlanets = ['All', 'Earth', 'Jupiter', 'Saturn', 'Neptune', 'Mars'];

  const filteredMoons = moonsData.filter((m) =>
    selectedParent === 'All' ? true : m.parentPlanet === selectedParent
  );

  return (
    <div className="space-y-10 pb-12">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
          <MoonIcon className="w-3.5 h-3.5" />
          <span>NATURAL SATELLITES CATALOG</span>
        </div>
        <h1 className="text-4xl font-display font-extrabold text-white">
          Moons of the Solar System
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-3xl leading-relaxed">
          Over 290 natural satellites orbit major planets and dwarf worlds in our planetary system. From the volcanically fierce Io to the subsurface liquid ocean worlds Europa and Enceladus.
        </p>
      </div>

      {/* Parent Planet Filter */}
      <div className="flex flex-wrap gap-2">
        {parentPlanets.map((parent) => (
          <button
            key={parent}
            onClick={() => setSelectedParent(parent)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              selectedParent === parent
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                : 'glass-button text-slate-400 hover:text-white'
            }`}
          >
            {parent} {parent === 'All' ? `(${moonsData.length})` : ''}
          </button>
        ))}
      </div>

      {/* Moons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMoons.map((moon) => (
          <div
            key={moon.id}
            className="glass-panel rounded-2xl border border-white/10 overflow-hidden space-y-4 p-5 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-300 font-bold bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
                Moon of {moon.parentPlanet}
              </span>
              <span className="text-xs font-mono text-slate-400">{moon.diameter}</span>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-white">{moon.name}</h3>
              <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
                {moon.description}
              </p>
            </div>

            <div className="glass-panel p-3 rounded-xl border border-white/5 bg-slate-900/60 space-y-1">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">Key Discovery</span>
              <p className="text-xs font-sans text-slate-200">{moon.keyDiscovery}</p>
            </div>

            <SourceBadge sources={moon.sources} />
          </div>
        ))}
      </div>

    </div>
  );
};
