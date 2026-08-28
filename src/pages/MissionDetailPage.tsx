import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { missionsData } from '../data/missionsData';
import { ArrowLeft, Rocket, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SourceBadge } from '../components/SourceBadge';

export const MissionDetailPage: React.FC = () => {
  const { missionId } = useParams<{ missionId: string }>();
  const navigate = useNavigate();

  const mission = missionsData.find((m) => m.id.toLowerCase() === (missionId || '').toLowerCase());

  if (!mission) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Mission Record Not Found</h1>
        <button
          onClick={() => navigate('/missions')}
          className="px-6 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg hover:scale-105 transition-all"
        >
          Return to Space Missions
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-12">
      
      <button
        onClick={() => navigate('/missions')}
        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Space Missions Archive</span>
      </button>

      {/* Hero Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 relative overflow-hidden shadow-xl animate-fade-in-up">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 border border-cyan-500/40 text-cyan-700 dark:text-cyan-300">
              {mission.agency} SPACE MISSION
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300">
              {mission.status}
            </span>
          </div>

          <a
            href={mission.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md"
          >
            <span>Official Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          {mission.name}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono pt-2 border-t border-slate-200 dark:border-white/10">
          <div>Launch Date: <strong className="text-slate-900 dark:text-white block font-bold">{mission.launchDate}</strong></div>
          <div>Destination: <strong className="text-cyan-700 dark:text-cyan-300 block font-bold">{mission.destination}</strong></div>
          <div>Lead Agency: <strong className="text-amber-700 dark:text-amber-300 block font-bold">{mission.agency}</strong></div>
        </div>
      </div>

      {/* MISSION DESCRIPTION */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-3 animate-fade-in-up delay-100 shadow-md">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Rocket className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Mission Briefing</span>
        </h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
          {mission.description}
        </p>
      </section>

      {/* MAJOR DISCOVERIES */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 animate-fade-in-up delay-200 shadow-md">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">Major Discoveries & Milestones</h2>
        <div className="space-y-3">
          {mission.majorDiscoveries.map((disc, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-white/10 flex items-start gap-3 bg-white/60 dark:bg-slate-900/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-sans">{disc}</p>
            </div>
          ))}
        </div>
      </section>

      <SourceBadge sources={mission.sources} />

    </div>
  );
};
