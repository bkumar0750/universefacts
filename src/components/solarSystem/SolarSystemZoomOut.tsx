import React, { useState } from 'react';
import { ZoomOut, ChevronRight, Layers } from 'lucide-react';
import { SOLAR_SYSTEM_ZOOM_STAGES } from '../../data/solarSystemData';

export const SolarSystemZoomOut: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const currentStage = SOLAR_SYSTEM_ZOOM_STAGES[activeStageIndex];

  return (
    <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-6 shadow-xl">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 text-purple-800 dark:text-purple-300">
            <ZoomOut className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>THE FIRST WOW MOMENT · CONTINUOUS ZOOM-OUT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            THIS IS MUCH BIGGER THAN THE PLANETS.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            Zoom continuously outward from the Sun to the outer boundary of the Oort Cloud nearly 2 light-years away.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-500">Stage:</span>
          <span className="font-bold text-cyan-700 dark:text-cyan-300 bg-slate-100 dark:bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10">
            {activeStageIndex + 1} / {SOLAR_SYSTEM_ZOOM_STAGES.length}
          </span>
        </div>
      </div>

      {/* Stage Selector Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-7 gap-2">
        {SOLAR_SYSTEM_ZOOM_STAGES.map((stage, idx) => (
          <button
            key={stage.id}
            onClick={() => setActiveStageIndex(idx)}
            className={`p-3 rounded-2xl text-xs font-mono text-left transition-all border ${
              activeStageIndex === idx
                ? 'bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border-cyan-600 dark:border-cyan-500/60 font-bold shadow-md'
                : 'bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-cyan-500/40'
            }`}
          >
            <span className="text-[10px] block opacity-75">STAGE 0{idx + 1}</span>
            <span className="font-bold truncate block">{stage.name.split('. ')[1]}</span>
          </button>
        ))}
      </div>

      {/* Active Stage Interactive Telemetry Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-cyan-500/30 bg-slate-50 dark:bg-slate-950/90 text-slate-900 dark:text-white space-y-6 animate-fade-in-up">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-bold tracking-widest block">
              CURRENT ZOOM STAGE SCALE
            </span>
            <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
              {currentStage.name}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <div className="bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-white/10">
              <span className="text-slate-500 block text-[10px]">DISTANCE FROM SUN</span>
              <strong className="text-amber-700 dark:text-amber-300">{currentStage.distanceAU} ({currentStage.distanceKM})</strong>
            </div>

            <div className="bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-white/10">
              <span className="text-slate-500 block text-[10px]">LIGHT TRAVEL TIME</span>
              <strong className="text-emerald-700 dark:text-emerald-300">{currentStage.lightTime}</strong>
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-base font-sans text-slate-800 dark:text-slate-200 leading-relaxed">
          {currentStage.description}
        </p>

        {/* Key Celestial Objects in this Stage */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold uppercase block">
            KEY CELESTIAL OBJECTS & STRUCTURES IN THIS STAGE:
          </span>
          <div className="flex flex-wrap gap-2">
            {currentStage.keyObjects.map((obj, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-sm flex items-center gap-1.5"
              >
                <Layers className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                <span>{obj}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Step CTA */}
        <div className="flex justify-between items-center pt-2">
          <button
            disabled={activeStageIndex === 0}
            onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-300 dark:hover:bg-white/20 transition-all"
          >
            ← Previous Zoom Stage
          </button>

          <button
            disabled={activeStageIndex === SOLAR_SYSTEM_ZOOM_STAGES.length - 1}
            onClick={() => setActiveStageIndex((prev) => Math.min(SOLAR_SYSTEM_ZOOM_STAGES.length - 1, prev + 1))}
            className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-cyan-500 transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Zoom Out Next Stage</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
};
