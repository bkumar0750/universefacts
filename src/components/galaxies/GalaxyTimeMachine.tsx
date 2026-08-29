import React, { useState } from 'react';
import { Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface TimeStep {
  id: string;
  name: string;
  distance: string;
  lookbackTime: string;
  redshift: string;
  epoch: string;
  image: string;
  exampleGalaxy: string;
  description: string;
  telescope: string;
}

const TIME_STEPS: TimeStep[] = [
  {
    id: 'nearby',
    name: 'NEARBY UNIVERSE',
    distance: '0 - 10 Million Light-Years',
    lookbackTime: 'Present to 10 Million Years Ago',
    redshift: 'z ≈ 0.000',
    epoch: 'Present Cosmic Epoch',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    exampleGalaxy: 'Milky Way, Andromeda (M31), Triangulum (M33)',
    description: 'Fully evolved spiral, barred spiral, and elliptical galaxies with mature stellar populations and established central black holes.',
    telescope: 'Gaia, Ground-Based Observatories'
  },
  {
    id: 'millions',
    name: 'MILLIONS OF LIGHT-YEARS',
    distance: '10 - 100 Million Light-Years',
    lookbackTime: '10 to 100 Million Years Ago',
    redshift: 'z ≈ 0.002 - 0.02',
    epoch: 'Cenozoic Cosmic Era',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    exampleGalaxy: 'Whirlpool (M51), Sombrero (M104), M87 (Virgo Cluster)',
    description: 'Distorted colliding galaxies and grand design spirals showing active gravitational interaction.',
    telescope: 'Hubble Space Telescope, VLT'
  },
  {
    id: 'billions',
    name: 'BILLIONS OF LIGHT-YEARS',
    distance: '1 - 5 Billion Light-Years',
    lookbackTime: '1 to 5 Billion Years Ago',
    redshift: 'z ≈ 0.1 - 0.5',
    epoch: 'Cosmic Noon Transition',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    exampleGalaxy: '3C 273 Quasar, Abell 1689 Gravitational Lenses',
    description: 'Luminous quasars powered by supermassive black hole accretion disks outshining host galaxies.',
    telescope: 'Hubble, Chandra X-Ray Observatory'
  },
  {
    id: 'ten-plus',
    name: '10+ BILLION LIGHT-YEARS',
    distance: '10 - 13 Billion Light-Years',
    lookbackTime: '10 to 13 Billion Years Ago',
    redshift: 'z ≈ 2.0 - 7.0',
    epoch: 'Cosmic Dawn & Peak Starburst Era',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    exampleGalaxy: 'Hubble Ultra Deep Field Galaxies (UDF-430)',
    description: 'Irregular protogalaxies undergoing violent starburst episodes, forming the building blocks of modern spirals.',
    telescope: 'Hubble Ultra Deep Field (HUDF)'
  },
  {
    id: 'early-universe',
    name: 'EARLY UNIVERSE',
    distance: '> 13.3 Billion Light-Years',
    lookbackTime: '13.3+ Billion Years Ago (Big Bang + 300M Yrs)',
    redshift: 'z > 10.0 (z = 11.9 to 13.2)',
    epoch: 'Reionization Epoch / First Stars',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    exampleGalaxy: 'GN-z11, JADES-GS-z14-0 (JWST Record Holder)',
    description: 'Compact primeval starburst knots assembling less than 350 million years after the Big Bang, observed in infrared by JWST.',
    telescope: 'James Webb Space Telescope (JWST)'
  }
];

export const GalaxyTimeMachine: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const step = TIME_STEPS[activeStepIdx];

  return (
    <section id="galaxy-time-machine" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020516] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            EXPERIENCE 03 · SIGNATURE GALAXY TIME MACHINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Clock className="w-6 h-6 text-amber-400" />
            <span>LOOKBACK TIME & COSMIC HISTORY MACHINE</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>NASA HUBBLE & JWST DEEP FIELD DATA</span>
        </div>
      </div>

      {/* Core Concept Callout Banner */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm font-sans text-amber-100 leading-relaxed shadow-lg">
        <strong className="text-amber-300 font-mono block mb-1">THE FUNDAMENTAL LAW OF COSMIC TIME TRAVEL:</strong>
        "The farther away you look into deep space, the farther back in cosmic history you see. Because light travels at ~300,000 km/s, when we observe a galaxy 10 billion light-years away, we see the light that left it 10 billion years ago when the universe was young."
      </div>

      {/* Interactive Time Machine Step Selector */}
      <div className="flex flex-wrap gap-2 pt-2">
        {TIME_STEPS.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setActiveStepIdx(idx)}
            className={`px-4 py-3 rounded-2xl text-xs font-mono transition-all cursor-pointer ${
              activeStepIdx === idx
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold scale-105 shadow-md'
                : 'bg-slate-900/80 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-800'
            }`}
          >
            <div className="text-[10px] text-amber-400">STEP 0{idx + 1}</div>
            <div>{s.name}</div>
          </button>
        ))}
      </div>

      {/* Time Machine Active Step Telemetry Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        
        {/* Left Visual Frame */}
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 flex flex-col justify-end p-5 group min-h-[340px]">
          <img
            src={step.image}
            alt={step.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020516] via-[#020516]/40 to-transparent" />

          <div className="relative z-10 space-y-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300 backdrop-blur-md inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COSMIC EPOCH: {step.epoch}</span>
            </span>

            <h3 className="text-2xl font-display font-bold text-white">{step.name}</h3>
            <p className="text-xs text-slate-300">Target Examples: <strong className="text-amber-300">{step.exampleGalaxy}</strong></p>
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="lg:col-span-6 space-y-4 font-mono text-xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">LOOKBACK TIME METRICS</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">{step.distance}</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mt-2">
              {step.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-900 p-3 rounded-xl border border-white/5 space-y-0.5">
              <span className="text-[10px] text-slate-400 uppercase">LOOKBACK TIME</span>
              <div className="text-sm font-bold text-amber-300">{step.lookbackTime}</div>
            </div>

            <div className="bg-slate-900 p-3 rounded-xl border border-white/5 space-y-0.5">
              <span className="text-[10px] text-slate-400 uppercase">COSMOLOGICAL REDSHIFT</span>
              <div className="text-sm font-bold text-cyan-300">{step.redshift}</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between text-xs">
            <span className="text-slate-400">PRIMARY OBSERVATORY:</span>
            <strong className="text-white font-bold">{step.telescope}</strong>
          </div>
        </div>

      </div>

    </section>
  );
};
