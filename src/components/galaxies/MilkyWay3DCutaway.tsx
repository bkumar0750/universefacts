import React, { useState, useEffect, useRef } from 'react';
import { Box, Layers, ShieldCheck } from 'lucide-react';
import { SketchfabViewer } from '../SketchfabViewer';

interface LayerInfo {
  id: string;
  name: string;
  extent: string;
  contains: string;
  observation: string;
  importance: string;
}

const MILKY_WAY_LAYERS: LayerInfo[] = [
  { id: 'bulge', name: 'CENTRAL BULGE', extent: '10,000 Light-Years radius', contains: 'Ancient Population II stars, Sagittarius A* SMBH, dense stellar core.', observation: 'Observed in Near-Infrared through dust gas lanes.', importance: 'Harbors central black hole and records early galaxy formation.' },
  { id: 'bar', name: 'STELLAR BAR', extent: '27,000 Light-Years length', contains: 'Elongated bar of stars crossing galactic center.', observation: 'Inferred from stellar velocities and infrared surveys by Spitzer & Gaia.', importance: 'Funnels interstellar gas inward to fuel star formation and Sgr A*.' },
  { id: 'spiral-arms', name: 'SPIRAL ARMS (DISK)', extent: '100,000 Light-Years diameter', contains: 'Orion-Cygnus spur (Sun), Perseus arm, Scutum-Centaurus arm, H II star nurseries.', observation: 'Mapped using H I 21cm radio emissions and Cepheid variables.', importance: 'Primary engine of ongoing star formation and planetary creation.' },
  { id: 'thin-disk', name: 'THIN DISK', extent: '1,000 Light-Years thickness', contains: '90% of disk stars including our Sun, cold molecular clouds.', observation: 'Optical and infrared star counts.', importance: 'Contains young Population I stars with high metallicity.' },
  { id: 'thick-disk', name: 'THICK DISK', extent: '3,000 Light-Years thickness', contains: 'Older stars with lower metallicity and higher vertical velocity dispersion.', observation: 'Spectroscopic stellar velocity surveys (SDSS / APOGEE).', importance: 'Traces historical galactic mergers and disk heating events.' },
  { id: 'stellar-halo', name: 'STELLAR HALO', extent: '150,000 Light-Years sphere', contains: 'Sparse ancient metal-poor stars and globular clusters.', observation: 'Wide-field star surveys and tidal stream mapping.', importance: 'Preserves chemical fossils of the earliest protogalaxies.' },
  { id: 'globular-clusters', name: 'GLOBULAR CLUSTERS', extent: 'Distributed across halo', contains: 'Dense spheres of 100,000 to 1 million ancient stars (12+ billion years old).', observation: 'Optical telescopic mapping (e.g. M13, Omega Centauri).', importance: 'Constrains lower bound on the age of the universe.' },
  { id: 'dark-matter-halo', name: 'DARK MATTER HALO', extent: '&gt; 600,000 Light-Years sphere', contains: 'Non-baryonic dark matter providing ~85% of total mass.', observation: 'Inferred through stellar rotation curves and satellite dynamics.', importance: 'Gravitational glue stabilizing the rotating stellar disk.' }
];

