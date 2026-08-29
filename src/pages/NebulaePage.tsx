import React, { useState } from 'react';
import { nebulaeData } from '../data/nebulaeData';
import { Sparkles } from 'lucide-react';
import { SourceBadge } from '../components/SourceBadge';

export const NebulaePage: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');

  const types = ['All', 'Emission', 'Planetary', 'Supernova Remnant'];

  const filteredNebulae = nebulaeData.filter((n) =>
    filterType === 'All' ? true : n.type === filterType
  );

  return (
    <div className="space-y-10 pb-12">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERSTELLAR STELLAR NURSERIES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
          Nebulae Gallery
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Vast clouds of ionized hydrogen, gas, and interstellar dust. Nebulae serve as both the birthplaces of new star clusters and the luminous cosmic grave remnants of dying stars.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              filterType === type
                ? 'bg-indigo-600 dark:bg-indigo-500/20 text-white dark:text-indigo-300 border border-indigo-600 dark:border-indigo-500/50 shadow-md font-bold'
                : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300'
            }`}
          >
            {type} {type === 'All' ? `(${nebulaeData.length})` : ''}
          </button>
        ))}
      </div>

      {/* Nebulae Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNebulae.map((nebula) => (
          <div
            key={nebula.id}
            className="glass-panel group rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col justify-between p-6 space-y-4 bg-white/80 dark:bg-slate-900/60"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/30">
                {nebula.type}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{nebula.distance}</span>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{nebula.name}</h3>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">Constellation: {nebula.constellation}</span>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-2 leading-relaxed">
                {nebula.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-3 border-t border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400">
              <div>Size: <strong className="text-slate-900 dark:text-white">{nebula.size}</strong></div>
            </div>

            <SourceBadge sources={nebula.sources} />
          </div>
        ))}
      </div>

    </div>
  );
};

