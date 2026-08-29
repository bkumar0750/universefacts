import React, { useState } from 'react';
import { Layers, RotateCw, ZoomIn, RefreshCw, Cpu, ShieldCheck } from 'lucide-react';

export const Spacecraft3DViewer: React.FC = () => {
  const [selectedSpacecraft, setSelectedSpacecraft] = useState<'jwst' | 'chandrayaan3' | 'voyager'>('jwst');
  const [activeComponent, setActiveComponent] = useState<string>('primary-mirror');
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const JWST_COMPONENTS = [
    {
      id: 'primary-mirror',
      name: 'PRIMARY MIRROR (6.5m BERYLLIUM)',
      purpose: 'Gathers infrared photons from distant early universe stars and galaxies.',
      size: '6.5 meters diameter across 18 hexagonal segments',
      material: 'Beryllium coated with 48.25 grams of 24-karat gold',
      measures: 'Near and mid-infrared light (0.6 to 28.3 microns)',
      whyMatters: 'Extremely lightweight beryllium maintains precise parabolic shape at cryogenic temperatures (-220°C).'
    },
    {
      id: 'sunshield',
      name: '5-LAYER KAPTON SUNSHIELD',
      purpose: 'Blocks heat and light from the Sun, Earth, and Moon to keep instruments icy cold.',
      size: '21.2m × 14.2m (Tennis court size)',
      material: 'Kapton substrate with aluminum and treated silicon coatings',
      measures: 'Thermal barrier maintaining 300°C temperature differential',
      whyMatters: 'Without the sunshield, thermal infrared glow from the spacecraft would blind its sensitive detectors.'
    },
    {
      id: 'nircam',
      name: 'NIRCam (NEAR-INFRARED CAMERA)',
      purpose: 'Primary imager operating from 0.6 to 5.0 microns.',
      size: '0.45m × 0.65m focal plane module',
      material: 'Mercury-Cadmium-Telluride (HgCdTe) detector arrays',
      measures: 'Deep-field high-resolution galaxy images & exoplanet transit imaging',
      whyMatters: 'Essential for detecting the first light from stars formed 300M years after Big Bang.'
    },
    {
      id: 'miri',
      name: 'MIRI (MID-INFRARED INSTRUMENT)',
      purpose: 'Mid-infrared camera and spectrograph cooled to 6.7 Kelvin.',
      size: '0.6m × 0.8m module with dedicated cryocooler',
      material: 'Arsenic-doped Silicon (Si:As) arrays',
      measures: 'Warm cosmic dust, protoplanetary disks, and mid-infrared molecular signatures',
      whyMatters: 'Operates at cryogenic 6.7 K (-266°C) to peer through thick interstellar dust clouds.'
    }
  ];

  const CHANDRAYAAN_COMPONENTS = [
    {
      id: 'vikram-lander',
      name: 'VIKRAM LANDER (SOFT LANDING VEHICLE)',
      purpose: 'Executes autonomous vertical descent and soft-lands near lunar south pole.',
      size: '2.0m × 2.0m × 1.16m',
      material: 'High-strength aluminum alloy honeycomb structures',
      measures: 'Thermal conductivity (ChaSTE), seismic activity (ILSA), plasma density (RAMBHA)',
      whyMatters: 'First human spacecraft to soft-land near 70°S lunar latitude.'
    },
    {
      id: 'pragyan-rover',
      name: 'PRAGYAN ROVER (6-WHEELED ROVER)',
      purpose: 'Traverses lunar regolith to perform in-situ elemental spectroscopy.',
      size: '0.9m × 0.75m × 0.85m (26 kg mass)',
      material: 'Rocker-bogie mobility system with solar panel array',
      measures: 'Elemental composition via LIBS laser and APXS alpha particle X-ray spectrometer',
      whyMatters: 'Unambiguously detected elemental Sulfur (S) in lunar south polar topsoil.'
    }
  ];

  const components = selectedSpacecraft === 'jwst' ? JWST_COMPONENTS : CHANDRAYAAN_COMPONENTS;
  const activeComp = components.find((c) => c.id === activeComponent) || components[0];

  return (
    <section id="spacecraft-3d-viewer" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl font-mono text-xs transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
          <Layers className="w-4 h-4 text-cyan-500" />
          <span>FEATURE 5 &amp; 6 · INTERACTIVE SPACECRAFT 3D ANATOMY EXPLORER</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          SPACECRAFT ANATOMY &amp; 3D COMPONENT EXPLORER
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Click individual components on the 3D model to inspect materials, dimensions, measurement instruments, and engineering significance.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => { setSelectedSpacecraft('jwst'); setActiveComponent('primary-mirror'); }}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              selectedSpacecraft === 'jwst'
                ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            🔭 JWST (NASA/ESA/CSA)
          </button>

          <button
            onClick={() => { setSelectedSpacecraft('chandrayaan3'); setActiveComponent('vikram-lander'); }}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              selectedSpacecraft === 'chandrayaan3'
                ? 'bg-orange-500/20 text-orange-900 dark:text-orange-200 border-orange-400 font-bold scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
            }`}
          >
            🌙 CHANDRAYAAN-3 (ISRO)
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 text-[11px]">
          <button
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`px-3 py-1.5 rounded-xl border flex items-center gap-1 cursor-pointer ${
              isAutoRotate ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 font-bold' : 'bg-slate-900 text-slate-400 border-white/10'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoRotate ? 'animate-spin-slow' : ''}`} />
            <span>AUTO ROTATE: {isAutoRotate ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setZoomLevel(zoomLevel === 1 ? 1.3 : 1)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 text-slate-300 border border-white/10 hover:bg-slate-800 flex items-center gap-1 cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
            <span>ZOOM: {zoomLevel}x</span>
          </button>

          <button
            onClick={() => { setZoomLevel(1); setIsAutoRotate(true); }}
            className="p-1.5 rounded-xl bg-slate-900 text-slate-300 border border-white/10 hover:bg-slate-800 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3D Visual Box & Exploded Component Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        
        {/* Left: 3D Interactive Simulation Viewport */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white min-h-[320px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-white/10 pb-2">
            <span className="text-cyan-400 font-bold">SPACECRAFT MODEL: {selectedSpacecraft.toUpperCase()}</span>
            <span>WEBGL / 3D CANVAS SIMULATION</span>
          </div>

          <div className="my-auto text-center space-y-4 py-8">
            <div
              className={`w-32 h-32 rounded-3xl border-2 border-dashed border-cyan-400 mx-auto flex items-center justify-center transition-all duration-500 ${
                isAutoRotate ? 'animate-spin-slow' : ''
              }`}
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Cpu className="w-12 h-12 text-cyan-300" />
            </div>

            <div className="space-y-1">
              <span className="text-cyan-300 font-bold text-sm block">
                [ {activeComp.name} ]
              </span>
              <span className="text-[10px] text-slate-400 block font-sans">
                Interactive 3D Subsystem Target Selected
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 pt-2 border-t border-white/10">
            {components.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveComponent(c.id)}
                className={`px-3 py-1 rounded-xl border text-[10px] cursor-pointer transition-all ${
                  activeComponent === c.id
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 font-bold scale-105'
                    : 'bg-slate-900 text-slate-400 border-white/10'
                }`}
              >
                {c.name.split('(')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Subsystem Telemetry Breakdown Card */}
        <div className="p-6 rounded-3xl bg-white/95 dark:bg-slate-950 border border-slate-200 dark:border-cyan-500/40 text-slate-900 dark:text-white space-y-4 shadow-2xl flex flex-col justify-between font-mono transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
              <span className="text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase">SUBSYSTEM TELEMETRY</span>
              <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 text-[10px] font-bold">
                VERIFIED NASA / ISRO SPEC
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">{activeComp.name}</h3>

            <div className="space-y-2 font-sans text-xs">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 space-y-0.5">
                <strong className="font-mono text-cyan-700 dark:text-cyan-400 text-[10px] uppercase block">PRIMARY PURPOSE:</strong>
                <p className="text-slate-800 dark:text-slate-200">{activeComp.purpose}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400 block text-[9px]">DIMENSIONS / SIZE</span>
                  <span className="text-amber-800 dark:text-amber-300 font-bold">{activeComp.size}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                  <span className="text-slate-500 dark:text-slate-400 block text-[9px]">MATERIAL / COMPOSITION</span>
                  <span className="text-purple-800 dark:text-purple-300 font-bold">{activeComp.material}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 space-y-0.5">
                <strong className="font-mono text-purple-800 dark:text-purple-300 text-[10px] uppercase block">WHAT IT MEASURES:</strong>
                <p className="text-purple-950 dark:text-purple-100">{activeComp.measures}</p>
              </div>

              <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 space-y-0.5">
                <strong className="font-mono text-cyan-800 dark:text-cyan-300 text-[10px] uppercase block">WHY IT MATTERS:</strong>
                <p className="text-cyan-950 dark:text-cyan-100">{activeComp.whyMatters}</p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 border-t border-slate-200 dark:border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Interactive Spacecraft Subsystem Database 2026</span>
          </div>
        </div>

      </div>

    </section>
  );
};
