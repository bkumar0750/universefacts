import React, { useState } from 'react';
import { Flag, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import { ISRO_MISSIONS } from '../../data/isro/missions';

export const ISROIndiaInSpaceHub: React.FC = () => {
  const [selectedMissionId, setSelectedMissionId] = useState<string>('chandrayaan-3');

  const selectedMission = ISRO_MISSIONS.find((m) => m.id === selectedMissionId) || ISRO_MISSIONS[0];

  return (
    <section id="isro-space-hub" className="glass-panel p-6 sm:p-10 rounded-3xl border border-orange-500/40 dark:bg-[#06030c] bg-white/90 space-y-8 shadow-2xl font-mono text-xs transition-colors">
      
      {/* Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-orange-500/15 border border-orange-500/40 text-orange-800 dark:text-orange-300">
            <Flag className="w-4 h-4 text-orange-500" />
            <span>🇮🇳 INDIA IN SPACE · AUTHORITATIVE ISRO MISSION ATLAS</span>
          </div>

          <a
            href="https://www.isro.gov.in/SpacecraftMissions.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
          >
            <span>Official ISRO Database ↗</span>
          </a>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          ISRO'S COSMIC EXPLORATION VOYAGES
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          From historic lunar soft-landings at Shiv Shakti Point to maiden Mars orbit insertion on first attempt and halo solar observations at L1.
        </p>
      </div>

      {/* ISRO Mission Timeline Selector Ribbon */}
      <div className="space-y-2">
        <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold block">
          SELECT ISRO MISSION TO INSPECT TELEMETRY &amp; DISCOVERIES:
        </span>

        <div className="flex flex-wrap gap-2">
          {ISRO_MISSIONS.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMissionId(m.id)}
              className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                selectedMissionId === m.id
                  ? 'bg-orange-500/20 text-orange-900 dark:text-orange-200 border-orange-400 font-bold scale-105 shadow-md shadow-orange-500/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/5'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Selected ISRO Mission Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-orange-500/40 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <span className="text-xs text-orange-400 font-bold">ISRO SPACECRAFT &amp; LAUNCH VEHICLE: {selectedMission.rocket}</span>
            <h3 className="text-3xl font-display font-extrabold text-white">{selectedMission.name}</h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/40 text-xs font-bold">
              ● {selectedMission.status.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 space-y-1">
            <span className="text-slate-400 text-[10px] uppercase">LAUNCH DATE</span>
            <div className="font-bold text-amber-300 text-sm">{selectedMission.launchDate}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 space-y-1">
            <span className="text-slate-400 text-[10px] uppercase">DESTINATION TARGET</span>
            <div className="font-bold text-cyan-300 text-sm">{selectedMission.destination}</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 space-y-1">
            <span className="text-slate-400 text-[10px] uppercase">LAUNCH VEHICLE</span>
            <div className="font-bold text-purple-300 text-sm">{selectedMission.rocket}</div>
          </div>
        </div>

        {/* Description */}
        <p className="font-sans text-xs text-slate-200 leading-relaxed">
          {selectedMission.description}
        </p>

        {/* Major Accomplishments & Discoveries */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
            ⭐ HISTORIC DISCOVERIES &amp; MILESTONES:
          </span>

          <div className="space-y-2 font-sans text-xs">
            {selectedMission.majorDiscoveries.map((disc, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-orange-950/40 border border-orange-500/30 text-orange-200 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{disc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified against ISRO Department of Space Records (Last Verified: {selectedMission.lastVerified})</span>
          </span>

          <a
            href={selectedMission.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold font-mono text-xs transition-all flex items-center gap-1.5 shadow-md shadow-orange-500/20 shrink-0"
          >
            <span>Official ISRO Source Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </section>
  );
};
