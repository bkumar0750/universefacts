import React, { useState } from 'react';
import { Earth3DCanvas } from '../components/Earth3DCanvas';
import { EarthGeographicMap } from '../components/EarthGeographicMap';
import { EarthOrbitSimulation } from '../components/EarthOrbitSimulation';
import { EarthMoonPhases } from '../components/EarthMoonPhases';
import { SourceBadge } from '../components/SourceBadge';
import { planetsData } from '../data/planetsData';
import { Globe, Layers, ShieldCheck, PieChart } from 'lucide-react';

export const EarthPage: React.FC = () => {
  const earth = planetsData.find((p) => p.id === 'earth')!;
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);

  const surfaceBreakdown = [
    { label: 'Oceans & Seas', percentage: 70.8, color: '#0284c7' },
    { label: 'Continents & Landmass', percentage: 29.2, color: '#16a34a' },
    { label: 'Forest Cover', percentage: 9.4, color: '#15803d' },
    { label: 'Deserts & Arid Land', percentage: 6.1, color: '#d97706' },
    { label: 'Ice Sheets & Glaciers', percentage: 3.1, color: '#0284c7' }
  ];

  return (
    <div className="space-y-12 pb-12">
      
      {/* HERO SECTION WITH 3D WEBGL EARTH */}
      <section className="space-y-6 animate-fade-in-up">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
              <Globe className="w-3.5 h-3.5" />
              <span>TERRESTRIAL PLANET • SOLAR SYSTEM</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white mt-2 leading-tight">
              Planet Earth (Luna System)
            </h1>
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-sans max-w-2xl mt-1 leading-relaxed">
              {earth.summary}
            </p>
          </div>

          <SourceBadge sources={earth.sources} />
        </div>

        {/* 3D WebGL Photorealistic Earth Canvas with Interactive Hotspot Pins & Telemetry Overlay */}
        <Earth3DCanvas interactiveControls={true} className="w-full h-[520px] sm:h-[620px]" />
      </section>

      {/* INTERACTIVE SATELLITE MAP & LANDMARK INSPECTOR */}
      <EarthGeographicMap />

      {/* DASHBOARD BASIC FACTS */}
      <section className="space-y-4 animate-fade-in-up delay-100">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>Physical & Orbital Properties Dashboard</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-xs">
          <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-slate-600 dark:text-slate-400 text-[10px] uppercase font-semibold">Mean Diameter</span>
            <div className="text-sm font-bold text-slate-900 dark:text-white">{earth.physical.diameter}</div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-slate-600 dark:text-slate-400 text-[10px] uppercase font-semibold">Mass</span>
            <div className="text-sm font-bold text-cyan-700 dark:text-cyan-300">{earth.physical.mass}</div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-slate-600 dark:text-slate-400 text-[10px] uppercase font-semibold">Surface Gravity</span>
            <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300">{earth.physical.gravity}</div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-slate-600 dark:text-slate-400 text-[10px] uppercase font-semibold">Mean Temp</span>
            <div className="text-sm font-bold text-amber-700 dark:text-amber-300">{earth.physical.averageTemp}</div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-slate-600 dark:text-slate-400 text-[10px] uppercase font-semibold">Orbital Period</span>
            <div className="text-sm font-bold text-purple-700 dark:text-purple-300">{earth.orbit.orbitalPeriod}</div>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-1">
            <span className="text-slate-600 dark:text-slate-400 text-[10px] uppercase font-semibold">Day Length</span>
            <div className="text-sm font-bold text-slate-900 dark:text-slate-200">{earth.orbit.dayLength}</div>
          </div>
        </div>
      </section>

      {/* COMPOSITION CUTAWAY DIAGRAM */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6 animate-fade-in-up delay-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span>Interactive Geologic Cutaway Diagram</span>
          </h2>
          <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold">Click a layer to inspect</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Layer Rings */}
          <div className="lg:col-span-6 flex items-center justify-center py-6">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {earth.compositionLayers?.map((layer, idx) => {
                const size = 250 - idx * 55;
                const isSelected = selectedLayerIndex === idx;
                return (
                  <button
                    key={layer.name}
                    onClick={() => setSelectedLayerIndex(idx)}
                    className={`absolute rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      isSelected ? 'scale-105 shadow-2xl border-cyan-500 dark:border-white' : 'opacity-80 hover:opacity-100'
                    }`}
                    style={{
                      width: size,
                      height: size,
                      backgroundColor: layer.color + (isSelected ? '44' : '22'),
                      borderColor: layer.color
                    }}
                  >
                    <span className="text-[10px] font-mono font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded border border-white/10">
                      {layer.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Layer Info */}
          <div className="lg:col-span-6 space-y-4">
            {earth.compositionLayers && (
              <div className="glass-panel p-5 rounded-xl border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-slate-900/90 space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {earth.compositionLayers[selectedLayerIndex].name}
                  </h3>
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold">
                    Depth: {earth.compositionLayers[selectedLayerIndex].depth}
                  </span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                  {earth.compositionLayers[selectedLayerIndex].description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* EARTH SURFACE DISTRIBUTION CHART */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <PieChart className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Surface Coverage Distribution</span>
        </h2>

        <div className="space-y-4">
          {surfaceBreakdown.map((item) => (
            <div key={item.label} className="space-y-1 font-mono text-xs">
              <div className="flex justify-between text-slate-700 dark:text-slate-300 font-semibold">
                <span>{item.label}</span>
                <span className="font-bold text-slate-900 dark:text-white">{item.percentage}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROTATION & REVOLUTION SIMULATOR */}
      <EarthOrbitSimulation />

      {/* EARTH-MOON PHASE EXPLORER */}
      <EarthMoonPhases />

      {/* VERIFIED FACTS SECTION */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-4">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Verified Scientific Discoveries & Facts</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {earth.verifiedFacts.map((vf, index) => (
            <div key={index} className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-2">
              <p className="text-sm text-slate-800 dark:text-slate-200 font-sans">"{vf.fact}"</p>
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold flex items-center justify-end gap-1">
                <span>Source: {vf.source.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
