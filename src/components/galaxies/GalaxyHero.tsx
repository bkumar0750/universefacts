import React, { useState } from 'react';
import { Orbit, Sparkles, ArrowRight, Compass, HelpCircle } from 'lucide-react';

interface GalaxyHeroProps {
  onEnter?: () => void;
  onExploreMilkyWay?: () => void;
  onShowRandomFact?: () => void;
}

const SCALE_STEPS = [
  { name: 'EARTH', scale: '12,742 km', desc: 'Our planetary home' },
  { name: 'SOLAR SYSTEM', scale: '100 AU (~15 Billion km)', desc: 'Sun & 8 orbiting major planets' },
  { name: 'MILKY WAY', scale: '100,000 Light-Years', desc: 'Our home barred spiral galaxy' },
  { name: 'LOCAL GROUP', scale: '10 Million Light-Years', desc: '50+ gravitationally bound neighbor galaxies' },
  { name: 'GALAXY CLUSTERS', scale: '100 Million Light-Years', desc: 'Dense clusters bound by dark matter halos' },
  { name: 'COSMIC WEB', scale: '1 Billion Light-Years', desc: 'Vast network of filaments and low-density voids' },
  { name: 'OBSERVABLE UNIVERSE', scale: '93 Billion Light-Years', desc: 'The entire light sphere visible to humanity' }
];

export const GalaxyHero: React.FC<GalaxyHeroProps> = ({
  onEnter = () => {
    document.getElementById('galaxy-explorer')?.scrollIntoView({ behavior: 'smooth' });
  },
  onExploreMilkyWay = () => {
    document.getElementById('milky-way-cutaway')?.scrollIntoView({ behavior: 'smooth' });
  },
  onShowRandomFact = () => {
    document.getElementById('galaxy-huge-facts')?.scrollIntoView({ behavior: 'smooth' });
  }
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlayingAnimation, setIsPlayingAnimation] = useState<boolean>(false);

  const handleRunAnimation = () => {
    setIsPlayingAnimation(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < SCALE_STEPS.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        // Reverse zoom after a brief pause
        setTimeout(() => {
          const reverseInterval = setInterval(() => {
            step--;
            if (step >= 0) {
              setActiveStep(step);
            } else {
              clearInterval(reverseInterval);
              setIsPlayingAnimation(false);
            }
          }, 600);
        }, 1000);
      }
    }, 800);
  };

  return (
    <div className="relative min-h-[85vh] rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-500/30 bg-white/95 dark:bg-[#020614] flex flex-col justify-between p-6 sm:p-10 text-slate-900 dark:text-white shadow-2xl shadow-cyan-950/20 dark:shadow-cyan-950/50 transition-colors duration-300">
      
      {/* Background Deep Space Starfield & Animated Nebular Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-50 via-slate-100 to-white dark:from-cyan-900/30 dark:via-[#03071b] dark:to-[#01030b] pointer-events-none" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"
        style={{ animationDuration: '12s' }}
      />

      {/* Header Tag */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300 backdrop-blur-md">
          <Orbit className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-spin" style={{ animationDuration: '20s' }} />
          <span>INTERACTIVE COSMIC ATLAS · GALAXIES</span>
        </div>

        <span className="text-xs font-mono text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
          Scale Horizon: <strong className="text-cyan-700 dark:text-cyan-300">{SCALE_STEPS[activeStep].scale}</strong>
        </span>
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-4xl space-y-6 my-8">
        <h1 className="text-5xl sm:text-7xl font-display font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-800 to-cyan-600 dark:from-white dark:via-cyan-100 dark:to-cyan-400 drop-shadow-md">
          GALAXIES
        </h1>

        <p className="text-xl sm:text-2xl font-display font-semibold text-cyan-800 dark:text-cyan-200/90 italic">
          "THE GREAT CITIES OF THE COSMOS."
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans leading-relaxed max-w-2xl font-medium">
          Billions of stars. Invisible dark matter. Gas. Dust. Black holes. And billions of years of cosmic evolution. Journey from dwarf satellite galaxies to gigantic superclusters and the cosmic web.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button
            onClick={onEnter}
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>ENTER THE GALAXY</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreMilkyWay}
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-white dark:bg-slate-900/90 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-900 dark:hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Compass className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>EXPLORE THE MILKY WAY</span>
          </button>

          <button
            onClick={onShowRandomFact}
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-500/40 text-purple-900 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>SHOW ME SOMETHING STRANGE</span>
          </button>
        </div>
      </div>

      {/* Hero Interactive Scale Ladder Animator */}
      <div className="relative z-10 glass-panel p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-cyan-500/30 bg-white/90 dark:bg-slate-950/80 space-y-4 backdrop-blur-md">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-300 font-bold">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>COSMIC PERSPECTIVE FLY-THROUGH SIMULATOR</span>
          </div>
          <button
            onClick={handleRunAnimation}
            disabled={isPlayingAnimation}
            className={`px-3 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
              isPlayingAnimation
                ? 'bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border-cyan-500/30 animate-pulse'
                : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/40 hover:bg-cyan-500/20'
            }`}
          >
            {isPlayingAnimation ? 'FLYING THROUGH SCALES...' : 'PLAY FLY-THROUGH ANIMATION ▶'}
          </button>
        </div>

        {/* Step Progression Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
          {SCALE_STEPS.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`p-2.5 rounded-xl text-left transition-all font-mono cursor-pointer ${
                activeStep === index
                  ? 'bg-cyan-500/20 border border-cyan-500 text-cyan-950 dark:text-white shadow-md shadow-cyan-500/20 font-bold scale-[1.02]'
                  : 'bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-900'
              }`}
            >
              <div className="text-[10px] text-cyan-700 dark:text-cyan-400 font-bold">0{index + 1}</div>
              <div className="text-xs font-bold truncate mt-0.5">{step.name}</div>
              <div className="text-[9px] text-slate-500 dark:text-slate-400 truncate">{step.scale}</div>
            </button>
          ))}
        </div>

        {/* Active Scale Telemetry Description */}
        <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-2">
          <div>
            <span className="text-cyan-800 dark:text-cyan-400 font-bold">Active Scale: </span>
            <strong className="text-slate-900 dark:text-white">{SCALE_STEPS[activeStep].name}</strong> — <span className="text-slate-700 dark:text-slate-300 font-sans">{SCALE_STEPS[activeStep].desc}</span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-[11px] shrink-0">
            Physical Extent: <strong className="text-amber-700 dark:text-amber-300">{SCALE_STEPS[activeStep].scale}</strong>
          </div>
        </div>
      </div>

    </div>
  );
};
