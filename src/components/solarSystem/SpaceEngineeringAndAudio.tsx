import React, { useState, useRef } from 'react';
import { Radio, Volume2, Play, Square } from 'lucide-react';
import { SONIFICATION_TRACKS, type SonificationTrack } from '../../data/solarSystemExtendedData';

export const SpaceEngineeringAndAudio: React.FC = () => {
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  const handlePlayTrack = (track: SonificationTrack) => {
    if (playingTrackId === track.id) {
      // Stop
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      setPlayingTrackId(null);
      return;
    }

    // Stop current if playing
    if (oscRef.current) {
      oscRef.current.stop();
      oscRef.current.disconnect();
      oscRef.current = null;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(track.freqHz, audioCtxRef.current.currentTime);
      gain.gain.setValueAtTime(0.15, audioCtxRef.current.currentTime);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      oscRef.current = osc;
      setPlayingTrackId(track.id);

      // Auto stop after 6 seconds
      setTimeout(() => {
        if (oscRef.current === osc) {
          osc.stop();
          osc.disconnect();
          oscRef.current = null;
          setPlayingTrackId(null);
        }
      }, 6000);
    } catch {
      setPlayingTrackId(null);
    }
  };

  return (
    <section id="space-engineering-and-audio" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-12 shadow-xl">
      
      {/* 📡 1. HOW WE KNOW WHERE SPACECRAFT ARE (DEEP SPACE NETWORK) */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
            <Radio className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>DEEP SPACE ENGINEERING · TELEMETRY NAVIGATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            HOW WE FIND SPACECRAFT BILLIONS OF KM AWAY
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            NASA Deep Space Network (DSN) uses giant 70-meter dish antennas in Goldstone (California), Madrid (Spain), and Canberra (Australia) to track Voyager, New Horizons, and Perseverance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-2">
            <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold uppercase block">1. RADIO LIGHT TIME DELAY</span>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-300">
              Radio waves travel at light speed ($299,792$ km/s). Sending a command to Voyager 1 and receiving its reply takes <strong>44 hours round-trip</strong>!
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-2">
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase block">2. DOPPLER SHIFT FREQUENCY</span>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-300">
              As a probe moves toward or away from Earth, its radio frequency shifts slightly. Measuring this shift reveals spacecraft speed down to millimeters per second.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-2">
            <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase block">3. 24/7 GLOBE COVERAGE</span>
            <p className="font-sans text-xs text-slate-600 dark:text-slate-300">
              Positioned 120° apart around the globe, at least one DSN station always maintains direct line-of-sight view as Earth rotates.
            </p>
          </div>
        </div>
      </div>

      {/* 📻 2. "HEAR THE SOLAR SYSTEM" (DATA SONIFICATION PLAYER) */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/40 bg-slate-950 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
              <Volume2 className="w-3.5 h-3.5 text-purple-400" />
              <span>DATA SONIFICATION PLAYER · NOT SOUND WAVES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
              HEAR THE SOLAR SYSTEM DATA
            </h3>
          </div>

          <span className="text-xs font-mono text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30">
            ⚠️ Transformed Electromagnetic Wave Data
          </span>
        </div>

        <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
          Sound cannot travel through the vacuum of space. Scientists use <strong>data sonification</strong> to convert measured radio emissions, plasma oscillations, and solar seismic waves into human-audible frequencies.
        </p>

        {/* Sonification Player Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {SONIFICATION_TRACKS.map((tr) => {
            const isPlaying = playingTrackId === tr.id;
            return (
              <div key={tr.id} className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-purple-400 font-bold uppercase block">{tr.target}</span>
                  <h4 className="text-base font-display font-bold text-white">{tr.title}</h4>
                  <p className="font-sans text-xs text-slate-300">{tr.description}</p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">{tr.source}</span>
                  <button
                    onClick={() => handlePlayTrack(tr)}
                    className={`px-3.5 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                      isPlaying
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                    }`}
                  >
                    {isPlaying ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isPlaying ? 'Playing...' : 'Play Frequency'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
