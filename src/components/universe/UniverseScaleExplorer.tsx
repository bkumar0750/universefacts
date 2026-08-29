import React, { useState } from 'react';
import { ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScaleStep {
  id: string;
  name: string;
  sizeMeters: string;
  sizeHumanReadable: string;
  lightTravelTime: string;
  objectEstimate: string;
  whatWeCanObserve: string;
  image: string;
  desc: string;
}

const SCALE_STEPS: ScaleStep[] = [
  {
    id: 'human',
    name: '1. Human Scale',
    sizeMeters: '1.7 meters (10⁰ m)',
    sizeHumanReadable: '1.7 m',
    lightTravelTime: '5.6 Nanoseconds',
    objectEstimate: '~8 Billion Humans',
    whatWeCanObserve: 'Biological organisms, surface chemistry, terrestrial atmosphere',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    desc: 'The human observer scale on Earth. All physical measurements originate from human instruments.'
  },
  {
    id: 'earth',
    name: '2. Planet Earth',
    sizeMeters: '1.27 × 10⁷ meters',
    sizeHumanReadable: '12,742 km Diameter',
    lightTravelTime: '0.042 Seconds (Equatorial Circumference)',
    objectEstimate: '1 Planet, 8B Humans, 1 Moon',
    whatWeCanObserve: 'Continents, oceans, magnetosphere, low-Earth orbits',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop',
    desc: 'Our terrestrial home planet inside the inner Solar System habitable zone.'
  },
  {
    id: 'moon',
    name: '3. Earth-Moon Orbit',
    sizeMeters: '3.84 × 10⁸ meters',
    sizeHumanReadable: '384,400 km Distance',
    lightTravelTime: '1.28 Seconds',
    objectEstimate: '1 Natural Satellite (Moon)',
    whatWeCanObserve: 'Lunar craters, cislunar space, Apollo landing sites, Lagrange points',
    image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=1200&auto=format&fit=crop',
    desc: 'The nearest celestial body bound to Earth by gravity.'
  },
  {
    id: 'solar-system',
    name: '4. The Solar System',
    sizeMeters: '1.5 × 10¹³ meters',
    sizeHumanReadable: '100 AU (~15 Billion km)',
    lightTravelTime: '13.8 Hours (Heliosphere Edge)',
    objectEstimate: '8 Major Planets, 200+ Moons, 1M+ Asteroids',
    whatWeCanObserve: 'Sun, planetary magnetospheres, Kuiper belt objects, Voyager probes',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
    desc: 'Gravitationally bound system centered on yellow dwarf star Sol.'
  },
  {
    id: 'light-year',
    name: '5. Interstellar Light-Year',
    sizeMeters: '9.46 × 10¹⁵ meters',
    sizeHumanReadable: '1 Light-Year (~9.46 Trillion km)',
    lightTravelTime: '1.0 Year',
    objectEstimate: 'Oort Cloud Cometary Reservoir',
    whatWeCanObserve: 'Trillions of icy cometary nuclei, interstellar dust grains',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    desc: 'The metric distance light travels in one Julian year in vacuum.'
  },
  {
    id: 'milky-way',
    name: '6. Milky Way Galaxy',
    sizeMeters: '1.0 × 10²¹ meters',
    sizeHumanReadable: '100,000 Light-Years',
    lightTravelTime: '100,000 Years Across Disk',
    objectEstimate: '100 - 400 Billion Stars',
    whatWeCanObserve: 'Stellar spiral arms, Sagittarius A*, nebulae, open & globular clusters',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    desc: 'Barred spiral galaxy home to the Solar System.'
  },
  {
    id: 'local-group',
    name: '7. The Local Group',
    sizeMeters: '1.0 × 10²³ meters',
    sizeHumanReadable: '10 Million Light-Years',
    lightTravelTime: '10 Million Years',
    objectEstimate: '50+ Galaxies (M31, Milky Way, M33)',
    whatWeCanObserve: 'Andromeda spiral arms, Magellanic Clouds, dwarf satellite galaxies',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1200&auto=format&fit=crop',
    desc: 'Gravitationally bound cluster of local galaxies.'
  },
  {
    id: 'cosmic-web',
    name: '8. Cosmic Web Filaments',
    sizeMeters: '1.0 × 10²5 meters',
    sizeHumanReadable: '1 Billion Light-Years',
    lightTravelTime: '1 Billion Years',
    objectEstimate: 'Millions of Galaxy Clusters & Voids',
    whatWeCanObserve: 'Sloan Great Wall, intergalactic gas filaments, cosmic voids',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    desc: 'The large-scale scaffolding of dark matter and galaxy filaments.'
  },
  {
    id: 'observable-universe',
    name: '9. Observable Universe Horizon',
    sizeMeters: '8.8 × 10²⁶ meters',
    sizeHumanReadable: '93 Billion Light-Years',
    lightTravelTime: '13.8 Billion Years',
    objectEstimate: '2 Trillion Galaxies, 10⁸⁰ Atoms',
    whatWeCanObserve: 'Cosmic Microwave Background (CMB), MoM-z14 galaxy, earliest quasars',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    desc: 'The boundary horizon of all observable matter in the cosmos.'
  }
];

export const UniverseScaleExplorer: React.FC = () => {
  const [scaleIdx, setScaleIdx] = useState<number>(0);
  const current = SCALE_STEPS[scaleIdx];

  return (
    <section id="scale-explorer" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-6 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <ZoomOut className="w-4 h-4 text-cyan-500" />
            <span>SECTION 5 &amp; 6 · LOGARITHMIC COSMIC SCALE EXPLORER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mt-1">
            HUMAN SCALE VS COSMIC SCALE
          </h2>
        </div>

        <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-3.5 py-1.5 rounded-xl border border-cyan-500/30">
          Scale Step {scaleIdx + 1} of {SCALE_STEPS.length}
        </span>
      </div>

      {/* Logarithmic Slider */}
      <div className="space-y-3 font-mono text-xs">
        <div className="flex justify-between text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">
          <span>Human (1.7 m)</span>
          <span>Log Scale (10⁰ to 10²⁶ m)</span>
          <span>Observable Horizon (93B LY)</span>
        </div>
        <input
          type="range"
          min={0}
          max={SCALE_STEPS.length - 1}
          value={scaleIdx}
          onChange={(e) => setScaleIdx(parseInt(e.target.value))}
          className="w-full h-3 bg-slate-200 dark:bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-500 border border-slate-300 dark:border-white/10"
        />
        <div className="flex flex-wrap gap-1.5 pt-1">
          {SCALE_STEPS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setScaleIdx(idx)}
              className={`px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all ${
                scaleIdx === idx
                  ? 'bg-cyan-500 text-slate-950 font-bold scale-105 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {s.name.split('.')[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Canvas Display Frame */}
      <div className="relative w-full h-[360px] sm:h-[440px] rounded-2xl border border-slate-300 dark:border-white/15 overflow-hidden shadow-inner group">
        <img
          src={current.image}
          alt={current.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 p-6 flex flex-col justify-between" />

        {/* Top Badges */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 backdrop-blur-md">
            Meters: {current.sizeMeters}
          </span>
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/30 text-purple-200 border border-purple-400/40 backdrop-blur-md">
            Light Travel: {current.lightTravelTime}
          </span>
        </div>

        {/* Bottom Details */}
        <div className="relative z-10 space-y-2 max-w-2xl text-white">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold drop-shadow">
            {current.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed drop-shadow">
            {current.desc}
          </p>
        </div>

        {/* Left/Right Buttons */}
        <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none z-20">
          <button
            onClick={() => setScaleIdx((prev) => Math.max(0, prev - 1))}
            disabled={scaleIdx === 0}
            className={`p-3 rounded-full backdrop-blur-md transition-all pointer-events-auto ${
              scaleIdx === 0 ? 'opacity-30 cursor-not-allowed bg-slate-900/50' : 'bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-black'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setScaleIdx((prev) => Math.min(SCALE_STEPS.length - 1, prev + 1))}
            disabled={scaleIdx === SCALE_STEPS.length - 1}
            className={`p-3 rounded-full backdrop-blur-md transition-all pointer-events-auto ${
              scaleIdx === SCALE_STEPS.length - 1 ? 'opacity-30 cursor-not-allowed bg-slate-900/50' : 'bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-black'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Telemetry Metrics Grid for Scale */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
        <div className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
          <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">PHYSICAL SIZE</span>
          <div className="font-bold text-cyan-700 dark:text-cyan-300">{current.sizeHumanReadable}</div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
          <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">ESTIMATED OBJECT COUNT</span>
          <div className="font-bold text-purple-700 dark:text-purple-300">{current.objectEstimate}</div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
          <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">WHAT WE CAN OBSERVE</span>
          <div className="font-bold text-emerald-700 dark:text-emerald-300 text-[11px] font-sans">{current.whatWeCanObserve}</div>
        </div>
      </div>

    </section>
  );
};
