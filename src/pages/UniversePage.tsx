import React, { useState } from 'react';
import { Orbit, ZoomOut, Box, PieChart, ChevronLeft, ChevronRight } from 'lucide-react';
import { SketchfabViewer } from '../components/SketchfabViewer';

interface ZoomStep {
  id: string;
  name: string;
  shortName: string;
  scale: string;
  lightTravelTime: string;
  dominantForce: string;
  image: string;
  desc: string;
  details: string;
}

const ZOOM_STEPS: ZoomStep[] = [
  {
    id: 'earth',
    name: '1. Planet Earth',
    shortName: 'Planet Earth',
    scale: '12,742 km Diameter',
    lightTravelTime: '0.042 Seconds (Light Travel)',
    dominantForce: 'Planetary Gravity & Magnetosphere',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop',
    desc: 'Our fragile blue marble home planet inside the inner Solar System, harboring 8 billion humans and liquid water oceans.',
    details: 'Earth orbits the Sun at 1 AU (149.6M km) with a surface escape velocity of 11.19 km/s.'
  },
  {
    id: 'solar-system',
    name: '2. The Solar System',
    shortName: 'Solar System',
    scale: '100 AU (~15 Billion km)',
    lightTravelTime: '13.8 Hours (Heliosphere Edge)',
    dominantForce: 'Solar Gravitational Sphere of Influence',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
    desc: 'Centered on the Sun (G-type yellow dwarf star), spanning 8 major planets, the Asteroid Belt, Kuiper Belt, and Oort Cloud.',
    details: 'Voyager 1 crossed the Heliosphere boundary in 2012 into interstellar space at ~120 AU.'
  },
  {
    id: 'milky-way',
    name: '3. Milky Way Galaxy',
    shortName: 'Milky Way',
    scale: '100,000 Light Years',
    lightTravelTime: '100,000 Years Across Disk',
    dominantForce: 'Supermassive Black Hole (Sagittarius A*)',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    desc: 'Our home barred spiral galaxy, containing 100–400 billion stars, interstellar gas nebulae, and stellar dark matter halos.',
    details: 'The Solar System orbits the Galactic Center every 230 million years (1 Galactic Year).'
  },
  {
    id: 'local-group',
    name: '4. The Local Group',
    shortName: 'Local Group',
    scale: '10 Million Light Years',
    lightTravelTime: '10 Million Light Years',
    dominantForce: 'Mutual Gravitational Binding (Milky Way & M31)',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    desc: 'Gravitationally bound cluster of 80+ galaxies dominated by the Milky Way, Andromeda (M31), and Triangulum (M33).',
    details: 'Andromeda and Milky Way are approaching each other at 110 km/s and will merge in ~4.5 billion years.'
  },
  {
    id: 'virgo-supercluster',
    name: '5. Virgo Supercluster & Laniakea',
    shortName: 'Virgo Supercluster',
    scale: '520 Million Light Years',
    lightTravelTime: '520 Million Light Years',
    dominantForce: 'The Great Attractor Cosmic Anomaly',
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1200&auto=format&fit=crop',
    desc: 'Vast cosmic supercluster flow containing over 100,000 galaxies flowing along gravitational currents toward the Great Attractor.',
    details: 'Laniakea ("Immeasurable Heaven" in Hawaiian) defines the basin of gravitational attraction for our galaxy.'
  },
  {
    id: 'cosmic-web',
    name: '6. Cosmic Web Filaments',
    shortName: 'Cosmic Web',
    scale: '5 Billion Light Years',
    lightTravelTime: '5 Billion Light Years',
    dominantForce: 'Cold Dark Matter Web Scaffolding',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    desc: 'The large-scale structure of the universe composed of glowing galaxy filaments separated by immense, empty cosmic voids.',
    details: 'Dark matter acts as invisible scaffolding drawing baryonic gas into galaxy filaments across cosmic time.'
  },
  {
    id: 'observable-universe',
    name: '7. Observable Universe Horizon',
    shortName: 'Observable Horizon',
    scale: '93 Billion Light Years Diameter',
    lightTravelTime: '13.8 Billion Years (Age of Universe)',
    dominantForce: 'Dark Energy (Accelerated Metric Expansion)',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    desc: 'The complete spherical boundary of light that has had time to travel to Earth since the Big Bang 13.8 billion years ago.',
    details: 'Contains an estimated 2 trillion galaxies and 10^80 atoms inside a comoving volume of 3.5×10^80 cubic meters.'
  }
];

