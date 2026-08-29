import React, { useState, useEffect, useRef } from 'react';
import { Network, ShieldCheck } from 'lucide-react';

export const CosmicWebInteractive: React.FC = () => {
  const [activeLayerToggle, setActiveLayerToggle] = useState<'visible' | 'gas' | 'darkmatter'>('visible');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D / 2D Cosmic Web Particle Network Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const width = canvas.width;
    const height = canvas.height;

    // Generate Nodes (Galaxy Clusters)
    const nodes = [
      { x: width * 0.2, y: height * 0.3, r: 5 },
      { x: width * 0.45, y: height * 0.25, r: 7 },
      { x: width * 0.8, y: height * 0.35, r: 6 },
      { x: width * 0.3, y: height * 0.75, r: 8 },
      { x: width * 0.7, y: height * 0.8, r: 6 },
      { x: width * 0.55, y: height * 0.55, r: 9 } // Coma Supercluster Node
    ];

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulse += 0.03;

      // Draw Filaments (Connecting Lines)
      ctx.lineWidth = 1.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);

          if (activeLayerToggle === 'darkmatter') {
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
            ctx.lineWidth = 3;
          } else if (activeLayerToggle === 'gas') {
            ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
            ctx.lineWidth = 2.5;
          } else {
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
            ctx.lineWidth = 1.5;
          }
          ctx.stroke();
        }
      }

      // Draw Galaxy Cluster Nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + Math.sin(pulse) * 1, 0, 2 * Math.PI);
        if (activeLayerToggle === 'darkmatter') {
          ctx.fillStyle = '#c084fc';
        } else if (activeLayerToggle === 'gas') {
          ctx.fillStyle = '#fbbf24';
        } else {
          ctx.fillStyle = '#38bdf8';
        }
        ctx.fill();

        // Node Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 2.5, 0, 2 * Math.PI);
        ctx.fillStyle = activeLayerToggle === 'darkmatter' ? 'rgba(192, 132, 252, 0.15)' : 'rgba(56, 189, 248, 0.15)';
        ctx.fill();
      });

      // Label Void Regions
      ctx.fillStyle = 'rgba(148, 163, 184, 0.5)';
      ctx.font = '10px monospace';
      ctx.fillText('COSMIC VOID (Low Density)', width * 0.25, height * 0.5);
      ctx.fillText('COSMIC VOID', width * 0.65, height * 0.4);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [activeLayerToggle]);

  return (
    <section id="cosmic-web" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020516] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTIONS 43 - 53 · LARGE SCALE STRUCTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Network className="w-6 h-6 text-cyan-400" />
            <span>THE COSMIC WEB & GALAXY CLUSTERS</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>VERIFIED SOURCE: NASA / ESA</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
        Galaxies are not distributed randomly across space. They are bound into <strong>galaxy groups</strong>, massive <strong>clusters</strong>, sheet-like <strong>galactic walls</strong>, and thread-like <strong>filaments</strong> surrounding immense <strong>cosmic voids</strong>.
      </p>

      {/* Layer Toggles & Canvas Simulation */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold">Layer Filter:</span>
            <button
              onClick={() => setActiveLayerToggle('visible')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeLayerToggle === 'visible' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold' : 'bg-slate-900 text-slate-400'}`}
            >
              Visible Galaxies
            </button>
            <button
              onClick={() => setActiveLayerToggle('gas')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeLayerToggle === 'gas' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-bold' : 'bg-slate-900 text-slate-400'}`}
            >
              X-Ray Intracluster Gas
            </button>
            <button
              onClick={() => setActiveLayerToggle('darkmatter')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${activeLayerToggle === 'darkmatter' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 font-bold' : 'bg-slate-900 text-slate-400'}`}
            >
              Dark Matter Filaments
            </button>
          </div>

          <span className="text-cyan-400 font-bold">2D Particle Web Graph</span>
        </div>

        {/* Canvas Display Frame */}
        <div className="relative w-full h-64 bg-[#01030e] rounded-2xl border border-cyan-500/30 flex items-center justify-center overflow-hidden">
          <canvas ref={canvasRef} width={500} height={250} className="w-full h-full" />
        </div>
      </div>

      {/* Cosmic Architecture Hierarchy Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
        <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 space-y-1">
          <span className="text-[10px] text-cyan-400 uppercase font-bold">01. Local Group</span>
          <h4 className="text-sm font-bold text-white">50+ Member Galaxies</h4>
          <p className="text-slate-300 font-sans leading-snug">Includes Milky Way, Andromeda, Triangulum, and dwarf satellite systems.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 space-y-1">
          <span className="text-[10px] text-purple-400 uppercase font-bold">02. Galaxy Clusters</span>
          <h4 className="text-sm font-bold text-white">Hundreds to Thousands</h4>
          <p className="text-slate-300 font-sans leading-snug">Bound by supermassive dark matter halos and hot intracluster gas (e.g. Virgo Cluster).</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 space-y-1">
          <span className="text-[10px] text-amber-400 uppercase font-bold">03. Superclusters</span>
          <h4 className="text-sm font-bold text-white">Laniakea Supercluster</h4>
          <p className="text-slate-300 font-sans leading-snug">Enormous gravitational watershed structures containing 100,000+ galaxies.</p>
        </div>

        <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 space-y-1">
          <span className="text-[10px] text-emerald-400 uppercase font-bold">04. Cosmic Voids</span>
          <h4 className="text-sm font-bold text-white">The Empty Places</h4>
          <p className="text-slate-300 font-sans leading-snug">Low-density regions spanning hundreds of millions of light-years between filaments.</p>
        </div>
      </div>

    </section>
  );
};
