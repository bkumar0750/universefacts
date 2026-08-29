import React, { useState } from 'react';
import { Rocket, Radio, ShieldCheck, ArrowRight, Compass } from 'lucide-react';

export const MissionHero: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const STEPS = [
    { title: '1. EARTH', desc: 'Humanity builds instruments, crafts payload, and fuels launch vehicles at ground facilities.' },
    { title: '2. ROCKET LAUNCH', desc: 'Powerful propulsion engines ignite, achieving escape velocity into Earth orbit.' },
    { title: '3. SEPARATION', desc: 'Payload fairings jettison and upper stage separates, placing spacecraft on interplanetary velocity vector.' },
    { title: '4. TRAJECTORY', desc: 'Deep-space cruise using gravity assists, ion thrusters, or ballistic coasting trajectories.' },
    { title: '5. DESTINATION', desc: 'Orbit insertion, soft landing, or lagrange point halo stationkeeping.' },
    { title: '6. DISCOVERY', desc: 'Scientific sensors process photons, particles, and fields into transformative discoveries.' }
  ];

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative rounded-3xl overflow-hidden bg-white/95 dark:bg-slate-950 text-slate-900 dark:text-white p-6 sm:p-12 border border-slate-200 dark:border-cyan-500/40 shadow-2xl space-y-8 animate-fade-in transition-colors duration-300">
      
      {/* Background Starfield and Orbital Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-slate-100 to-white dark:from-cyan-950/40 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4 font-mono text-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300 font-bold">
          <Rocket className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 animate-pulse" />
          <span>AUTHORITATIVE SPACE MISSION ATLAS · 2026 EDITION</span>
        </div>

        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
          <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>NASA / ISRO / ESA VERIFIED</span>
          </span>
        </div>
      </div>

      {/* Hero Title & Subtitle */}
      <div className="relative z-10 space-y-4 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          SPACE MISSIONS
        </h1>
        <p className="text-lg sm:text-xl font-sans text-cyan-800 dark:text-cyan-200/90 leading-relaxed font-light italic">
          "Every mission changes what humanity knows about the cosmos."
        </p>
        <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
          Follow humanity's robotic and crewed voyages across the Solar System and deep cosmos—from launch pad liftoff to instrument data reduction and groundbreaking discoveries.
        </p>
      </div>

      {/* Interactive Hero Journey Ribbon */}
      <div className="relative z-10 space-y-3 font-mono">
        <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2">
          <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>INTERACTIVE MISSION LIFECYCLE SEQUENCE (CLICK A STEP)</span>
        </div>

        {/* Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {STEPS.map((step, idx) => (
            <button
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold scale-105 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/5 hover:text-slate-950 dark:hover:text-white hover:border-cyan-500/40'
              }`}
            >
              <div className="text-[10px] text-cyan-700 dark:text-cyan-400 font-bold">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Active Step Details Banner */}
        <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 text-xs font-sans text-slate-800 dark:text-slate-200 flex items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase block">{STEPS[activeStep].title}</span>
            <p>{STEPS[activeStep].desc}</p>
          </div>
          <ArrowRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 hidden sm:block" />
        </div>
      </div>

      {/* Hero CTA Controls */}
      <div className="relative z-10 pt-2 flex flex-wrap items-center gap-3 font-mono text-xs">
        <button
          onClick={() => scrollToId('mission-cards')}
          className="px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all cursor-pointer shadow-lg shadow-cyan-500/20 flex items-center gap-2"
        >
          <span>EXPLORE MISSIONS</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => scrollToId('isro-space-hub')}
          className="px-5 py-3 rounded-xl bg-orange-50 dark:bg-orange-500/20 hover:bg-orange-100 dark:hover:bg-orange-500/30 text-orange-900 dark:text-orange-300 border border-orange-300 dark:border-orange-500/40 font-bold transition-all cursor-pointer flex items-center gap-2 shadow-xs"
        >
          <span>🇮🇳 ISRO INDIA IN SPACE</span>
        </button>

        <button
          onClick={() => scrollToId('spacecraft-3d-viewer')}
          className="px-5 py-3 rounded-xl bg-purple-50 dark:bg-purple-500/20 hover:bg-purple-100 dark:hover:bg-purple-500/30 text-purple-900 dark:text-purple-300 border border-purple-300 dark:border-purple-500/40 font-bold transition-all cursor-pointer flex items-center gap-2 shadow-xs"
        >
          <span>🛰️ SPACECRAFT 3D ANATOMY</span>
        </button>

        <button
          onClick={() => scrollToId('mission-control-telemetry')}
          className="px-5 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 hover:bg-emerald-100 dark:hover:bg-emerald-500/30 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 font-bold transition-all cursor-pointer flex items-center gap-2 shadow-xs"
        >
          <Radio className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
          <span>📡 LIVE MISSION COMMAND</span>
        </button>
      </div>

    </section>
  );
};
