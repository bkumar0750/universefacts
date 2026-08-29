import React, { useState } from 'react';
import { PieChart, Eye, Scale, HelpCircle } from 'lucide-react';

export const UniverseDarkMatterEnergyHubbleTension: React.FC = () => {
  const [lensingDistortion, setLensingDistortion] = useState<number>(3);

  const budget = [
    { name: 'Dark Energy (Λ)', pct: 68.3, color: '#06b6d4', desc: 'Repulsive pressure driving accelerated spatial expansion.' },
    { name: 'Cold Dark Matter (CDM)', pct: 26.8, color: '#8b5cf6', desc: 'Non-baryonic mass holding galaxies and clusters together.' },
    { name: 'Normal Atomic Matter', pct: 4.9, color: '#10b981', desc: 'All stars, planets, gas clouds, and living organisms.' }
  ];

  return (
    <section id="dark-matter-energy-hubble-tension" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
          <PieChart className="w-4 h-4 text-cyan-500" />
          <span>SECTION 25-32 &amp; 50-51 · THE INVISIBLE UNIVERSE &amp; HUBBLE TENSION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          DARK MATTER, DARK ENERGY &amp; HUBBLE TENSION
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Over <strong>95% of the cosmos consists of dark components</strong> whose fundamental physical composition remains unknown to science.
        </p>
      </div>

      {/* 1. Mass Energy Budget Distribution Bar */}
      <div className="space-y-4">
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <PieChart className="w-5 h-5 text-cyan-500" />
          <span>Cosmic Energy Budget (Planck Satellite Precision)</span>
        </h3>

        <div className="space-y-3 font-mono text-xs">
          <div className="w-full h-5 bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden flex border border-slate-300 dark:border-white/10">
            {budget.map((b) => (
              <div
                key={b.name}
                className="h-full transition-all duration-500 flex items-center justify-center text-[10px] text-slate-950 font-bold"
                style={{ width: `${b.pct}%`, backgroundColor: b.color }}
                title={`${b.name}: ${b.pct}%`}
              >
                {b.pct > 10 ? `${b.name} (${b.pct}%)` : `${b.pct}%`}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono space-y-1 text-center shadow-lg">
            <span className="font-bold text-sm text-white uppercase block">
              "WE DON'T KNOW WHAT 95% OF THE UNIVERSE IS MADE OF."
            </span>
            <p className="font-sans text-xs text-slate-300">
              We know what these components <em>do</em> gravitationally and cosmologically. We don't yet know exactly what dark matter and dark energy physically <em>are</em>.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Interactive Gravitational Lensing Simulator */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-purple-500" />
              <span>SEE THE UNIVERSE — THEN SEE WHAT GRAVITY SAYS IS THERE</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
              Drag slider to increase cluster mass and observe background galaxy stretching into Einstein arcs.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="text-slate-500">Lens Mass: {lensingDistortion}x</span>
            <input
              type="range"
              min={1}
              max={5}
              value={lensingDistortion}
              onChange={(e) => setLensingDistortion(parseInt(e.target.value))}
              className="h-2 bg-slate-200 dark:bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
          </div>
        </div>

        {/* Lensing Graphic Box */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-purple-500/40 text-white flex items-center justify-center min-h-[220px] relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-purple-950/40 to-slate-950 pointer-events-none" />
          <div className="relative z-10 text-center space-y-2 font-mono">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-purple-400 mx-auto flex items-center justify-center animate-spin-slow">
              <span className="text-[10px] text-purple-300 font-bold">DARK MATTER LENS</span>
            </div>
            <div
              className="text-cyan-300 font-bold transition-all duration-300 text-sm"
              style={{ letterSpacing: `${lensingDistortion * 4}px`, transform: `scaleX(${1 + lensingDistortion * 0.2})` }}
            >
              ( 🔴 BACKGROUND GALAXY STRETCHED INTO EINSTEIN RING ARC 🔴 )
            </div>
            <span className="text-[10px] text-slate-400 block font-sans">
              Gravitational lensing proves dark matter mass exists even when no visible stars are present.
            </span>
          </div>
        </div>
      </div>

      {/* 3. The Hubble Tension Lab: "THE UNIVERSE HAS A SPEED PROBLEM" */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-amber-500/40 text-white space-y-6 font-mono shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Scale className="w-6 h-6 text-amber-400" />
            <span className="font-bold text-xl text-amber-300">THE UNIVERSE HAS A SPEED PROBLEM (HUBBLE TENSION)</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
            STATUS: UNRESOLVED ❓
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Local Measurement */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/40 space-y-3 text-center">
            <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider block">LOCAL UNIVERSE MEASUREMENT</span>
            <div className="text-3xl font-extrabold text-cyan-300 font-display">~70 – 76 km/s/Mpc</div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Measured directly from Cepheids, Type Ia Supernovae, and TRGB stars observed by Hubble &amp; JWST.
            </p>
          </div>

          {/* CMB Early Measurement */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-purple-500/40 space-y-3 text-center">
            <span className="text-purple-400 font-bold text-xs uppercase tracking-wider block">EARLY UNIVERSE / CMB INFERENCE</span>
            <div className="text-3xl font-extrabold text-purple-300 font-display">~67 – 68 km/s/Mpc</div>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">
              Inferred from Planck satellite Cosmic Microwave Background radiation assuming standard ΛCDM model.
            </p>
          </div>

        </div>

        {/* Central Conflict Prompt Box */}
        <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-center space-y-2">
          <div className="text-lg font-bold text-amber-300 flex items-center justify-center gap-2">
            <span>WHY IS THERE A DISCREPANCY?</span>
            <HelpCircle className="w-5 h-5 text-amber-400 animate-bounce" />
          </div>
          <p className="font-sans text-xs text-slate-200 leading-relaxed max-w-2xl mx-auto">
            This 5-sigma discrepancy represents a real scientific disagreement. Because neither measurement technique has been invalidated, cosmologists suggest potential early dark energy, new physics, or modified gravity!
          </p>
        </div>

      </div>

    </section>
  );
};
