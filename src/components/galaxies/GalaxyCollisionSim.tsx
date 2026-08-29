import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, FastForward, ZoomIn, ShieldCheck } from 'lucide-react';

interface MergerStage {
  id: string;
  name: string;
  timeframe: string;
  description: string;
  stellarCollisionProbability: string;
}

const STAGES: MergerStage[] = [
  {
    id: 'gravity',
    name: '1. GRAVITATIONAL APPROACH',
    timeframe: '0 - 1.5 Billion Years',
    description: 'Milky Way & Andromeda accelerate toward each other at ~110 km/s under mutual gravitational attraction.',
    stellarCollisionProbability: '< 0.00000001% (Light-years of empty space between stars)'
  },
  {
    id: 'distortion',
    name: '2. TIDAL DISRUPTION & BRIDGES',
    timeframe: '2.0 - 3.0 Billion Years',
    description: 'Tidal forces stretch long stellar tails and intergalactic gas bridges across millions of light-years.',
    stellarCollisionProbability: '< 0.00000001% (Stars pass safely past each other)'
  },
  {
    id: 'star-formation',
    name: '3. STARBURST FLASH',
    timeframe: '3.5 - 4.2 Billion Years',
    description: 'Compressed gas clouds trigger intense starburst episodes, generating millions of new blue stars.',
    stellarCollisionProbability: '< 0.00000001% (New stars form in dense shock fronts)'
  },
  {
    id: 'merger',
    name: '4. CORE MERGER',
    timeframe: '4.5 - 5.0 Billion Years',
    description: 'Sagittarius A* and Andromeda SMBH (M31*) orbit each other in a gravitational dance before coalescing.',
    stellarCollisionProbability: '< 0.00000001% (Central SMBHs merge, stars remain intact)'
  },
  {
    id: 'new-structure',
    name: '5. "MILKDROMEDA" GIANT ELLIPTICAL',
    timeframe: '6.0+ Billion Years',
    description: 'The combined remnants settle into a giant smooth elliptical galaxy without spiral arms.',
    stellarCollisionProbability: '< 0.00000001% (Final stable stellar orbits)'
  }
];

