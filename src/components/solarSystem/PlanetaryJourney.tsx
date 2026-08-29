import React, { useState } from 'react';
import { Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { WORLDS_COMPARISON_DATA } from '../../data/solarSystemData';

export const PlanetaryJourney: React.FC = () => {
  const navigate = useNavigate();

  const [activePlanetId, setActivePlanetId] = useState<string>('mercury');
  const [canyonScaleUnit, setCanyonScaleUnit] = useState<'usa' | 'europe'>('usa');

  const planets = WORLDS_COMPARISON_DATA.filter(
    (w) => w.category === 'Terrestrial Planet' || w.category === 'Gas Giant' || w.category === 'Ice Giant'
  );

  const activePlanet = planets.find((p) => p.id === activePlanetId) || planets[0];

  return (
    <section id="planetary-journey" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-8 shadow-xl">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>THE 8 MAJOR WORLDS · HORIZONTAL PLANETARY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white mt-1">
            THE PLANETARY JOURNEY
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            Select any planet below to launch deep-space reconnaissance telemetry, surface geology, atmosphere, rings, and moon systems.
          </p>
        </div>
      </div>

      {/* Planet Selection Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 font-mono text-xs">
        {planets.map((planet) => (
          <button
            key={planet.id}
            onClick={() => setActivePlanetId(planet.id)}
            className={`p-3 rounded-2xl text-left transition-all border ${
              activePlanetId === planet.id
                ? 'bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border-cyan-600 dark:border-cyan-500/60 font-bold shadow-md'
                : 'bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-cyan-500/40'
            }`}
          >
            <span className="text-[10px] block opacity-75">{planet.category.split(' ')[0]}</span>
            <span className="font-bold text-sm block truncate">{planet.name}</span>
          </button>
        ))}
      </div>

      {/* Active Planet Showcase Card */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/30 bg-slate-50 dark:bg-slate-950/90 text-slate-900 dark:text-white space-y-6 shadow-2xl animate-fade-in-up">
        
        {/* Top Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-slate-200 dark:border-white/10 pb-6">
          
          {/* Planet Image & Tag */}
          <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-300 dark:border-white/10 group shadow-lg">
            <img
              src={activePlanet.imageUrl}
              alt={activePlanet.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <span className="absolute top-3 left-3 text-xs font-mono font-bold text-cyan-300 bg-slate-950/90 px-3 py-1 rounded-full border border-cyan-500/30">
              {activePlanet.category}
            </span>
            <span className="absolute bottom-3 left-3 right-3 text-[10px] font-mono text-slate-300 truncate">
              📷 {activePlanet.imageCaption}
            </span>
          </div>

          {/* Title & Core Copy */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-bold tracking-widest">
                PLANETARY TELEMETRY DOSSIER
              </span>
              <span className="text-xs font-mono text-amber-700 dark:text-amber-300 font-extrabold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                Moons: {activePlanet.moonCount}
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white leading-tight">
              {activePlanet.name}
            </h3>

            {/* Custom WOW Highlights for Specific Planets */}
            {activePlanet.id === 'mercury' && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-mono font-bold leading-relaxed">
                🚀 "THE FASTEST WORLD": A year on Mercury lasts only 88 Earth days, but a sunrise-to-sunset day lasts 176 Earth days! Permanently shadowed polar craters harbor water ice.
              </div>
            )}

            {activePlanet.id === 'venus' && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-300 text-xs font-mono font-bold leading-relaxed">
                🔥 "EARTH'S EVIL TWIN": Surface temperature of ~465°C hot enough to melt lead due to runaway greenhouse effect. Rotates backward—a day on Venus is longer than its year!
              </div>
            )}

            {activePlanet.id === 'earth' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold leading-relaxed flex items-center justify-between gap-2">
                <span>🌍 "THE ONLY WORLD WE KNOW WITH LIFE": 71% ocean surface, active plate tectonics, oxygen atmosphere.</span>
                <button
                  onClick={() => navigate('/earth')}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shrink-0 hover:bg-emerald-500 transition-all"
                >
                  EXPLORE EARTH PAGE →
                </button>
              </div>
            )}

            {activePlanet.id === 'mars' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-mono font-bold leading-relaxed">
                  🌋 "THE PLANET THAT LOST ITS WARMER PAST": Home to Olympus Mons (largest volcano in Solar System, 21.9 km high) and Valles Marineris canyon.
                </div>

                {/* Valles Marineris Canyon Scale Interactive Comparison */}
                <div className="bg-slate-100 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                    <span className="font-bold text-cyan-700 dark:text-cyan-400">Valles Marineris Canyon Scale Comparison:</span>
                    <button
                      onClick={() => setCanyonScaleUnit(canyonScaleUnit === 'usa' ? 'europe' : 'usa')}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-[10px] font-bold"
                    >
                      Compare vs: {canyonScaleUnit === 'usa' ? 'USA (New York to LA)' : 'Europe'}
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans">
                    {canyonScaleUnit === 'usa'
                      ? 'At 4,000 km long, Valles Marineris would stretch all the way from New York City to Los Angeles across the United States!'
                      : 'At 4,000 km long, Valles Marineris would span from Portugal all the way past Moscow across continental Europe!'}
                  </p>
                </div>
              </div>
            )}

            {activePlanet.id === 'jupiter' && (
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-900 dark:text-purple-300 text-xs font-mono font-bold leading-relaxed">
                🪐 "THE GIANT": More massive than all other planets combined. Great Red Spot is a persistent storm 1.3x Earth diameter spinning at 432 km/h.
              </div>
            )}

            {activePlanet.id === 'saturn' && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs font-mono font-bold leading-relaxed">
                💍 "THE RINGED WORLD": Average density (0.687 g/cm³) is less than water! Ring system spans 282,000 km across, but main rings are only ~10 meters thick.
              </div>
            )}

            {activePlanet.id === 'uranus' && (
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-900 dark:text-cyan-300 text-xs font-mono font-bold leading-relaxed">
                🌀 "THE SIDEWAYS PLANET": Rotates at an extreme 97.77° axial tilt. Poles experience 42 years of daylight followed by 42 years of pitch black darkness.
              </div>
            )}

            {activePlanet.id === 'neptune' && (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-900 dark:text-blue-300 text-xs font-mono font-bold leading-relaxed">
                💨 "THE WINDIEST WORLD": Supersonic atmospheric wind currents exceed 2,100 km/h (580 m/s). Moon Triton orbits backward in a retrograde orbit.
              </div>
            )}

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs pt-2">
              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-white/10">
                <span className="text-slate-500 text-[10px] block">EQUATORIAL DIAMETER</span>
                <strong className="text-slate-900 dark:text-white font-bold">{activePlanet.diameterFormatted}</strong>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-white/10">
                <span className="text-slate-500 text-[10px] block">SURFACE GRAVITY</span>
                <strong className="text-cyan-700 dark:text-cyan-300 font-bold">{activePlanet.gravityMetersPerSecSq} m/s² ({activePlanet.gravityRelativeEarth}g)</strong>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-white/10">
                <span className="text-slate-500 text-[10px] block">SUN DISTANCE</span>
                <strong className="text-amber-700 dark:text-amber-300 font-bold">{activePlanet.sunDistanceFormatted}</strong>
              </div>

              <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-white/10">
                <span className="text-slate-500 text-[10px] block">ORBITAL PERIOD</span>
                <strong className="text-emerald-700 dark:text-emerald-300 font-bold">{activePlanet.orbitalPeriodFormatted}</strong>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Data Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-2">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider block">ATMOSPHERIC COMPOSITION</span>
            <p className="text-slate-800 dark:text-slate-200 font-sans leading-relaxed">{activePlanet.atmosphereGases}</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-2">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider block">GEOLOGY & SURFACE INTERIOR</span>
            <p className="text-slate-800 dark:text-slate-200 font-sans leading-relaxed">{activePlanet.surfaceType}</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-2">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider block">KEY HISTORIC MISSIONS</span>
            <p className="text-slate-800 dark:text-slate-200 font-sans leading-relaxed">{activePlanet.notableMissions}</p>
          </div>
        </div>

      </div>

    </section>
  );
};