export const MilkyWay3DCutaway: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('bulge');
  const [activeAgnTab, setActiveAgnTab] = useState<'seyfert' | 'quasar' | 'blazar' | 'jets'>('quasar');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const selectedLayer = MILKY_WAY_LAYERS.find((l) => l.id === selectedLayerId) || MILKY_WAY_LAYERS[0];

  // Sgr A* Orbit Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw Central Supermassive Black Hole Event Horizon
      ctx.beginPath();
      ctx.arc(centerX, centerY, 14, 0, 2 * Math.PI);
      ctx.fillStyle = '#000000';
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#06b6d4';
      ctx.stroke();

      // Accretion Ring Glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, 22, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Draw S2 Star Elliptical Orbit
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 90, 45, 0.4, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw Orbiting S2 Star
      angle += 0.02;
      const starX = centerX + Math.cos(angle) * 90 * Math.cos(0.4) - Math.sin(angle) * 45 * Math.sin(0.4);
      const starY = centerY + Math.cos(angle) * 90 * Math.sin(0.4) + Math.sin(angle) * 45 * Math.cos(0.4);

      ctx.beginPath();
      ctx.arc(starX, starY, 4, 0, 2 * Math.PI);
      ctx.fillStyle = '#60a5fa';
      ctx.fill();

      // Star trail
      ctx.beginPath();
      ctx.arc(starX, starY, 7, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(96, 165, 250, 0.3)';
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="milky-way-section" className="space-y-8 animate-fade-in-up">
      
      {/* 3D Model & Outer View Notice */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#03081c] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-violet-500/10 border border-violet-500/30 text-violet-300 mb-1">
              <Box className="w-3.5 h-3.5" />
              <span>INTERACTIVE 3D MODEL · SKETCHFAB</span>
            </div>
            <h2 className="text-3xl font-display font-extrabold text-white">OUR GALACTIC HOME — THE MILKY WAY</h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>LABEL: SCIENTIFIC RECONSTRUCTION</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          Important: Our images of the Milky Way from outside are <strong>SCIENTIFIC RECONSTRUCTIONS</strong>. Because humanity resides inside the disk, no spacecraft has ever traveled outside the galaxy to take a direct external photograph.
        </p>

        <SketchfabViewer
          modelId="eb0087b800414744b4cee3440888088c"
          title="Milky Way Galaxy Reconstruction"
          description="Our home barred spiral galaxy — ~100,000 light-years in diameter, 100–400 billion stars"
          credit="Sketchfab Community"
          height="h-[460px] sm:h-[560px]"
        />
      </div>

      {/* 8-LAYER CUTAWAY EXPLORER */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020616] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              SECTION 19 · ANATOMY CUTAWAY
            </span>
            <h3 className="text-2xl font-display font-bold text-white flex items-center gap-2 mt-1">
              <Layers className="w-6 h-6 text-cyan-400" />
              <span>MILKY WAY 8-LAYER ANATOMY CUTAWAY</span>
            </h3>
          </div>

          <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-white/10">
            Click layer to inspect telemetry
          </span>
        </div>

        {/* Layer Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {MILKY_WAY_LAYERS.map((layer, idx) => (
            <button
              key={layer.id}
              onClick={() => setSelectedLayerId(layer.id)}
              className={`p-3 rounded-xl text-left text-xs font-mono transition-all ${
                selectedLayerId === layer.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                  : 'bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-900'
              }`}
            >
              <div className="text-[10px] text-cyan-400">Layer 0{idx + 1}</div>
              <div className="font-bold text-white mt-0.5 truncate">{layer.name}</div>
            </button>
          ))}
        </div>

        {/* Selected Layer Telemetry Display */}
        <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-500/20 pb-3">
            <h4 className="text-xl font-display font-bold text-white">{selectedLayer.name}</h4>
            <span className="text-xs font-mono text-cyan-300 font-bold bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              Spatial Extent: {selectedLayer.extent}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">What It Contains</span>
              <p className="text-slate-200 font-sans leading-relaxed">{selectedLayer.contains}</p>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">How It Is Observed</span>
              <p className="text-slate-200 font-sans leading-relaxed">{selectedLayer.observation}</p>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-white/5 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Scientific Importance</span>
              <p className="text-slate-200 font-sans leading-relaxed">{selectedLayer.importance}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SAGITTARIUS A* CENTRAL BLACK HOLE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Interactive Canvas S2 Orbit Simulation */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-3xl border border-cyan-500/30 bg-[#020512] flex flex-col justify-between space-y-4">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              SECTION 21 · GALACTIC HEART
            </span>
            <h3 className="text-2xl font-display font-bold text-white mt-2">SAGITTARIUS A*</h3>
            <p className="text-xs text-slate-300 font-sans mt-1">
              The supermassive black hole at the center of the Milky Way (~4.15 Million Solar Masses).
            </p>
          </div>

          {/* Orbit Canvas */}
          <div className="relative w-full h-52 bg-slate-950 rounded-2xl border border-cyan-500/30 flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} width={300} height={200} className="w-full h-full" />
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-cyan-400 bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
              Live Canvas: S2 Star Orbit Simulation around Sgr A*
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-400 leading-snug">
            NASA identifies Sagittarius A* as approximately 4 million solar masses. Nobel Prize 2020 rewarded observational tracking of stars orbiting Sgr A*.
          </div>
        </div>

        {/* Right Active Galaxies & Quasars Interactive Suite */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-cyan-500/30 bg-[#03081c] space-y-6">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-300">
              SECTIONS 24 - 27 · HIGH ENERGY ENGINES
            </span>
            <h3 className="text-2xl font-display font-bold text-white mt-2">ACTIVE GALACTIC NUCLEI (AGN)</h3>
            <p className="text-xs text-slate-300 font-sans mt-1">
              When infall onto a central black hole creates ultra-luminous accretion disks and relativistic jets.
            </p>
          </div>

          {/* AGN Type Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveAgnTab('quasar')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeAgnTab === 'quasar' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
              }`}
            >
              Quasars (Brightest)
            </button>
            <button
              onClick={() => setActiveAgnTab('blazar')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeAgnTab === 'blazar' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
              }`}
            >
              Blazars (Jet Facing Earth)
            </button>
            <button
              onClick={() => setActiveAgnTab('seyfert')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeAgnTab === 'seyfert' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
              }`}
            >
              Seyfert Galaxies
            </button>
            <button
              onClick={() => setActiveAgnTab('jets')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeAgnTab === 'jets' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
              }`}
            >
              Galactic Relativistic Jets
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2 text-xs font-mono">
            {activeAgnTab === 'quasar' && (
              <>
                <h4 className="text-sm font-bold text-cyan-300">QUASARS — THE BRIGHTEST ENGINES IN THE COSMOS</h4>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Quasars (Quasi-Stellar Radio Sources) can outshine their entire host galaxies by thousands of times. Because they emit extreme luminosity, they are observable across billions of light-years, acting as probes of the early universe.
                </p>
              </>
            )}

            {activeAgnTab === 'blazar' && (
              <>
                <h4 className="text-sm font-bold text-purple-300">BLAZARS — RELATIVISTIC JETS POINTED AT EARTH</h4>
                <p className="text-slate-300 font-sans leading-relaxed">
                  A blazar is an active galactic nucleus with a powerful relativistic particle jet aligned directly along our line of sight to Earth. This beam orientation creates extreme apparent luminosity fluctuations.
                </p>
              </>
            )}

            {activeAgnTab === 'seyfert' && (
              <>
                <h4 className="text-sm font-bold text-amber-300">SEYFERT GALAXIES — SPIRALS WITH ENERGETIC NUCLEI</h4>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Spiral galaxies harboring extremely bright central cores that exhibit broad high-excitation spectral emission lines produced by infalling gas.
                </p>
              </>
            )}

            {activeAgnTab === 'jets' && (
              <>
                <h4 className="text-sm font-bold text-emerald-300">GALACTIC RELATIVISTIC JETS</h4>
                <p className="text-slate-300 font-sans leading-relaxed">
                  Magnetic field lines wrapped around rotating black hole accretion disks launch twin beams of plasma at near light speed. These jets extend hundreds of thousands of light-years past host galaxies.
                </p>
              </>
            )}
          </div>
        </div>

      </div>

    </section>
  );
};
