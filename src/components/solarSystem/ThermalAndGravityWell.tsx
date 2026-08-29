import React, { useState } from 'react';
import { Thermometer } from 'lucide-react';

export const ThermalAndGravityWell: React.FC = () => {
  const [selectedLaunchWorld, setSelectedLaunchWorld] = useState<'earth' | 'moon' | 'mars' | 'jupiter'>('earth');

  const escapeVelocities = {
    earth: { vel: '11.2 km/s', gravity: '1.0g', note: 'Standard Earth orbital launch ($v_{esc} = \\sqrt{2GM/R}$)' },
    moon: { vel: '2.38 km/s', gravity: '0.166g', note: 'Requires only 21% of Earth escape velocity' },
    mars: { vel: '5.03 km/s', gravity: '0.38g', note: 'Easier to launch return vehicles back to Earth' },
    jupiter: { vel: '59.5 km/s', gravity: '2.53g', note: 'Deepest planetary gravity well in the Solar System!' }
  };

  const thermalSteps = [
    { world: 'Sun Corona', temp: '1,000,000°C+', reason: 'Coronal heating nanoflares' },
    { world: 'Mercury', temp: '-180°C to +430°C', reason: 'No atmosphere to retain heat' },
    { world: 'Venus', temp: '+465°C', reason: 'Runaway CO₂ greenhouse effect' },
    { world: 'Earth', temp: '+15°C mean', reason: 'Balanced nitrogen-oxygen atmosphere' },
    { world: 'Jupiter', temp: '-110°C (1 bar)', reason: 'Internal gravitational Kelvin-Helmholtz heat' },
    { world: 'Neptune', temp: '-200°C', reason: 'Emits 2.6x more internal heat than receives from Sun' },
    { world: 'Kuiper Belt', temp: '-230°C', reason: 'Extreme distance (30–50 AU)' },
    { world: 'Oort Cloud', temp: '-268°C (5 K)', reason: 'Near absolute zero interstellar vacuum' }
  ];

  return (
    <section id="thermal-and-gravity" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-12 shadow-xl">
      
      {/* 🌡️ 1. TEMPERATURE JOURNEY */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/30 text-rose-800 dark:text-rose-300">
            <Thermometer className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>SOLAR SYSTEM THERMAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            FROM FIRE TO FREEZING DARKNESS
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            Temperature depends on distance, atmospheric greenhouse insulation, internal heat, and surface albedo. Farther does not always mean colder!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 font-mono text-xs">
          {thermalSteps.map((ts) => (
            <div key={ts.world} className="bg-slate-100 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-white/10 text-center space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-bold block truncate">{ts.world}</span>
              <div className="text-rose-600 dark:text-rose-400 font-bold text-xs">{ts.temp}</div>
              <span className="text-[9px] text-slate-400 block line-clamp-2">{ts.reason}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🧱 2. PLANETARY MATERIALS BREAKDOWN */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/80 space-y-4 font-mono text-xs">
        <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white">
          What Are Worlds Made Of? (Planetary Materials)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[10px] uppercase block">TERRESTRIAL PLANETS</span>
            <div className="text-slate-900 dark:text-white font-bold text-sm">Rock + Metal</div>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-400">Silicate mantle crust around dense iron-nickel core (Mercury, Venus, Earth, Mars).</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-amber-600 dark:text-amber-400 font-bold text-[10px] uppercase block">GAS GIANTS</span>
            <div className="text-slate-900 dark:text-white font-bold text-sm">Hydrogen + Helium</div>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-400">Vast gaseous envelopes transitioning into liquid metallic hydrogen (Jupiter, Saturn).</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-purple-600 dark:text-purple-400 font-bold text-[10px] uppercase block">ICE GIANTS</span>
            <div className="text-slate-900 dark:text-white font-bold text-sm">Water + Ammonia + Methane</div>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-400">Superheated dense fluid mantle of ices under extreme pressure (Uranus, Neptune).</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase block">KUIPER BELT WORLDS</span>
            <div className="text-slate-900 dark:text-white font-bold text-sm">Nitrogen + Methane Ice</div>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-400">Volatile frozen surface crusts over rocky cores (Pluto, Eris, Haumea, Makemake).</p>
          </div>
        </div>
      </div>

      {/* 🚀 3. GRAVITY WELL & ESCAPE VELOCITY SIMULATOR */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 bg-slate-950 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase block">
              GRAVITATIONAL INFLUENCE & ORBITAL LAUNCH
            </span>
            <h3 className="text-2xl font-display font-black text-white">
              GRAVITY WELL & ESCAPE VELOCITY SIMULATOR
            </h3>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            {(['earth', 'moon', 'mars', 'jupiter'] as const).map((w) => (
              <button
                key={w}
                onClick={() => setSelectedLaunchWorld(w)}
                className={`px-3 py-1.5 rounded-xl uppercase font-bold border transition-all ${
                  selectedLaunchWorld === w
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                    : 'bg-white/10 text-slate-300 border-white/10'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/5 p-5 rounded-xl border border-white/10 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-cyan-300 font-bold uppercase">{selectedLaunchWorld} Escape Velocity:</span>
            <span className="text-2xl font-extrabold text-emerald-400">{escapeVelocities[selectedLaunchWorld].vel}</span>
          </div>
          <p className="font-sans text-slate-300 text-xs">{escapeVelocities[selectedLaunchWorld].note}</p>
        </div>
      </div>

    </section>
  );
};
