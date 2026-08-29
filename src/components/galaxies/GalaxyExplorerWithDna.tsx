import React, { useState } from 'react';
import { Compass, Dna, GitCompare } from 'lucide-react';
import { COMPREHENSIVE_GALAXIES_DATABASE } from '../../data/galaxiesAtlasData';
import type { ComprehensiveGalaxy } from '../../data/galaxiesAtlasData';

export const GalaxyExplorerWithDna: React.FC = () => {
  const [selectedGalaxyId, setSelectedGalaxyId] = useState<string>('milky-way');
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [compareGalaxyId, setCompareGalaxyId] = useState<string>('andromeda');

  const selectedGalaxy = COMPREHENSIVE_GALAXIES_DATABASE.find(g => g.id === selectedGalaxyId) || COMPREHENSIVE_GALAXIES_DATABASE[0];
  const compareGalaxy = COMPREHENSIVE_GALAXIES_DATABASE.find(g => g.id === compareGalaxyId) || COMPREHENSIVE_GALAXIES_DATABASE[1];

  const renderRatingBar = (rating: number, max: number = 10, colorClass: string = 'bg-cyan-400') => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className={`h-2.5 w-3 rounded-xs transition-all ${
              i < rating ? colorClass : 'bg-slate-800'
            }`}
          />
        ))}
        <span className="text-[10px] font-mono text-slate-400 ml-1 font-bold">{rating}/10</span>
      </div>
    );
  };

  const renderDnaCard = (galaxy: ComprehensiveGalaxy, isCompare: boolean = false) => {
    const dna = galaxy.dna;
    return (
      <div className={`p-5 rounded-2xl border ${isCompare ? 'bg-purple-50 dark:bg-purple-950/20 border-purple-300 dark:border-purple-500/40' : 'bg-cyan-50 dark:bg-cyan-950/20 border-cyan-300 dark:border-cyan-500/40'} space-y-4 font-mono text-xs shadow-xl text-slate-900 dark:text-white transition-colors`}>
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
          <div className="space-y-0.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5">
              <Dna className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>GALAXY DNA PROFILE</span>
            </span>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">{galaxy.name}</h3>
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            {galaxy.type}
          </span>
        </div>

        {/* DNA Metric Bars */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center justify-between">
            <span className="text-slate-700 dark:text-slate-300 text-[11px]">TYPE</span>
            <span className="font-bold text-slate-900 dark:text-white text-[11px]">{dna.type}</span>
          </div>

          <div className="space-y-0.5">
            <div className="flex justify-between text-[11px] text-slate-700 dark:text-slate-300">
              <span>SIZE EXTENT</span>
              <span className="font-bold">{galaxy.diameter}</span>
            </div>
            {renderRatingBar(dna.sizeRating, 10, 'bg-cyan-500 dark:bg-cyan-400')}
          </div>

          <div className="space-y-0.5">
            <div className="flex justify-between text-[11px] text-slate-700 dark:text-slate-300">
              <span>STAR FORMATION</span>
              <span className="font-bold">{galaxy.starFormationRate}</span>
            </div>
            {renderRatingBar(dna.starFormationRating, 10, 'bg-emerald-500 dark:bg-emerald-400')}
          </div>

          <div className="space-y-0.5">
            <div className="flex justify-between text-[11px] text-slate-700 dark:text-slate-300">
              <span>INTERSTELLAR GAS</span>
              <span className="font-bold">H I Atomic & H₂ Molecular</span>
            </div>
            {renderRatingBar(dna.gasRating, 10, 'bg-amber-500 dark:bg-amber-400')}
          </div>

          <div className="space-y-0.5">
            <div className="flex justify-between text-[11px] text-slate-700 dark:text-slate-300">
              <span>COSMIC DUST</span>
              <span className="font-bold">Extinction & IR Emission</span>
            </div>
            {renderRatingBar(dna.dustRating, 10, 'bg-rose-500 dark:bg-rose-400')}
          </div>

          <div className="space-y-0.5">
            <div className="flex justify-between text-[11px] text-slate-700 dark:text-slate-300">
              <span>DARK MATTER HALO</span>
              <span className="font-bold">Mass Fraction (~80-90%)</span>
            </div>
            {renderRatingBar(dna.darkMatterRating, 10, 'bg-purple-500 dark:bg-purple-400')}
          </div>
        </div>

        {/* DNA Key Telemetry Properties */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 dark:border-white/10 text-[11px]">
          <div className="bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-0.5">
            <span className="text-[9px] text-slate-500 dark:text-slate-400 uppercase">CENTRAL BLACK HOLE</span>
            <div className="font-bold text-emerald-700 dark:text-emerald-300 truncate">
              {dna.blackHolePresent ? `● ${dna.blackHoleNote}` : 'None Detected'}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-0.5">
            <span className="text-[9px] text-slate-500 dark:text-slate-400 uppercase">AGE DISTRIBUTION</span>
            <div className="font-bold text-amber-700 dark:text-amber-300 truncate">{dna.ageDistribution}</div>
          </div>

          <div className="bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-0.5">
            <span className="text-[9px] text-slate-500 dark:text-slate-400 uppercase">ENVIRONMENT</span>
            <div className="font-bold text-cyan-700 dark:text-cyan-300 truncate">{dna.environment}</div>
          </div>

          <div className="bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-0.5">
            <span className="text-[9px] text-slate-500 dark:text-slate-400 uppercase">INTERACTION STATE</span>
            <div className="font-bold text-rose-700 dark:text-rose-300 truncate">{dna.interaction}</div>
          </div>

          <div className="bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-0.5">
            <span className="text-[9px] text-slate-500 dark:text-slate-400 uppercase">OBSERVATION</span>
            <div className="font-bold text-slate-900 dark:text-white truncate">{dna.observation}</div>
          </div>

          <div className="bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-0.5">
            <span className="text-[9px] text-slate-500 dark:text-slate-400 uppercase">LOOKBACK TIME</span>
            <div className="font-bold text-purple-700 dark:text-purple-300 truncate">{dna.lookbackTime}</div>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-cyan-100/70 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 flex items-center justify-between text-[11px]">
          <span className="text-slate-600 dark:text-slate-400">SCIENTIFIC CONFIDENCE:</span>
          <strong className="text-cyan-800 dark:text-cyan-300 font-bold">{dna.scientificConfidence}</strong>
        </div>
      </div>
    );
  };

  return (
    <section id="galaxy-explorer" className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/30 bg-white/90 dark:bg-[#020516] text-slate-900 dark:text-white space-y-6 animate-fade-in-up transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            EXPERIENCE 01 · GALAXY EXPLORER & GALAXY DNA
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
            <Compass className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            <span>GALAXY EXPLORER & ASTROPHYSICAL DNA</span>
          </h2>
        </div>

        {/* Compare Mode Toggle */}
        <button
          onClick={() => setCompareMode(!compareMode)}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
            compareMode
              ? 'bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-500/50 shadow-md'
              : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:text-slate-950 dark:hover:text-white'
          }`}
        >
          <GitCompare className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>{compareMode ? 'EXIT GALAXY DNA COMPARISON' : 'COMPARE GALAXY DNA (SIDE-BY-SIDE)'}</span>
        </button>
      </div>

      {/* Visual Galaxy Selector Grid */}
      <div className="space-y-2">
        <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-bold uppercase">Select Galaxy Target:</span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {COMPREHENSIVE_GALAXIES_DATABASE.map((g) => {
            const isPrimary = selectedGalaxyId === g.id;
            const isCompare = compareGalaxyId === g.id && compareMode;
            return (
              <button
                key={g.id}
                onClick={() => {
                  if (compareMode) {
                    if (g.id !== selectedGalaxyId) setCompareGalaxyId(g.id);
                  } else {
                    setSelectedGalaxyId(g.id);
                  }
                }}
                className={`p-2.5 rounded-xl border text-left font-mono text-xs transition-all cursor-pointer relative overflow-hidden ${
                  isPrimary
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-900 dark:text-cyan-200 font-bold shadow-md'
                    : isCompare
                    ? 'bg-purple-500/20 border-purple-400 text-purple-900 dark:text-purple-200 font-bold shadow-md'
                    : 'bg-slate-100 dark:bg-slate-900/80 border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <div className="text-[10px] text-cyan-700 dark:text-cyan-400 font-bold">{g.type}</div>
                <div className="font-bold text-slate-900 dark:text-white text-xs truncate mt-0.5">{g.name}</div>
                {isPrimary && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400" />
                )}
                {isCompare && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Galaxy Card + DNA Display Area */}
      {!compareMode ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
          
          {/* Left Galaxy Portrait & Telemetry */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 flex flex-col justify-end p-5 group min-h-[360px]">
            <img
              src={selectedGalaxy.images[0].imageUrl}
              alt={selectedGalaxy.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020516] via-[#020516]/40 to-transparent" />

            <div className="relative z-10 space-y-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 backdrop-blur-md">
                {selectedGalaxy.images[0].imageType}
              </span>

              <h3 className="text-2xl font-display font-bold text-white">{selectedGalaxy.name}</h3>
              
              <div className="space-y-1 text-slate-300 text-xs">
                <div>TYPE: <strong className="text-cyan-300">{selectedGalaxy.type}</strong></div>
                <div>DISTANCE: <strong className="text-amber-300">{selectedGalaxy.distance}</strong></div>
                <div>TELESCOPE: <strong className="text-white">{selectedGalaxy.images[0].telescope}</strong></div>
                <div>WAVELENGTH: <strong className="text-cyan-300">{selectedGalaxy.images[0].wavelength}</strong></div>
                <div>SOURCE: <strong className="text-emerald-300">{selectedGalaxy.images[0].sourceName}</strong></div>
              </div>
            </div>
          </div>

          {/* Right Galaxy DNA Panel */}
          <div className="lg:col-span-7">
            {renderDnaCard(selectedGalaxy)}
          </div>

        </div>
      ) : (
        /* Compare Mode Side by Side */
        <div className="space-y-4 pt-2">
          <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-200 flex items-center gap-2">
            <GitCompare className="w-4 h-4 text-purple-400" />
            <span>SIDE-BY-SIDE GALAXY DNA COMPARISON MODE — Select 2 targets above to compare physical characteristics!</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {renderDnaCard(selectedGalaxy, false)}
            {renderDnaCard(compareGalaxy, true)}
          </div>
        </div>
      )}

    </section>
  );
};
