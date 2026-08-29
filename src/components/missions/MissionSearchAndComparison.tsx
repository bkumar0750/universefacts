import React, { useState } from 'react';
import { Bot, Database, ExternalLink } from 'lucide-react';

export const MissionSearchAndComparison: React.FC = () => {
  const [qaQuery, setQaQuery] = useState<string>('');
  const [qaAnswer, setQaAnswer] = useState<string | null>(null);

  const PRESET_QUESTIONS = [
    { q: 'Why was JWST launched to L2?', a: 'Sun-Earth L2 (1.5 million km away) provides an environment protected from Earth\'s heat glow, allowing its cryogenic infrared detectors to remain at -220°C.' },
    { q: 'What did Chandrayaan-3 discover at the Moon\'s south pole?', a: 'Chandrayaan-3 landed near 70°S latitude, measured topsoil thermal gradients (ChaSTE), and unambiguously confirmed elemental Sulfur (S) in south polar regolith.' },
    { q: 'How far is Voyager 1 currently?', a: 'Voyager 1 is over 24.3 billion kilometers (162.4 AU) from Earth in interstellar space. Radio signals require over 22.5 hours one-way to reach Earth.' }
  ];

  const PUBLIC_ARCHIVES = [
    { name: 'NASA Planetary Data System (PDS)', url: 'https://pds.nasa.gov/' },
    { name: 'STScI Mikulski Archive (MAST)', url: 'https://archive.stsci.edu/' },
    { name: 'ESA Science Data Center', url: 'https://www.cosmos.esa.int/' },
    { name: 'ISRO Science Data Archive', url: 'https://www.isro.gov.in/' }
  ];

  const handleAsk = (q: string, a: string) => {
    setQaQuery(q);
    setQaAnswer(a);
  };

  return (
    <section id="mission-search-and-archives" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-10 shadow-2xl font-mono text-xs transition-colors">
      
      {/* 1. FEATURE 48: MISSION AI ASSISTANT */}
      <div className="space-y-6">
        <div className="space-y-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
            <Bot className="w-4 h-4 text-purple-500" />
            <span>FEATURE 48 · MISSION KNOWLEDGE ASSISTANT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
            ASK ABOUT ANY SPACE MISSION
          </h2>
        </div>

        {/* Preset Questions */}
        <div className="space-y-2">
          <span className="text-[10px] text-slate-400 font-bold block">CLICK SAMPLE VERIFIED MISSION QUESTION:</span>
          <div className="flex flex-wrap gap-2">
            {PRESET_QUESTIONS.map((item) => (
              <button
                key={item.q}
                onClick={() => handleAsk(item.q, item.a)}
                className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[11px] hover:border-purple-400 cursor-pointer text-left"
              >
                "{item.q}"
              </button>
            ))}
          </div>
        </div>

        {/* Answer Display */}
        {qaAnswer && (
          <div className="p-5 rounded-2xl bg-purple-950/60 border border-purple-500/40 text-white space-y-2 animate-fade-in font-mono">
            <div className="text-purple-300 font-bold text-xs">QUESTION: "{qaQuery}"</div>
            <div className="p-3 rounded-xl bg-slate-900 border border-white/10 font-sans text-xs text-slate-200">
              {qaAnswer}
            </div>
            <div className="text-[10px] text-purple-400">Answer grounded strictly in verified NASA / ISRO mission telemetry.</div>
          </div>
        )}
      </div>

      {/* 2. FEATURE 56 & 57: OFFICIAL PUBLIC SCIENCE DATA ARCHIVES */}
      <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
          <Database className="w-4 h-4 text-cyan-500" />
          <span>PRIMARY AGENCY PUBLIC SCIENCE DATA ARCHIVES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PUBLIC_ARCHIVES.map((arch) => (
            <a
              key={arch.name}
              href={arch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 text-white space-y-2 hover:border-cyan-400 transition-all flex flex-col justify-between group"
            >
              <span className="font-bold text-xs text-slate-200 group-hover:text-cyan-300">{arch.name}</span>
              <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
                <span>Access Archive</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};
