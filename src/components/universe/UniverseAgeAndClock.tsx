import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { COSMIC_CALENDAR_EVENTS } from '../../data/universeAtlasData';

export const UniverseAgeAndClock: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'timemachine'>('calendar');
  const [timeMachineYr, setTimeMachineYr] = useState<number>(0); // 0 = Today, 5 = Big Bang

  const TIME_MACHINE_STEPS = [
    { label: 'TODAY', time: '0 Years Ago', desc: 'Modern universe with 2 trillion galaxies, solar system, and human observers.' },
    { label: '5 BILLION YRS AGO', time: '5.0 Billion Years Ago', desc: 'Milky Way active star formation; Solar nebula collapse begins.' },
    { label: '8 BILLION YRS AGO', time: '8.0 Billion Years Ago', desc: 'Accelerated cosmic expansion begins under dark energy pressure.' },
    { label: '10 BILLION YRS AGO', time: '10.0 Billion Years Ago', desc: 'Peak cosmic star formation rate across spiral galaxies.' },
    { label: '12 BILLION YRS AGO', time: '12.0 Billion Years Ago', desc: 'Early quasar epoch; supermassive black holes actively accreting.' },
    { label: '13.5 BILLION YRS AGO', time: '13.5 Billion Years Ago (MoM-z14)', desc: 'First stars and primordial galaxies emerge (z > 14).' },
    { label: '13.8 BILLION YRS AGO', time: '13.8 Billion Years Ago (Big Bang)', desc: 'Recombination (380k yrs) & Cosmic Microwave Background origin.' }
  ];

  const currentTM = TIME_MACHINE_STEPS[timeMachineYr];

  return (
    <section id="age-and-cosmic-calendar" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>SECTION 7, 8 &amp; 41 · HOW OLD IS EVERYTHING?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
            ~13.8 BILLION YEARS OF COSMIC TIME
          </h2>
        </div>

        {/* View Switcher */}
        <div className="flex gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeTab === 'calendar'
                ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-400 font-bold'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
            }`}
          >
            🗓️ COSMIC CALENDAR
          </button>
          <button
            onClick={() => setActiveTab('timemachine')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeTab === 'timemachine'
                ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
            }`}
          >
            🕰️ TIME MACHINE
          </button>
        </div>
      </div>

      {/* View 1: Cosmic Calendar */}
      {activeTab === 'calendar' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-500/30 text-xs font-sans text-amber-900 dark:text-amber-200 leading-relaxed">
            <strong className="font-mono text-amber-800 dark:text-amber-300 font-bold block uppercase mb-1">
              THE 1-YEAR COSMIC CALENDAR CONCEPTUALIZATION:
            </strong>
            If the entire 13.8 billion-year age of the universe were compressed into a single 365-day calendar year, the Big Bang occurs on January 1 at 00:00:00, the Sun forms on September 1, and all recorded human history occupies only the final seconds of December 31!
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {COSMIC_CALENDAR_EVENTS.map((evt, idx) => (
              <div key={idx} className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-white/10 space-y-2 bg-white/70 dark:bg-slate-900/70">
                <div className="flex justify-between items-center font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-300 font-bold">
                    {evt.date}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">{evt.realTime}</span>
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">{evt.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-snug">{evt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View 2: Cosmic Time Machine */}
      {activeTab === 'timemachine' && (
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold">
              <span>LOOKBACK TIME: TODAY</span>
              <span>13.8 BILLION YEARS AGO (BIG BANG)</span>
            </div>
            <input
              type="range"
              min={0}
              max={TIME_MACHINE_STEPS.length - 1}
              value={timeMachineYr}
              onChange={(e) => setTimeMachineYr(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-200 dark:bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-500 border border-slate-300 dark:border-white/10"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {TIME_MACHINE_STEPS.map((s, idx) => (
                <button
                  key={s.label}
                  onClick={() => setTimeMachineYr(idx)}
                  className={`px-3 py-1 rounded-lg text-[10px] cursor-pointer transition-all ${
                    timeMachineYr === idx
                      ? 'bg-cyan-500 text-slate-950 font-bold scale-105 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white space-y-3 font-mono">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
                ACTIVE TIME EPOCH
              </span>
              <span className="text-amber-400 font-bold text-sm">{currentTM.time}</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-cyan-300">{currentTM.label}</h3>
            <p className="text-xs font-sans text-slate-300 leading-relaxed">{currentTM.desc}</p>
          </div>
        </div>
      )}

    </section>
  );
};
