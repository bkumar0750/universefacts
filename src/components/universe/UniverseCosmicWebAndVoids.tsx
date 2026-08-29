import React, { useState } from 'react';
import { Box } from 'lucide-react';

export const UniverseCosmicWebAndVoids: React.FC = () => {
  const [euclidToggle, setEuclidToggle] = useState<'galaxies' | 'dark-matter' | 'lensing' | 'cosmic-web'>('cosmic-web');

  return (
    <section id="cosmic-web-and-voids" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300">
          <Box className="w-4 h-4 text-indigo-500" />
          <span>SECTION 22-24 &amp; 53 · THE UNIVERSE'S INVISIBLE MAP</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          SEE THE UNIVERSE — THEN SEE WHAT GRAVITY SAYS IS THERE
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          ESA's Euclid mission maps billions of galaxies across more than a third of the sky to construct the 3D scaffolding of dark matter, cosmic filaments, and vast voids.
        </p>
      </div>

      {/* Signature Euclid Interactive Visualizer Toggle */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            onClick={() => setEuclidToggle('galaxies')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              euclidToggle === 'galaxies'
                ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
            }`}
          >
            🌌 GALAXIES
          </button>
          <button
            onClick={() => setEuclidToggle('dark-matter')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              euclidToggle === 'dark-matter'
                ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
            }`}
          >
            🧲 DARK MATTER MODEL
          </button>
          <button
            onClick={() => setEuclidToggle('lensing')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              euclidToggle === 'lensing'
                ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
            }`}
          >
            🔍 GRAVITATIONAL LENSING
          </button>
          <button
            onClick={() => setEuclidToggle('cosmic-web')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              euclidToggle === 'cosmic-web'
                ? 'bg-indigo-500/20 text-indigo-900 dark:text-indigo-200 border-indigo-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
            }`}
          >
            🕸️ COSMIC WEB
          </button>
        </div>

        {/* Dynamic Display Canvas */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-indigo-500/40 text-white min-h-[260px] flex flex-col justify-between shadow-2xl relative overflow-hidden font-mono">
          <div className="flex justify-between items-center text-xs">
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-bold">
              EUCLID MAP MODE: {euclidToggle.toUpperCase()}
            </span>
            <span className="text-slate-400 text-[10px]">10 BILLION LIGHT-YEAR VOLUME</span>
          </div>

          <div className="my-auto text-center space-y-3">
            {euclidToggle === 'galaxies' && (
              <div className="space-y-2">
                <div className="text-2xl font-bold text-cyan-300">OBSERVED GALAXIES (VISIBLE LIGHT)</div>
                <p className="font-sans text-xs text-slate-300 max-w-xl mx-auto">
                  Over 10 billion light-years of space containing billions of luminous spiral, elliptical, and irregular galaxies.
                </p>
              </div>
            )}

            {euclidToggle === 'dark-matter' && (
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-300">INFERRED DARK MATTER SCAFFOLDING</div>
                <p className="font-sans text-xs text-slate-300 max-w-xl mx-auto">
                  Reconstructed 3D dark matter halos holding galaxies together and pulling baryonic gas into filaments.
                </p>
              </div>
            )}

            {euclidToggle === 'lensing' && (
              <div className="space-y-2">
                <div className="text-2xl font-bold text-amber-300">WEAK GRAVITATIONAL LENSING MAP</div>
                <p className="font-sans text-xs text-slate-300 max-w-xl mx-auto">
                  Minute cosmic distortions of background galaxy shapes caused by foreground mass concentrations over 10 billion years.
                </p>
              </div>
            )}

            {euclidToggle === 'cosmic-web' && (
              <div className="space-y-2">
                <div className="text-2xl font-bold text-indigo-300">LARGE-SCALE COSMIC WEB &amp; VOIDS</div>
                <p className="font-sans text-xs text-slate-300 max-w-xl mx-auto">
                  Interconnected filaments and galaxy walls surrounding vast, low-density cosmic voids.
                </p>
              </div>
            )}
          </div>

          <div className="text-[10px] text-slate-400 text-center border-t border-white/10 pt-2">
            Verified Source: ESA Euclid Mission Dark Universe Mapping Survey 2026
          </div>
        </div>
      </div>

    </section>
  );
};
