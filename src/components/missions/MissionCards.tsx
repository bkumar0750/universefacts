import React, { useState } from 'react';
import { Scale, Camera } from 'lucide-react';
import { SourceBadge } from '../SourceBadge';

export interface ExtendedMission {
  id: string;
  name: string;
  agency: string;
  partnerAgencies?: string[];
  launchDate: string;
  destination: string;
  status: 'Active' | 'Completed' | 'Planned' | 'Extended Mission';
  missionType: string;
  distance: string;
  duration: string;
  rocket: string;
  description: string;
  majorDiscoveries: string[];
  image: string;
  imageType: 'REAL IMAGE' | 'SCIENTIFIC DATA VISUALIZATION' | 'SIMULATION' | 'ARTIST CONCEPT';
  imageCredit: string;
  sourceUrl: string;
  lastVerified: string;
  dna: {
    riskLevel: string;
    scienceScore: number;
    discoveriesCount: number;
    dataAvailable: boolean;
  };
}

interface Props {
  missions: ExtendedMission[];
}

export const MissionCards: React.FC<Props> = ({ missions }) => {
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    if (selectedForCompare.includes(id)) {
      setSelectedForCompare(selectedForCompare.filter((i) => i !== id));
    } else {
      if (selectedForCompare.length < 3) {
        setSelectedForCompare([...selectedForCompare, id]);
      }
    }
  };

  const compareMissionsList = missions.filter((m) => selectedForCompare.includes(m.id));

  return (
    <section id="mission-cards" className="space-y-6">
      
      {/* Top Header & Compare Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
            AUTHENTIC MISSION DIRECTORY ({missions.length} RESULTS)
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
            EXPLORE HUMANITY'S SPACECRAFT FLEET WITH REAL IMAGERY
          </h2>
        </div>

        {/* Compare Control Status */}
        {selectedForCompare.length > 0 && (
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-amber-600 dark:text-amber-300 font-bold">
              Comparing {selectedForCompare.length}/3 Missions
            </span>
            <button
              onClick={() => setSelectedForCompare([])}
              className="px-3 py-1 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
            >
              CLEAR
            </button>
          </div>
        )}
      </div>

      {/* Side-by-Side Compare Modal Frame if active */}
      {selectedForCompare.length > 0 && (
        <div className="p-6 rounded-3xl bg-white/95 dark:bg-slate-950 border border-amber-500/40 text-slate-900 dark:text-white font-mono text-xs space-y-4 shadow-2xl animate-fade-in transition-colors">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
              <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>MISSION DNA COMPARISON MATRIX</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">SIDE-BY-SIDE PARAMETER ANALYSIS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compareMissionsList.map((m) => (
              <div key={m.id} className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-amber-500/30 space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] text-cyan-700 dark:text-cyan-400 font-bold">{m.agency}</span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{m.name}</h4>
                </div>
                <div className="space-y-1 text-[11px] font-sans text-slate-700 dark:text-slate-300">
                  <div><strong>Destination:</strong> {m.destination}</div>
                  <div><strong>Type:</strong> {m.missionType}</div>
                  <div><strong>Launch:</strong> {m.launchDate}</div>
                  <div><strong>Distance:</strong> {m.distance}</div>
                  <div><strong>Duration:</strong> {m.duration}</div>
                  <div><strong>Risk Level:</strong> {m.dna.riskLevel}</div>
                  <div><strong>Discoveries:</strong> {m.dna.discoveriesCount}</div>
                  <div><strong>Status:</strong> {m.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mission Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((mission) => {
          const isComparing = selectedForCompare.includes(mission.id);

          return (
            <div
              key={mission.id}
              className="glass-panel group rounded-3xl border border-slate-200 dark:border-white/10 dark:bg-[#04081c] bg-white/90 overflow-hidden flex flex-col justify-between space-y-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-cyan-500/40"
            >
              {/* REAL MISSION IMAGE BANNER WITH MANDATORY CLASSIFICATION BADGE */}
              <div className="relative w-full h-48 bg-slate-950 overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                {/* Mandatory Image Type Badge (Requirement 40) */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[9px] font-mono font-bold text-cyan-300 flex items-center gap-1 shadow-lg">
                  <Camera className="w-3 h-3 text-cyan-400" />
                  <span>{mission.imageType}</span>
                </div>

                {/* Credit Overlay */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/70 text-[9px] font-mono text-slate-300 border border-white/10">
                  Credit: {mission.imageCredit}
                </div>
              </div>

              {/* Card Body Padding Container */}
              <div className="px-6 pb-6 space-y-4 flex flex-col justify-between flex-1">
                
                {/* Header Badges */}
                <div className="flex items-center justify-between font-mono text-xs pt-1">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-bold">
                    {mission.agency} {mission.partnerAgencies ? `+ ${mission.partnerAgencies.join('/')}` : ''}
                  </span>

                  <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                    mission.status === 'Active' ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/40' :
                    mission.status === 'Completed' ? 'bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-500/40' :
                    'bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/40'
                  }`}>
                    ● {mission.status.toUpperCase()}
                  </span>
                </div>

                {/* Title & Launch Specs */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors leading-tight">
                    {mission.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-2 font-mono text-[11px] bg-slate-100 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-white/5">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[9px] uppercase">LAUNCH DATE</span>
                      <span className="font-bold text-slate-800 dark:text-slate-300">{mission.launchDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block text-[9px] uppercase">DESTINATION</span>
                      <span className="font-bold text-cyan-700 dark:text-cyan-300 truncate block">{mission.destination}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed pt-1">
                    {mission.description}
                  </p>
                </div>

                {/* 🧬 SIGNATURE MISSION DNA TELEMETRY CARD */}
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-cyan-500/30 text-slate-900 dark:text-white font-mono text-[11px] space-y-2 shadow-inner transition-colors">
                  <div className="flex items-center justify-between text-[10px] border-b border-slate-200 dark:border-white/10 pb-1">
                    <span className="text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider">🧬 MISSION DNA</span>
                    <span className="text-slate-600 dark:text-slate-400">TYPE: {mission.missionType}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">DISTANCE:</span>
                      <span className="text-amber-800 dark:text-amber-300 font-bold">{mission.distance}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 block">RISK LEVEL:</span>
                      <span className="text-purple-800 dark:text-purple-300 font-bold">{mission.dna.riskLevel}</span>
                    </div>
                  </div>
                </div>

                {/* Major Discovery Snippet */}
                {mission.majorDiscoveries && mission.majorDiscoveries.length > 0 && (
                  <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-xs font-sans text-cyan-900 dark:text-cyan-200">
                    <strong className="font-mono text-cyan-700 dark:text-cyan-300 block text-[10px] uppercase mb-0.5">MAJOR DISCOVERY:</strong>
                    "{mission.majorDiscoveries[0]}"
                  </div>
                )}

                {/* Footer Controls: Compare & Source */}
                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between font-mono text-xs">
                  <button
                    onClick={() => toggleCompare(mission.id)}
                    className={`px-3 py-1 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                      isComparing
                        ? 'bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-400 font-bold'
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/5'
                    }`}
                  >
                    {isComparing ? '✓ COMPARING' : '+ COMPARE DNA'}
                  </button>

                  <SourceBadge sources={[{ name: (['NASA', 'ISRO', 'ESA', 'JAXA'].includes(mission.agency) ? mission.agency : 'Scientific Institution') as any, url: mission.sourceUrl }]} />
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
