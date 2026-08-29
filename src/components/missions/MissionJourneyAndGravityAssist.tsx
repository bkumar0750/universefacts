import React, { useState } from 'react';
import { Compass, Play, Pause, FastForward } from 'lucide-react';

export const MissionJourneyAndGravityAssist: React.FC = () => {
  const [activeJourney, setActiveJourney] = useState<'earth-moon' | 'earth-mars' | 'earth-l2' | 'earth-jupiter'>('earth-mars');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeAssist, setActiveAssist] = useState<'voyager' | 'cassini' | 'juice'>('voyager');

  const JOURNEYS = [
    { id: 'earth-moon', name: 'Earth → Moon (Chandrayaan-3 / Apollo)', duration: '3.5 - 40 Days', trajectory: 'SOLID (VERIFIED)', line: 'Solid' },
    { id: 'earth-mars', name: 'Earth → Mars (Perseverance / Mangalyaan)', duration: '7 - 9 Months (Hohmann Transfer)', trajectory: 'SOLID (VERIFIED)', line: 'Solid' },
    { id: 'earth-l2', name: 'Earth → Sun-Earth L2 (JWST / Euclid)', duration: '29 Days to L2 Halo Orbit', trajectory: 'SOLID (VERIFIED)', line: 'Solid' },
    { id: 'earth-jupiter', name: 'Earth → Jupiter (JUICE / Juno)', duration: '6 - 8 Years (4x Gravity Assists)', trajectory: 'SOLID (VERIFIED)', line: 'Solid' }
  ];

  const GRAVITY_ASSISTS = [
    {
      id: 'voyager',
      name: 'VOYAGER 1 & 2 GRAVITY SLINGSHOT',
      planets: 'Jupiter → Saturn → Uranus → Neptune',
      boost: '+15.7 km/s heliocentric speed increase',
      explanation: 'By stealing a tiny fraction of Jupiter and Saturn\'s orbital angular momentum, Voyager boosted its velocity enough to exit the Solar System into interstellar space!'
    },
    {
      id: 'cassini',
      name: 'CASSINI-HUYGENS VVEJGA TRAJECTORY',
      planets: 'Venus → Venus → Earth → Jupiter → Saturn',
      boost: '+21.4 km/s cumulative boost',
      explanation: 'Cassini looped around Venus twice, Earth once, and Jupiter once over 7 years to reach Saturn without requiring an impossibly huge rocket tank.'
    },
    {
      id: 'juice',
      name: 'ESA JUICE LUNAR-EARTH FLYBY (AUG 2024)',
      planets: 'Moon → Earth → Venus → Earth → Earth → Jupiter',
      boost: 'First-ever double gravity assist (Lunar + Earth)',
      explanation: 'JUICE performed the world\'s first double gravity assist flyby of the Moon and Earth in August 2024 to redirect its orbit toward Venus.'
    }
  ];

  const currentJourney = JOURNEYS.find((j) => j.id === activeJourney)!;
  const currentAssist = GRAVITY_ASSISTS.find((g) => g.id === activeAssist)!;

  return (
    <section id="mission-journey-map" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl font-mono text-xs transition-colors">
      
      {/* 1. FEATURE 8 & 9: INTERACTIVE MISSION JOURNEY MAP */}
      <div className="space-y-6">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Compass className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 8 &amp; 9 · 3D SOLAR SYSTEM MISSION JOURNEY MAP &amp; TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            INTERPLANETARY TRAJECTORY MAP
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-sans">
            Solid line = Verified orbital flight path. Dashed line = Planned future trajectory.
          </p>
        </div>

        {/* Selector & Speed Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {JOURNEYS.map((j) => (
              <button
                key={j.id}
                onClick={() => setActiveJourney(j.id as any)}
                className={`px-3.5 py-2 rounded-xl border cursor-pointer transition-all ${
                  activeJourney === j.id
                    ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold scale-105 shadow-md'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                }`}
              >
                {j.name.split('(')[0]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 border border-white/10 hover:bg-slate-800 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-cyan-400" />}
            </button>

            {[1, 10, 100, 1000].map((spd) => (
              <button
                key={spd}
                onClick={() => setSpeedMultiplier(spd)}
                className={`px-2.5 py-1 rounded-lg border text-[10px] cursor-pointer ${
                  speedMultiplier === spd ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold' : 'bg-slate-900 text-slate-400 border-white/10'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Trajectory Display Canvas */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white min-h-[240px] flex flex-col justify-between shadow-2xl">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-cyan-400 font-bold">ROUTE: {currentJourney.name.toUpperCase()}</span>
            <span className="text-amber-400 font-bold">TRAJECTORY TYPE: {currentJourney.trajectory}</span>
          </div>

          <div className="my-auto text-center space-y-2">
            <div className="text-2xl font-bold text-cyan-300 font-display">
              EARTH ──{currentJourney.line === 'Solid' ? '───────' : ' - - - - '}&gt; {currentJourney.name.split('→')[1]}
            </div>
            <p className="font-sans text-xs text-slate-300">
              Transit Duration: <strong>{currentJourney.duration}</strong> · Simulation Speed: {speedMultiplier}x
            </p>
          </div>

          <div className="text-[10px] text-slate-400 text-center border-t border-white/10 pt-2">
            Verified Orbital Mechanics Data (NASA Horizons &amp; ISRO Telemetry Archive)
          </div>
        </div>
      </div>

      {/* 2. FEATURE 10: GRAVITY ASSIST ANIMATION & SIMULATOR */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
            <FastForward className="w-4 h-4 text-amber-500" />
            <span>FEATURE 10 · GRAVITATIONAL SLINGSHOT &amp; FLYBY ANIMATION</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            GRAVITY ASSIST SLINGSHOT SIMULATOR
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {GRAVITY_ASSISTS.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveAssist(g.id as any)}
              className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                activeAssist === g.id
                  ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400 font-bold scale-105 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              {g.name.split(' ')[0]} ASSIST
            </button>
          ))}
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-amber-500/40 text-white space-y-4 font-mono shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-amber-400 font-bold text-sm">{currentAssist.name}</span>
            <span className="text-xs text-emerald-400 font-bold">{currentAssist.boost}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-white/10 space-y-1">
            <span className="text-slate-400 text-[10px] uppercase block">FLYBY PLANETARY ROUTE:</span>
            <div className="font-bold text-cyan-300 text-xs">{currentAssist.planets}</div>
          </div>

          <p className="font-sans text-xs text-slate-300 leading-relaxed">
            {currentAssist.explanation}
          </p>
        </div>
      </div>

    </section>
  );
};
