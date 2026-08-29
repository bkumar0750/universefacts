import React, { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export const UniverseEuclid60MStars: React.FC = () => {
  const [zoomStep, setZoomStep] = useState<number>(0);

  const EUCLID_STEPS = [
    {
      title: '1. 60 MILLION STARS IN ONE VIEW',
      scale: 'ESA Euclid Single Wide-Field Mosaic',
      desc: 'Euclid captured over 60 million individual stars in the crowded Milky Way central bulge in a single high-resolution survey dataset.',
      image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
      badge: 'ESA EUCLID 2026 RELEASE'
    },
    {
      title: '2. THE MILKY WAY GALAXY',
      scale: '100,000 Light-Years Diameter',
      desc: 'Our barred spiral galaxy disk containing 100 to 400 billion stars, dark matter halo, and central Sagittarius A* black hole.',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
      badge: 'GALACTIC SCALE'
    },
    {
      title: '3. BILLIONS OF GALAXIES',
      scale: '10 Billion Light-Years Volume',
      desc: 'Euclid maps over 10 billion light-years of space, cataloging hundreds of millions of galaxies to measure weak gravitational lensing.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      badge: 'COSMIC STRUCTURE SURVEY'
    },
    {
      title: '4. OBSERVABLE UNIVERSE HORIZON',
      scale: '93 Billion Light-Years Comoving Diameter',
      desc: 'The complete observable volume containing an estimated 2 trillion galaxies across cosmic time back to the Big Bang.',
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
      badge: 'COSMOLOGICAL HORIZON'
    }
  ];

  const current = EUCLID_STEPS[zoomStep];

  return (
    <section id="euclid-60m-stars-zoom" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Eye className="w-4 h-4 text-cyan-500" />
            <span>ESA EUCLID 2026 DEEP FIELD SURVEY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
            HOW MUCH CAN ONE TELESCOPE SEE?
          </h2>
        </div>

        <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-3.5 py-1.5 rounded-xl border border-cyan-500/30">
          Zoom Step {zoomStep + 1} of {EUCLID_STEPS.length}
        </span>
      </div>

      {/* Step Selector Ribbon */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {EUCLID_STEPS.map((s, idx) => (
          <button
            key={s.title}
            onClick={() => setZoomStep(idx)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono cursor-pointer transition-all ${
              zoomStep === idx
                ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border border-cyan-500/50 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {s.title.split('.')[1]}
          </button>
        ))}
      </div>

      {/* Canvas Zoom Frame */}
      <div className="relative w-full h-[360px] sm:h-[460px] rounded-3xl border border-cyan-500/40 overflow-hidden shadow-2xl group">
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 p-6 flex flex-col justify-between" />

        {/* Top Badges */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 backdrop-blur-md">
            {current.badge}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/30 text-purple-200 border border-purple-400/40 backdrop-blur-md">
            {current.scale}
          </span>
        </div>

        {/* Bottom Details Overlay */}
        <div className="relative z-10 space-y-2 max-w-2xl text-white font-mono">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold drop-shadow">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed drop-shadow">
            {current.desc}
          </p>
        </div>

        {/* Controls Overlay */}
        <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none z-20">
          <button
            onClick={() => setZoomStep((prev) => Math.max(0, prev - 1))}
            disabled={zoomStep === 0}
            className={`p-3 rounded-full backdrop-blur-md transition-all pointer-events-auto ${
              zoomStep === 0 ? 'opacity-30 cursor-not-allowed bg-slate-900/50' : 'bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-black'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setZoomStep((prev) => Math.min(EUCLID_STEPS.length - 1, prev + 1))}
            disabled={zoomStep === EUCLID_STEPS.length - 1}
            className={`p-3 rounded-full backdrop-blur-md transition-all pointer-events-auto ${
              zoomStep === EUCLID_STEPS.length - 1 ? 'opacity-30 cursor-not-allowed bg-slate-900/50' : 'bg-slate-900/80 text-white hover:bg-cyan-500 hover:text-black'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

    </section>
  );
};
