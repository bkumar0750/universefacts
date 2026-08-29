import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';

export const GalaxyMergerSimulator: React.FC = () => {
  const [stage, setStage] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const STAGES = [
    { title: '1. Initial Approach', time: 'Present Day (0 Gyr)', desc: 'Milky Way and Andromeda approach each other at 110 km/s across 2.5 million light-years.' },
    { title: '2. Tidal Interaction', time: 'In ~3.75 Billion Years', desc: 'Gravitational forces stretch gas clouds into massive tidal tails. Stars rarely collide.' },
    { title: '3. Starburst Trigger', time: 'In ~4.0 Billion Years', desc: 'Gas clouds smash together, sparking rapid starburst star formation across both galaxies.' },
    { title: '4. Milkdromeda Elliptical', time: 'In ~4.5 - 5.0 Billion Years', desc: 'Systems merge into a giant unbarred elliptical galaxy nicknamed "Milkdromeda".' }
  ];

  // Particle Canvas Collision Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let progress = stage / (STAGES.length - 1);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Galaxy A Center
      const offsetA = (1 - progress) * (width * 0.3) - (progress > 0.7 ? (progress - 0.7) * 40 : 0);
      const gAX = width * 0.5 - offsetA;

      // Galaxy B Center
      const offsetB = (1 - progress) * (width * 0.3) - (progress > 0.7 ? (progress - 0.7) * 40 : 0);
      const gBX = width * 0.5 + offsetB;

      // Draw Galaxy A Stars
      ctx.fillStyle = '#38bdf8';
      for (let i = 0; i < 80; i++) {
        const angle = i * 0.15 + progress * 4;
        const radius = 10 + (i % 35) * (1 + progress * 0.5);
        const x = gAX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * (radius * (1 - progress * 0.3));
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Draw Galaxy B Stars
      ctx.fillStyle = '#fbbf24';
      for (let i = 0; i < 80; i++) {
        const angle = i * 0.15 - progress * 4;
        const radius = 10 + (i % 35) * (1 + progress * 0.5);
        const x = gBX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * (radius * (1 - progress * 0.3));
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Gravitational Tidal Connection Line
      if (progress > 0.25 && progress < 0.85) {
        ctx.beginPath();
        ctx.moveTo(gAX, centerY);
        ctx.bezierCurveTo(width / 2, centerY - 40, width / 2, centerY + 40, gBX, centerY);
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.4)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Starburst Glow during collision
      if (progress > 0.4 && progress < 0.8) {
        ctx.beginPath();
        ctx.arc(width / 2, centerY, 30 + Math.sin(Date.now() * 0.01) * 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(244, 63, 94, 0.15)';
        ctx.fill();
      }

      if (isSimulating) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [stage, isSimulating]);

  const handleStartSimulation = () => {
    setIsSimulating(true);
    let s = 0;
    const interval = setInterval(() => {
      s++;
      if (s < STAGES.length) {
        setStage(s);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1500);
  };

  return (
    <section id="merger-sim" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020516] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/10 border border-pink-500/30 text-pink-300">
            SECTIONS 15 - 17 · INTERACTIVE DYNAMICS SIMULATOR
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Sparkles className="w-6 h-6 text-pink-400" />
            <span>GALAXIES COLLIDE — MILKDOMEDA SIMULATION</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>LABEL: MODELED FUTURE</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
        Milky Way & Andromeda are hurtling toward each other. In approximately 4.5 billion years, their gravitational fields will interlock, transforming both spiral giants into a giant elliptical galaxy.
      </p>

      {/* Simulator Controls & Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Interactive Canvas Frame */}
        <div className="lg:col-span-7 bg-slate-950 p-4 rounded-2xl border border-cyan-500/30 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-cyan-400 font-bold">2D Particle Gravitational Simulation</span>
            <span className="text-pink-300 font-bold">{STAGES[stage].time}</span>
          </div>

          <div className="relative w-full h-56 bg-[#010410] rounded-xl overflow-hidden flex items-center justify-center border border-white/10">
            <canvas ref={canvasRef} width={450} height={220} className="w-full h-full" />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              onClick={handleStartSimulation}
              disabled={isSimulating}
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-pink-500/20 text-pink-300 border border-pink-500/40 hover:bg-pink-500/30 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isSimulating ? 'SIMULATING MERGER...' : 'RUN MERGER TIMELINE ▶'}</span>
            </button>

            <button
              onClick={() => { setStage(0); setIsSimulating(false); }}
              className="px-3 py-2 rounded-xl text-xs font-mono bg-slate-900 text-slate-400 border border-white/10 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET</span>
            </button>
          </div>
        </div>

        {/* Right Stage Timeline Stepper */}
        <div className="lg:col-span-5 space-y-2">
          <span className="text-xs font-mono text-slate-400 font-bold uppercase">Simulation Stages:</span>
          {STAGES.map((stg, idx) => (
            <button
              key={idx}
              onClick={() => { setStage(idx); setIsSimulating(false); }}
              className={`w-full p-3 rounded-xl text-left font-mono transition-all border ${
                stage === idx
                  ? 'bg-pink-500/20 text-pink-200 border-pink-500/50 shadow-md font-bold'
                  : 'bg-slate-900/60 text-slate-400 border-white/5 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] text-pink-400 font-bold">
                <span>{stg.title}</span>
                <span>{stg.time}</span>
              </div>
              <p className="text-xs font-sans text-slate-300 mt-1 leading-snug">{stg.desc}</p>
            </button>
          ))}
        </div>

      </div>

      {/* MYTH VS REALITY CALLOUT */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 space-y-2 font-mono text-xs">
        <div className="flex items-center gap-2 text-rose-400 font-bold">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>GALAXY COLLISION MYTH BUSTED</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 font-sans">
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
            <strong className="text-rose-300 font-mono text-xs uppercase block mb-1">MYTH:</strong>
            "Galaxies crash into each other like solid physical objects, destroying stars."
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <strong className="text-emerald-300 font-mono text-xs uppercase block mb-1">REALITY:</strong>
            "Stars are separated by light-years of empty space. A galactic collision is purely a gravitational dance—direct star-star collisions are near zero!"
          </div>
        </div>
      </div>

    </section>
  );
};
