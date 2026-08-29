import React from 'react';
import { Sparkles, Globe, Clock, Star, Disc, Share2, Compass, ShieldCheck } from 'lucide-react';

interface HugeFact {
  id: string;
  icon: React.ElementType;
  headline: string;
  detail: string;
  badge: string;
  gradient: string;
  borderColor: string;
}

const HUGE_FACTS: HugeFact[] = [
  {
    id: 'f1',
    icon: Sparkles,
    headline: 'A tiny patch of sky can contain thousands of galaxies.',
    detail: 'The Hubble Ultra Deep Field contains roughly 10,000 galaxies in an extremely small patch of sky about 1/13 the area of the full moon.',
    badge: 'NASA HUBBLE ULTRA DEEP FIELD',
    gradient: 'from-blue-600/20 via-cyan-600/10 to-transparent',
    borderColor: 'border-cyan-500/40'
  },
  {
    id: 'f2',
    icon: Globe,
    headline: 'The Milky Way is more than 100,000 light-years across.',
    detail: 'NASA confirms the Milky Way stellar disk spans over 100,000 light-years in diameter, harboring between 100 to 400 billion stars.',
    badge: 'GALACTIC DEMOGRAPHICS',
    gradient: 'from-cyan-600/20 via-blue-600/10 to-transparent',
    borderColor: 'border-cyan-500/40'
  },
  {
    id: 'f3',
    icon: Clock,
    headline: 'The Solar System takes ~240 million years to orbit the Milky Way.',
    detail: 'This is 1 "Galactic Year". The last time the Solar System was at its current location in the galaxy, dinosaurs were just beginning to walk the Earth.',
    badge: 'THE GALACTIC YEAR',
    gradient: 'from-amber-600/20 via-orange-600/10 to-transparent',
    borderColor: 'border-amber-500/40'
  },
  {
    id: 'f4',
    icon: Star,
    headline: 'Some giant galaxies contain more than a trillion stars.',
    detail: 'Galaxies span an immense population range, from tiny dwarf galaxies with ~100 million stars to giant ellipticals (like IC 1101 & M87) with over 1 trillion stars.',
    badge: 'STELLAR POPULATION SPECTRUM',
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    borderColor: 'border-emerald-500/40'
  },
  {
    id: 'f5',
    icon: Disc,
    headline: 'Our galaxy harbors a central supermassive black hole.',
    detail: 'Sagittarius A* (Sgr A*) sits at the exact gravitational heart of the Milky Way, packing ~4.15 million times the mass of our Sun into a compact core.',
    badge: 'SAGITTARIUS A*',
    gradient: 'from-purple-600/20 via-indigo-600/10 to-transparent',
    borderColor: 'border-purple-500/40'
  },
  {
    id: 'f6',
    icon: Share2,
    headline: 'Galaxies are not randomly scattered through space.',
    detail: 'Galaxies align along gravity filaments, forming galaxy groups, clusters, superclusters, walls, and voids—the grand Cosmic Web of the universe.',
    badge: 'COSMIC WEB ARCHITECTURE',
    gradient: 'from-rose-600/20 via-pink-600/10 to-transparent',
    borderColor: 'border-rose-500/40'
  },
  {
    id: 'f7',
    icon: Compass,
    headline: 'Looking farther into space is directly looking backwards in time.',
    detail: 'Because light takes time to travel across cosmic distances, Hubble & JWST observations let us see galaxies as they existed 13+ billion years ago in the early universe.',
    badge: 'COSMIC LOOKBACK TIME',
    gradient: 'from-cyan-600/20 via-indigo-600/10 to-transparent',
    borderColor: 'border-cyan-500/40'
  }
];

export const HugeFactCards: React.FC = () => {
  return (
    <section id="galaxy-huge-facts" className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            EXPERIENCE 09 · SIGNATURE GALAXY DISCOVERIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span>MIND-BLOWING GALACTIC RECORDS & FACTS</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>VERIFIED BY NASA / ESA OBSERVATORIES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {HUGE_FACTS.map((fact) => {
          const IconComp = fact.icon;
          return (
            <div
              key={fact.id}
              className={`p-6 rounded-3xl border ${fact.borderColor} bg-gradient-to-br ${fact.gradient} bg-slate-950/90 space-y-3 shadow-xl hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden`}
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-900/90 border border-white/10 text-cyan-300">
                  {fact.badge}
                </span>
                <IconComp className="w-6 h-6 text-cyan-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                {fact.headline}
              </h3>

              <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                {fact.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
