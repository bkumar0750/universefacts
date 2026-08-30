import React, { useState } from 'react';
import { Radio, Clock } from 'lucide-react';

interface BandInfo {
  id: string;
  name: string;
  reveals: string;
  image: string;
  explanation: string;
  telescopes: string;
}

const WAVELENGTH_BANDS: BandInfo[] = [
  {
    id: 'radio',
    name: 'RADIO (cm - m)',
    reveals: 'Cold H I atomic gas clouds, relativistic jet synchrotron radiation, pulsar beams.',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    explanation: 'Radio waves penetrate dense interstellar dust, revealing cold neutral hydrogen gas and active black hole jet emission.',
    telescopes: 'VLA, ALMA, FAST, MeerKAT'
  },
  {
    id: 'infrared',
    name: 'INFRARED (μm - mm)',
    reveals: 'Warm cosmic dust, hidden starbirth nebulae, extreme high-redshift early galaxies.',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    explanation: 'Infrared light passes right through obscurant dust clouds, exposing young protostars and distant redshifted light.',
    telescopes: 'JWST, Spitzer, Herschel'
  },
  {
    id: 'visible',
    name: 'VISIBLE OPTICAL (400 - 700 nm)',
    reveals: 'Main-sequence stars, spiral arms, dust lanes, stellar population colors.',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    explanation: 'The light visible to human eyes reveals disk morphology, dust extinction lanes, and stellar brightness.',
    telescopes: 'Hubble, VLT, Keck, Subaru'
  },
  {
    id: 'ultraviolet',
    name: 'ULTRAVIOLET (10 - 400 nm)',
    reveals: 'Hot young massive O & B stars, recent starburst episodes.',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    explanation: 'UV radiation traces energetic massive stars that live short lives, pinpointing active star factories.',
    telescopes: 'GALEX, Hubble STIS'
  },
  {
    id: 'xray',
    name: 'X-RAY (0.01 - 10 nm)',
    reveals: '100M K hot intracluster gas, black hole accretion disks, supernova remnants.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    explanation: 'X-rays highlight high-energy thermal and magnetic plasma surrounding collapsed compact objects.',
    telescopes: 'Chandra, XMM-Newton, eROSITA'
  }
];

export const GalaxySpectrumLab: React.FC = () => {
  const [selectedBandId, setSelectedBandId] = useState<string>('visible');

  const activeBand = WAVELENGTH_BANDS.find((b) => b.id === selectedBandId) || WAVELENGTH_BANDS[2];

  return (
    <section id="spectrum-lab" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#02071a] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTIONS 30 - 33 · MULTI-WAVELENGTH SPECTRUM LAB
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Radio className="w-6 h-6 text-cyan-400" />
            <span>GALAXY SPECTRUM LABORATORY</span>
          </h2>
        </div>

        <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-xl border border-cyan-500/30">
          "Different wavelengths reveal different universes."
        </span>
      </div>

      {/* Band Selector */}
      <div className="flex flex-wrap gap-2">
        {WAVELENGTH_BANDS.map((band) => (
          <button
            key={band.id}
            onClick={() => setSelectedBandId(band.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedBandId === band.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-900'
            }`}
          >
            {band.name}
          </button>
        ))}
      </div>

      {/* Selected Wavelength Visualization Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        
        {/* Left Simulated Wavelength Image Frame */}
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 min-h-[300px] flex flex-col justify-end p-5 group">
          <img
            src={activeBand.image}
            alt={activeBand.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02071a] via-[#02071a]/30 to-transparent" />

          <div className="relative z-10 space-y-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 backdrop-blur-md">
              OBSERVATIONAL WAVELENGTH: {activeBand.name}
            </span>
            <h3 className="text-xl font-display font-bold text-white">{activeBand.name} View</h3>
            <p className="text-xs text-slate-300 font-mono">Telescopes: <strong className="text-cyan-300">{activeBand.telescopes}</strong></p>
          </div>
        </div>

        {/* Right Detail Explanation */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">SPECTRAL DIAGNOSTIC</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">{activeBand.name}</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mt-2">
              {activeBand.explanation}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
            <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase">Primary Features Revealed</span>
            <p className="text-xs font-mono text-cyan-200">{activeBand.reveals}</p>
          </div>

          {/* Time Machine & Redshift Explainer Box */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-amber-300 font-bold">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>GALAXIES AS COSMIC TIME MACHINES</span>
            </div>
            <p className="text-slate-300 font-sans leading-relaxed text-[11px]">
              Because light travels at a finite speed (~300,000 km/s), observing a galaxy 10 billion light-years away shows the galaxy as it existed 10 billion years ago when its light was first emitted!
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
