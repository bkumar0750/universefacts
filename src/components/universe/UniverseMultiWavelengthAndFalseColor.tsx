import React, { useState } from 'react';
import { Eye, Layers, Camera } from 'lucide-react';

export const UniverseMultiWavelengthAndFalseColor: React.FC = () => {
  const [activeWavelength, setActiveWavelength] = useState<'visible' | 'infrared' | 'xray' | 'radio'>('visible');

  const OBSERVATION_MATRIX = [
    { target: 'Stars & Stellar Clusters', direct: 'YES (Visible, IR, UV)', method: 'Photon Emission', status: 'OBSERVED' },
    { target: 'Galaxies & Gas Nebulae', direct: 'YES (Multi-wavelength)', method: 'Photon Emission & Dust Scattering', status: 'OBSERVED' },
    { target: 'Cosmic Microwave Background', direct: 'YES (Microwave radio)', method: 'Decoupled Photon Relic', status: 'OBSERVED' },
    { target: 'Black Hole Event Horizon', direct: 'NO (Shadow / Accretion Disk)', method: 'Gravitational Light Bending (EHT)', status: 'INFERRED / SHADOW' },
    { target: 'Dark Matter Halos', direct: 'NO (Invisible to photons)', method: 'Gravitational Lensing & Rotation', status: 'INFERRED' },
    { target: 'Dark Energy Pressure', direct: 'NO (Invisible to photons)', method: 'Supernova Accelerated Expansion', status: 'INFERRED' },
    { target: 'Multiverse Universes', direct: 'NO (Beyond particle horizon)', method: 'Hypothetical Inflation Model', status: 'SPECULATIVE' }
  ];

  const PIPELINE = [
    '1. PHOTON EMISSION',
    '2. TELESCOPE MIRROR / ANTENNA',
    '3. DETECTOR SENSOR',
    '4. RAW DIGITAL DATA',
    '5. CALIBRATION & NOISE REMOVAL',
    '6. SPECTRAL COMBINATION',
    '7. SCIENTIFIC DISCOVERY'
  ];

  return (
    <section id="multi-wavelength-and-false-color" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl transition-colors">
      
      {/* 1. FEATURE 6: WHAT CAN WE ACTUALLY SEE? */}
      <div className="space-y-6">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Eye className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 6 · WHAT CAN WE ACTUALLY SEE?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            OBSERVATIONAL ACCESSIBILITY MATRIX
          </h2>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto font-mono text-xs">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-300 dark:border-white/10 text-cyan-600 dark:text-cyan-400">
                <th className="p-3">COSMIC TARGET</th>
                <th className="p-3">DIRECT OBSERVATION?</th>
                <th className="p-3">DETECTION METHOD</th>
                <th className="p-3">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5 font-sans text-xs">
              {OBSERVATION_MATRIX.map((row) => (
                <tr key={row.target} className="hover:bg-slate-100 dark:hover:bg-slate-900/50">
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{row.target}</td>
                  <td className="p-3 font-mono text-cyan-600 dark:text-cyan-300 font-bold">{row.direct}</td>
                  <td className="p-3 text-slate-600 dark:text-slate-400">{row.method}</td>
                  <td className="p-3 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-500/30">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. FEATURE 8: THE UNIVERSE IN FALSE COLOR */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
            <Layers className="w-4 h-4 text-amber-500" />
            <span>FEATURE 8 · THE UNIVERSE IN FALSE COLOR</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            FALSE COLOR WAVELENGTH ASSIGNMENTS
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveWavelength('visible')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeWavelength === 'visible'
                ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            1. REALISTIC VISIBLE LIGHT (HUMAN EYE)
          </button>
          <button
            onClick={() => setActiveWavelength('infrared')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeWavelength === 'infrared'
                ? 'bg-rose-500/20 text-rose-900 dark:text-rose-200 border-rose-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            2. INFRARED (JWST HEAT DUST PENETRATION)
          </button>
          <button
            onClick={() => setActiveWavelength('xray')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeWavelength === 'xray'
                ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            3. X-RAY (CHANDRA HIGH-ENERGY PLASMA)
          </button>
          <button
            onClick={() => setActiveWavelength('radio')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeWavelength === 'radio'
                ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            4. RADIO (ALMA COLD MOLECULAR GAS)
          </button>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-amber-500/40 text-white space-y-3 font-mono shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-amber-400 font-bold text-sm">WAVELENGTH: {activeWavelength.toUpperCase()}</span>
            <span className="text-xs text-slate-400">FALSE-COLOR RGB MAPPING</span>
          </div>
          <p className="font-sans text-xs text-slate-300 leading-relaxed">
            Telescopes like JWST, Hubble, and Chandra capture invisible light (infrared, ultraviolet, X-rays). Scientists map these invisible wavelengths to visible Red, Green, and Blue channels so the human brain can visualize temperature, chemical composition, and density!
          </p>
        </div>
      </div>

      {/* 3. FEATURES 13 & 14: HOW A TELESCOPE SEES & RAW DATA -> DISCOVERY */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10 font-mono text-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
            <Camera className="w-4 h-4 text-purple-500" />
            <span>FEATURES 13 &amp; 14 · RAW DATA TO SCIENTIFIC DISCOVERY PIPELINE</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            HOW A TELESCOPE TRANSFORMS PHOTONS INTO DISCOVERIES
          </h3>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-purple-500/40 text-white space-y-4 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-[10px]">
            {PIPELINE.map((p, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-purple-500/30 font-bold text-purple-300 flex items-center justify-center">
                {p}
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-slate-300 text-center">
            Beautiful NASA astronomical images are not simple digital camera snapshots—they are calibrated scientific data products resulting from complex reduction, cosmic ray rejection, and spectral analysis!
          </p>
        </div>
      </div>

    </section>
  );
};
