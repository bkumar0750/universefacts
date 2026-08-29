import React, { useState } from 'react';
import { Radio, Eye, Flame, Zap, ShieldCheck } from 'lucide-react';

interface WavelengthConfig {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgColor: string;
  image: string;
  reveals: string;
  explanation: string;
  physicalProcess: string;
  telescopes: string;
}

const WAVELENGTH_CONFIGS: WavelengthConfig[] = [
  {
    id: 'visible',
    name: 'VISIBLE OPTICAL',
    icon: Eye,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/50',
    bgColor: 'bg-cyan-500/20',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    reveals: 'Main-Sequence Stars & Interstellar Dust Extinction Lanes',
    explanation: 'The light visible to human eyes (400-700 nm) shows bright starlight from disk stars and dark dust lanes obscuring the core.',
    physicalProcess: 'Thermal blackbody radiation from stellar surfaces (3,000 K to 30,000 K)',
    telescopes: 'Hubble Space Telescope, VLT, Keck'
  },
  {
    id: 'infrared',
    name: 'INFRARED',
    icon: Flame,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/50',
    bgColor: 'bg-amber-500/20',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    reveals: 'Warm Cosmic Dust & Hidden Starbirth Nebulae',
    explanation: 'Infrared light penetrates dense cosmic dust clouds, uncovering embedded protostars and warm interstellar dust grains.',
    physicalProcess: 'Re-emission of heated dust grains and redshifted starlight',
    telescopes: 'James Webb Space Telescope (JWST), Spitzer'
  },
  {
    id: 'radio',
    name: 'RADIO',
    icon: Radio,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/50',
    bgColor: 'bg-emerald-500/20',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    reveals: 'Cold H I Atomic Gas & Synchrotron Jet Beams',
    explanation: 'Radio telescopes map 21cm neutral hydrogen gas clouds spanning far beyond the visible stellar disk, as well as magnetic field particle acceleration.',
    physicalProcess: '21cm H I spin-flip transitions & relativistic particle synchrotron emission',
    telescopes: 'VLA, ALMA, FAST, MeerKAT, EHT'
  },
  {
    id: 'xray',
    name: 'X-RAY',
    icon: Zap,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/50',
    bgColor: 'bg-purple-500/20',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    reveals: '100M K Hot Gas Plasma & Supermassive Black Hole Accretion Disks',
    explanation: 'X-rays highlight extreme high-energy thermal gas surrounding collapsed stellar remnants, supernova shocks, and active black hole cores.',
    physicalProcess: 'Thermal bremsstrahlung gas emission & supermassive black hole accretion disk friction',
    telescopes: 'Chandra X-Ray Observatory, XMM-Newton'
  }
];

export const MultiWavelengthInteractive: React.FC = () => {
  const [activeBandId, setActiveBandId] = useState<string>('visible');

  const activeBand = WAVELENGTH_CONFIGS.find(b => b.id === activeBandId) || WAVELENGTH_CONFIGS[0];
  const IconComponent = activeBand.icon;

  return (
    <section id="multi-wavelength" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020618] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            EXPERIENCE 02 · SIGNATURE MULTI-WAVELENGTH GALAXY
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Radio className="w-6 h-6 text-cyan-400" />
            <span>MULTI-WAVELENGTH SPECTRUM INSPECTOR</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>VERIFIED SOURCE: NASA MULTI-WAVELENGTH ARCHIVE</span>
        </div>
      </div>

      {/* Primary Educational Takeaway Banner */}
      <div className="p-4 rounded-2xl bg-cyan-950/50 border border-cyan-500/40 text-xs sm:text-sm font-sans text-cyan-100 leading-relaxed shadow-lg">
        <strong className="text-cyan-300 font-mono block mb-1">CORE ASTROPHYSICAL PRINCIPLE:</strong>
        "There is no single 'real' picture of a galaxy. Human eyes only detect visible optical light, but galaxies emit across the entire electromagnetic spectrum. Different wavelengths reveal completely different physical structures and energetic processes."
      </div>

      {/* Interactive Wavelength Switcher Ribbon */}
      <div className="flex flex-wrap gap-2">
        {WAVELENGTH_CONFIGS.map((config) => {
          const isActive = activeBandId === config.id;
          const ConfigIcon = config.icon;
          return (
            <button
              key={config.id}
              onClick={() => setActiveBandId(config.id)}
              className={`px-4 py-3 rounded-2xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2.5 ${
                isActive
                  ? `${config.bgColor} ${config.color} ${config.borderColor} border-2 font-bold shadow-lg scale-105`
                  : 'bg-slate-900/80 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-800'
              }`}
            >
              <ConfigIcon className="w-4 h-4" />
              <span>{config.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Spectrum Visualizer Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        
        {/* Left Simulated Wavelength Frame */}
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 flex flex-col justify-end p-5 group min-h-[320px]">
          <img
            src={activeBand.image}
            alt={activeBand.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020618] via-[#020618]/30 to-transparent" />

          <div className="relative z-10 space-y-2 font-mono text-xs">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${activeBand.bgColor} ${activeBand.color} border ${activeBand.borderColor} backdrop-blur-md inline-flex items-center gap-1.5`}>
              <IconComponent className="w-3.5 h-3.5" />
              <span>ACTIVE FILTER: {activeBand.name}</span>
            </span>

            <h3 className="text-2xl font-display font-bold text-white">{activeBand.name} VIEW</h3>
            <p className="text-xs text-slate-300">Primary Telescopes: <strong className="text-white">{activeBand.telescopes}</strong></p>
          </div>
        </div>

        {/* Right Astrophysical Details Panel */}
        <div className="lg:col-span-6 space-y-4 font-mono text-xs flex flex-col justify-between">
          <div>
            <span className={`text-xs font-bold ${activeBand.color} uppercase tracking-wider`}>WAVELENGTH DIAGNOSTIC</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">{activeBand.name} SPECTRAL BAND</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mt-2">
              {activeBand.explanation}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-2">
            <span className="text-[10px] text-cyan-400 font-bold uppercase">PHYSICAL PROCESS REVEALED:</span>
            <p className="text-xs text-white font-mono font-bold">{activeBand.physicalProcess}</p>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
            <span className="text-[10px] text-slate-400 font-bold uppercase">PRIMARY OBSERVATIONAL TARGETS:</span>
            <p className="text-xs text-cyan-200 font-sans">{activeBand.reveals}</p>
          </div>
        </div>

      </div>

    </section>
  );
};
