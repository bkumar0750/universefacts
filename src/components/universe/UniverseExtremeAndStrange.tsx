import React from 'react';
import { Zap } from 'lucide-react';

export const UniverseExtremeAndStrange: React.FC = () => {
  const EXTREME_RECORDS = [
    {
      title: 'FAST RADIO BURSTS (FRBs)',
      subtitle: 'Millisecond Cosmological Flashes',
      desc: 'Brief, intense radio bursts lasting a few milliseconds but emitting as much energy as the Sun does in days.',
      source: 'CHIME / FAST Observatory 2026',
      badge: 'OBSERVED'
    },
    {
      title: 'MAGNETARS',
      subtitle: 'Strongest Magnetic Fields in Cosmos',
      desc: 'Neutron stars with magnetic fields exceeding 10¹⁵ Gauss—strong enough to dissolve atomic electron clouds from thousands of miles away.',
      source: 'NASA Chandra & Fermi',
      badge: 'MEASURED'
    },
    {
      title: 'NEUTRON STARS',
      subtitle: 'Sun Mass Compressed to City Size',
      desc: 'Core remnants of massive supernovae where 1.4 to 2.1 solar masses are packed into a sphere roughly 20 km in diameter.',
      source: 'NICER / NASA ISS',
      badge: 'MEASURED'
    },
    {
      title: 'QUASARS & ACCRETION DISKS',
      subtitle: 'Brightest Continuous Beacons in Universe',
      desc: 'Active supermassive black holes accreting gas in the early universe, shining brighter than entire host galaxies combined.',
      source: 'JWST / Hubble 2026',
      badge: 'OBSERVED'
    }
  ];

  return (
    <section id="extreme-and-strange" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-6 shadow-2xl transition-colors">
      
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
          <Zap className="w-4 h-4 text-amber-500" />
          <span>SECTION 62-68 · STRANGE UNIVERSE &amp; EXTREME PHENOMENA</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          THE UNIVERSE IS STRANGER THAN SCIENCE FICTION
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        {EXTREME_RECORDS.map((item) => (
          <div key={item.title} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-amber-700 dark:text-amber-400 font-bold text-sm">{item.title}</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                {item.badge}
              </span>
            </div>
            <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase block font-bold">{item.subtitle}</span>
            <p className="text-slate-700 dark:text-slate-300 font-sans text-xs leading-relaxed">{item.desc}</p>
            <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[10px] text-slate-500">
              <span>Verified Source: {item.source}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
