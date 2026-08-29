import React, { useState } from 'react';
import { Sparkles, AlertTriangle, Trophy } from 'lucide-react';

export const MissionScienceAndDiscoveries: React.FC = () => {
  const [activeBeforeAfter, setActiveBeforeAfter] = useState<'jwst' | 'chandrayaan3' | 'hubble'>('jwst');

  const BEFORE_AFTER_DATA = [
    {
      id: 'jwst',
      title: 'BEFORE VS AFTER JWST (2022 - 2026)',
      before: 'Early universe galaxy models assumed star formation built up slowly over 500M to 1B years after Big Bang.',
      after: 'JWST detected fully assembled, luminous galaxies and massive black hole seeds at z=14.44 (only 280M years post Big Bang).',
      changed: 'Rewrote primordial galaxy formation timelines and early black hole growth models.',
      unknown: 'How did supermassive black holes grow to millions of solar masses so rapidly?'
    },
    {
      id: 'chandrayaan3',
      title: 'BEFORE VS AFTER CHANDRAYAAN-3 (2023)',
      before: 'Lunar south polar regolith composition and thermal gradient at 70°S were inferred strictly from orbital radar.',
      after: 'Pragyan rover & Vikram ChaSTE measured direct in-situ topsoil thermal conductivity and confirmed elemental Sulfur.',
      changed: 'Demonstrated direct in-situ resource utilization (ISRU) feasibility for future crewed lunar bases.',
      unknown: 'What is the precise depth profile of subsurface water ice reservoirs?'
    },
    {
      id: 'hubble',
      title: 'BEFORE VS AFTER HUBBLE SPACE TELESCOPE (1990 - 2026)',
      before: 'The expansion rate of the universe (Hubble constant) was uncertain by a factor of two (50 to 100 km/s/Mpc).',
      after: 'Hubble constrained the expansion rate to ~1% precision and discovered dark energy accelerating expansion.',
      changed: 'Proved cosmic expansion is accelerating rather than slowing down under gravity.',
      unknown: 'What physical field or energy density drives dark energy acceleration?'
    }
  ];

  const RISKS_13 = [
    { title: '1. ROCKET LIFTOFF & MAX-Q', detail: 'Tremendous vibrational & acoustic stress during atmospheric transit.' },
    { title: '2. FAIRING SEPARATION', detail: 'Pyrotechnic bolts must detonate perfectly to shed nose cone without damaging payload.' },
    { title: '3. SOLAR ARRAY DEPLOYMENT', detail: 'Power generation depends entirely on automatic solar panel deployment post-separation.' },
    { title: '4. TENSIONING SUNSHIELD (JWST)', detail: '139 release mechanisms and 400 pulleys unfolded 5 ultra-thin Kapton layers.' },
    { title: '5. SECONDARY MIRROR DEPLOYMENT', detail: 'Secondary mirror tripod extended into precise millimeter alignment.' },
    { title: '6. ORBIT INSERTION BURN', detail: 'Critical thruster firing to capture into target orbit without overshooting.' },
    { title: '7. HEAT SHIELD RE-ENTRY', detail: 'Ablative heat shield must withstand 2,000°C temperatures during atmospheric entry.' }
  ];

  const RECORDS = [
    { title: 'FARTHEST HUMAN-MADE OBJECT', value: 'Voyager 1 (24.3 Billion km / 162.4 AU from Earth)', source: 'NASA JPL Telemetry' },
    { title: 'FIRST LUNAR SOUTH POLE LANDING', value: 'Chandrayaan-3 Shiv Shakti Point (70°S Latitude)', source: 'ISRO Official Record' },
    { title: 'LARGEST SPACE TELESCOPE MIRROR', value: 'James Webb Space Telescope (6.5-meter primary mirror)', source: 'NASA / STScI' },
    { title: 'FASTEST SPACECRAFT RELATIVE TO SUN', value: 'Parker Solar Probe (635,000 km/h / 176 km/s)', source: 'NASA / APL' }
  ];

  const currentBA = BEFORE_AFTER_DATA.find((b) => b.id === activeBeforeAfter)!;

  return (
    <section id="mission-science-discoveries" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl font-mono text-xs transition-colors">
      
      {/* 1. FEATURE 4: HOW MISSIONS CHANGED SCIENCE */}
      <div className="space-y-6">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 4 · HOW MISSIONS CHANGED SCIENTIFIC UNDERSTANDING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            BEFORE VS AFTER MISSION DISCOVERIES
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {BEFORE_AFTER_DATA.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBeforeAfter(b.id as any)}
              className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                activeBeforeAfter === b.id
                  ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold scale-105 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              {b.title.split('(')[0]}
            </button>
          ))}
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white space-y-4 font-mono shadow-2xl">
          <div className="text-cyan-400 font-bold text-sm border-b border-white/10 pb-2">
            {currentBA.title}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-rose-500/30 space-y-1">
              <span className="text-rose-400 font-bold block text-[10px] uppercase">BEFORE MISSION OBSERVATION:</span>
              <p className="font-sans text-xs text-slate-200">{currentBA.before}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-1">
              <span className="text-emerald-400 font-bold block text-[10px] uppercase">AFTER MISSION OBSERVATION:</span>
              <p className="font-sans text-xs text-slate-200">{currentBA.after}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-1">
            <span className="text-cyan-300 font-bold text-[10px] uppercase block">WHAT CHANGED IN SCIENCE:</span>
            <p className="font-sans text-xs text-cyan-100">{currentBA.changed}</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 space-y-1">
            <span className="text-amber-300 font-bold text-[10px] uppercase block">WHAT QUESTIONS REMAIN UNKNOWN:</span>
            <p className="font-sans text-xs text-amber-100">{currentBA.unknown}</p>
          </div>
        </div>
      </div>

      {/* 2. FEATURE 27: CRITICAL MISSION RISKS */}
      <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-rose-500" />
          <span>CRITICAL MISSION FAILURE RISKS &amp; ENGINEERING CHALLENGES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {RISKS_13.slice(0, 4).map((r) => (
            <div key={r.title} className="p-3.5 rounded-2xl bg-slate-950 border border-rose-500/30 text-white space-y-1">
              <span className="text-rose-400 font-bold text-[10px] block">{r.title}</span>
              <p className="font-sans text-[11px] text-slate-300">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FEATURE 8: VERIFIED MISSION RECORDS */}
      <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-300 font-bold text-sm">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>VERIFIED SPACE EXPLORATION RECORDS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RECORDS.map((rec) => (
            <div key={rec.title} className="p-4 rounded-2xl bg-slate-950 border border-amber-500/40 text-white space-y-1">
              <span className="text-[10px] text-slate-400 uppercase block">{rec.title}</span>
              <div className="text-base font-bold text-amber-300 font-display">{rec.value}</div>
              <span className="text-[10px] text-slate-500 block">Verified Source: {rec.source}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
