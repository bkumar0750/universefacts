import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Users, MapPin } from 'lucide-react';

export const UniverseCoordinatesAnd60Sec: React.FC = () => {
  // 60-Second Universe Timer State
  const [sec, setSec] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Observers State
  const [activeObserver, setActiveObserver] = useState<'earth' | 'galaxy5b' | 'hypothetical'>('earth');

  useEffect(() => {
    let timer: any = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setSec((prev) => {
          if (prev >= 60) {
            setIsPlaying(false);
            return 60;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const reset60Sec = () => {
    setIsPlaying(false);
    setSec(0);
  };

  const get60SecText = (s: number) => {
    if (s < 5) return '00:00 — EARLY HOT PRIMORDIAL DENSE PLASMA';
    if (s < 10) return '00:05 — ELEMENTARY PARTICLES & QUARKS FORM';
    if (s < 15) return '00:10 — ATOMS FORM & RECOMBINATION RELEASE (CMB)';
    if (s < 20) return '00:15 — COSMIC DARK AGES';
    if (s < 25) return '00:20 — FIRST POPULATION III STARS IGNITE';
    if (s < 35) return '00:25 — FIRST PROTO-GALAXIES ASSEMBLE';
    if (s < 45) return '00:35 — GALAXY CLUSTERS & COSMIC WEB FILAMENTS';
    if (s < 50) return '00:45 — SUN & SOLAR SYSTEM ACCRETION DISK';
    if (s < 55) return '00:50 — EARTH OCEAN FORMATION';
    if (s < 60) return '00:55 — PRIMORDIAL LIFE & EVOLUTION';
    return '01:00 — YOU READ THIS SCREEN RIGHT NOW.';
  };

  const OBSERVERS = [
    {
      id: 'earth',
      title: 'OBSERVER A: PLANET EARTH (TODAY)',
      horizon: '93 Billion Light-Years Comoving Diameter',
      center: 'Sol / Earth',
      desc: 'Our observable sphere is centered on Earth. We see light emitted 13.8B years ago in all directions.'
    },
    {
      id: 'galaxy5b',
      title: 'OBSERVER B: GALAXY 5 BILLION LIGHT-YEARS AWAY',
      horizon: '93 Billion Light-Years Comoving Diameter',
      center: 'Remote Galaxy Halo',
      desc: 'Observer B sees Earth as it was 5 billion years ago, while their observable sphere overlaps ours partially.'
    },
    {
      id: 'hypothetical',
      title: 'OBSERVER C: HYPOTHETICAL OBSERVER BEYOND OUR HORIZON',
      horizon: '93 Billion Light-Years Comoving Diameter',
      center: 'Unobservable Cosmic Region',
      desc: 'Observer C sees regions of space completely beyond our observable horizon. Space is physically continuous.'
    }
  ];

  const currentObserver = OBSERVERS.find((o) => o.id === activeObserver)!;

  return (
    <section id="coordinates-and-60sec" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl transition-colors">
      
      {/* 1. FEATURE 4: UNIVERSE IN 60 SECONDS */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
              <Play className="w-3.5 h-3.5 text-amber-500" />
              <span>FEATURE 4 · UNIVERSE IN 60 SECONDS ANIMATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              THE UNIVERSE IN 60 SECONDS
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-md shadow-amber-500/20"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'PAUSE' : 'START 60s ANIMATION'}</span>
            </button>
            <button
              onClick={reset60Sec}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-200"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 60s Canvas & Timer Display */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-amber-500/40 text-white space-y-4 font-mono shadow-2xl">
          <div className="flex items-center justify-between text-amber-400 font-bold text-lg">
            <span>TIMER: 00:{sec < 10 ? `0${sec}` : sec}</span>
            <span>13.8 BILLION YEARS COMPRESSED</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-4 bg-slate-900 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-amber-500 to-rose-500 transition-all duration-300"
              style={{ width: `${(sec / 60) * 100}%` }}
            />
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-cyan-300 font-bold text-center text-sm sm:text-base">
            {get60SecText(sec)}
          </div>

          {sec >= 60 && (
            <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-400 text-amber-300 font-bold text-center text-sm font-sans italic animate-bounce">
              "YOU ARRIVED 13.8 BILLION YEARS LATE."
            </div>
          )}
        </div>
      </div>

      {/* 2. FEATURE 3: COSMIC COORDINATES */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10 font-mono text-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <MapPin className="w-4 h-4 text-cyan-500" />
            <span>FEATURE 3 · COSMIC COORDINATE SYSTEMS</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            WHERE ARE WE IN THE COSMOS?
          </h3>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white space-y-4 shadow-xl">
          <div className="text-cyan-400 font-bold text-xs uppercase">
            ASTRONOMICAL COORDINATE FRAMEWORKS USED BY COSMOLOGISTS:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-1">
              <span className="text-amber-400 font-bold block">1. GALACTIC SYSTEM (l, b, d)</span>
              <p className="font-sans text-[11px] text-slate-300">
                Centered on the Sun; measures galactic longitude ($l$), latitude ($b$), and distance ($d$) from the Galactic Center (~26,700 LY).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-1">
              <span className="text-purple-400 font-bold block">2. EQUATORIAL SYSTEM (α, δ)</span>
              <p className="font-sans text-[11px] text-slate-300">
                Earth-centered projection using Right Ascension ($\alpha$) and Declination ($\delta$) anchored to celestial poles.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-1">
              <span className="text-emerald-400 font-bold block">3. SUPERGALACTIC SYSTEM (SGL, SGB)</span>
              <p className="font-sans text-[11px] text-slate-300">
                Aligned with the plane of the Local Supercluster (Virgo Supercluster) to measure large-scale filament offsets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FEATURE 5: UNIVERSE FROM DIFFERENT OBSERVERS */}
      <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
            <Users className="w-4 h-4 text-purple-500" />
            <span>FEATURE 5 · OBSERVER-DEPENDENT COSMIC HORIZONS</span>
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            THE OBSERVABLE UNIVERSE IS OBSERVER-DEPENDENT
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {OBSERVERS.map((o) => (
            <button
              key={o.id}
              onClick={() => setActiveObserver(o.id as any)}
              className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                activeObserver === o.id
                  ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold scale-105 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              {o.title.split(':')[0]}
            </button>
          ))}
        </div>

        <div className="p-6 rounded-3xl bg-slate-950 border border-purple-500/40 text-white space-y-3 font-mono">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-purple-400 font-bold text-sm">{currentObserver.title}</span>
            <span className="text-slate-400 text-xs">Center: {currentObserver.center}</span>
          </div>
          <p className="font-sans text-xs text-slate-300 leading-relaxed">{currentObserver.desc}</p>
        </div>
      </div>

    </section>
  );
};
