import React, { useState } from 'react';
import { Eye, Layers, Activity } from 'lucide-react';

export const DarkMatterToggleLab: React.FC = () => {
  const [showVisibleMatter, setShowVisibleMatter] = useState<boolean>(true);
  const [showDarkMatterModel, setShowDarkMatterModel] = useState<boolean>(false);
  const [showGravitationalEffect, setShowGravitationalEffect] = useState<boolean>(true);

  return (
    <section id="dark-matter-visualization" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020516] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            EXPERIENCE 06 · SIGNATURE DARK MATTER VISUALIZATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Layers className="w-6 h-6 text-purple-400" />
            <span>DARK MATTER HALO & GRAVITATIONAL EFFECT</span>
          </h2>
        </div>

        {/* PERMANENT MANDATORY UI LABEL */}
        <div className="px-3.5 py-1.5 rounded-xl bg-purple-950/80 border border-purple-500/50 text-purple-200 text-xs font-mono font-bold animate-pulse">
          INFERRED / MODELLED — NOT DIRECTLY PHOTOGRAPHED
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
        NASA describes dark matter as invisible material inferred from its gravitational effects. Without dark matter, stars at the outer edge of spiral galaxies would fly apart because visible mass alone cannot generate enough gravitational pull.
      </p>

      {/* Interactive Feature Toggles */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setShowVisibleMatter(!showVisibleMatter)}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
            showVisibleMatter
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-md'
              : 'bg-slate-900 text-slate-500 border border-white/5 opacity-60'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>VISIBLE MATTER (STARS & DUST): {showVisibleMatter ? 'ON' : 'OFF'}</span>
        </button>

        <button
          onClick={() => setShowDarkMatterModel(!showDarkMatterModel)}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
            showDarkMatterModel
              ? 'bg-purple-500/25 text-purple-200 border border-purple-400 shadow-md'
              : 'bg-slate-900 text-slate-500 border border-white/5 opacity-60'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>DARK MATTER MODEL (INFERRED HALO): {showDarkMatterModel ? 'ON' : 'OFF'}</span>
        </button>

        <button
          onClick={() => setShowGravitationalEffect(!showGravitationalEffect)}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
            showGravitationalEffect
              ? 'bg-amber-500/20 text-amber-300 border border-amber-400 shadow-md'
              : 'bg-slate-900 text-slate-500 border border-white/5 opacity-60'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>GRAVITATIONAL ROTATION EFFECT: {showGravitationalEffect ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      {/* Simulated Canvas Visualizer */}
      <div className="relative rounded-2xl border border-purple-500/30 bg-slate-950 p-6 space-y-6 overflow-hidden min-h-[300px] flex flex-col justify-between">
        
        {/* Layer Backgrounds */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Dark Matter Inferred Halo */}
          {showDarkMatterModel && (
            <div className="w-[85%] h-[85%] rounded-full bg-purple-600/15 border-2 border-dashed border-purple-500/40 animate-spin-slow transition-all duration-700" />
          )}

          {/* Visible Spiral Galaxy Core */}
          {showVisibleMatter && (
            <div className="w-[45%] h-[45%] rounded-full bg-cyan-400/20 border border-cyan-400/50 shadow-2xl shadow-cyan-500/40 animate-pulse transition-all duration-700" />
          )}
        </div>

        {/* Top Floating Telemetry Overlay */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs">
          <div className="px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-cyan-300">
            Visible Baryonic Mass: <strong>15% (Stars, Gas, Planets)</strong>
          </div>
          <div className="px-3 py-1 rounded-lg bg-purple-950/90 border border-purple-500/40 text-purple-300">
            Inferred Dark Matter Mass: <strong>85% (Spherical Halo)</strong>
          </div>
        </div>

        {/* Bottom Rotation Curve Data Box */}
        <div className="relative z-10 p-4 rounded-xl bg-slate-950/90 border border-white/10 space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-amber-400 font-bold uppercase">Galactic Rotation Curve Diagnostics:</span>
            <span className="text-slate-400">Target: Vera Rubin Observation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-rose-500/30">
              <span className="text-rose-400 font-bold block">EXPECTED NEWTONIAN CURVE:</span>
              <p className="text-slate-300 font-sans text-xs">Velocities drop off at outer disk radii (v ∝ 1/√r).</p>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-emerald-500/30">
              <span className="text-emerald-400 font-bold block">OBSERVED FLAT ROTATION CURVE:</span>
              <p className="text-slate-300 font-sans text-xs">Outer stars move as fast as inner stars (v ≈ constant).</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
