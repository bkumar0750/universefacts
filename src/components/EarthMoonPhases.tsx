import React, { useState } from 'react';
import { Moon as MoonIcon, Sun } from 'lucide-react';

export const EarthMoonPhases: React.FC = () => {
  const [phaseValue, setPhaseValue] = useState(0); // 0 to 100

  const getPhaseName = (val: number) => {
    if (val < 5 || val > 95) return 'New Moon (Sunlight directly behind Moon)';
    if (val >= 5 && val < 20) return 'Waxing Crescent';
    if (val >= 20 && val < 30) return 'First Quarter (Half Illuminated)';
    if (val >= 30 && val < 45) return 'Waxing Gibbous';
    if (val >= 45 && val < 55) return 'Full Moon (Direct Earth Facing Illumination)';
    if (val >= 55 && val < 70) return 'Waning Gibbous';
    if (val >= 70 && val < 80) return 'Third Quarter';
    return 'Waning Crescent';
  };

  return (
    <div className="rounded-2xl glass-panel border border-slate-200 dark:border-white/10 p-6 space-y-6">
      
      <div>
        <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <MoonIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Interactive Earth–Moon Phase & Orbit Explorer</span>
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-300 font-sans mt-0.5">
          Drag the timeline slider to simulate the Moon’s 27.3-day synchronous orbit around Earth and observe changing lunar illumination.
        </p>
      </div>

      {/* Phase Slider Controls */}
      <div className="space-y-3 bg-slate-100 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-white/10">
        <div className="flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-300">
          <span>Orbital Progress (0% to 100%)</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">{getPhaseName(phaseValue)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={phaseValue}
          onChange={(e) => setPhaseValue(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
        <div className="flex justify-between text-[10px] font-mono text-slate-600 dark:text-slate-400 font-semibold">
          <span>New Moon</span>
          <span>1st Quarter</span>
          <span>Full Moon</span>
          <span>3rd Quarter</span>
          <span>New Moon</span>
        </div>
      </div>

      {/* Visual Simulation Display */}
      <div className="relative w-full h-[220px] bg-[#030612] rounded-xl border border-white/10 flex items-center justify-around p-4 overflow-hidden">
        
        {/* Sun directional indicator */}
        <div className="flex flex-col items-center gap-1 text-amber-400">
          <Sun className="w-10 h-10 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase">Sunlight Rays</span>
        </div>

        {/* Center Earth */}
        <div className="relative flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-500 glow-cyan border border-white/30 flex items-center justify-center font-mono text-[10px] font-bold text-slate-950">
            EARTH
          </div>
          <span className="text-[10px] font-mono text-slate-400 mt-1">384,400 km</span>
        </div>

        {/* Moon Sphere with Dynamic Shadow */}
        <div className="flex flex-col items-center">
          <div
            className="w-12 h-12 rounded-full border border-white/40 shadow-2xl relative overflow-hidden transition-all duration-200"
            style={{
              background: `linear-gradient(90deg, #e2e8f0 ${100 - phaseValue}%, #0f172a ${phaseValue}%)`
            }}
          />
          <span className="text-[10px] font-mono text-cyan-300 font-bold mt-1">
            {getPhaseName(phaseValue).split(' ')[0]} Moon
          </span>
        </div>

      </div>

    </div>
  );
};
