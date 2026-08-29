import React, { useState } from 'react';
import { ZoomIn, ShieldCheck, Database } from 'lucide-react';

export const FirstWowZoom: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(0);

  const zoomLevels = [
    {
      title: 'Solar System Scale',
      scale: '100 AU (~15 Billion km)',
      desc: 'Our Solar System houses Earth, 7 sibling planets, and the Kuiper Belt. In galactic terms, it is an infinitesimal dot.',
      radiusRatio: '0.0000001% of Milky Way Disk'
    },
    {
      title: 'Local Stellar Neighborhood',
      scale: '30 Light-Years',
      desc: 'Contains our nearest stellar neighbors like Alpha Centauri, Sirius, and Proxima Centauri.',
      radiusRatio: '0.03% of Milky Way Disk'
    },
    {
      title: 'Orion-Cygnus Arm Region',
      scale: '10,000 Light-Years',
      desc: 'Our minor spiral arm location, situated between the Sagittarius and Perseus arms of the Milky Way.',
      radiusRatio: '10% of Milky Way Radius'
    },
    {
      title: 'Milky Way Galaxy Disk',
      scale: '100,000+ Light-Years',
      desc: 'A vast rotating disk of 100–400 billion stars, gas clouds, and central supermassive black hole Sagittarius A*.',
      radiusRatio: '100% Full Galactic Extent'
    }
  ];

  return (
    <section id="first-wow" className="space-y-6 animate-fade-in-up">
      {/* Wow Card Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#03081c] space-y-6 relative overflow-hidden shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              WOW MOMENT 01 · GALAXY IMMERSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              YOU ARE INSIDE A GALAXY.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>VERIFIED SOURCE: NASA</span>
          </div>
        </div>

        {/* Narrative Callout */}
        <p className="text-base sm:text-lg text-cyan-100 font-sans leading-relaxed">
          "Your entire Solar System is a tiny part of one galaxy. NASA describes the Milky Way as a barred spiral galaxy with a stellar disk spanning more than 100,000 light-years. The Solar System takes roughly 240 million years to complete a single orbit around the galactic center."
        </p>

        {/* Interactive Scale Zoom Slider */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-bold flex items-center gap-2">
              <ZoomIn className="w-4 h-4 text-cyan-400" />
              <span>Interactive Scale Zoom Level ({zoomLevel + 1} / 4)</span>
            </span>
            <span className="text-cyan-400 font-bold">{zoomLevels[zoomLevel].scale}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {zoomLevels.map((lvl, idx) => (
              <button
                key={idx}
                onClick={() => setZoomLevel(idx)}
                className={`p-3 rounded-xl text-left text-xs font-mono transition-all ${
                  zoomLevel === idx
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                    : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-900'
                }`}
              >
                <div className="text-[10px] text-cyan-400">{lvl.scale}</div>
                <div className="font-bold text-white mt-0.5">{lvl.title}</div>
              </button>
            ))}
          </div>

          {/* Graphical Representation Box */}
          <div className="relative h-64 bg-[#020512] rounded-2xl border border-cyan-500/30 flex items-center justify-center p-6 text-center overflow-hidden">
            {/* Concentric rings visualization */}
            <div 
              className="absolute rounded-full border border-cyan-500/40 transition-all duration-700 flex items-center justify-center"
              style={{
                width: `${(zoomLevel + 1) * 22}%`,
                height: `${(zoomLevel + 1) * 22}%`,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.15)'
              }}
            >
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping opacity-40" />
            </div>

            <div className="relative z-10 max-w-lg space-y-2 bg-slate-950/80 p-4 rounded-xl border border-white/10 backdrop-blur-md">
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                {zoomLevels[zoomLevel].title}
              </span>
              <h3 className="text-xl font-display font-bold text-white">
                {zoomLevels[zoomLevel].scale}
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {zoomLevels[zoomLevel].desc}
              </p>
              <div className="text-[11px] font-mono text-cyan-300 pt-1">
                Relative Extent: <strong>{zoomLevels[zoomLevel].radiusRatio}</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Telemetry Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
          <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase">Milky Way Disk Diameter</span>
            <div className="text-sm font-bold text-cyan-300">&gt; 100,000 Light-Years</div>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase">Galactic Orbit Period</span>
            <div className="text-sm font-bold text-amber-300">~240 Million Years</div>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-xl border border-white/5 space-y-1">
            <span className="text-[10px] text-slate-400 uppercase">Primary Source</span>
            <div className="text-sm font-bold text-emerald-300 flex items-center gap-1">
              <Database className="w-3.5 h-3.5" />
              <span>NASA Astrophysics Data System</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
