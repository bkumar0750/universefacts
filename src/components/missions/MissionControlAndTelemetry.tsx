import React, { useState } from 'react';
import { Radio, Send } from 'lucide-react';

export const MissionControlAndTelemetry: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState<'jwst' | 'perseverance' | 'voyager1' | 'adityal1'>('jwst');
  const [isSignalSent, setIsSignalSent] = useState<boolean>(false);

  const MISSIONS_TELEMETRY = [
    {
      id: 'jwst',
      name: 'JAMES WEBB SPACE TELESCOPE',
      distance: '1,500,000 km (Sun-Earth L2)',
      lightTime: '5 seconds',
      dsnStation: 'Goldstone / Madrid Deep Space Communication Complex',
      status: 'ACTIVE 🟢',
      commandNote: 'Radio signal travels at speed of light (300,000 km/s) across 1.5 million km.'
    },
    {
      id: 'perseverance',
      name: 'PERSEVERANCE ROVER (MARS)',
      distance: '225,000,000 km (Average Earth-Mars geometry)',
      lightTime: '12.5 minutes (One-Way)',
      dsnStation: 'Canberra Deep Space Communication Complex (70m dish)',
      status: 'ACTIVE 🟢',
      commandNote: 'Mars commands are transmitted in scheduled batches due to the 25-minute round-trip delay.'
    },
    {
      id: 'voyager1',
      name: 'VOYAGER 1 (INTERSTELLAR SPACE)',
      distance: '24,300,000,000 km (162.4 AU from Earth)',
      lightTime: '22 Hours 30 Minutes',
      dsnStation: 'DSN Canberra 70-Meter Antenna (DSS-43)',
      status: 'ACTIVE 🟢',
      commandNote: 'Humanity\'s longest communication link! Command signals require nearly a full day to reach Voyager 1.'
    },
    {
      id: 'adityal1',
      name: 'ADITYA-L1 (ISRO SOLAR OBSERVATORY)',
      distance: '1,500,000 km (Sun-Earth L1 Halo Orbit)',
      lightTime: '5 seconds',
      dsnStation: 'ISTRAC Bengaluru / ESA Malargüe / NASA DSN',
      status: 'ACTIVE 🟢',
      commandNote: 'Continuous real-time coronal telemetry transmitted directly to ISRO Telemetry Tracking network.'
    }
  ];

  const current = MISSIONS_TELEMETRY.find((m) => m.id === selectedTarget)!;

  const sendCommandSignal = () => {
    setIsSignalSent(true);
    setTimeout(() => {
      setIsSignalSent(false);
    }, 4000);
  };

  const STATUS_LEGEND = [
    { label: 'ACTIVE', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40', desc: 'Spacecraft operational & transmitting data' },
    { label: 'EXTENDED', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40', desc: 'Primary mission completed, extended science active' },
    { label: 'COMPLETE', badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40', desc: 'All primary & secondary science objectives achieved' },
    { label: 'PLANNED', badge: 'bg-slate-500/20 text-slate-300 border-slate-500/40', desc: 'Approved for development & scheduled launch' },
    { label: 'PROPOSED', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40', desc: 'Concept study under agency evaluation' },
    { label: 'FAILED', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40', desc: 'Spacecraft lost during launch or operations' }
  ];

  return (
    <section id="mission-control-telemetry" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl font-mono text-xs transition-colors">
      
      {/* 1. SIGNATURE FEATURE ③: "IF YOU SENT A COMMAND NOW" */}
      <div className="space-y-6">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
            <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span>SIGNATURE FEATURE ③ · MISSION CONTROL COMMAND &amp; LIGHT-TIME DELAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            IF YOU SENT A COMMAND NOW
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-sans max-w-3xl leading-relaxed">
            Select a spacecraft to calculate the exact speed-of-light radio delay ($t = d/c$) between Earth ground stations and deep-space probes.
          </p>
        </div>

        {/* Target Selectors */}
        <div className="flex flex-wrap gap-2">
          {MISSIONS_TELEMETRY.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedTarget(m.id as any)}
              className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                selectedTarget === m.id
                  ? 'bg-emerald-500/20 text-emerald-900 dark:text-emerald-200 border-emerald-400 font-bold scale-105 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              {m.name.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Telemetry Display Box */}
        <div className="p-6 rounded-3xl bg-slate-950 border border-emerald-500/40 text-white space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <span className="text-emerald-400 font-bold text-xs">SPACECRAFT TARGET: {current.name}</span>
              <div className="text-2xl font-bold font-display text-white mt-0.5">{current.distance}</div>
            </div>

            <button
              onClick={sendCommandSignal}
              disabled={isSignalSent}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center gap-2 self-start sm:self-auto"
            >
              <Send className="w-4 h-4" />
              <span>{isSignalSent ? 'TRANSMITTING SIGNAL...' : 'SEND SIGNAL TO SPACECRAFT'}</span>
            </button>
          </div>

          {/* Dynamic Signal Beam Animation Bar */}
          {isSignalSent && (
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-400 text-emerald-300 space-y-2 animate-fade-in font-mono">
              <div className="flex justify-between text-[10px]">
                <span>EARTH (DSN GROUND STATION)</span>
                <span className="animate-pulse">RADIO BEAM IN TRANSIT...</span>
                <span>{current.name}</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-emerald-500/40">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 animate-pulse w-full" />
              </div>
            </div>
          )}

          {/* Light-time Result Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-bold">ONE-WAY SIGNAL TRAVEL TIME</span>
              <div className="text-2xl font-extrabold text-amber-300 font-display">{current.lightTime}</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-bold">GROUND STATION NODE</span>
              <div className="text-xs font-bold text-cyan-300">{current.dsnStation}</div>
            </div>
          </div>

          <p className="font-sans text-xs text-slate-300 leading-relaxed">
            {current.commandNote}
          </p>
        </div>
      </div>

      {/* 2. OFFICIAL MISSION STATUS LEGEND */}
      <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-white/10">
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
          OFFICIAL MISSION STATUS LEGEND
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {STATUS_LEGEND.map((s) => (
            <div key={s.label} className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 space-y-1">
              <span className={`px-2 py-0.5 rounded border text-[10px] font-bold block w-max ${s.badge}`}>
                {s.label}
              </span>
              <p className="font-sans text-[11px] text-slate-600 dark:text-slate-400 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
