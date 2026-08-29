import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Rocket, Orbit } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 sm:p-12 font-mono relative overflow-hidden">
      
      {/* Deep Space Starfield & Orbit Rings */}
      <div className="absolute inset-0 bg-radial-gradient from-cyan-950/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300">
          <Orbit className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-spin-slow" />
          <span>HTTP STATUS 404 · COSMIC DEEP FIELD OUT-OF-BOUNDS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          YOU'VE TRAVELED BEYOND THE MAP.
        </h1>

        <p className="text-sm sm:text-base font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
          The orbital coordinates or scientific dataset you requested do not exist in the observable UniverseFact atlas.
        </p>

        {/* CTA Controls */}
        <div className="flex flex-wrap justify-center gap-4 pt-4 text-xs font-bold">
          <Link
            to="/"
            className="px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>GO HOME</span>
          </Link>

          <Link
            to="/universe"
            className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-cyan-800 dark:text-cyan-300 border border-slate-200 dark:border-white/10 flex items-center gap-2 transition-all"
          >
            <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>EXPLORE UNIVERSE</span>
          </Link>

          <Link
            to="/missions"
            className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-purple-800 dark:text-purple-300 border border-slate-200 dark:border-white/10 flex items-center gap-2 transition-all"
          >
            <Rocket className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>EXPLORE MISSIONS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
