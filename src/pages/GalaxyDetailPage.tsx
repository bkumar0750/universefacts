import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { galaxiesData } from '../data/galaxiesData';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import { SourceBadge } from '../components/SourceBadge';

export const GalaxyDetailPage: React.FC = () => {
  const { galaxyId } = useParams<{ galaxyId: string }>();
  const navigate = useNavigate();

  const galaxy = galaxiesData.find((g) => g.id.toLowerCase() === (galaxyId || 'milky-way').toLowerCase()) || galaxiesData[0];
  const [zoomStep, setZoomStep] = useState<number>(0);

  const zoomSteps = [
    { title: '1. Planet Earth', scale: '12,742 km', desc: 'Our blue home planet orbiting a single star inside the Orion-Cygnus spur.' },
    { title: '2. Solar System', scale: '100 AU (~15 billion km)', desc: 'Sun + 8 major planets + Kuiper Belt orbiting the Galactic Center every 230M years.' },
    { title: '3. Local Stellar Neighborhood', scale: '30 Light Years', desc: 'Solar neighborhood including Alpha Centauri (4.2 ly), Sirius, Vega, and Proxima.' },
    { title: '4. Milky Way Barred Spiral Galaxy', scale: '100,000 Light Years', desc: 'Barred spiral galaxy harboring 100-400 billion stars and central supermassive black hole Sagittarius A*.' }
  ];

  return (
    <div className="space-y-10 pb-12">
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/galaxies')}
        className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Galaxies Catalog</span>
      </button>

      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
            {galaxy.type} GALAXY
          </span>
          <SourceBadge sources={galaxy.sources} />
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
          {galaxy.name}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 font-sans max-w-3xl leading-relaxed">
          {galaxy.description}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono pt-4 border-t border-white/10">
          <div>Distance: <strong className="text-white block">{galaxy.distance}</strong></div>
          <div>Diameter: <strong className="text-cyan-300 block">{galaxy.diameter}</strong></div>
          <div>Stars: <strong className="text-amber-300 block">{galaxy.starCountEstimate}</strong></div>
          <div>Center Core: <strong className="text-purple-300 block">Sagittarius A* (4.1M M☉)</strong></div>
        </div>
      </div>

      {/* ZOOMABLE SCALE MAP EXPERIENTIAL SECTION */}
      <section className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
            <ZoomIn className="w-5 h-5 text-cyan-400" />
            <span>Zoomable Cosmic Perspective Map</span>
          </h2>
          <span className="text-xs font-mono text-cyan-300">Click steps to zoom outwards</span>
        </div>

        {/* Step Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {zoomSteps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setZoomStep(idx)}
              className={`p-3 rounded-xl text-left text-xs font-mono transition-all ${
                zoomStep === idx
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                  : 'glass-button text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-[10px] text-slate-400">{step.scale}</div>
              <div className="font-bold text-white text-xs mt-0.5">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Zoom Display Frame */}
        <div className="relative w-full h-[300px] bg-[#030612] rounded-xl border border-white/10 flex items-center justify-center p-6 text-center overflow-hidden">
          <div className="max-w-xl space-y-3 z-10">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              Scale Level {zoomStep + 1} / 4 • {zoomSteps[zoomStep].scale}
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              {zoomSteps[zoomStep].title}
            </h3>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              {zoomSteps[zoomStep].desc}
            </p>
          </div>
        </div>
      </section>

      {/* NOTABLE FEATURES */}
      <section className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
        <h2 className="text-xl font-display font-bold text-white">Notable Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {galaxy.notableFeatures.map((feat, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl border border-white/10 text-xs font-mono text-cyan-300">
              • {feat}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
