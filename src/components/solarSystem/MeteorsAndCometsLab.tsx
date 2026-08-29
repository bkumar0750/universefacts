import React, { useState } from 'react';
import { Flame } from 'lucide-react';

export const MeteorsAndCometsLab: React.FC = () => {
  const [activeMeteorStage, setActiveMeteorStage] = useState<'meteoroid' | 'meteor' | 'meteorite'>('meteor');
  const [selectedRingPlanet, setSelectedRingPlanet] = useState<'saturn' | 'jupiter' | 'uranus' | 'neptune'>('saturn');

  const meteorShowers = [
    { name: 'Perseids', peak: 'August 12–13', parent: 'Comet 109P/Swift-Tuttle', rate: '50–100 meteors/hr' },
    { name: 'Geminids', peak: 'December 13–14', parent: 'Asteroid 3200 Phaethon', rate: '120 meteors/hr' },
    { name: 'Leonids', peak: 'November 17–18', parent: 'Comet 55P/Tempel-Tuttle', rate: '15 meteors/hr (Storms up to 1,000/hr)' },
    { name: 'Orionids', peak: 'October 21–22', parent: 'Halley\'s Comet (1P/Halley)', rate: '20 meteors/hr' }
  ];

  return (
    <section id="meteors-and-comets" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-12 shadow-xl">
      
      {/* 🌠 1. METEOROID → METEOR → METEORITE ANIMATED PIPELINE */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-800 dark:text-amber-300">
            <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>ATMOSPHERIC RE-ENTRY SCIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            WHAT IS FALLING THROUGH SPACE?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          
          <div
            onClick={() => setActiveMeteorStage('meteoroid')}
            className={`glass-panel p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMeteorStage === 'meteoroid' ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80'
            }`}
          >
            <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold uppercase block">STAGE 1 · IN OPEN SPACE</span>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mt-1">1. Meteoroid</h3>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-300 mt-2">
              A small rocky or metallic body traveling through interplanetary space, ranging in size from small grains to one-meter-wide boulders.
            </p>
          </div>

          <div
            onClick={() => setActiveMeteorStage('meteor')}
            className={`glass-panel p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMeteorStage === 'meteor' ? 'border-amber-500 bg-amber-500/10' : 'border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80'
            }`}
          >
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase block">STAGE 2 · ATMOSPHERIC ENTRY</span>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mt-1">2. Meteor ("Shooting Star")</h3>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-300 mt-2">
              The streak of light produced when a meteoroid enters Earth atmosphere at 11 to 72 km/s, heating to glowing ram-pressure plasma.
            </p>
          </div>

          <div
            onClick={() => setActiveMeteorStage('meteorite')}
            className={`glass-panel p-6 rounded-2xl border cursor-pointer transition-all ${
              activeMeteorStage === 'meteorite' ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80'
            }`}
          >
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase block">STAGE 3 · GROUND SURVIVOR</span>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mt-1">3. Meteorite</h3>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-300 mt-2">
              Any fragment of a meteoroid that survives atmospheric transit and strikes Earth ground intact. Classified as Stony, Iron, or Stony-Iron.
            </p>
          </div>

        </div>
      </div>

      {/* 🌠 2. ANNUAL METEOR SHOWERS CALENDAR */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/80 space-y-4">
        <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white">
          Annual Meteor Showers (Earth Crossing Dust Trails)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          {meteorShowers.map((ms) => (
            <div key={ms.name} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-amber-600 dark:text-amber-400 font-bold uppercase text-[10px] block">{ms.name}</span>
              <div className="text-slate-900 dark:text-white font-bold">{ms.peak}</div>
              <p className="text-[11px] font-sans text-slate-600 dark:text-slate-400">Parent: {ms.parent}</p>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block font-bold">{ms.rate}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🧊 3. COMET VS ASTEROID COMPREHENSIVE MATRIX */}
      <div className="space-y-4 font-mono text-xs">
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
          Comet vs Asteroid Comparison Matrix
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 text-[10px] uppercase">
                <th className="p-3">Property</th>
                <th className="p-3 text-cyan-600 dark:text-cyan-400 font-bold">Comet</th>
                <th className="p-3 text-amber-600 dark:text-amber-400 font-bold">Asteroid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-white">Primary Composition</td>
                <td className="p-3">Volatile Ices (H₂O, CO, CO₂), Dust, Silicates</td>
                <td className="p-3">Silicate Rock, Metals (Iron, Nickel), Carbon</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-white">Typical Location</td>
                <td className="p-3">Kuiper Belt & Oort Cloud</td>
                <td className="p-3">Main Belt (2.2–3.2 AU) & Near-Earth space</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-white">Coma & Tail Formation</td>
                <td className="p-3 font-bold text-cyan-600 dark:text-cyan-300">Yes (Sublimates near Sun)</td>
                <td className="p-3 text-slate-400">Generally inactive (No tail)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-slate-900 dark:text-white">Orbital Eccentricity</td>
                <td className="p-3 font-bold text-emerald-600 dark:text-emerald-300">Highly Elliptical / Parabolic</td>
                <td className="p-3">Mostly circular / moderate ellipse</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 🪐 4. PLANETARY RING OBSERVATORY */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 bg-slate-950 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase block">
              NOT JUST SATURN · COMPARATIVE RING SYSTEMS
            </span>
            <h3 className="text-2xl font-display font-black text-white">
              Planetary Ring Observatory
            </h3>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            {(['saturn', 'jupiter', 'uranus', 'neptune'] as const).map((rp) => (
              <button
                key={rp}
                onClick={() => setSelectedRingPlanet(rp)}
                className={`px-3 py-1.5 rounded-xl uppercase font-bold border transition-all ${
                  selectedRingPlanet === rp
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                    : 'bg-white/10 text-slate-300 border-white/10'
                }`}
              >
                {rp}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/5 p-5 rounded-xl border border-white/10 font-mono text-xs space-y-2">
          {selectedRingPlanet === 'saturn' && (
            <p className="font-sans text-slate-300 text-sm">
              <strong>SATURN RINGS:</strong> The most expansive ring system in the Solar System, spanning 282,000 km across but averaging only 10 meters thick! Consists of 99% pure water ice particles ranging from dust grains to house-sized icebergs. Features the 4,800-km Cassini Division gap caused by 2:1 orbital resonance with moon Mimas.
            </p>
          )}
          {selectedRingPlanet === 'jupiter' && (
            <p className="font-sans text-slate-300 text-sm">
              <strong>JUPITER RINGS:</strong> Faint, dark ring system discovered by Voyager 1 in 1979. Composed of fine dark dust grains knocked off inner moons Metis, Adrastea, Amalthea, and Thebe by micrometeorite impacts.
            </p>
          )}
          {selectedRingPlanet === 'uranus' && (
            <p className="font-sans text-slate-300 text-sm">
              <strong>URANUS RINGS:</strong> 13 distinct dark rings containing boulder-sized dark organic particles. Discovered in 1977 during a stellar occultation. Kept narrow by shepherd moons Cordelia and Ophelia.
            </p>
          )}
          {selectedRingPlanet === 'neptune' && (
            <p className="font-sans text-slate-300 text-sm">
              <strong>NEPTUNE RINGS:</strong> 5 faint rings with prominent bright "ring arcs" (Courage, Liberté, Egalité, Fraternité) in the Adams ring, maintained by resonant gravity with moon Galatea.
            </p>
          )}
        </div>
      </div>

    </section>
  );
};
