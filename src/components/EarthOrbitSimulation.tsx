import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export const EarthOrbitSimulation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<1 | 10 | 100>(1);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 0.5 * speedMultiplier) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying, speedMultiplier]);

  // Calculate season based on angle
  const getSeason = (ang: number) => {
    if (ang >= 45 && ang < 135) return 'Northern Summer / Southern Winter';
    if (ang >= 135 && ang < 225) return 'Autumnal Equinox';
    if (ang >= 225 && ang < 315) return 'Northern Winter / Southern Summer';
    return 'Vernal Equinox';
  };

  return (
    <div className="rounded-2xl glass-panel border border-slate-200 dark:border-white/10 p-6 space-y-6">
      
      {/* Title & Speed Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
            Earth Orbital Mechanics & Seasons Simulator
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-sans mt-0.5">
            Axial tilt (23.44°) relative to the ecliptic plane dictates Earth’s annual solar radiation distribution.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Speed Buttons */}
          <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/15">
            {[1, 10, 100].map((spd) => (
              <button
                key={spd}
                onClick={() => setSpeedMultiplier(spd as 1 | 10 | 100)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  speedMultiplier === spd
                    ? 'bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/15 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Interactive Orbit Graphic */}
      <div className="relative w-full h-[320px] bg-[#030612] rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
        
        {/* Sun in center */}
        <div className="relative z-10 w-14 h-14 rounded-full bg-amber-400 glow-gold animate-pulse flex items-center justify-center font-mono text-[10px] font-bold text-black">
          SUN
        </div>

        {/* Elliptic Orbit Ring */}
        <div className="absolute w-[440px] h-[220px] rounded-full border border-cyan-500/30 border-dashed pointer-events-none" />

        {/* Orbiting Earth */}
        <div
          className="absolute w-[440px] h-[220px] pointer-events-none flex items-center justify-center"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-400 glow-cyan border border-white/40 flex items-center justify-center"
            style={{ transform: `rotate(-${angle}deg) rotate(23.44deg)` }}
          >
            {/* Axis Line */}
            <div className="absolute -top-3 -bottom-3 w-[2px] bg-red-400/80 rotate-[23.44deg]"></div>
            <span className="text-[9px] font-mono font-bold text-slate-950">1y</span>
          </div>
        </div>

        {/* Current Position Tag */}
        <div className="absolute bottom-4 left-4 bg-slate-950/90 px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-300 border border-cyan-500/30">
          Season: <span className="font-bold text-white">{getSeason(angle)}</span>
        </div>

        <div className="absolute bottom-4 right-4 bg-slate-950/90 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 border border-white/10">
          Axial Tilt: <span className="font-bold text-cyan-400">23.44°</span>
        </div>
      </div>

    </div>
  );
};
