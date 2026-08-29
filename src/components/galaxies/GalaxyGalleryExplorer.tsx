import React, { useState } from 'react';
import { Camera, Filter } from 'lucide-react';
import { COMPREHENSIVE_GALAXIES_DATABASE } from '../../data/galaxiesAtlasData';

export const GalaxyGalleryExplorer: React.FC = () => {
  const [selectedTelescope, setSelectedTelescope] = useState<string>('ALL');
  const [distanceSliderLy, setDistanceSliderLy] = useState<number>(5000000);
  const [activeTab, setActiveTab] = useState<'portraits' | 'interactions' | 'distance'>('portraits');

  const TELESCOPES = ['ALL', 'Hubble', 'JWST', 'Chandra', 'Spitzer', 'EHT Network'];

  // Interaction Atlas items
  const INTERACTION_ITEMS = [
    { name: 'Whirlpool Galaxy (M51)', detail: 'Grand design spiral interacting tidally with smaller companion NGC 5195.', image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Antennae Galaxies (NGC 4038/4039)', detail: 'Classic major collision launching long tidal tails of stars and dust.', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Cartwheel Galaxy (ESO 350-40)', detail: 'Bullseye collision expanding ring of vigorous starburst nurseries.', image: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Mice Galaxies (NGC 4676)', detail: 'Pair of passing spirals displaying long tidal tails resembles mice tails.', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop' }
  ];

  return (
    <section id="gallery-explorer" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020618] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTIONS 65 - 68, 79 - 83 · GALACTIC GALLERY ATLAS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Camera className="w-6 h-6 text-cyan-400" />
            <span>COSMIC PORTRAITS & MULTI-WAVELENGTH GALLERY</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('portraits')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'portraits' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
            }`}
          >
            Cosmic Portraits
          </button>
          <button
            onClick={() => setActiveTab('interactions')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'interactions' ? 'bg-pink-500/20 text-pink-300 border border-pink-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
            }`}
          >
            Interaction Atlas
          </button>
          <button
            onClick={() => setActiveTab('distance')}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'distance' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
            }`}
          >
            Distance Explorer
          </button>
        </div>
      </div>

      {/* PORTRAITS & TELESCOPE FILTER TAB */}
      {activeTab === 'portraits' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 font-bold">Filter by Space Telescope:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {TELESCOPES.map((tel) => (
                <button
                  key={tel}
                  onClick={() => setSelectedTelescope(tel)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    selectedTelescope === tel
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold'
                      : 'bg-slate-900/80 text-slate-400 border border-white/5'
                  }`}
                >
                  {tel}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {COMPREHENSIVE_GALAXIES_DATABASE.map((galaxy) => {
              const img = galaxy.images[0];
              if (selectedTelescope !== 'ALL' && !img.telescope.includes(selectedTelescope)) {
                return null;
              }
              return (
                <div key={galaxy.id} className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3 bg-slate-950/80 flex flex-col justify-between">
                  <div className="relative h-48 rounded-xl overflow-hidden border border-white/10 group">
                    <img
                      src={img.imageUrl}
                      alt={galaxy.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Mandatory Rule 68 Badge */}
                    <div className="absolute top-2 left-2">
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold border backdrop-blur-md ${
                        img.imageType === 'REAL OBSERVATION' ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                      }`}>
                        {img.imageType}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">{galaxy.type} Galaxy</span>
                    <h3 className="text-lg font-display font-bold text-white">{galaxy.name}</h3>
                    <p className="text-xs text-slate-300 font-sans line-clamp-2">{galaxy.images[0].description}</p>
                  </div>

                  <div className="pt-2 border-t border-white/10 font-mono text-[11px] space-y-1 text-slate-400">
                    <div>Telescope: <strong className="text-white">{img.telescope}</strong></div>
                    <div>Credit: <strong className="text-cyan-300">{img.credit}</strong></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* INTERACTION ATLAS TAB */}
      {activeTab === 'interactions' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTERACTION_ITEMS.map((item, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-2xl border border-pink-500/30 bg-slate-950/80 space-y-3 flex flex-col justify-between">
              <div className="relative h-48 rounded-xl overflow-hidden border border-white/10">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold bg-pink-500/20 border border-pink-500/40 text-pink-300 backdrop-blur-md">
                  GRAVITATIONAL INTERACTION
                </span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">{item.name}</h3>
                <p className="text-xs text-slate-300 font-sans mt-1 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DISTANCE EXPLORER LOGARITHMIC SLIDER TAB */}
      {activeTab === 'distance' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span>Logarithmic Distance Slider:</span>
              <strong className="text-purple-300 text-sm">{(distanceSliderLy / 1000000).toFixed(1)} Million Light-Years</strong>
            </div>
            <input
              type="range"
              min="100000"
              max="1000000000"
              step="1000000"
              value={distanceSliderLy}
              onChange={(e) => setDistanceSliderLy(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          <div className="p-6 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-2 font-mono text-xs">
            <span className="text-purple-300 font-bold">Lookback Time Calculation:</span>
            <div className="text-lg font-bold text-white">
              Light travel time: ~{(distanceSliderLy / 1000000).toFixed(2)} Million Years into the past!
            </div>
            <p className="text-slate-300 font-sans text-xs">
              When light from a galaxy at this distance hits our telescopes, we observe the galaxy as it appeared during an earlier cosmic era.
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
