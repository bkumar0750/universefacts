import React, { useState } from 'react';
import { Radio } from 'lucide-react';

export const UniverseMultiMessengerLab: React.FC = () => {
  const [activeMessenger, setActiveMessenger] = useState<'light' | 'gw' | 'neutrinos' | 'cosmic-rays'>('light');

  const MESSENGERS = [
    {
      id: 'light',
      name: '1. ELECTROMAGNETIC LIGHT',
      carrier: 'Photons (Radio to Gamma-Ray)',
      detectors: 'JWST, Hubble, Chandra, ALMA, Euclid',
      desc: 'Reveals stellar emission, hot plasma, dust gas clouds, and galaxy structure.',
      color: '#06b6d4'
    },
    {
      id: 'gw',
      name: '2. GRAVITATIONAL WAVES',
      carrier: 'Spacetime Metric Ripples',
      detectors: 'LIGO, Virgo, KAGRA, LISA (Future)',
      desc: 'Detects accelerating ultra-dense masses: black hole collisions & neutron star mergers.',
      color: '#a855f7'
    },
    {
      id: 'neutrinos',
      name: '3. COSMIC NEUTRINOS',
      carrier: 'Subatomic Ghost Particles',
      detectors: 'IceCube (South Pole), Super-Kamiokande',
      desc: 'Pass through light-years of solid lead without stopping, revealing active galactic nuclei cores.',
      color: '#10b981'
    },
    {
      id: 'cosmic-rays',
      name: '4. HIGH-ENERGY COSMIC RAYS',
      carrier: 'Relativistic Protons & Atomic Nuclei',
      detectors: 'Pierre Auger Observatory, Cherenkov Telescopes',
      desc: 'Accelerated to near light-speed by supernovae shockwaves and blazar jets.',
      color: '#f59e0b'
    }
  ];

  const current = MESSENGERS.find((m) => m.id === activeMessenger)!;

  return (
    <section id="multi-messenger-lab" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
          <Radio className="w-4 h-4 text-cyan-500" />
          <span>SECTION 57, 58, 59, 60, 61 &amp; 75 · MULTI-MESSENGER UNIVERSE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          THE MULTI-MESSENGER UNIVERSE
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Modern astronomy does not rely on visible light alone. Astronomers combine four distinct cosmic messengers—<strong>Light, Gravitational Waves, Neutrinos, and Cosmic Rays</strong>—to observe extreme physical events across space and time.
        </p>
      </div>

      {/* Interactive Messenger Switcher Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
        {MESSENGERS.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMessenger(m.id as any)}
            className={`p-3 rounded-2xl border transition-all cursor-pointer text-left space-y-1 ${
              activeMessenger === m.id
                ? 'bg-slate-950 text-white border-cyan-400 font-bold shadow-lg scale-105'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/5'
            }`}
          >
            <span className="text-[10px] text-cyan-500 uppercase block font-bold">{m.name.split('.')[0]}</span>
            <div className="text-xs truncate" style={{ color: m.color }}>{m.name.split('.')[1]}</div>
          </button>
        ))}
      </div>

      {/* Active Messenger Details Frame */}
      <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white space-y-4 font-mono shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-lg font-bold" style={{ color: current.color }}>{current.name}</span>
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs border border-cyan-500/40">
            {current.carrier}
          </span>
        </div>

        <p className="font-sans text-xs text-slate-300 leading-relaxed">
          {current.desc}
        </p>

        <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 space-y-1">
          <span className="text-slate-400 text-[10px] uppercase font-bold">PRIMARY OBSERVATORIES &amp; DETECTORS</span>
          <div className="font-bold text-cyan-300 text-xs">{current.detectors}</div>
        </div>
      </div>

    </section>
  );
};
