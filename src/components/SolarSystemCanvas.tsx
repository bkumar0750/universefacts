import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { planetsData } from '../data/planetsData';

export const SolarSystemCanvas: React.FC = () => {
  const [scaleMode, setScaleMode] = useState<'visual' | 'realistic'>('visual');
  const [isAnimating, setIsAnimating] = useState(true);
  const navigate = useNavigate();

  // Orbital Radius Scaling
  const planetOrbits = [
    { id: 'mercury', name: 'Mercury', color: '#a1a1aa', visualRadius: 65, realAU: 0.39, speed: 4.1 },
    { id: 'venus', name: 'Venus', color: '#fde047', visualRadius: 100, realAU: 0.72, speed: 1.6 },
    { id: 'earth', name: 'Earth', color: '#38bdf8', visualRadius: 140, realAU: 1.0, speed: 1.0 },
    { id: 'mars', name: 'Mars', color: '#f97316', visualRadius: 180, realAU: 1.52, speed: 0.53 },
    { id: 'jupiter', name: 'Jupiter', color: '#eab308', visualRadius: 240, realAU: 5.2, speed: 0.08 },
    { id: 'saturn', name: 'Saturn', color: '#fbbf24', visualRadius: 290, realAU: 9.58, speed: 0.034 },
    { id: 'uranus', name: 'Uranus', color: '#22d3ee', visualRadius: 340, realAU: 19.2, speed: 0.012 },
    { id: 'neptune', name: 'Neptune', color: '#818cf8', visualRadius: 390, realAU: 30.1, speed: 0.006 }
  ];

  return (
    <div className="relative w-full rounded-2xl glass-panel border border-white/10 p-6 overflow-hidden">
      
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 z-20 relative">
        <div>
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Interactive Solar System Explorer</span>
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-0.5">
            {scaleMode === 'visual'
              ? 'Visual Scale Mode (Orbits and planet spacing adjusted for interactive exploration)'
              : 'Realistic AU Scale Mode (True relative distance proportions from the Sun)'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Scale Toggle */}
          <div className="flex items-center p-1 rounded-xl glass-panel bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/15">
            <button
              onClick={() => setScaleMode('visual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                scaleMode === 'visual' ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 font-bold' : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Visual Scale
            </button>
            <button
              onClick={() => setScaleMode('realistic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                scaleMode === 'realistic' ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 font-bold' : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Realistic Scale
            </button>
          </div>

          {/* Animation Play/Pause */}
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="p-2 rounded-xl glass-panel bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            title="Toggle Orbital Animation"
          >
            {isAnimating ? <Pause className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> : <Play className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* Solar System Orbit Map */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden bg-[#03050c] rounded-xl border border-white/5">
        
        {/* Starfield background */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Central Sun */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-orange-500 glow-gold animate-pulse flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.8)]">
            <span className="text-[10px] font-mono font-extrabold text-slate-950 uppercase">SUN</span>
          </div>
        </div>

        {/* Asteroid Belt Ring */}
        <div
          className="absolute rounded-full border border-dashed border-amber-500/30 pointer-events-none"
          style={{ width: 420, height: 420 }}
        >
          <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] font-mono text-amber-400/60 uppercase">
            Main Asteroid Belt
          </span>
        </div>

        {/* Kuiper Belt Outer Ring */}
        <div
          className="absolute rounded-full border border-dashed border-cyan-500/20 pointer-events-none"
          style={{ width: 850, height: 850 }}
        >
          <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-cyan-400/50 uppercase">
            Kuiper Belt
          </span>
        </div>

        {/* Planetary Orbits */}
        {planetOrbits.map((p) => {
          const radius = scaleMode === 'visual' ? p.visualRadius * 2 : Math.min(800, p.realAU * 26 + 120);

          return (
            <div
              key={p.id}
              className="absolute rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400/40 transition-colors pointer-events-none"
              style={{ width: radius, height: radius }}
            >
              {/* Orbiting Planet Body */}
              <div
                className={`absolute w-full h-full pointer-events-auto ${
                  isAnimating ? 'animate-orbit' : ''
                }`}
                style={{ animationDuration: `${(1 / p.speed) * 40}s` }}
              >
                <button
                  onClick={() => {
                    navigate(`/planets/${p.id}`);
                  }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 group flex flex-col items-center cursor-pointer"
                  title={`View ${p.name} detail`}
                >
                  {/* Planet Sphere */}
                  <div
                    className="w-6 h-6 rounded-full border border-white/20 group-hover:scale-125 transition-transform flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: p.color, boxShadow: `0 0 12px ${p.color}` }}
                  />

                  {/* Name Label */}
                  <span className="mt-1 text-[10px] font-mono font-semibold text-slate-200 group-hover:text-cyan-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-white/10">
                    {p.name}
                  </span>
                </button>
              </div>
            </div>
          );
        })}

      </div>

      {/* Quick Select Planet Bar */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs font-mono text-slate-600 dark:text-slate-400 mr-2 font-semibold">Jump to Planet:</span>
        {planetsData.slice(0, 8).map((planet) => (
          <button
            key={planet.id}
            onClick={() => navigate(`/planets/${planet.id}`)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-button text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 hover:border-cyan-500/40 transition-all font-medium"
          >
            <span>{planet.name}</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </button>
        ))}
      </div>

    </div>
  );
};
