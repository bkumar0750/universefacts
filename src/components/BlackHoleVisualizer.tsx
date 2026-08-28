import React, { useState } from 'react';
import { Flame, Info } from 'lucide-react';

export const BlackHoleVisualizer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'horizon' | 'disk' | 'photon' | 'singularity'>('disk');

  const layerInfo = {
    disk: {
      title: 'Accretion Disk',
      desc: 'Superheated plasma, gas, and dust orbiting the black hole at relativistic speeds, emitting extreme X-rays and visible light due to intense friction.',
      color: 'border-amber-500 text-amber-300'
    },
    photon: {
      title: 'Photon Sphere',
      desc: 'A spherical boundary (1.5x the Schwarzschild radius) where gravity is so strong that photons are forced to travel in orbits around the black hole.',
      color: 'border-cyan-500 text-cyan-300'
    },
    horizon: {
      title: 'Event Horizon (Not a Physical Surface!)',
      desc: 'The point of no return. The escape velocity exceeds the speed of light. Anything passing this threshold can never escape to the outer universe.',
      color: 'border-violet-500 text-violet-300'
    },
    singularity: {
      title: 'Gravitational Singularity',
      desc: 'The zero-volume point of infinite density at the center where current general relativity equations break down.',
      color: 'border-red-500 text-red-300'
    }
  };

  return (
    <div className="rounded-2xl glass-panel border border-white/10 p-6 space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            <span>Interactive Black Hole Structure & Gravitational Lensing</span>
          </h3>
          <p className="text-xs text-slate-400 font-sans mt-0.5">
            Click layers to inspect physical boundaries. Note: Event Horizon is a boundary in spacetime, not a solid object surface!
          </p>
        </div>
      </div>

      {/* Layer selector tabs */}
      <div className="flex flex-wrap gap-2">
        {(['disk', 'photon', 'horizon', 'singularity'] as const).map((layer) => (
          <button
            key={layer}
            onClick={() => setActiveLayer(layer)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeLayer === layer
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg'
                : 'text-slate-400 hover:text-white bg-white/5 border border-transparent'
            }`}
          >
            {layer.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Visual Canvas Rendering */}
      <div className="relative w-full h-[320px] bg-[#020308] rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
        
        {/* Accretion Disk Lensing Ring */}
        <div
          className={`absolute rounded-full border-4 border-amber-500/80 glow-gold transition-all duration-300 ${
            activeLayer === 'disk' ? 'scale-110 shadow-[0_0_80px_rgba(245,158,11,0.8)]' : 'opacity-60'
          }`}
          style={{ width: 280, height: 100, transform: 'rotateX(75deg)' }}
        />

        {/* Photon Sphere Ring */}
        <div
          className={`absolute rounded-full border-2 border-cyan-400/90 border-dashed transition-all duration-300 ${
            activeLayer === 'photon' ? 'scale-110 shadow-[0_0_50px_rgba(56,189,248,0.9)]' : 'opacity-40'
          }`}
          style={{ width: 190, height: 190 }}
        />

        {/* Event Horizon Black Sphere */}
        <div
          className={`relative z-20 rounded-full bg-black border-2 border-white/20 transition-all duration-300 flex items-center justify-center ${
            activeLayer === 'horizon' ? 'border-violet-400 shadow-[0_0_40px_rgba(139,92,246,0.9)]' : ''
          }`}
          style={{ width: 130, height: 130 }}
        >
          {/* Singularity Core */}
          <div
            className={`w-3 h-3 rounded-full bg-white animate-ping transition-all ${
              activeLayer === 'singularity' ? 'scale-150 bg-red-400' : ''
            }`}
          />
        </div>

        {/* Selected Layer Info Overlay */}
        <div className="absolute bottom-3 left-3 right-3 glass-panel p-3 rounded-xl border border-white/10 bg-slate-900/90">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300">
            <Info className="w-4 h-4 text-cyan-400" />
            <span>{layerInfo[activeLayer].title}</span>
          </div>
          <p className="text-xs text-slate-300 mt-1 font-sans">
            {layerInfo[activeLayer].desc}
          </p>
        </div>

      </div>

    </div>
  );
};