export const UniversePage: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(0);

  const energyBudget = [
    { label: 'Dark Energy (Cosmological Constant Λ)', percentage: 68.3, color: '#06b6d4', desc: 'Drives the accelerated expansion of the universe.' },
    { label: 'Cold Dark Matter (CDM)', percentage: 26.8, color: '#8b5cf6', desc: 'Invisible gravitational glue holding galaxies together.' },
    { label: 'Atomic Matter (Baryons)', percentage: 4.9, color: '#10b981', desc: 'All stars, planets, gas clouds, and living organisms.' },
    { label: 'Cosmic Neutrinos & Photons', percentage: 0.1, color: '#f59e0b', desc: 'Relic radiation background from the Big Bang.' }
  ];

  const currentStep = ZOOM_STEPS[zoomLevel];

  const handlePrev = () => {
    setZoomLevel((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setZoomLevel((prev) => (prev < ZOOM_STEPS.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="space-y-12 pb-12">
      
      {/* Header */}
      <div className="space-y-4 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300">
          <Orbit className="w-3.5 h-3.5" />
          <span>COSMOLOGICAL HORIZON & BEYOND</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          The Observable Universe
        </h1>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Due to the finite speed of light (299,792 km/s) and the 13.8 billion-year age of the cosmos, we can only observe light that has had time to travel to Earth. Because space itself has been expanding during light travel time, the current comoving diameter of the observable universe is approximately 93 billion light-years.
        </p>
      </div>

      {/* ── MILKY WAY 3D MODEL ──────────────────────────────────── */}
      <section className="space-y-4 animate-fade-in-up delay-100">
        <div className="flex items-end gap-3">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-500/10 border border-violet-500/30 text-violet-600 dark:text-violet-300 mb-2">
              <Box className="w-3 h-3" />
              <span>INTERACTIVE 3D MODEL · SKETCHFAB</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Our Galaxy — The Milky Way</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
              A barred spiral galaxy, ~100,000 light-years across, containing 100–400 billion stars
            </p>
          </div>
        </div>
        <SketchfabViewer
          modelId="eb0087b800414744b4cee3440888088c"
          title="Milky Way Galaxy"
          description="Our home galaxy — a barred spiral galaxy containing 100–400 billion stars"
          credit="Sketchfab Community"
          height="h-[520px] sm:h-[640px]"
        />
      </section>

      {/* 📊 COSMIC MASS-ENERGY CONSTITUENT DISTRIBUTION */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <PieChart className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Universal Mass-Energy Budget (Planck Satellite Precision)</span>
        </h2>

        <div className="space-y-4">
          {energyBudget.map((item) => (
            <div key={item.label} className="space-y-1 font-mono text-xs">
              <div className="flex justify-between text-slate-700 dark:text-slate-300 font-semibold">
                <span>{item.label}</span>
                <span className="font-bold text-slate-900 dark:text-white">{item.percentage}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                />
              </div>
              <p className="text-[10px] text-slate-500 font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🪐 STEP-BY-STEP COSMIC ZOOM OUT VISUALIZER */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6 shadow-2xl">
        
        {/* Top Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <ZoomOut className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <span>Interactive Step-by-Step Cosmic Zoom Out</span>
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-1">
              From our human scale on Earth to the edge of the cosmic microwave background radiation horizon.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/30">
              Step {zoomLevel + 1} of {ZOOM_STEPS.length}
            </span>
          </div>
        </div>

        {/* Step Buttons Horizontal Filter Bar */}
        <div className="flex flex-wrap gap-2 pt-2">
          {ZOOM_STEPS.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setZoomLevel(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                zoomLevel === idx
                  ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-md font-bold scale-105'
                  : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {step.shortName}
            </button>
          ))}
        </div>

        {/* Dynamic Scale Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-900 h-2 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-white/10">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${((zoomLevel + 1) / ZOOM_STEPS.length) * 100}%` }}
          />
        </div>

        {/* High-Fidelity Visual Canvas Frame */}
        <div className="relative w-full h-[380px] sm:h-[480px] rounded-2xl border border-slate-300 dark:border-white/15 overflow-hidden shadow-inner group">
          
          {/* Background Photo */}
          <img
            src={currentStep.image}
            alt={currentStep.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 p-6 sm:p-8 flex flex-col justify-between" />

          {/* Top Canvas Badges */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 backdrop-blur-md shadow-lg">
              Scale: {currentStep.scale}
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-purple-500/30 text-purple-200 border border-purple-400/40 backdrop-blur-md">
              {currentStep.lightTravelTime}
            </span>
          </div>

          {/* Bottom Card Overlay Content */}
          <div className="relative z-10 space-y-3 max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              {currentStep.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed drop-shadow">
              {currentStep.desc}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-cyan-300">
              <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-cyan-500/30 backdrop-blur-md">
                <strong>Dominant Force:</strong> {currentStep.dominantForce}
              </span>
            </div>
          </div>

          {/* Left / Right Arrow Navigation Overlay */}
          <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none z-20">
            <button
              onClick={handlePrev}
              disabled={zoomLevel === 0}
              className={`p-3 rounded-full backdrop-blur-md transition-all pointer-events-auto ${
                zoomLevel === 0
                  ? 'opacity-30 cursor-not-allowed bg-slate-900/50 text-slate-500'
                  : 'bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-black shadow-lg scale-100 hover:scale-110'
              }`}
              title="Zoom In (Previous Scale Step)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={zoomLevel === ZOOM_STEPS.length - 1}
              className={`p-3 rounded-full backdrop-blur-md transition-all pointer-events-auto ${
                zoomLevel === ZOOM_STEPS.length - 1
                  ? 'opacity-30 cursor-not-allowed bg-slate-900/50 text-slate-500'
                  : 'bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-black shadow-lg scale-100 hover:scale-110'
              }`}
              title="Zoom Out (Next Scale Step)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* Detailed Scientific Note Box for Selected Step */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-xs font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
          <strong className="font-mono text-cyan-700 dark:text-cyan-300 font-bold block mb-1">Scientific Context & Telemetry:</strong>
          {currentStep.details}
        </div>

      </section>

      {/* VERIFIED COSMOLOGICAL METRICS GRID */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
        <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
          <span className="text-slate-500 text-[10px] uppercase font-semibold">Age of Universe</span>
          <div className="text-base font-bold text-slate-900 dark:text-white">13.787 ± 0.020 Gyr</div>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
          <span className="text-slate-500 text-[10px] uppercase font-semibold">Hubble Constant (H0)</span>
          <div className="text-base font-bold text-cyan-600 dark:text-cyan-300">67.4 km/s/Mpc</div>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
          <span className="text-slate-500 text-[10px] uppercase font-semibold">CMB Temperature</span>
          <div className="text-base font-bold text-emerald-600 dark:text-emerald-300">2.72548 K</div>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
          <span className="text-slate-500 text-[10px] uppercase font-semibold">Observable Diameter</span>
          <div className="text-base font-bold text-amber-600 dark:text-amber-300">93 Billion Light Years</div>
        </div>
      </section>

    </div>
  );
};
