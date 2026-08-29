import React, { useState } from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

export const DarkMatterRotationLab: React.FC = () => {
  const [showDarkMatterHalo, setShowDarkMatterHalo] = useState<boolean>(true);
  const [lensingMass, setLensingMass] = useState<number>(50);

  return (
    <section id="dark-matter-lab" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#03071c] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-300">
            SECTIONS 40 - 42 · DARK MATTER & LENSING LAB
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Activity className="w-6 h-6 text-purple-400" />
            <span>THE INVISIBLE SKELETON — DARK MATTER & GRAVITATIONAL LENSING</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>LABEL: INFERRED / MODELLED</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
        Dark matter does not emit or reflect electromagnetic radiation. Its existence is inferred from <strong>galaxy rotation curves</strong> and <strong>gravitational lensing</strong> of background light.
      </p>

      {/* ROTATION CURVE GRAPH & SIMULATOR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Simulated SVG Graph */}
        <div className="lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-cyan-500/30 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-cyan-400 font-bold">Galaxy Rotation Curve (Orbital Speed vs Radius)</span>
            <button
              onClick={() => setShowDarkMatterHalo(!showDarkMatterHalo)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border transition-all cursor-pointer ${
                showDarkMatterHalo
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                  : 'bg-slate-900 text-slate-400 border-white/10'
              }`}
            >
              {showDarkMatterHalo ? 'TOGGLE: DARK MATTER HALO ON' : 'TOGGLE: VISIBLE MATTER ONLY'}
            </button>
          </div>

          {/* SVG Graph Plot */}
          <div className="relative w-full h-56 bg-[#010410] rounded-xl border border-white/10 p-4 flex items-center justify-center">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Axes */}
              <line x1="40" y1="170" x2="380" y2="170" stroke="#475569" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="170" stroke="#475569" strokeWidth="1.5" />
              
              {/* Axis Labels */}
              <text x="200" y="195" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle">Distance from Galactic Center (kpc)</text>
              <text x="15" y="100" fill="#94a3b8" fontSize="10" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 15,100)">Orbital Speed (km/s)</text>

              {/* Expected Keplerian Curve (Keplerian Dropoff) */}
              <path
                d="M 40 160 Q 90 40, 160 90 T 380 150"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />

              {/* Observed Flat Rotation Curve with DM */}
              {showDarkMatterHalo && (
                <path
                  d="M 40 160 Q 90 40, 160 50 T 380 50"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                />
              )}
            </svg>

            {/* Legend */}
            <div className="absolute top-3 right-3 bg-slate-900/90 p-2 rounded border border-white/10 text-[10px] font-mono space-y-1">
              <div className="flex items-center gap-1.5 text-rose-400">
                <span className="w-3 h-0.5 bg-rose-500 inline-block border-t border-dashed" />
                <span>Expected Newtonian Dropoff</span>
              </div>
              {showDarkMatterHalo && (
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-3 h-0.5 bg-cyan-400 inline-block" />
                  <span>Observed Flat Curve (DM Halo)</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-[11px] font-mono text-slate-400">
            Vera Rubin’s observations showed outer stars orbit at flat speeds (~220 km/s) rather than dropping off, proving the gravitational influence of invisible mass.
          </p>
        </div>

        {/* Right Gravitational Lensing Visualizer */}
        <div className="lg:col-span-5 glass-panel p-5 rounded-2xl border border-purple-500/30 space-y-4 bg-slate-950/80">
          <div>
            <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/30">
              GRAVITATIONAL LENSING
            </span>
            <h3 className="text-xl font-display font-bold text-white mt-2">WHEN A GALAXY BENDS LIGHT</h3>
            <p className="text-xs text-slate-300 font-sans mt-1">
              Massive cluster gravity bends light rays from background galaxies into Einstein rings and arcs.
            </p>
          </div>

          {/* Interactive Lensing Slider */}
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Cluster Mass Deflector:</span>
              <strong className="text-purple-300">{lensingMass} × 10¹⁴ M☉</strong>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={lensingMass}
              onChange={(e) => setLensingMass(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          {/* Lensing Graphic Box */}
          <div className="relative h-40 bg-[#010410] rounded-xl border border-purple-500/30 flex items-center justify-center overflow-hidden">
            {/* Deflector Core */}
            <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-400/50 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <div className="w-4 h-4 rounded-full bg-purple-300" />
            </div>

            {/* Einstein Arc distorted ring */}
            <div
              className="absolute rounded-full border-2 border-cyan-400/70 transition-all duration-300"
              style={{
                width: `${lensingMass * 2.2}px`,
                height: `${lensingMass * 2.2}px`,
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.4)'
              }}
            />
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            NASA's Frontier Fields program used gravitational lensing to zoom in on early universe galaxies.
          </div>
        </div>

      </div>

    </section>
  );
};
