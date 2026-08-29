import React, { useState } from 'react';
import { Shield, Sparkles, AlertTriangle } from 'lucide-react';
import { INTERSTELLAR_VISITORS, NEAR_EARTH_OBJECTS } from '../../data/solarSystemExtendedData';

export const InterstellarAndNEOExplorer: React.FC = () => {
  const [dartImpactMode, setDartImpactMode] = useState<'before' | 'impact' | 'after'>('before');
  const [selectedAsteroidFamily, setSelectedAsteroidFamily] = useState<string>('Main Belt');

  const asteroidFamilies = [
    { name: 'Main Belt', desc: 'Between Mars and Jupiter (2.2–3.2 AU). Includes Ceres, Vesta, Pallas.' },
    { name: 'Near-Earth Objects (NEOs)', desc: 'Orbits that pass near Earth (within 1.3 AU of Sun).' },
    { name: 'Trojan Asteroids', desc: 'Gravitationally locked in Jupiter L4 & L5 Lagrange points.' },
    { name: 'Potentially Hazardous (PHAs)', desc: 'NEOs larger than 140m that approach within 7.5 million km of Earth.' },
    { name: 'Metal-Rich Bodies (M-type)', desc: 'Metallic iron-nickel cores of shattered protoplanets like 16 Psyche.' },
    { name: 'Carbonaceous Bodies (C-type)', desc: 'Dark carbon-rich primitive asteroids like Bennu and Ryugu.' }
  ];

  return (
    <section id="interstellar-and-neo" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-12 shadow-xl">
      
      {/* ☄️ 1. INTERSTELLAR VISITORS ("NOT BORN HERE") */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 text-purple-800 dark:text-purple-300">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>VISITORS FROM ANOTHER STAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            INTERSTELLAR OBJECTS TRAVERSING OUR SYSTEM
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            Objects on hyperbolic trajectories with speeds exceeding Solar System escape velocity (e &gt; 1). They were not born in our Solar System!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTERSTELLAR_VISITORS.map((obj) => (
            <div key={obj.id} className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-slate-950 text-white space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest bg-purple-950 px-2.5 py-0.5 rounded-full border border-purple-500/40">
                    NOT BORN HERE ✦ INTERSTELLAR
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">{obj.name}</h3>
                </div>
                <span className="text-xs font-mono text-cyan-300">{obj.discoveryDate}</span>
              </div>

              <p className="text-xs font-sans text-slate-300 leading-relaxed">{obj.description}</p>

              <div className="grid grid-cols-3 gap-2 font-mono text-[10px] bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                <div>Origin: <strong className="block text-purple-300">{obj.origin}</strong></div>
                <div>Eccentricity: <strong className="block text-emerald-400">e = {obj.eccentricity}</strong></div>
                <div>Speed: <strong className="block text-amber-400">{obj.speedKMperSec} km/s</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🪨 2. NEAR-EARTH OBJECTS (NEOs) CLOSE APPROACH VISUALIZER */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-800 dark:text-amber-300">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>PLANETARY DEFENSE MONITOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            NEAR-EARTH OBJECTS & CLOSE APPROACHES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {NEAR_EARTH_OBJECTS.map((neo) => (
            <div key={neo.id} className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  {neo.category}
                </span>
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400">{neo.closeApproachDate}</span>
              </div>

              <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">{neo.name}</h4>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-300 leading-snug">{neo.scientificNotes}</p>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 gap-2 text-[10px]">
                <div>Miss Dist: <strong className="block text-slate-900 dark:text-white">{neo.missDistanceLD} Lunar Dist ({neo.missDistanceKM.toLocaleString()} km)</strong></div>
                <div>Size: <strong className="block text-cyan-600 dark:text-cyan-300">{neo.diameterMeters} meters</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🛡️ 3. PLANETARY DEFENSE — NASA DART IMPACT SIMULATION */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 bg-slate-950 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>NASA DART MISSION · SEPT 26, 2022</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
              KINETIC IMPACTOR ASTEROID DEFLECTION
            </h3>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            {(['before', 'impact', 'after'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setDartImpactMode(m)}
                className={`px-3 py-1.5 rounded-xl uppercase font-bold border transition-all ${
                  dartImpactMode === m
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                    : 'bg-white/10 text-slate-300 border-white/10'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Simulation Card */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 font-mono text-xs space-y-3">
          {dartImpactMode === 'before' && (
            <p className="text-slate-300 font-sans text-sm">
              <strong>BEFORE IMPACT:</strong> Dimorphos (160m moonlet) orbited binary asteroid Didymos once every 11 hours 55 minutes.
            </p>
          )}
          {dartImpactMode === 'impact' && (
            <p className="text-amber-300 font-sans text-sm">
              <strong>IMPACT EVENT:</strong> NASA 570-kg DART spacecraft intentionally collided with Dimorphos at 22,500 km/h (6.2 km/s), blasting thousands of tons of rock debris into space.
            </p>
          )}
          {dartImpactMode === 'after' && (
            <p className="text-emerald-300 font-sans text-sm">
              <strong>AFTER IMPACT SUCCESS:</strong> The kinetic impact shortened Dimorphos orbit around Didymos by 33 minutes (from 11h 55m to 11h 22m)—proving humanity can deflect a dangerous asteroid if discovered early!
            </p>
          )}
        </div>
      </div>

      {/* 🪨 4. ASTEROID FAMILY TREE & 16 PSYCHE METAL WORLD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Family Tree */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-4">
          <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white">
            Asteroid Classification & Taxonomy
          </h4>

          <div className="space-y-2 font-mono text-xs">
            {asteroidFamilies.map((fam) => (
              <div
                key={fam.name}
                onClick={() => setSelectedAsteroidFamily(fam.name)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedAsteroidFamily === fam.name
                    ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-700 dark:text-cyan-300 font-bold'
                    : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div>{fam.name}</div>
                <p className="font-sans text-[11px] font-normal text-slate-500 dark:text-slate-400 mt-0.5">{fam.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 16 Psyche Feature Card */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
              16 PSYCHE · THE METAL WORLD
            </span>
            <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              An Exposed Metallic Protoplanet Core
            </h4>
            <p className="text-xs font-sans text-slate-600 dark:text-slate-300 leading-relaxed">
              Unlike most icy or rocky asteroids, 220-km 16 Psyche is believed to consist largely of metallic iron and nickel—the exposed core of a early protoplanet destroyed by violent collisions.
            </p>

            <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-xl font-mono text-[10px] space-y-1">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold block uppercase">NASA PSYCHE MISSION TIMELINE:</span>
              <div>Launch: Oct 2023 · Deep Space Cruise · Target Arrival: August 2029</div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-500">
            Source: NASA Psyche Mission (JPL / ASU)
          </div>
        </div>

      </div>

    </section>
  );
};
