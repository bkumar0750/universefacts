import React, { useState } from 'react';
import { Rocket, ExternalLink } from 'lucide-react';
import { SOLAR_SYSTEM_MISSIONS } from '../../data/solarSystemData';

export const SolarSystemMissions: React.FC = () => {
  const [selectedBoundary, setSelectedBoundary] = useState<'planets' | 'kuiper' | 'heliopause' | 'oort'>('heliopause');

  return (
    <section id="missions-section" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-8 shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Rocket className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>THE MACHINES THAT LEFT EARTH · MISSIONS & BOUNDARIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white mt-1">
            EXPLORATION MISSIONS & THE SYSTEM EDGE
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1 max-w-3xl">
            From the Voyager probes crossing the heliopause into interstellar space to NASA New Horizons, Cassini, and Europa Clipper.
          </p>
        </div>
      </div>

      {/* 🚀 HISTORIC SPACECRAFT TIMELINE GRID */}
      <div className="space-y-4">
        <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white">
          Active & Historic Solar System Reconnaissance Spacecraft
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLAR_SYSTEM_MISSIONS.map((m) => (
            <a
              key={m.id}
              href={m.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 hover:border-cyan-500/40 transition-all space-y-3 shadow-sm flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                    {m.agency}
                  </span>
                  <span className={`font-bold px-2 py-0.5 rounded-full border ${
                    m.status === 'Active' ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/30' : 'text-slate-500 bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/10'
                  }`}>
                    {m.status}
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {m.name}
                </h4>

                <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-snug">
                  {m.purpose}
                </p>

                <p className="text-[11px] font-sans text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/10 pt-2">
                  <strong>Major Discoveries:</strong> {m.majorDiscoveries}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Launch: {m.launchYear}</span>
                <span className="flex items-center gap-1 font-bold text-cyan-600 dark:text-cyan-400 group-hover:underline">
                  <span>NASA Page</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 📸 VOYAGER FAMILY PORTRAIT FEATURE CARD */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">
            HISTORICAL RECONSTRUCTION · VOYAGER 1 (FEB 14, 1990)
          </span>
          <span className="text-xs font-mono text-slate-400">Distance: 40 AU (6 Billion km)</span>
        </div>

        <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
          The Solar System "Family Portrait" & Pale Blue Dot
        </h4>
        <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
          Commanded by Carl Sagan, Voyager 1 turned its cameras around 40 AU from Earth and captured a mosaic of 60 frames capturing 6 planets (Sun, Venus, Earth, Jupiter, Saturn, Uranus, Neptune). Earth appears as a single pixel of light in a sunbeam—the famous "Pale Blue Dot".
        </p>
      </div>

      {/* ❓ 51. WHERE DOES THE SOLAR SYSTEM END? DEBATE SIMULATOR */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 bg-slate-950 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
              SCIENTIFIC BOUNDARY DEBATE
            </span>
            <h4 className="text-2xl font-display font-extrabold text-white">
              Where Does the Solar System End?
            </h4>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30">
            Select Boundary Below
          </span>
        </div>

        {/* Boundary Selector Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            onClick={() => setSelectedBoundary('planets')}
            className={`px-4 py-2 rounded-xl font-bold border transition-all ${
              selectedBoundary === 'planets'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                : 'bg-white/10 text-slate-300 border-white/10'
            }`}
          >
            1. Planetary Boundary (30 AU)
          </button>

          <button
            onClick={() => setSelectedBoundary('kuiper')}
            className={`px-4 py-2 rounded-xl font-bold border transition-all ${
              selectedBoundary === 'kuiper'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                : 'bg-white/10 text-slate-300 border-white/10'
            }`}
          >
            2. Kuiper Belt & Dwarf Planets (50 AU)
          </button>

          <button
            onClick={() => setSelectedBoundary('heliopause')}
            className={`px-4 py-2 rounded-xl font-bold border transition-all ${
              selectedBoundary === 'heliopause'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                : 'bg-white/10 text-slate-300 border-white/10'
            }`}
          >
            3. Heliopause Magnetic Boundary (~120 AU)
          </button>

          <button
            onClick={() => setSelectedBoundary('oort')}
            className={`px-4 py-2 rounded-xl font-bold border transition-all ${
              selectedBoundary === 'oort'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                : 'bg-white/10 text-slate-300 border-white/10'
            }`}
          >
            4. Oort Cloud Gravitational Limit (~100,000 AU)
          </button>
        </div>

        {/* Active Boundary Explanation Box */}
        <div className="bg-white/5 p-5 rounded-xl border border-white/10 font-sans text-xs sm:text-sm space-y-2 leading-relaxed">
          {selectedBoundary === 'planets' && (
            <p>
              <strong>Neptune Orbit (30.05 AU / 4.5 Billion km):</strong> Historically considered the edge of the major planetary region. However, thousands of icy worlds exist beyond Neptune.
            </p>
          )}

          {selectedBoundary === 'kuiper' && (
            <p>
              <strong>Kuiper Belt Outer Edge (50 AU / 7.5 Billion km):</strong> Home to Pluto, Eris, Haumea, Makemake, and thousands of planetesimals. Beyond 50 AU lies the "Kuiper Cliff" where object density drops.
            </p>
          )}

          {selectedBoundary === 'heliopause' && (
            <p>
              <strong>Heliopause (~120 AU / 18 Billion km):</strong> The plasma and magnetic boundary where the solar wind stops and interstellar space begins. NASA Voyager 1 crossed in 2012, and Voyager 2 in 2018. However, this is NOT the gravitational end of the Solar System!
            </p>
          )}

          {selectedBoundary === 'oort' && (
            <p>
              <strong>The Oort Cloud (2,000 to 100,000 AU / 1.58 Light-Years):</strong> The true gravitational boundary of the Solar System. A giant theoretical spherical shell containing trillions of icy comets bound to the Sun gravity.
            </p>
          )}
        </div>

      </div>

    </section>
  );
};