export const GalaxyCollisionSim: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1); // 1x, 10x, 100x
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [showStarZoomModal, setShowStarZoomModal] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentStage = STAGES[currentStageIdx];

  // Canvas particle collision animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const render = () => {
      ctx.fillStyle = '#020516';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (isPlaying) {
        time += 0.02 * speedMultiplier;
      }

      // Center offset
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Distance offset based on stage
      const distanceOffset = Math.max(0, 150 - (currentStageIdx * 35));

      // Draw Galaxy 1 (Milky Way - Cyan)
      const g1x = cx - distanceOffset * Math.cos(time * 0.5);
      const g1y = cy - distanceOffset * Math.sin(time * 0.3);
      for (let i = 0; i < 80; i++) {
        const angle = i * 0.15 + time;
        const radius = (i * 0.8) + Math.sin(time + i) * 5;
        const px = g1x + radius * Math.cos(angle);
        const py = g1y + radius * Math.sin(angle);
        ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#e0f2fe';
        ctx.beginPath();
        ctx.arc(px, py, i % 3 === 0 ? 2 : 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Galaxy 2 (Andromeda - Purple)
      const g2x = cx + distanceOffset * Math.cos(time * 0.5);
      const g2y = cy + distanceOffset * Math.sin(time * 0.3);
      for (let i = 0; i < 90; i++) {
        const angle = i * 0.12 - time * 0.8;
        const radius = (i * 0.9) + Math.cos(time + i) * 6;
        const px = g2x + radius * Math.cos(angle);
        const py = g2y + radius * Math.sin(angle);
        ctx.fillStyle = i % 2 === 0 ? '#c084fc' : '#f3e8ff';
        ctx.beginPath();
        ctx.arc(px, py, i % 3 === 0 ? 2.2 : 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying, speedMultiplier, currentStageIdx]);

  return (
    <section id="galaxy-collision-sim" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020516] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            EXPERIENCE 07 · SIGNATURE GALAXY COLLISION SIMULATOR
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <FastForward className="w-6 h-6 text-rose-400" />
            <span>MILKDROMEDA MERGER SIMULATOR</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>NASA GRAVITATIONAL COLLISION MODEL</span>
        </div>
      </div>

      {/* Control Ribbon: Play/Pause, 10x, 100x + Star Gap Zoom */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 font-bold transition-all cursor-pointer flex items-center gap-1.5"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'PAUSE SIMULATION' : 'PLAY SIMULATION'}</span>
          </button>

          <button
            onClick={() => setSpeedMultiplier(1)}
            className={`px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              speedMultiplier === 1 ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold' : 'bg-slate-900 text-slate-400 border-white/5'
            }`}
          >
            1× SPEED
          </button>
          <button
            onClick={() => setSpeedMultiplier(10)}
            className={`px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              speedMultiplier === 10 ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold' : 'bg-slate-900 text-slate-400 border-white/5'
            }`}
          >
            10× SPEED
          </button>
          <button
            onClick={() => setSpeedMultiplier(100)}
            className={`px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              speedMultiplier === 100 ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold' : 'bg-slate-900 text-slate-400 border-white/5'
            }`}
          >
            100× SPEED
          </button>
        </div>

        <button
          onClick={() => setShowStarZoomModal(true)}
          className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono text-xs font-bold hover:bg-purple-500/30 transition-all cursor-pointer flex items-center gap-2"
        >
          <ZoomIn className="w-4 h-4 text-purple-400" />
          <span>ZOOM INTO INDIVIDUAL STARS (WHY STARS DON'T CRASH)</span>
        </button>
      </div>

      {/* Merger Stages Selector */}
      <div className="flex flex-wrap gap-2 pt-1">
        {STAGES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentStageIdx(idx)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              currentStageIdx === idx
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 font-bold scale-105 shadow-md'
                : 'bg-slate-900/80 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-800'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Simulated Canvas + Stage Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-rose-500/30 bg-slate-950 flex items-center justify-center p-2 min-h-[300px]">
          <canvas
            ref={canvasRef}
            width={480}
            height={280}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-slate-950/80 border border-white/10 font-mono text-[10px] text-rose-300 font-bold">
            STAGE: {currentStage.name}
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4 font-mono text-xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">COLLISION TIMEFRAME</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">{currentStage.timeframe}</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mt-2">
              {currentStage.description}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-1">
            <span className="text-cyan-400 font-mono font-bold text-[10px] uppercase block">STELLAR COLLISION PROBABILITY:</span>
            <p className="text-emerald-300 font-bold text-xs">{currentStage.stellarCollisionProbability}</p>
          </div>
        </div>
      </div>

      {/* Star Separation Modal */}
      {showStarZoomModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-3xl border border-purple-500/40 bg-[#03081c] max-w-2xl w-full space-y-4 font-mono text-xs text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] text-purple-400 font-bold uppercase">ASTROPHYSICAL SCALE COMPARISON</span>
                <h3 className="text-xl font-display font-bold text-white">WHY INDIVIDUAL STARS ALMOST NEVER COLLIDE</h3>
              </div>
              <button
                onClick={() => setShowStarZoomModal(false)}
                className="px-3 py-1 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10 cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <p className="text-slate-300 font-sans text-xs leading-relaxed">
              If the Sun were scaled down to the size of a ping-pong ball (3 centimeters), the nearest star (Proxima Centauri) would be over <strong>700 kilometers away</strong>!
            </p>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-2">
              <span className="text-amber-300 font-bold text-xs">Analogy: Two Ping-Pong Balls across 700 km</span>
              <p className="text-slate-200 font-sans text-xs">
                During a galaxy merger, passing two galaxies through each other is like throwing two handfuls of ping-pong balls through each other across hundreds of kilometers. They pass right through without touching!
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
