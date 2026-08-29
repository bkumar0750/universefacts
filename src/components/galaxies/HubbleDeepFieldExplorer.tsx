import React, { useState } from 'react';
import { ZoomIn, Sparkles, ShieldCheck } from 'lucide-react';
import { DEEP_FIELD_SAMPLE_GALAXIES } from '../../data/galaxiesAtlasData';

export const HubbleDeepFieldExplorer: React.FC = () => {
  const [selectedGalaxyId, setSelectedGalaxyId] = useState<string>('hudf-01');
  const [comparisonMode, setComparisonMode] = useState<'hubble' | 'jwst'>('jwst');

  const activeGalaxy = DEEP_FIELD_SAMPLE_GALAXIES.find((g) => g.id === selectedGalaxyId) || DEEP_FIELD_SAMPLE_GALAXIES[0];

  return (
    <section id="deep-field" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020518] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTIONS 34 - 37 · DEEP FIELD EXPLORER
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <ZoomIn className="w-6 h-6 text-cyan-400" />
            <span>HUBBLE & JWST ULTRA DEEP FIELD EXPLORER</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>VERIFIED DATA: NASA / STScI</span>
        </div>
      </div>

      {/* Intro Text */}
      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
        NASA’s original Hubble Deep Field covered an area about 1/13 the diameter of the full Moon, revealing roughly 3,000 distant galaxies. The Hubble Ultra Deep Field expanded this to ~10,000 galaxies in a tiny, seemingly empty patch of sky.
      </p>

      {/* Interactive Patch Canvas / Visual Picker Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Deep Field Interactive Simulated Patch Frame */}
        <div className="lg:col-span-7 bg-[#01030e] p-6 rounded-2xl border border-cyan-500/30 space-y-4 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-cyan-400 font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Interactive Patch Coordinate Inspector</span>
            </span>
            <span className="text-slate-400 text-[10px]">1/13 Full Moon Angular Diameter</span>
          </div>

          {/* Deep Field Galaxy Target Map Dots */}
          <div className="relative w-full h-52 bg-[#020616] rounded-xl border border-white/10 flex items-center justify-center p-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

            {/* Clickable Galaxy Targets */}
            {DEEP_FIELD_SAMPLE_GALAXIES.map((gal, idx) => {
              const isSelected = selectedGalaxyId === gal.id;
              // Spread out positions visually
              const topPos = 20 + (idx * 14) % 65;
              const leftPos = 15 + (idx * 22) % 75;

              return (
                <button
                  key={gal.id}
                  onClick={() => setSelectedGalaxyId(gal.id)}
                  style={{ top: `${topPos}%`, left: `${leftPos}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all cursor-pointer ${
                    isSelected
                      ? 'ring-4 ring-cyan-400 scale-125 z-20'
                      : 'hover:scale-110 z-10 opacity-80'
                  }`}
                >
                  <div
                    className="w-4 h-4 rounded-full animate-pulse shadow-md"
                    style={{ backgroundColor: gal.color }}
                  />
                  {isSelected && (
                    <span className="absolute left-6 top-0 text-[10px] font-mono font-bold bg-slate-900 text-white px-2 py-0.5 rounded border border-cyan-400 whitespace-nowrap">
                      {gal.name}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            Click any colored galaxy target inside the deep field patch to inspect estimated redshift and lookback epoch.
          </div>
        </div>

        {/* Selected Galaxy Telemetry Card */}
        <div className="lg:col-span-5 glass-panel p-5 rounded-2xl border border-cyan-500/30 space-y-4 flex flex-col justify-between bg-slate-950/80">
          <div>
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">
              TARGET TELEMETRY INSPECTOR
            </span>
            <h3 className="text-2xl font-display font-bold text-white mt-2">{activeGalaxy.name}</h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">Catalog ID: {activeGalaxy.id}</p>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="bg-slate-900 p-3 rounded-xl border border-white/5 flex items-center justify-between">
              <span className="text-slate-400">Estimated Redshift (z):</span>
              <strong className="text-amber-300 text-sm">z = {activeGalaxy.redshift}</strong>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-white/5 flex items-center justify-between">
              <span className="text-slate-400">Lookback Time:</span>
              <strong className="text-cyan-300 text-sm">{activeGalaxy.lookback}</strong>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-white/5 flex items-center justify-between">
              <span className="text-slate-400">Cosmic Epoch:</span>
              <strong className="text-emerald-300 text-xs">{activeGalaxy.epoch}</strong>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-white/5 flex items-center justify-between">
              <span className="text-slate-400">Observed Shape:</span>
              <strong className="text-purple-300 text-xs">{activeGalaxy.shape}</strong>
            </div>
          </div>

          {/* JWST vs Hubble Comparison Mode */}
          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between">
              <span className="text-cyan-300 font-bold">Observatory Toggle:</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setComparisonMode('hubble')}
                  className={`px-2.5 py-1 rounded text-[10px] ${comparisonMode === 'hubble' ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400 font-bold' : 'text-slate-400'}`}
                >
                  Hubble (Visible)
                </button>
                <button
                  onClick={() => setComparisonMode('jwst')}
                  className={`px-2.5 py-1 rounded text-[10px] ${comparisonMode === 'jwst' ? 'bg-amber-500/30 text-amber-200 border border-amber-400 font-bold' : 'text-slate-400'}`}
                >
                  JWST (Infrared)
                </button>
              </div>
            </div>

            <p className="text-[11px] font-sans text-slate-300 leading-snug">
              {comparisonMode === 'jwst'
                ? 'JWST infrared instruments pierce cosmic dust and detect heavily redshifted light from early post-Big Bang galaxies.'
                : 'Hubble optical imagery provides high spatial detail for nearer galaxies but light from z>10 targets is shifted past its detector range.'}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
