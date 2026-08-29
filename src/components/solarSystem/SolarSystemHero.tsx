import React, { useRef, useEffect } from 'react';
import { Sparkles, Sun, Compass, Globe, Info } from 'lucide-react';

interface SolarSystemHeroProps {
  onExploreClick: () => void;
  onSunClick: () => void;
  onRandomWorldClick: () => void;
}

export const SolarSystemHero: React.FC<SolarSystemHeroProps> = ({
  onExploreClick,
  onSunClick,
  onRandomWorldClick,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated Logarithmic Orbit Background Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1000);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 1000;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    window.addEventListener('resize', handleResize);

    const planets = [
      { name: 'Mercury', color: '#a1a1aa', radius: 4, distanceRatio: 0.12, speed: 0.04, angle: 0 },
      { name: 'Venus', color: '#fef08a', radius: 7, distanceRatio: 0.18, speed: 0.025, angle: 1.2 },
      { name: 'Earth', color: '#38bdf8', radius: 8, distanceRatio: 0.25, speed: 0.018, angle: 2.5 },
      { name: 'Mars', color: '#f87171', radius: 6, distanceRatio: 0.33, speed: 0.012, angle: 4.1 },
      { name: 'Jupiter', color: '#fb923c', radius: 18, distanceRatio: 0.46, speed: 0.007, angle: 0.8 },
      { name: 'Saturn', color: '#fde047', radius: 15, distanceRatio: 0.60, speed: 0.004, angle: 3.0, hasRings: true },
      { name: 'Uranus', color: '#22d3ee', radius: 11, distanceRatio: 0.74, speed: 0.0025, angle: 1.9 },
      { name: 'Neptune', color: '#60a5fa', radius: 10, distanceRatio: 0.88, speed: 0.0018, angle: 5.2 },
    ];

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) * 0.44;

      // Draw Sun Glow
      const sunGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 45);
      sunGradient.addColorStop(0, '#ffffff');
      sunGradient.addColorStop(0.2, '#fef08a');
      sunGradient.addColorStop(0.6, '#f97316');
      sunGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 45, 0, Math.PI * 2);
      ctx.fill();

      // Draw Orbit Lines & Animated Planets
      planets.forEach((p) => {
        const r = p.distanceRatio * maxRadius;

        // Orbit ring
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Planet position
        const currentAngle = p.angle + time * p.speed * 5;
        const px = centerX + Math.cos(currentAngle) * r;
        const py = centerY + Math.sin(currentAngle) * r;

        // Saturn Rings visualization
        if (p.hasRings) {
          ctx.strokeStyle = 'rgba(253, 224, 71, 0.4)';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.ellipse(px, py, p.radius * 1.8, p.radius * 0.6, Math.PI / 4, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Planet sphere
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Planet glow
        const planetGlow = ctx.createRadialGradient(px, py, 0, px, py, p.radius * 2);
        planetGlow.addColorStop(0, p.color);
        planetGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = planetGlow;
        ctx.beginPath();
        ctx.arc(px, py, p.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="glass-panel p-6 sm:p-12 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/60 text-slate-900 dark:text-white relative overflow-hidden shadow-2xl space-y-8 animate-fade-in-up">
      
      {/* Background Canvas */}
      <div className="absolute inset-0 opacity-40 dark:opacity-60 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Notice Banner */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
          <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-spin-slow" />
          <span>UNIVERSEFACT · SOLAR SYSTEM EXPERIENCE 2.0</span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10">
          <Info className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>Logarithmic Orbit View · Distances compressed for visualization</span>
        </div>
      </div>

      {/* Main Title & Hero Copy */}
      <div className="relative z-10 space-y-4 max-w-4xl">
        <h1 className="text-4xl sm:text-7xl font-display font-black tracking-tight text-slate-900 dark:text-white leading-tight">
          OUR SOLAR SYSTEM
        </h1>
        <p className="text-lg sm:text-2xl font-display text-cyan-700 dark:text-cyan-300 font-bold leading-snug">
          "Eight worlds. Hundreds of moons. Countless smaller bodies. One star holding it all together."
        </p>
        <p className="text-xs sm:text-base text-slate-700 dark:text-slate-300 font-sans leading-relaxed max-w-3xl">
          Travel from the blistering 15,000,000°C core of the Sun to the icy Kuiper Belt and distant spherical Oort Cloud. Explore 100% NASA/ESA-verified telemetry, 3D interactive models, real planetary scale comparisons, and astrobiological mysteries.
        </p>
      </div>

      {/* Action CTA Buttons */}
      <div className="relative z-10 flex flex-wrap gap-4 pt-2">
        <button
          onClick={onExploreClick}
          className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-bold bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 hover:bg-cyan-500 transition-all shadow-xl hover:scale-105 flex items-center gap-2"
        >
          <Compass className="w-4 h-4" />
          <span>EXPLORE THE SOLAR SYSTEM →</span>
        </button>

        <button
          onClick={onSunClick}
          className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-bold bg-amber-500/10 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/40 hover:bg-amber-500/20 transition-all shadow-md flex items-center gap-2"
        >
          <Sun className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span>START WITH THE SUN →</span>
        </button>

        <button
          onClick={onRandomWorldClick}
          className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-bold bg-purple-500/10 dark:bg-purple-500/20 text-purple-900 dark:text-purple-300 border border-purple-500/40 hover:bg-purple-500/20 transition-all flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>RANDOM WORLD ✦</span>
        </button>
      </div>

    </section>
  );
};
