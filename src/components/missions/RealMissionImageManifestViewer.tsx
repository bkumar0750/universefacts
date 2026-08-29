import React, { useState } from 'react';
import { ShieldCheck, Check, X, Code } from 'lucide-react';
import { REAL_MISSION_IMAGE_MANIFEST } from '../../data/realMissionImageManifest';
import { SourceBadge } from '../SourceBadge';

export const RealMissionImageManifestViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'science' | 'json'>('hardware');
  const [selectedMissionId, setSelectedMissionId] = useState<string>('chandrayaan-3');

  const activeManifest = REAL_MISSION_IMAGE_MANIFEST.find((m) => m.missionId === selectedMissionId) || REAL_MISSION_IMAGE_MANIFEST[0];

  const rulesNever = [
    { mis: 'Chandrayaan-3', bad: 'Generic Moon spacecraft' },
    { mis: 'Aditya-L1', bad: 'Parker Solar Probe' },
    { mis: 'JWST', bad: 'Artist concept when real photo exists' },
    { mis: 'Voyager 1', bad: 'New Horizons' },
    { mis: 'Perseverance', bad: 'Curiosity Rover' }
  ];

  return (
    <section id="real-mission-image-manifest" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl font-mono text-xs transition-colors">
      
      {/* 1. Header */}
      <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>UNIVERSEFACT · STRICT REAL MISSION IMAGE MANIFEST</span>
          </div>

          <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-500 text-[10px]">
            Zero Generic / AI / Substituted Images
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
          AUTHENTIC SPACECRAFT vs SCIENCE DISCOVERY MANIFEST
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          Every mission strictly separates the <strong>actual hardware photograph</strong> from the <strong>actual science discovery image</strong> captured by its onboard instruments.
        </p>
      </div>

      {/* 2. STRICT IMAGE RULES DISPLAY BOX */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Never Box */}
        <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-2 text-rose-200">
          <div className="flex items-center gap-1.5 text-rose-400 font-bold text-xs uppercase">
            <X className="w-4 h-4 text-rose-500" />
            <span>NEVER DO THIS (STRICT PROHIBITION):</span>
          </div>
          <div className="space-y-1 font-sans text-xs">
            {rulesNever.map((r) => (
              <div key={r.mis} className="flex justify-between items-center bg-slate-950/60 p-2 rounded-xl border border-rose-500/20">
                <strong className="text-white font-mono text-[11px]">{r.mis}</strong>
                <span className="text-rose-400 font-mono text-[10px]">❌ {r.bad}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Always Box */}
        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-2 text-emerald-200">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase">
            <Check className="w-4 h-4 text-emerald-500" />
            <span>ALWAYS DO THIS (MANDATORY MANIFEST FLOW):</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-emerald-500/20 font-mono text-[11px] text-slate-200 space-y-1.5">
            <div>1. Mission Name ──&gt; Exact Spacecraft</div>
            <div>2. Exact Spacecraft ──&gt; Exact Official Image</div>
            <div>3. Exact Official Image ──&gt; Verified Source &amp; Credit</div>
            <div>4. Image Type Classification: <code>REAL_HARDWARE_IMAGE</code> / <code>REAL_SCIENTIFIC_OBSERVATION</code></div>
          </div>
        </div>

      </div>

      {/* 3. MISSION SELECTOR RIBBON */}
      <div className="space-y-2">
        <span className="text-[10px] text-slate-400 uppercase font-bold block">
          SELECT MISSION TO INSPECT DUAL SPACECRAFT vs SCIENCE MANIFEST:
        </span>
        <div className="flex flex-wrap gap-2">
          {REAL_MISSION_IMAGE_MANIFEST.map((m) => (
            <button
              key={m.missionId}
              onClick={() => setSelectedMissionId(m.missionId)}
              className={`px-3.5 py-2 rounded-xl border cursor-pointer transition-all ${
                selectedMissionId === m.missionId
                  ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold scale-105 shadow-md'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
              }`}
            >
              {m.missionName.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 4. DUAL IMAGE SECTION (HARDWARE vs SCIENCE) */}
      <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white space-y-6 shadow-2xl">
        
        {/* Toggle Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs text-amber-400 font-bold">AGENCY: {activeManifest.agency}</span>
            <h3 className="text-2xl font-display font-extrabold text-white">{activeManifest.missionName}</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('hardware')}
              className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'hardware'
                  ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400 font-bold scale-105'
                  : 'bg-slate-900 text-slate-400 border-white/10'
              }`}
            >
              🛰️ ACTUAL HARDWARE PHOTOGRAPH
            </button>

            <button
              onClick={() => setActiveTab('science')}
              className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'science'
                  ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400 font-bold scale-105'
                  : 'bg-slate-900 text-slate-400 border-white/10'
              }`}
            >
              🔭 WHAT IT DISCOVERED (SCIENCE)
            </button>

            <button
              onClick={() => setActiveTab('json')}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'json'
                  ? 'bg-purple-500/20 text-purple-200 border-purple-400 font-bold scale-105'
                  : 'bg-slate-900 text-slate-400 border-white/10'
              }`}
            >
              <Code className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab 1: Hardware Image */}
        {activeTab === 'hardware' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center animate-fade-in">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <img
                src={activeManifest.hardwareImage.imageUrl}
                alt={activeManifest.hardwareImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-300 font-bold border border-emerald-500/40 text-[10px]">
                {activeManifest.hardwareImage.imageType}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] text-cyan-400 font-bold uppercase">🛰️ HARDWARE PHOTOGRAPH TITLE:</span>
                <h4 className="text-lg font-bold text-white font-display">{activeManifest.hardwareImage.title}</h4>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                  <span className="text-slate-400 block text-[9px]">OFFICIAL CREDIT</span>
                  <span className="text-amber-300 font-bold">{activeManifest.hardwareImage.credit}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                  <span className="text-slate-400 block text-[9px]">SOURCE NAME</span>
                  <span className="text-cyan-300 font-bold">{activeManifest.hardwareImage.sourceName}</span>
                </div>
              </div>

              <div className="pt-2">
                <SourceBadge sources={[{ name: activeManifest.agency as any, url: activeManifest.hardwareImage.sourceUrl }]} />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Science Discovery Image */}
        {activeTab === 'science' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center animate-fade-in">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <img
                src={activeManifest.scienceImage.imageUrl}
                alt={activeManifest.scienceImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-950/80 backdrop-blur-md text-cyan-300 font-bold border border-cyan-500/40 text-[10px]">
                {activeManifest.scienceImage.imageType}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] text-emerald-400 font-bold uppercase">🔭 SCIENCE OBSERVATION TITLE:</span>
                <h4 className="text-lg font-bold text-white font-display">{activeManifest.scienceImage.title}</h4>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                  <span className="text-slate-400 block text-[9px]">OFFICIAL CREDIT</span>
                  <span className="text-amber-300 font-bold">{activeManifest.scienceImage.credit}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/5">
                  <span className="text-slate-400 block text-[9px]">SOURCE ARCHIVE</span>
                  <span className="text-emerald-300 font-bold">{activeManifest.scienceImage.sourceName}</span>
                </div>
              </div>

              <div className="pt-2">
                <SourceBadge sources={[{ name: activeManifest.agency as any, url: activeManifest.scienceImage.sourceUrl }]} />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Exact JSON Metadata Drawer */}
        {activeTab === 'json' && (
          <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/40 text-purple-200 font-mono text-[11px] space-y-2 animate-fade-in overflow-x-auto">
            <span className="text-purple-400 font-bold text-xs block">EXACT METADATA JSON SCHEME (UNIVERSEFACT MANIFEST):</span>
            <pre className="text-[10px] text-purple-300 bg-slate-950 p-4 rounded-xl border border-white/10 leading-relaxed">
              {JSON.stringify(activeManifest, null, 2)}
            </pre>
          </div>
        )}

      </div>

    </section>
  );
};
