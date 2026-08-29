import React, { useState, useRef, useEffect } from 'react';
import { Sun, Flame, Zap, Wind, ExternalLink } from 'lucide-react';
import { SUN_LAYERS_DATA, SUN_10_WOW_FACTS } from '../../data/solarSystemData';

export const SunSection: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>('core');
  const [showSolarWindModal, setShowSolarWindModal] = useState<boolean>(false);
  const activeLayer = SUN_LAYERS_DATA.find((l) => l.id === activeLayerId) || SUN_LAYERS_DATA[0];

  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  // Solar Wind Animated Particle System
  useEffect(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 200);

    const particles: { x: number; y: number; speed: number; size: number; color: string }[] = [];
    const colors = ['#f97316', '#fef08a', '#38bdf8', '#a855f7'];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 2 + Math.random() * 4,
        size: 1.5 + Math.random() * 2.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Sun on left
      const sunGradient = ctx.createRadialGradient(0, height / 2, 10, 0, height / 2, 80);
      sunGradient.addColorStop(0, '#ffffff');
      sunGradient.addColorStop(0.3, '#fef08a');
      sunGradient.addColorStop(0.8, '#f97316');
      sunGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(0, height / 2, 80, 0, Math.PI * 2);
      ctx.fill();

      // Draw Earth Magnetosphere Shield at 70% width
      const earthX = width * 0.7;
      const earthY = height / 2;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(earthX, earthY, 30, Math.PI * 0.5, Math.PI * 1.5);
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(earthX, earthY, 6, 0, Math.PI * 2);
      ctx.fill();

      // Move solar wind particles
      particles.forEach((p) => {
        p.x += p.speed;
        if (p.x > width) p.x = 80;

        // Deflection at magnetosphere
        if (Math.abs(p.x - earthX) < 35 && Math.abs(p.y - earthY) < 35) {
          p.y += (p.y > earthY ? 1 : -1) * 3;
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section id="sun-section" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-amber-500/20 bg-white/90 dark:bg-slate-900/80 space-y-8 shadow-xl">
      
      {/* Sun Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-800 dark:text-amber-300">
            <Sun className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>THE STAR THAT OWNS THIS SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white mt-1">
            THE SUN (SOL)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1 max-w-3xl">
            A 4.54-billion-year-old G-type yellow dwarf star holding 99.86% of all Solar System mass in its gravitational grip.
          </p>
        </div>

        <a
          href="https://science.nasa.gov/sun/facts/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 hover:bg-amber-500/20 transition-all shrink-0"
        >
          <span>NASA Sun Facts</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Core Solar Telemetry Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
        <div className="bg-slate-100 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
          <span className="text-slate-500 text-[10px] uppercase font-semibold block">Stellar Age</span>
          <span className="text-amber-700 dark:text-amber-300 font-extrabold text-sm sm:text-base font-display">~4.54 BILLION YRS</span>
        </div>

        <div className="bg-slate-100 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
          <span className="text-slate-500 text-[10px] uppercase font-semibold block">Spectral Class</span>
          <span className="text-amber-700 dark:text-amber-300 font-extrabold text-sm sm:text-base font-display">G2V Yellow Dwarf</span>
        </div>

        <div className="bg-slate-100 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
          <span className="text-slate-500 text-[10px] uppercase font-semibold block">Equatorial Diameter</span>
          <span className="text-amber-700 dark:text-amber-300 font-extrabold text-sm sm:text-base font-display">1.39 MILLION KM</span>
        </div>

        <div className="bg-slate-100 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center">
          <span className="text-slate-500 text-[10px] uppercase font-semibold block">Earth Scale</span>
          <span className="text-amber-700 dark:text-amber-300 font-extrabold text-sm sm:text-base font-display">109 Earth Diameters</span>
        </div>

        <div className="bg-slate-100 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 text-center col-span-2 sm:col-span-1">
          <span className="text-slate-500 text-[10px] uppercase font-semibold block">System Mass Share</span>
          <span className="text-amber-700 dark:text-amber-300 font-extrabold text-sm sm:text-base font-display">99.86% MASS</span>
        </div>
      </div>

      {/* ☀️ INTERACTIVE 6-LAYER SUN INSPECTOR */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            <span>Interactive 6-Layer Sun Anatomy Inspector</span>
          </h3>
          <span className="text-xs font-mono text-amber-700 dark:text-amber-300 font-bold">Select Layer Below</span>
        </div>

        {/* Layer Tabs */}
        <div className="flex flex-wrap gap-2">
          {SUN_LAYERS_DATA.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayerId(layer.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                activeLayerId === layer.id
                  ? 'bg-amber-600 dark:bg-amber-500/20 text-white dark:text-amber-300 border-amber-600 dark:border-amber-500/60 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-950/60 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-amber-500/40'
              }`}
            >
              {layer.name}
            </button>
          ))}
        </div>

        {/* Selected Layer Content Box */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/40 bg-slate-950 text-white space-y-4 animate-fade-in-up shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider block">
                LAYER DEPTH: {activeLayer.depth}
              </span>
              <h4 className="text-2xl font-display font-extrabold text-white">
                {activeLayer.name} Layer
              </h4>
            </div>

            <div className="bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-500/40 text-amber-300 font-mono text-xs font-bold">
              Temp: {activeLayer.temperature}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-semibold block">PRIMARY PHYSICAL PROCESS</span>
              <strong className="text-cyan-300">{activeLayer.process}</strong>
            </div>

            <div className="md:col-span-2 bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-semibold block">SCIENTIFIC MECHANISM DETAILS</span>
              <p className="text-slate-200 font-sans text-xs leading-relaxed">{activeLayer.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🌬️ ANIMATED SOLAR WIND & HELIOSPHERE BUBBLE EXPERIENCE */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-cyan-500/20 bg-slate-50 dark:bg-slate-950/80 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
              <Wind className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
              <span>PARTICLE SYSTEM · SOLAR WIND & HELIOSPHERE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mt-1">
              The Sun Makes a Bubble Around Itself
            </h3>
          </div>

          <button
            onClick={() => setShowSolarWindModal(!showSolarWindModal)}
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-600 dark:bg-cyan-500/20 text-white dark:text-cyan-300 border border-cyan-500/50 hover:bg-cyan-500/30 transition-all"
          >
            {showSolarWindModal ? 'Hide scientific details' : 'WHAT IS SOLAR WIND?'}
          </button>
        </div>

        {/* Live Canvas Particle Animation */}
        <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-950 border border-slate-300 dark:border-white/10">
          <canvas ref={particleCanvasRef} className="w-full h-full" />
          <div className="absolute bottom-2 left-3 text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
            ☀️ Solar Wind Plasma (300 - 800 km/s) ➔ Shielded by Planetary Magnetospheres
          </div>
        </div>

        {/* Explanation Callout */}
        {showSolarWindModal && (
          <div className="glass-panel p-5 rounded-xl border border-cyan-500/30 bg-white/80 dark:bg-slate-900/90 text-xs font-sans space-y-2 leading-relaxed animate-fade-in-up">
            <h4 className="font-mono font-bold text-cyan-700 dark:text-cyan-300 text-sm">
              Scientific Breakdown: Solar Wind & The Heliosphere
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              The <strong>solar wind</strong> is a continuous stream of charged particles (mostly protons and electrons) ejected from the upper atmosphere of the Sun into interplanetary space.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              This supersonic wind carves out an enormous protective cavity called the <strong>Heliosphere</strong>. The Heliosphere contains three primary regions:
            </p>
            <ul className="list-disc pl-5 space-y-1 font-mono text-[11px] text-slate-800 dark:text-slate-200">
              <li><strong>Termination Shock (~80-100 AU):</strong> Where solar wind slows abruptly from supersonic to subsonic speed.</li>
              <li><strong>Heliosheath (~100-120 AU):</strong> The turbulent transition zone compressed by galactic interstellar pressure.</li>
              <li><strong>Heliopause (~120 AU):</strong> The outer boundary where solar wind meets interstellar plasma. Crossed by Voyager 1 (2012) & Voyager 2 (2018).</li>
            </ul>
          </div>
        )}
      </div>

      {/* 🌟 10 SUN WOW FACTS CARDS */}
      <div className="space-y-4">
        <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-500" />
          <span>"THE SUN IS STRANGER THAN IT LOOKS" — 10 VERIFIED WOW FACTS</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SUN_10_WOW_FACTS.map((fact, idx) => (
            <div
              key={fact.id}
              className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  SUN FACT #{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Status: {fact.scientificStatus}
                </span>
              </div>

              <h4 className="text-base font-display font-bold text-slate-900 dark:text-white">
                {fact.title}
              </h4>
              <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                "{fact.shortFact}"
              </p>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
                {fact.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
