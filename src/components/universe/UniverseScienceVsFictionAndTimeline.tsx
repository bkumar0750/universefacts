import React, { useState } from 'react';
import { ShieldCheck, History, Users } from 'lucide-react';

export const UniverseScienceVsFictionAndTimeline: React.FC = () => {
  const [activePioneer, setActivePioneer] = useState<string>('einstein');

  const SCI_VS_FICTION = [
    { concept: 'Black Holes', category: 'Science', status: 'OBSERVED', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    { concept: 'Gravitational Waves', category: 'Science', status: 'OBSERVED', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    { concept: 'Time Dilation', category: 'Science', status: 'OBSERVED', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    { concept: 'Wormholes (Einstein-Rosen Bridge)', category: 'Science', status: 'THEORETICAL', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
    { concept: 'Multiverse Hypotheses', category: 'Science', status: 'SPECULATIVE', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
    { concept: 'Warp Drives (Alcubierre Metric)', category: 'Sci-Fi / Math', status: 'THEORETICAL / SPECULATIVE', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
    { concept: 'Backwards Time Travel', category: 'Sci-Fi', status: 'FICTION', badge: 'bg-slate-500/20 text-slate-300 border-slate-500/40' }
  ];

  const DISCOVERY_TIMELINE = [
    { year: '1543', event: 'Copernicus proposes Heliocentric Solar System model.' },
    { year: '1609', event: 'Galileo uses telescope to observe Jupiter moons and lunar craters.' },
    { year: '1687', event: 'Newton publishes Universal Gravitation laws.' },
    { year: '1915', event: 'Einstein formulates General Relativity (spacetime curvature).' },
    { year: '1929', event: 'Edwin Hubble discovers redshifting expanding universe.' },
    { year: '1965', event: 'Penzias & Wilson discover Cosmic Microwave Background (CMB).' },
    { year: '1998', event: 'Supernova Teams discover Accelerating Universe & Dark Energy.' },
    { year: '2015', event: 'LIGO detects Gravitational Waves from binary black hole merger.' },
    { year: '2019', event: 'Event Horizon Telescope captures first image of M87* black hole.' },
    { year: '2022', event: 'JWST delivers first deep infrared images of early universe.' },
    { year: '2026', event: 'ESA Euclid & JWST confirm MoM-z14 ($z=14.44$) and 3D Dark Matter Map.' }
  ];

  const PIONEERS = [
    { id: 'copernicus', name: 'Nicolaus Copernicus', feat: 'Shifted Earth from center of solar system to heliocentric orbit.' },
    { id: 'galileo', name: 'Galileo Galilei', feat: 'First telescope astronomical observations proving non-Earth centers of motion.' },
    { id: 'newton', name: 'Isaac Newton', feat: 'Unified terrestrial and celestial mechanics under Universal Gravitation.' },
    { id: 'einstein', name: 'Albert Einstein', feat: 'Replaced Newtonian gravity with curved four-dimensional spacetime.' },
    { id: 'hubble', name: 'Edwin Hubble', feat: 'Proved galaxies exist beyond Milky Way and discovered metric cosmic expansion.' },
    { id: 'payne', name: 'Cecilia Payne-Gaposchkin', feat: 'Discovered stars are primarily composed of Hydrogen and Helium.' },
    { id: 'rubin', name: 'Vera Rubin', feat: 'Provided definitive rotation curve evidence for galactic dark matter halos.' },
    { id: 'hawking', name: 'Stephen Hawking', feat: 'Proved black hole evaporation quantum radiation (Hawking Radiation).' }
  ];

  const currentPioneer = PIONEERS.find((p) => p.id === activePioneer)!;

  return (
    <section id="science-vs-fiction-and-timeline" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl transition-colors">
      
      {/* 1. FEATURE 9: SCIENCE VS SCIENCE FICTION */}
      <div className="space-y-6">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 9 · SCIENCE VS SCIENCE FICTION MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            SCIENCE VS SCIENCE FICTION
          </h2>
        </div>

        <div className="overflow-x-auto font-mono text-xs">
          <table className="w-full text-left border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b border-slate-300 dark:border-white/10 text-cyan-600 dark:text-cyan-400">
                <th className="p-3">COSMIC CONCEPT</th>
                <th className="p-3">CATEGORY</th>
                <th className="p-3">SCIENTIFIC STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5 font-sans text-xs">
              {SCI_VS_FICTION.map((row) => (
                <tr key={row.concept} className="hover:bg-slate-100 dark:hover:bg-slate-900/50">
                  <td className="p-3 font-bold text-slate-900 dark:text-white font-mono">{row.concept}</td>
                  <td className="p-3 text-slate-600 dark:text-slate-400">{row.category}</td>
                  <td className="p-3 font-mono text-[10px]">
                    <span className={`px-2 py-0.5 rounded border font-bold ${row.badge}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. FEATURE 11: COSMIC DISCOVERY TIMELINE */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
            <History className="w-4 h-4 text-amber-500" />
            <span>FEATURE 11 · HUMANITY'S COSMIC DISCOVERY TIMELINE</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            TIMELINE OF COSMOLOGICAL DISCOVERIES
          </h3>
        </div>

        <div className="space-y-2 font-mono text-xs max-h-72 overflow-y-auto p-4 rounded-2xl bg-slate-950 border border-amber-500/40 text-white shadow-inner">
          {DISCOVERY_TIMELINE.map((item) => (
            <div key={item.year} className="flex items-start gap-4 p-2.5 rounded-xl bg-slate-900 border border-white/5">
              <span className="text-amber-400 font-bold shrink-0 w-16">{item.year}</span>
              <p className="font-sans text-xs text-slate-300">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FEATURE 12: PEOPLE WHO CHANGED OUR COSMIC VIEW */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10 font-mono text-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
            <Users className="w-4 h-4 text-purple-500" />
            <span>FEATURE 12 · PEOPLE WHO CHANGED OUR COSMIC VIEW</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            COSMIC REVOLUTIONARIES
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {PIONEERS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePioneer(p.id)}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                activePioneer === p.id
                  ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold scale-105 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-purple-500/40 text-white space-y-2 font-mono">
          <div className="text-purple-300 font-bold text-sm">{currentPioneer.name}</div>
          <p className="font-sans text-xs text-slate-200 leading-relaxed">
            <strong>COSMIC CONTRIBUTION:</strong> {currentPioneer.feat}
          </p>
        </div>
      </div>

    </section>
  );
};
