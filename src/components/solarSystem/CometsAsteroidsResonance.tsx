import React, { useState } from 'react';
import { Orbit } from 'lucide-react';

export const CometsAsteroidsResonance: React.FC = () => {
  const [asteroidDensityMode, setAsteroidDensityMode] = useState<'normal' | 'exaggerated' | 'trueScale'>('normal');

  // Interactive Gravity Slingshot Simulator State
  const [flybyPlanet, setFlybyPlanet] = useState<'jupiter' | 'saturn' | 'mars'>('jupiter');
  const [initialVel, setInitialVel] = useState<number>(14); // km/s
  const [flybyDistance] = useState<number>(300000); // km
  const [simulatedGain, setSimulatedGain] = useState<number>(18.4); // km/s gain

  const calculateSlingshot = (planet: string, vel: number, dist: number) => {
    let factor = 1.4;
    if (planet === 'jupiter') factor = 1.8;
    if (planet === 'saturn') factor = 1.5;
    if (planet === 'mars') factor = 1.1;

    const gain = Number((vel * factor * (500000 / dist)).toFixed(1));
    setSimulatedGain(gain);
  };

  return (
    <section id="small-bodies" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-8 shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Orbit className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>ASTEROIDS, COMETS & ORBITAL MECHANICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white mt-1">
            LEFTOVERS & GRAVITATIONAL ENGINES
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1 max-w-3xl">
            Explore the truth about the Main Asteroid Belt, Trojan Lagrange asteroids, comet tail physics, Pluto-Neptune orbital resonance, and gravity slingshot mechanics.
          </p>
        </div>
      </div>

      {/* ☄️ 1. MAIN ASTEROID BELT REAL DENSITY VISUALIZER */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">
              SCIENTIFIC MYTH BUSTER
            </span>
            <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white">
              The Main Asteroid Belt is Mostly Empty Space
            </h3>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setAsteroidDensityMode('normal')}
              className={`px-3 py-1.5 rounded-xl border ${
                asteroidDensityMode === 'normal'
                  ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              Normal View
            </button>
            <button
              onClick={() => setAsteroidDensityMode('exaggerated')}
              className={`px-3 py-1.5 rounded-xl border ${
                asteroidDensityMode === 'exaggerated'
                  ? 'bg-amber-600 dark:bg-amber-500 text-white dark:text-slate-950 font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              Sci-Fi Movie View
            </button>
            <button
              onClick={() => setAsteroidDensityMode('trueScale')}
              className={`px-3 py-1.5 rounded-xl border ${
                asteroidDensityMode === 'trueScale'
                  ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              True Scale View
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
          {asteroidDensityMode === 'normal' &&
            'The Main Asteroid Belt spans between 2.2 and 3.2 AU. Though it contains millions of rocks (including Ceres, Vesta, Pallas), the average distance between asteroids is 1 to 3 million kilometers!'}
          {asteroidDensityMode === 'exaggerated' &&
            'Sci-fi movies show packed fields of spinning boulders, but this is a myth! If asteroids were this close, gravitational collisions would have ground the belt to fine dust billions of years ago.'}
          {asteroidDensityMode === 'trueScale' &&
            'In true scientific scale, if you stood on asteroid Vesta, you could not see another asteroid with the naked eye! Spacecraft like Pioneer, Voyager, Galileo, Cassini, and Dawn flew right through without any risk of collision.'}
        </p>
      </div>

      {/* 🚀 2. TROJAN ASTEROIDS & LAGRANGE L4/L5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
          <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
            LAGRANGE POINT DYNAMICS
          </span>
          <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">
            Trojan Asteroids (Jupiter L4 & L5)
          </h4>
          <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
            Trojan asteroids occupy gravitationally stable pockets located 60° ahead of (L4) and 60° behind (L5) Jupiter along its orbital path. NASA <strong>Lucy mission</strong> launched in 2021 to perform the first reconnaissance flybys of these ancient planetesimals.
          </p>
        </div>

        {/* COMET TAIL PHYSICS CARD */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
          <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
            COMET PHYSICS LAWS
          </span>
          <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">
            Comet Tails Always Point Away From the Sun
          </h4>
          <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
            A comet tail does NOT trail behind its direction of motion! Solar wind particles and photon radiation pressure continuously push gas (bluish ion tail) and dust (white dust tail) directly away from the Sun, so a receding comet flies head-first into its own tail.
          </p>
        </div>

      </div>

      {/* 🔄 3. ORBITAL RESONANCE: PLUTO & NEPTUNE (2:3) */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
        <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/30">
          CELESTIAL MECHANICS
        </span>
        <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">
          Orbital Resonance: Pluto 2:3 Neptune
        </h4>
        <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
          Even though Pluto orbit crosses inside Neptune orbital distance, they can never collide! For every <strong>2 orbits Pluto completes</strong> around the Sun (496 years), <strong>Neptune completes exactly 3 orbits</strong> (495 years). This 3:2 gravitational resonance keeps Pluto safely far away from Neptune whenever Pluto crosses perihelion.
        </p>
      </div>

      {/* 🎯 4. INTERACTIVE GRAVITY SLINGSHOT SIMULATOR */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 bg-slate-950 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
              INTERACTIVE SPACECRAFT TRAJECTORY SIMULATOR
            </span>
            <h4 className="text-2xl font-display font-extrabold text-white">
              Gravity Slingshot Velocity Exchange Engine
            </h4>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30">
            Used by Voyager, Cassini, New Horizons & Juno
          </span>
        </div>

        <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
          A spacecraft can gain velocity and alter its trajectory without burning fuel by exchanging orbital energy during a close planetary flyby.
        </p>

        {/* Interactive Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          
          <div className="space-y-2">
            <label className="text-slate-300 font-bold block">Target Flyby Planet:</label>
            <div className="flex gap-2">
              {(['jupiter', 'saturn', 'mars'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setFlybyPlanet(p);
                    calculateSlingshot(p, initialVel, flybyDistance);
                  }}
                  className={`px-3 py-1.5 rounded-xl uppercase font-bold border transition-all ${
                    flybyPlanet === p
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                      : 'bg-white/10 text-slate-300 border-white/10 hover:bg-white/20'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-slate-300 font-bold block">Approach Velocity: {initialVel} km/s</label>
            <input
              type="range"
              min="8"
              max="25"
              step="1"
              value={initialVel}
              onChange={(e) => {
                const v = Number(e.target.value);
                setInitialVel(v);
                calculateSlingshot(flybyPlanet, v, flybyDistance);
              }}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/30 space-y-1">
            <span className="text-[10px] text-cyan-300 uppercase font-bold block">SIMULATED POST-FLYBY VELOCITY</span>
            <div className="text-2xl font-extrabold text-emerald-400">{simulatedGain} km/s</div>
            <span className="text-[10px] text-slate-400 block">+{(simulatedGain - initialVel).toFixed(1)} km/s gained from planetary gravity</span>
          </div>

        </div>

      </div>

    </section>
  );
};
