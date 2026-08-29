import React, { useState } from 'react';
import { Layers, Sparkles, AlertCircle } from 'lucide-react';

export const GalaxyDefinitionVisualizer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('all');

  const layers = [
    { id: 'stars', name: 'STARS & PLANETS', desc: '100B to 1Trillion+ stars orbiting in disk and bulge populations.', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' },
    { id: 'gas', name: 'COLD GAS & NEBULAE', desc: 'Atomic & molecular hydrogen (H I & H₂ clouds) acting as star nurseries.', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/30' },
    { id: 'dust', name: 'INTERSTELLAR DUST', desc: 'Microscopic carbon and silicate grains blocking visible light and reradiating in infrared.', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' },
    { id: 'darkmatter', name: 'DARK MATTER HALO', desc: 'Massive invisible halo extending beyond visible stars, providing ~80%+ of total gravitational mass.', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
    { id: 'blackhole', name: 'CENTRAL SUPERMASSIVE BLACK HOLE', desc: 'Harbored at galactic nucleus (millions to billions of M☉). Tiny physical size relative to galaxy.', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' }
  ];

  return (
    <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#03081a] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTION 04 · SCIENTIFIC DEFINITION
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-cyan-400" />
            <span>WHAT IS A GALAXY?</span>
          </h2>
        </div>

        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-white/10">
          Gravitationally Bound Cosmic System
        </span>
      </div>

      <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
        A galaxy is an immense, gravitationally bound system composed of <strong>stars, stellar remnants, interstellar gas, cosmic dust, dark matter</strong>, and often a <strong>central supermassive black hole</strong>.
      </p>

      {/* Layer Selector */}
      <div className="flex flex-wrap gap-2 pt-2">
        <button
          onClick={() => setActiveLayer('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
            activeLayer === 'all'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
              : 'bg-slate-900/60 text-slate-400 border border-white/10 hover:text-white'
          }`}
        >
          View All Combined Layers
        </button>
        {layers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setActiveLayer(layer.id)}
            className={`px-3 py-2 rounded-xl text-xs font-mono transition-all ${
              activeLayer === layer.id
                ? `${layer.bg} ${layer.color} font-bold shadow-md`
                : 'bg-slate-900/60 text-slate-400 border border-white/10 hover:text-white'
            }`}
          >
            {layer.name}
          </button>
        ))}
      </div>

      {/* Layer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {layers.map((layer) => {
          const isSelected = activeLayer === 'all' || activeLayer === layer.id;
          return (
            <div
              key={layer.id}
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                isSelected
                  ? `${layer.bg} shadow-lg scale-[1.01]`
                  : 'bg-slate-950/40 border-white/5 opacity-40 grayscale'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs mb-2">
                <span className={`font-bold ${layer.color}`}>{layer.name}</span>
                <Sparkles className={`w-3.5 h-3.5 ${layer.color}`} />
              </div>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {layer.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Scale Caveat Note about Central Black Hole */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-200 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-white block mb-1">CRITICAL SCIENTIFIC SCALE NOTE:</strong>
          Do not visualize the central supermassive black hole as visually dominant compared with the entire galaxy. Although Sagittarius A* has 4.15 million solar masses, its event horizon radius is only ~12 million kilometers—infinitesimal compared to the 100,000 light-year (&gt;9.46 × 10¹⁷ km) span of the Milky Way disk!
        </div>
      </div>
    </section>
  );
};
