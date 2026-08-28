import React, { useState } from 'react';
import { missionsData } from '../data/missionsData';
import { ISRO_MISSIONS } from '../data/isro/missions';
import { SourceBadge } from '../components/ImageWithAttribution';
import { Rocket } from 'lucide-react';

export const MissionsPage: React.FC = () => {
  const [agencyFilter, setAgencyFilter] = useState<string>('All');

  const combinedMissions = [
    ...ISRO_MISSIONS.map((m) => ({
      id: m.id,
      name: m.name,
      agency: 'ISRO',
      launchDate: m.launchDate,
      status: m.status,
      destination: m.destination,
      description: m.description,
      image: m.image,
      sourceUrl: m.sourceUrl,
      discoveries: m.majorDiscoveries,
      rocket: m.rocket,
      lastVerified: m.lastVerified,
    })),
    ...missionsData.map((m) => ({
      id: m.id,
      name: m.name,
      agency: m.agency,
      launchDate: m.launchDate,
      status: m.status,
      destination: m.destination,
      description: m.description,
      image: m.image,
      sourceUrl: m.sources[0]?.url || 'https://www.nasa.gov',
      discoveries: m.majorDiscoveries || [m.description],
      rocket: 'Space Launcher',
      lastVerified: '27 Aug 2026',
    })),
  ];

  const agencies = ['All', 'ISRO', 'NASA', 'ESA'];

  const filteredMissions = combinedMissions.filter((m) => {
    if (agencyFilter === 'All') return true;
    return m.agency === agencyFilter;
  });

  return (
    <div className="space-y-10 pb-12">
      
      {/* Header */}
      <div className="space-y-4 animate-fade-in-up">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Rocket className="w-3.5 h-3.5" />
            <span>AUTHORITATIVE SPACE MISSION ARCHIVE</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.isro.gov.in/SpacecraftMissions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              ISRO Missions ↗
            </a>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <a
              href="https://www.nasa.gov/missions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              NASA Missions ↗
            </a>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          Space Missions Explorer
        </h1>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Explore humanity's robotic and crewed voyages across the Solar System and deep cosmos. All mission parameters, launch dates, and key discoveries are verified against official ISRO, NASA, and ESA records.
        </p>
      </div>

      {/* Agency Filter */}
      <div className="flex flex-wrap gap-2 animate-fade-in-up delay-100">
        {agencies.map((agency) => (
          <button
            key={agency}
            onClick={() => setAgencyFilter(agency)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              agencyFilter === agency
                ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-md font-bold'
                : 'glass-button text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {agency} {agency === 'All' ? `(${combinedMissions.length})` : ''}
          </button>
        ))}
      </div>

      {/* Missions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up delay-200">
        {filteredMissions.map((mission, idx) => (
          <div
            key={`${mission.id}-${mission.agency}-${idx}`}
            className="glass-panel group rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden glass-panel-hover flex flex-col justify-between p-6 space-y-4 shadow-lg hover:shadow-2xl transition-all duration-300"
            style={{ animationDelay: `${idx * 40}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                {mission.agency} Mission
              </span>
              <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                mission.status === 'Active' ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30' :
                mission.status === 'Completed' ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30' :
                'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30'
              }`}>
                {mission.status}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                {mission.name}
              </h3>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 font-medium">
                <span>Launch: {mission.launchDate}</span>
                <span>•</span>
                <span>{mission.rocket}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans mt-3 leading-relaxed">
                {mission.description}
              </p>
            </div>

            {/* Discoveries */}
            {mission.discoveries && mission.discoveries.length > 0 && (
              <div className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-white/10">
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider">Major Accomplishment</div>
                <div className="text-xs font-sans text-cyan-800 dark:text-cyan-200 bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20 font-medium">
                  "{mission.discoveries[0]}"
                </div>
              </div>
            )}

            <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-white/8 font-medium">
              <span>Target: <strong className="text-slate-900 dark:text-slate-200">{mission.destination}</strong></span>
              <SourceBadge name={`${mission.agency} Source`} url={mission.sourceUrl} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
