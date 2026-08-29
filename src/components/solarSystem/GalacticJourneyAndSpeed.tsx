import React, { useState } from 'react';
import { Compass, Gauge } from 'lucide-react';

export const GalacticJourneyAndSpeed: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<'mars' | 'jupiter' | 'pluto' | 'proxima'>('mars');

  const speedData = [
    { name: 'Commercial Jet', speedKMh: 900, label: '900 km/h' },
    { name: 'Apollo Spacecraft', speedKMh: 39000, label: '39,000 km/h' },
    { name: 'New Horizons Probe', speedKMh: 58536, label: '58,536 km/h' },
    { name: 'Voyager 1 Probe', speedKMh: 61200, label: '61,200 km/h' },
    { name: 'Earth Solar Orbit Speed', speedKMh: 107000, label: '107,000 km/h' },
    { name: 'Parker Solar Probe (Perihelion)', speedKMh: 635266, label: '635,266 km/h' },
    { name: 'Solar System Galactic Speed', speedKMh: 828000, label: '828,000 km/h' },
    { name: 'Speed of Light (c)', speedKMh: 1079252848, label: '1,079,252,848 km/h' }
  ];

  const travelTimes = {
    mars: { commercial: '28 Years', voyager: '150 Days', newHorizons: '110 Days', light: '12.7 Minutes' },
    jupiter: { commercial: '98 Years', voyager: '1.5 Years', newHorizons: '13 Months', light: '43.2 Minutes' },
    pluto: { commercial: '748 Years', voyager: '12.5 Years', newHorizons: '9.5 Years', light: '5.5 Hours' },
    proxima: { commercial: '5.1 Million Yrs', voyager: '73,000 Years', newHorizons: '78,000 Years', light: '4.24 Years' }
  };

  return (
    <section id="galactic-journey-and-speed" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-12 shadow-xl">
      
      {/* 🌌 1. THE SOLAR SYSTEM'S GALACTIC JOURNEY (~230M YEAR ORBIT) */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>GALACTIC MOTION · MILKY WAY ORBIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            ONE YEAR AROUND THE MILKY WAY (~230 MILLION EARTH YEARS)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            The Sun and entire Solar System orbit the center of the Milky Way galaxy at ~828,000 km/h in the Orion Spur (Orion Arm).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-2">
            <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold uppercase block">GALACTIC ORBITAL SPEED</span>
            <div className="text-2xl font-extrabold text-slate-900 dark:text-white">828,000 km/h</div>
            <p className="font-sans text-[11px] text-slate-600 dark:text-slate-400">230 km/s relative to the galactic center core.</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-2">
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase block">1 GALACTIC YEAR DURATION</span>
            <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300">~230 Million Yrs</div>
            <p className="font-sans text-[11px] text-slate-600 dark:text-slate-400">Sun has completed only ~20 orbits in its 4.54B yr life!</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-2">
            <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase block">COSMIC NEIGHBORHOOD</span>
            <div className="text-2xl font-extrabold text-purple-700 dark:text-purple-300">Orion Spur</div>
            <p className="font-sans text-[11px] text-slate-600 dark:text-slate-400">Located ~26,000 light-years from Sagittarius A* core.</p>
          </div>
        </div>
      </div>

      {/* 🚀 2. SPACECRAFT SPEED COMPARISON & TRAVEL TIME CALCULATOR */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/40 bg-slate-950 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              <Gauge className="w-3.5 h-3.5 text-cyan-400" />
              <span>INTERACTIVE TRAVEL TIME CALCULATOR</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
              HOW FAST ARE WE REALLY TRAVELING?
            </h3>
          </div>

          {/* Destination Selector Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {(['mars', 'jupiter', 'pluto', 'proxima'] as const).map((dst) => (
              <button
                key={dst}
                onClick={() => setSelectedDestination(dst)}
                className={`px-3 py-1.5 rounded-xl uppercase font-bold border transition-all ${
                  selectedDestination === dst
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                    : 'bg-white/10 text-slate-300 border-white/10'
                }`}
              >
                {dst === 'proxima' ? 'Proxima Centauri' : dst}
              </button>
            ))}
          </div>
        </div>

        {/* Travel Duration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-slate-400 text-[10px] uppercase block">Commercial Jet</span>
            <div className="text-lg font-bold text-slate-300">{travelTimes[selectedDestination].commercial}</div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-cyan-400 text-[10px] uppercase block">Voyager 1 Probe</span>
            <div className="text-lg font-bold text-cyan-300">{travelTimes[selectedDestination].voyager}</div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-amber-400 text-[10px] uppercase block">New Horizons Probe</span>
            <div className="text-lg font-bold text-amber-300">{travelTimes[selectedDestination].newHorizons}</div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
            <span className="text-emerald-400 text-[10px] uppercase block font-bold">Speed of Light (c)</span>
            <div className="text-lg font-bold text-emerald-300">{travelTimes[selectedDestination].light}</div>
          </div>
        </div>

        {/* Speed Comparison Bars */}
        <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-xs">
          <span className="text-cyan-400 font-bold uppercase text-[10px] block">PROPORTIONAL SPEED BAR COMPARISON (KM/H)</span>
          {speedData.map((sd) => {
            const pct = Math.min((Math.log10(sd.speedKMh) / Math.log10(1079252848)) * 100, 100);
            return (
              <div key={sd.name} className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-300">{sd.name}</span>
                  <span className="text-cyan-300 font-bold">{sd.label}</span>
                </div>
                <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
