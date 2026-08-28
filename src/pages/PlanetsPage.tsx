import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { planetsData } from '../data/planetsData';
import { Disc, ArrowRight, GitCompare, Box, Sparkles } from 'lucide-react';

export const PlanetsPage: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');

  const categories = ['All', 'Terrestrial', 'Gas Giant', 'Ice Giant', 'Dwarf Planet'];

  const filteredPlanets = planetsData.filter((p) =>
    filterType === 'All' ? true : p.type === filterType
  );

  return (
    <div className="space-y-10 pb-12">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 animate-fade-in-up">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-300">
            <Disc className="w-3.5 h-3.5" />
            <span>SOLAR SYSTEM CATALOG & PLANETARY TILES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
            Planets & Dwarf Worlds
          </h1>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
            Explore detailed world profiles, physical & orbital parameters, composition layers, and interactive 3D WebGL models for every world in our Solar System.
          </p>
        </div>

        <Link
          to="/planet-compare"
          className="flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 hover:scale-105 transition-all shadow-xl self-start md:self-auto shrink-0"
        >
          <GitCompare className="w-4 h-4" />
          <span>Launch Planet Comparison Tool</span>
        </Link>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 animate-fade-in-up delay-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterType(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              filterType === cat
                ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat} {cat === 'All' ? `(${planetsData.length})` : ''}
          </button>
        ))}
      </div>

      {/* PLANET TILES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up delay-200">
        {filteredPlanets.map((planet, idx) => (
          <Link
            key={planet.id}
            to={`/planets/${planet.id}`}
            className="glass-panel group rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 glass-panel-hover flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            style={{ animationDelay: `${idx * 40}ms` }}
          >
            {/* Planet Image Header Tile */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
              <img
                src={planet.image}
                alt={planet.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Category Badge & 3D Ready pill */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <span className="text-[10px] font-mono font-bold text-cyan-300 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/40">
                  {planet.type}
                </span>

                <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/40">
                  <Box className="w-3 h-3 text-emerald-400" />
                  <span>3D READY</span>
                </span>
              </div>

              {/* Planet Title overlay on image */}
              <div className="absolute bottom-3 left-4 right-4 z-10">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors drop-shadow-md">
                  {planet.name}
                </h3>
                <p className="text-xs text-slate-300 font-sans line-clamp-1 opacity-90">
                  {planet.subtitle}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed line-clamp-3">
                {planet.summary}
              </p>

              {/* Key Specs Table Tile */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono p-3 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/8 text-slate-600 dark:text-slate-400">
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-500 uppercase">Diameter</span>
                  <strong className="text-slate-900 dark:text-white font-bold">{planet.physical.diameter}</strong>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-500 uppercase">Distance</span>
                  <strong className="text-cyan-700 dark:text-cyan-300 font-bold">{planet.orbit.distanceFromSun}</strong>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-500 uppercase">Day Length</span>
                  <strong className="text-slate-900 dark:text-white font-bold">{planet.orbit.dayLength}</strong>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-500 uppercase">Moons</span>
                  <strong className="text-emerald-700 dark:text-emerald-300 font-bold">{planet.moonCount}</strong>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="flex items-center justify-between text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold pt-2 group-hover:translate-x-1 transition-transform">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  View 3D Model & Full Profile
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};
