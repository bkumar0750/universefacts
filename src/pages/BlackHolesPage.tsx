import React from 'react';
import { blackHolesData } from '../data/blackHolesData';
import { BlackHoleVisualizer } from '../components/BlackHoleVisualizer';
import { Flame } from 'lucide-react';
import { SourceBadge } from '../components/SourceBadge';

export const BlackHolesPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      
      {/* Header */}
      <div className="space-y-4 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
          <Flame className="w-3.5 h-3.5" />
          <span>EXTREME GRAVITATIONAL ASTROPHYSICS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          Black Holes
        </h1>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Black holes are regions of spacetime where gravity is so strong that nothing—not even light—can escape. They are predicted by Einstein's theory of general relativity and have been confirmed through gravitational wave detections and direct imaging.
        </p>
      </div>

      {/* INTERACTIVE BLACK HOLE STRUCTURE VISUALIZER */}
      <div className="animate-fade-in-up delay-100">
        <BlackHoleVisualizer />
      </div>

      {/* FAMOUS OBSERVED BLACK HOLES GRID */}
      <section className="space-y-6 animate-fade-in-up delay-200">
        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
          Famous Cataloged & Imaged Black Holes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blackHolesData.map((bh, idx) => (
            <div
              key={bh.id}
              className="glass-panel rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col justify-between glass-panel-hover animate-fade-in-up"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {bh.image && (
                <div className="h-44 w-full relative overflow-hidden">
                  <img
                    src={bh.image}
                    alt={bh.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-xs font-mono font-bold text-purple-300 bg-slate-950/80 px-2.5 py-1 rounded-full border border-purple-500/40 backdrop-blur-md">
                      {bh.type}
                    </span>
                    <span className="text-xs font-mono text-white/90 bg-slate-950/80 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md">{bh.distanceFromEarth}</span>
                  </div>
                </div>
              )}

              <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">{bh.name}</h3>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block mt-0.5 font-semibold">{bh.location}</span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-sans mt-2 leading-relaxed">
                    {bh.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-3 border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400">
                  <div>Mass: <strong className="text-slate-900 dark:text-white">{bh.mass}</strong></div>
                  <div>Horizon: <strong className="text-purple-700 dark:text-purple-300">{bh.eventHorizonRadius}</strong></div>
                </div>

                <SourceBadge sources={bh.sources} />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
