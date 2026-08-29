import React, { useState, useEffect } from 'react';
import { Rocket, Play, Pause, RotateCcw, Flame } from 'lucide-react';

export const LaunchSequenceAnimation: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(10);
  const [stage, setStage] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const STAGES = [
    { title: 'T-MINUS 10s TO LIFTOFF', desc: 'Main engine ignition sequence start. Cryogenic liquid oxygen and hydrogen pumps ramp up.', flame: false },
    { title: '00:00 — LIFTOFF & MAXIMUM THRUST', desc: 'Solid rocket boosters ignite. Vehicle lifts off from launch complex into flight corridor.', flame: true },
    { title: '01:15 — MAX-Q (MAXIMUM DYNAMIC PRESSURE)', desc: 'Aerodynamic stress on rocket airframe reaches peak level during troposphere ascent.', flame: true },
    { title: '02:30 — STAGE 1 SEPARATION (MECO)', desc: 'Main Engine Cut-Off. Booster stage detaches while Stage 2 vacuum engine ignites.', flame: true },
    { title: '03:45 — PAYLOAD FAIRING SEPARATION', desc: 'Aerodynamic nose cone splits and jettisons in upper atmosphere, exposing spacecraft.', flame: false },
    { title: '08:50 — ORBIT INSERTION & DEPLOYMENT', desc: 'Spacecraft separates into target transfer orbit, solar arrays unfold, telemetry confirmed.', flame: false }
  ];

  useEffect(() => {
    let timer: any = null;
    if (isRunning) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setStage((sPrev) => {
              if (sPrev >= STAGES.length - 1) {
                setIsRunning(false);
                return sPrev;
              }
              return sPrev + 1;
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, stage]);

  const resetLaunch = () => {
    setIsRunning(false);
    setCountdown(10);
    setStage(0);
  };

  const currentStage = STAGES[stage];

  return (
    <section id="launch-sequence-animation" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl font-mono text-xs transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500/10 border border-orange-500/30 text-orange-700 dark:text-orange-300">
            <Rocket className="w-4 h-4 text-orange-500" />
            <span>FEATURE 7 · CINEMATIC LAUNCH &amp; STAGE SEPARATION ANIMATION</span>
          </div>

          <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-500 text-[10px]">
            ⚠️ SCIENTIFIC / ARTISTIC SIMULATION
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          ROCKET ASCENT &amp; STAGE SEPARATION SIMULATION
        </h2>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold transition-all cursor-pointer shadow-lg shadow-orange-500/20 flex items-center gap-2"
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isRunning ? 'PAUSE COUNTDOWN' : 'INITIATE LAUNCH COUNTDOWN'}</span>
          </button>

          <button
            onClick={resetLaunch}
            className="p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-white/10 hover:bg-slate-800 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="text-amber-400 font-bold text-sm">
          COUNTDOWN TELEMETRY: T-MINUS {countdown}s
        </div>
      </div>

      {/* Launch Display Frame */}
      <div className="p-8 rounded-3xl bg-slate-950 border border-orange-500/40 text-white space-y-6 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-orange-400 font-bold text-sm">STAGE {stage + 1} OF {STAGES.length}: {currentStage.title}</span>
          <span className="text-xs text-emerald-400 font-bold">STATUS: {isRunning ? 'EXECUTING FLIGHT PROGRAM' : 'STANDBY'}</span>
        </div>

        {/* Visual Rocket Stage Box */}
        <div className="w-full h-40 rounded-2xl bg-gradient-to-t from-slate-900 via-slate-950 to-slate-950 border border-orange-500/30 flex items-center justify-center relative overflow-hidden">
          <div className="text-center space-y-2 relative z-10">
            <div className="relative inline-block">
              <Rocket className={`w-12 h-12 text-orange-400 mx-auto transition-all duration-500 ${isRunning ? '-translate-y-2' : ''}`} />
              {currentStage.flame && (
                <Flame className="w-8 h-8 text-amber-500 mx-auto animate-bounce -mt-2" />
              )}
            </div>
            <div className="text-sm font-bold text-white">{currentStage.title}</div>
          </div>
        </div>

        {/* Stage Description */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-xs font-sans text-slate-200">
          {currentStage.desc}
        </div>

        {/* Stage Progress Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {STAGES.map((s, idx) => (
            <div
              key={s.title}
              className={`p-2.5 rounded-xl border text-center text-[10px] ${
                stage === idx
                  ? 'bg-orange-500/20 text-orange-300 border-orange-400 font-bold'
                  : idx < stage
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-slate-900 text-slate-500 border-white/5'
              }`}
            >
              STAGE {idx + 1}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
