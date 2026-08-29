import React, { useState } from 'react';
import { Compass, Sparkles, ChevronRight, Zap } from 'lucide-react';

export const UniverseHero: React.FC = () => {
  const [zoomStep, setZoomStep] = useState<number>(0);
  const [isZooming, setIsZooming] = useState<boolean>(false);

  const HERO_ZOOM_STEPS = [
    { label: 'EARTH', scale: '12,742 km', desc: 'Human Observer Home' },
    { label: 'MOON', scale: '384,400 km', desc: 'Earth-Moon Orbital System' },
    { label: 'SOLAR SYSTEM', scale: '100 AU (~15 Billion km)', desc: 'Heliosphere Horizon' },
    { label: 'MILKY WAY', scale: '100,000 Light-Years', desc: 'Barred Spiral Home' },
    { label: 'LOCAL GROUP', scale: '10 Million Light-Years', desc: '50+ Bound Galaxies' },
    { label: 'GALAXY CLUSTERS', scale: '100 Million Light-Years', desc: 'Virgo Supercluster Basin' },
    { label: 'COSMIC WEB', scale: '1 Billion Light-Years', desc: 'Filaments & Great Voids' },
    { label: 'OBSERVABLE UNIVERSE', scale: '93 Billion Light-Years', desc: 'Light Travel Horizon' }
  ];

  const handleTakeJourney = () => {
    setIsZooming(true);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < HERO_ZOOM_STEPS.length) {
        setZoomStep(step);
      } else {
        clearInterval(interval);
        setIsZooming(false);
      }
    }, 800);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="universe-hero-cinematic" className="relative w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-500/20 bg-white/95 dark:bg-slate-950 text-slate-900 dark:text-white shadow-2xl p-6 sm:p-12 min-h-[560px] flex flex-col justify-between transition-colors duration-300">
      
      {/* Background Deep Cosmic Web Simulation Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-slate-100 to-white dark:from-cyan-950/30 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080e29_1px,transparent_1px),linear-gradient(to_bottom,#080e29_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 dark:opacity-30 pointer-events-none" />
      
      {/* Particle Flythrough Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Top Banner Tag */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300 backdrop-blur-md">
          <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-spin-slow" />
          <span>SCIENTIFIC COSMIC ATLAS · NASA / JWST / EUCLID DATA</span>
        </div>
        <div className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>COSMOLOGICAL MODEL: ΛCDM STANDARD</span>
        </div>
      </div>

      {/* Main Title Content */}
      <div className="relative z-10 space-y-6 my-8 max-w-4xl">
        <div className="space-y-2">
          <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-widest uppercase font-bold">
            ZOOM LEVEL: {HERO_ZOOM_STEPS[zoomStep].label} ({HERO_ZOOM_STEPS[zoomStep].scale})
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-none drop-shadow-md">
            THE UNIVERSE
          </h1>
        </div>

        <p className="text-lg sm:text-xl font-sans text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl italic font-light border-l-2 border-cyan-500/50 pl-4">
          "Everything we can observe. Everything we can measure. And everything we still don't understand."
        </p>

        {/* Dynamic Zoom Ribbon */}
        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 font-mono text-xs space-y-2 backdrop-blur-md">
          <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">
            <span>EARTH SURFACE</span>
            <span className="text-cyan-700 dark:text-cyan-400 font-bold">{HERO_ZOOM_STEPS[zoomStep].desc}</span>
            <span>OBSERVABLE HORIZON</span>
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${((zoomStep + 1) / HERO_ZOOM_STEPS.length) * 100}%` }}
            />
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {HERO_ZOOM_STEPS.map((s, idx) => (
              <span
                key={s.label}
                onClick={() => setZoomStep(idx)}
                className={`px-2 py-0.5 rounded text-[10px] cursor-pointer transition-all ${
                  zoomStep === idx ? 'bg-cyan-500 text-white font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="relative z-10 flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
        <button
          onClick={() => scrollToSection('scale-explorer')}
          className="px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-cyan-500/20 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>EXPLORE THE UNIVERSE</span>
        </button>

        <button
          onClick={handleTakeJourney}
          disabled={isZooming}
          className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-cyan-800 dark:text-cyan-300 border border-cyan-500/40 font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-xs"
        >
          <Compass className={`w-4 h-4 ${isZooming ? 'animate-spin' : ''}`} />
          <span>{isZooming ? 'ZOOMING ACROSS COSMOS...' : 'TAKE THE COSMIC JOURNEY'}</span>
        </button>

        <button
          onClick={() => scrollToSection('impossible-facts-hub')}
          className="px-6 py-3 rounded-2xl bg-purple-50 dark:bg-purple-500/20 hover:bg-purple-100 dark:hover:bg-purple-500/30 text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-500/40 font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-xs"
        >
          <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>SHOW ME SOMETHING IMPOSSIBLE</span>
          <ChevronRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        </button>
      </div>

    </section>
  );
};
