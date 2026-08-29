import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CosmicZoomOutFooter: React.FC = () => {
  const navigate = useNavigate();
  const [zoomStep, setZoomStep] = useState<number>(0);

  const ZOOM_STEPS = [
    { title: 'EARTH', scale: '12,742 km' },
    { title: 'SOLAR SYSTEM', scale: '100 AU (~15 Billion km)' },
    { title: 'MILKY WAY', scale: '100,000 Light-Years' },
    { title: 'LOCAL GROUP', scale: '10 Million Light-Years' },
    { title: 'GALAXY CLUSTER', scale: '100 Million Light-Years' },
    { title: 'COSMIC WEB', scale: '1 Billion Light-Years' },
    { title: 'OBSERVABLE UNIVERSE', scale: '93 Billion Light-Years' }
  ];

  return (
    <section className="space-y-8 animate-fade-in-up pt-6">
      
      {/* FINAL COSMIC ZOOM OUT */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 bg-[#020514] space-y-6 text-center relative overflow-hidden shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            FINAL COSMIC PERSPECTIVE ZOOM
          </span>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            YOUR GALAXY IS ONLY ONE OF BILLIONS.
          </h2>

          <p className="text-base sm:text-lg text-cyan-200/90 font-sans italic">
            "And even galaxies are only part of the cosmic story."
          </p>
        </div>

        {/* Step Progression Visualizer */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {ZOOM_STEPS.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setZoomStep(idx)}
              className={`px-3 py-2 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                zoomStep === idx
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-bold scale-105 shadow-md'
                  : 'bg-slate-900/80 text-slate-400 border border-white/5 hover:text-white'
              }`}
            >
              <div className="text-[10px] text-cyan-400">0{idx + 1}</div>
              <div>{step.title}</div>
            </button>
          ))}
        </div>

        {/* Deep Field Emotional Narrative Box */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-3 text-sm font-sans text-slate-300 leading-relaxed">
          <p className="text-white font-semibold text-base">"Every point of light may be a galaxy."</p>
          <p>"Every galaxy contains a history."</p>
          <p>"Every history began billions of years ago."</p>
          <p className="text-cyan-300 font-mono text-xs font-bold pt-2">YOU'RE LOOKING AT THE UNIVERSE'S PAST.</p>
        </div>

        {/* Final CTA to Universe */}
        <div className="pt-2">
          <button
            onClick={() => navigate('/universe')}
            className="px-8 py-4 rounded-2xl text-sm font-mono font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all inline-flex items-center gap-3 cursor-pointer"
          >
            <span>CONTINUE TO THE OBSERVABLE UNIVERSE</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
};
