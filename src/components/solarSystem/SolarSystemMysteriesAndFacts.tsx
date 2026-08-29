import React, { useState } from 'react';
import { Sparkles, Trophy, CheckCircle, Search, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  ASTROBIOLOGY_MOONS,
  SOLAR_SYSTEM_30_WOW_FACTS,
  SOLAR_SYSTEM_MYTH_VS_REALITY,
  SOLAR_SYSTEM_GAME_MISSIONS
} from '../../data/solarSystemData';

export const SolarSystemMysteriesAndFacts: React.FC = () => {
  const navigate = useNavigate();

  // Fact Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Exploration Game State
  const [completedMissionIds, setCompletedMissionIds] = useState<number[]>([]);

  const categories = ['All', 'Sun', 'Planets', 'Moons', 'Small Worlds', 'Orbits & Gravity', 'Exploration'];

  const filteredFacts = SOLAR_SYSTEM_30_WOW_FACTS.filter((fact) => {
    const matchesCategory = selectedCategory === 'All' || fact.category === selectedCategory;
    const matchesSearch =
      fact.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fact.shortFact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fact.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleGameAnswer = (missionId: number, targetId: string) => {
    if (targetId === SOLAR_SYSTEM_GAME_MISSIONS.find((m) => m.id === missionId)?.targetId) {
      if (!completedMissionIds.includes(missionId)) {
        setCompletedMissionIds([...completedMissionIds, missionId]);
      }
    }
  };

  return (
    <section id="mysteries-and-facts" className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white/90 dark:bg-slate-900/80 space-y-12 shadow-xl">
      
      {/* 🧪 1. ASTROBIOLOGY: KNOWN VS UNKNOWN CARDS */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>ASTROBIOLOGY RIGOR · KNOWN VS SUSPECTED VS UNKNOWN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
            OCEAN WORLDS & POTENTIAL HABITATS
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-1">
            Where might life exist in our Solar System? Standardized matrix of empirical facts vs hypotheses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ASTROBIOLOGY_MOONS.slice(0, 4).map((moon) => (
            <div
              key={moon.id}
              className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase font-bold">
                    {moon.parentBody}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                    {moon.name}
                  </h3>
                </div>

                <a
                  href={moon.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 underline flex items-center gap-1"
                >
                  <span>{moon.source}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/30">
                "{moon.keyFeature}"
              </p>

              {/* Matrix Breakdown */}
              <div className="space-y-3 text-xs font-mono">
                <div className="space-y-1">
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase block">
                    ✅ OBSERVED & MEASURED FACTS (KNOWN):
                  </span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300 font-sans text-[11px]">
                    {moon.known.map((k, i) => (
                      <li key={i}>{k}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1 border-t border-slate-200 dark:border-white/10 pt-2">
                  <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase block">
                    🧪 SCIENTIFIC HYPOTHESES (SUSPECTED):
                  </span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300 font-sans text-[11px]">
                    {moon.suspected.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1 border-t border-slate-200 dark:border-white/10 pt-2">
                  <span className="text-[10px] text-purple-600 dark:text-purple-400 font-bold uppercase block">
                    ❓ CRITICAL UNKNOWNS:
                  </span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300 font-sans text-[11px]">
                    {moon.unknown.map((u, i) => (
                      <li key={i}>{u}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 🧠 2. MYTH VS REALITY CARDS */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-white/10 pb-4">
          <h2 className="text-2xl sm:text-3xl font-display font-black text-slate-900 dark:text-white">
            SOLAR SYSTEM MYTH VS REALITY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {SOLAR_SYSTEM_MYTH_VS_REALITY.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-3"
            >
              <div className="bg-rose-500/10 p-3 rounded-xl border border-rose-500/30 text-rose-900 dark:text-rose-300">
                <span className="text-[10px] uppercase font-bold block">❌ POPULAR MYTH:</span>
                <p className="font-sans font-bold text-xs">{item.myth}</p>
              </div>

              <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/30 text-emerald-900 dark:text-emerald-300">
                <span className="text-[10px] uppercase font-bold block">✅ SCIENTIFIC REALITY:</span>
                <p className="font-sans text-xs">{item.reality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌟 3. 30+ "THINGS THAT SOUND FAKE BUT ARE TRUE" WOW CARDS */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 text-amber-800 dark:text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>OFFICIAL VERIFIED ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white mt-1">
              30+ SOLAR SYSTEM WOW FACTS
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search facts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs font-mono outline-none text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl border transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold border-cyan-600'
                  : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredFacts.map((fact) => (
            <div
              key={fact.id}
              className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 space-y-3 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                    {fact.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    {fact.scientificStatus}
                  </span>
                </div>

                <h4 className="text-base font-display font-bold text-slate-900 dark:text-white">
                  {fact.title}
                </h4>

                <p className="text-xs font-sans text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                  "{fact.shortFact}"
                </p>

                <p className="text-xs font-sans text-slate-600 dark:text-slate-400 leading-relaxed">
                  {fact.explanation}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Source: {fact.sourceName}</span>
                <a href={fact.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 underline">
                  NASA Link ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎮 4. SOLAR SYSTEM EXPLORATION GAME */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/40 bg-slate-950 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
              <Trophy className="w-3.5 h-3.5 text-purple-400" />
              <span>INTERACTIVE DISCOVERY GAME</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white mt-1">
              SOLAR SYSTEM DISCOVERY BADGES ({completedMissionIds.length} / {SOLAR_SYSTEM_GAME_MISSIONS.length})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {SOLAR_SYSTEM_GAME_MISSIONS.map((gm) => {
            const isDone = completedMissionIds.includes(gm.id);
            return (
              <div key={gm.id} className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-bold">MISSION #{gm.id}: {gm.title}</span>
                  {isDone ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>{gm.rewardBadge}</span>
                    </span>
                  ) : (
                    <span className="text-slate-500">Locked 🔒</span>
                  )}
                </div>

                <p className="font-sans text-slate-300 text-xs">{gm.objective}</p>
                <p className="text-[10px] text-amber-300">Hint: {gm.hint}</p>

                {!isDone && (
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => handleGameAnswer(gm.id, gm.targetId)}
                      className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all text-[10px]"
                    >
                      Verify Target Location ✦
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 🌌 5. CINEMATIC FINALE & EXPEDITION CONTINUATION */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white text-center space-y-6 shadow-2xl">
        <h2 className="text-3xl sm:text-6xl font-display font-black tracking-tight text-white">
          THIS IS ONLY OUR BACKYARD.
        </h2>
        <p className="text-base sm:text-xl font-sans text-cyan-300 max-w-2xl mx-auto leading-relaxed">
          The Sun is just one of 200 to 400 billion stars in the Milky Way galaxy. Continue your journey out into the cosmos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button
            onClick={() => navigate('/earth')}
            className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-bold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
          >
            ← BACK TO PLANET EARTH
          </button>

          <button
            onClick={() => navigate('/galaxy')}
            className="px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-mono font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <span>EXPLORE THE GALAXY →</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
};
