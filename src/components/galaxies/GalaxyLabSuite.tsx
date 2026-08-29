import React, { useState } from 'react';
import { Sliders, Calculator, Sparkles } from 'lucide-react';

export const GalaxyLabSuite: React.FC = () => {
  const [sizeScale, setSizeScale] = useState<'dwarf' | 'milkyway' | 'giant'>('milkyway');
  const [cmdHoverState, setCmdHoverState] = useState<'blue' | 'green' | 'red'>('green');

  return (
    <section id="galaxy-labs" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#03081e] space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTIONS 54 - 64 · ADVANCED QUANTITATIVE LABS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Calculator className="w-6 h-6 text-cyan-400" />
            <span>ASTROPHYSICAL LABORATORY SUITE</span>
          </h2>
        </div>

        <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-xl border border-cyan-500/30">
          Color-Magnitude Diagram & Metallicity
        </span>
      </div>

      {/* LAB 01: GALAXY SIZE & STAR COUNT COMPARISON */}
      <div className="space-y-4">
        <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
          <Sliders className="w-5 h-5 text-cyan-400" />
          <span>01. Galaxy Size & Star Count Comparative Lab</span>
        </h3>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSizeScale('dwarf')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${sizeScale === 'dwarf' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold' : 'bg-slate-900 text-slate-400 border-white/5'}`}
          >
            Dwarf Satellite (LMC)
          </button>
          <button
            onClick={() => setSizeScale('milkyway')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${sizeScale === 'milkyway' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold' : 'bg-slate-900 text-slate-400 border-white/5'}`}
          >
            Milky Way (Medium Spiral)
          </button>
          <button
            onClick={() => setSizeScale('giant')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${sizeScale === 'giant' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 font-bold' : 'bg-slate-900 text-slate-400 border-white/5'}`}
          >
            Giant Elliptical (IC 1101 / M87)
          </button>
        </div>

        {/* Selected Size Telemetry */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 text-xs font-mono">
          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase">Diameter</span>
            <div className="text-base font-bold text-cyan-300">
              {sizeScale === 'dwarf' ? '14,000 Light-Years' : sizeScale === 'milkyway' ? '100,000 Light-Years' : '> 500,000 Light-Years'}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase">Estimated Star Population</span>
            <div className="text-base font-bold text-amber-300">
              {sizeScale === 'dwarf' ? '~10 Billion Stars' : sizeScale === 'milkyway' ? '100 - 400 Billion Stars' : '> 100 Trillion Stars'}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase">Central Black Hole Mass</span>
            <div className="text-base font-bold text-emerald-300">
              {sizeScale === 'dwarf' ? 'None / Intermediate candidate' : sizeScale === 'milkyway' ? '4.15 Million M☉ (Sgr A*)' : '> 6.5 Billion M☉ (M87*)'}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-slate-400 uppercase">Dark Matter Fraction</span>
            <div className="text-base font-bold text-purple-300">
              {sizeScale === 'dwarf' ? '~90%+ High Ratio' : sizeScale === 'milkyway' ? '~85% Total Mass' : '~80% Cluster Core Halo'}
            </div>
          </div>
        </div>
      </div>

      {/* LAB 02: COLOR-MAGNITUDE DIAGRAM (BLUE CLOUD, GREEN VALLEY, RED SEQUENCE) */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span>02. Galaxy Color-Magnitude Diagram & Quenching</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Interactive CMD Plot Box */}
          <div className="lg:col-span-6 bg-slate-950 p-4 rounded-2xl border border-purple-500/30 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold flex justify-between">
              <span>Galaxy Evolution Color-Magnitude Sequence</span>
              <span>Hover sequence region below</span>
            </div>

            <div className="relative h-48 bg-[#010410] rounded-xl border border-white/10 p-3 flex flex-col justify-between">
              {/* Red Sequence Zone */}
              <button
                onMouseEnter={() => setCmdHoverState('red')}
                className={`p-3 rounded-xl border transition-all text-left font-mono cursor-pointer ${
                  cmdHoverState === 'red' ? 'bg-rose-500/20 border-rose-500 text-rose-200 font-bold' : 'bg-slate-900/60 border-white/5 text-slate-400'
                }`}
              >
                <div className="text-xs">RED SEQUENCE — Quenched Ellipticals (Old Stars)</div>
              </button>

              {/* Green Valley Zone */}
              <button
                onMouseEnter={() => setCmdHoverState('green')}
                className={`p-3 rounded-xl border transition-all text-left font-mono cursor-pointer ${
                  cmdHoverState === 'green' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold' : 'bg-slate-900/60 border-white/5 text-slate-400'
                }`}
              >
                <div className="text-xs">GREEN VALLEY — Transitioning & Quenching Phase</div>
              </button>

              {/* Blue Cloud Zone */}
              <button
                onMouseEnter={() => setCmdHoverState('blue')}
                className={`p-3 rounded-xl border transition-all text-left font-mono cursor-pointer ${
                  cmdHoverState === 'blue' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-200 font-bold' : 'bg-slate-900/60 border-white/5 text-slate-400'
                }`}
              >
                <div className="text-xs">BLUE CLOUD — Active Starburst Spirals (Young Stars)</div>
              </button>
            </div>
          </div>

          {/* Details for Active CMD Region */}
          <div className="lg:col-span-6 space-y-3 font-mono text-xs">
            {cmdHoverState === 'blue' && (
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-2">
                <h4 className="text-sm font-bold text-cyan-300">BLUE CLOUD GALAXIES</h4>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Populated by gas-rich spiral galaxies undergoing vigorous star formation. Short-lived massive blue O & B stars illuminate the arms.
                </p>
              </div>
            )}

            {cmdHoverState === 'green' && (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
                <h4 className="text-sm font-bold text-emerald-300">GREEN VALLEY & QUENCHING</h4>
                <p className="text-slate-300 font-sans leading-relaxed">
                  The transitional zone where galaxies exhaust cold gas supplies, undergo AGN energy feedback, or experience tidal stripping, quenching star creation.
                </p>
              </div>
            )}

            {cmdHoverState === 'red' && (
              <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-2">
                <h4 className="text-sm font-bold text-rose-300">RED SEQUENCE GALAXIES</h4>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Mature, star-formation quiescent elliptical galaxies populated primarily by long-lived, low-mass ancient red giant stars.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};
