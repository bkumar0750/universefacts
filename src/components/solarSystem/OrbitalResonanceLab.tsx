import React, { useState } from 'react';
import { Orbit } from 'lucide-react';

export const OrbitalResonanceLab: React.FC = () => {
  const [simSpeed, setSimSpeed] = useState<number>(1);
  const [activeResonance, setActiveResonance] = useState<'pluto-neptune' | 'laplace' | 'kirkwood'>('pluto-neptune');

  return (
    <section id="resonance-lab" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-8 shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Orbit className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>INTERACTIVE SIMULATION · CELESTIAL MECHANICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white mt-1">
            ORBITAL RESONANCE LABORATORY
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1 max-w-3xl">
            Discover why orbiting bodies lock into simple integer orbital period ratios and how resonance prevents collisions or ejects asteroids.
          </p>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-500 font-bold">Sim Speed:</span>
          {[1, 10, 100, 1000].map((spd) => (
            <button
              key={spd}
              onClick={() => setSimSpeed(spd)}
              className={`px-3 py-1 rounded-xl font-bold border transition-all ${
                simSpeed === spd
                  ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 border-cyan-600 font-extrabold'
                  : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
              }`}
            >
              {spd}×
            </button>
          ))}
        </div>
      </div>

      {/* Resonance Selection Tabs */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        <button
          onClick={() => setActiveResonance('pluto-neptune')}
          className={`px-4 py-2 rounded-xl uppercase font-bold border transition-all ${
            activeResonance === 'pluto-neptune'
              ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-slate-950 border-purple-600'
              : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
          }`}
        >
          1. Pluto ↔ Neptune (3:2 Resonance)
        </button>

        <button
          onClick={() => setActiveResonance('laplace')}
          className={`px-4 py-2 rounded-xl uppercase font-bold border transition-all ${
            activeResonance === 'laplace'
              ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-slate-950 border-purple-600'
              : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
          }`}
        >
          2. Io ↔ Europa ↔ Ganymede (1:2:4 Laplace)
        </button>

        <button
          onClick={() => setActiveResonance('kirkwood')}
          className={`px-4 py-2 rounded-xl uppercase font-bold border transition-all ${
            activeResonance === 'kirkwood'
              ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-slate-950 border-purple-600'
              : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
          }`}
        >
          3. Asteroid Belt Kirkwood Gaps
        </button>
      </div>

      {/* Resonance Card Details */}
      <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-slate-950 text-white space-y-4 shadow-xl font-mono text-xs">
        {activeResonance === 'pluto-neptune' && (
          <div className="space-y-2">
            <span className="text-purple-400 font-bold uppercase text-[10px] block">PLUTO & NEPTUNE 3:2 ORBITAL LOCK</span>
            <h3 className="text-xl font-display font-bold text-white">Why Pluto and Neptune Never Collide</h3>
            <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
              Pluto orbit crosses inside Neptune orbit for 20 years during every orbit. However, for every <strong>3 orbits Neptune completes (495 years)</strong> around the Sun, <strong>Pluto completes exactly 2 orbits (496 years)</strong>. This 3:2 mean-motion resonance ensures Pluto is always at aphelion or far above/below Neptune orbital plane when crossing.
            </p>
          </div>
        )}

        {activeResonance === 'laplace' && (
          <div className="space-y-2">
            <span className="text-emerald-400 font-bold uppercase text-[10px] block">JUPITER MOONS LAPLACE RESONANCE</span>
            <h3 className="text-xl font-display font-bold text-white">1:2:4 Orbital Resonance Powers Volcanism & Oceans</h3>
            <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
              For every <strong>1 orbit Ganymede completes</strong>, <strong>Europa completes 2 orbits</strong>, and <strong>Io completes 4 orbits</strong>! This periodic gravitational alignment flexes Io interior to produce extreme volcanism and warms Europa subsurface ocean.
            </p>
          </div>
        )}

        {activeResonance === 'kirkwood' && (
          <div className="space-y-2">
            <span className="text-amber-400 font-bold uppercase text-[10px] block">JUPITER GRAVITATIONAL CLEARING</span>
            <h3 className="text-xl font-display font-bold text-white">Kirkwood Gaps in the Asteroid Belt</h3>
            <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
              Jupiter immense gravity creates empty zones ("gaps") in the Main Asteroid Belt at orbital period ratios of 3:1, 5:2, 7:3, and 2:1. Asteroids entering these resonant orbits receive repeated gravitational tugs that fling them out into Near-Earth space!
            </p>
          </div>
        )}
      </div>

    </section>
  );
};
