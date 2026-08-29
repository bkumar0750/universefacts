import React, { useState } from 'react';
import { Gamepad2, Award, CheckCircle2, RotateCcw, ExternalLink } from 'lucide-react';

interface GameMission {
  id: string;
  title: string;
  objective: string;
  options: { text: string; isCorrect: boolean; explanation: string }[];
  xp: number;
}

const GAME_MISSIONS: GameMission[] = [
  {
    id: 'm1',
    title: 'Mission 01: Deep Ocean Expedition',
    objective: 'Locate the deepest known point on planet Earth.',
    options: [
      { text: 'Puerto Rico Trench', isCorrect: false, explanation: 'Incorrect: Puerto Rico Trench reaches ~8,376 meters.' },
      { text: 'Challenger Deep (Mariana Trench)', isCorrect: true, explanation: 'Correct! Challenger Deep reaches 10,935 meters (35,876 ft) under 1,086 atmospheres.' },
      { text: 'Java Trench', isCorrect: false, explanation: 'Incorrect: Java Trench reaches ~7,450 meters.' }
    ],
    xp: 250
  },
  {
    id: 'm2',
    title: 'Mission 02: Underwater Geology',
    objective: 'Identify Earth largest mountain range system.',
    options: [
      { text: 'The Andes Range', isCorrect: false, explanation: 'Incorrect: Andes is longest above sea level (7,000 km).' },
      { text: 'The Himalayas', isCorrect: false, explanation: 'Incorrect: Himalayas is highest above sea level.' },
      { text: 'Global Mid-Ocean Ridge System', isCorrect: true, explanation: 'Correct! The Mid-Ocean Ridge winds ~65,000 km underwater—4x longer than Himalayas, Rockies, and Andes combined!' }
    ],
    xp: 300
  },
  {
    id: 'm3',
    title: 'Mission 03: Space Shield Investigation',
    objective: 'Find where Earth invisible magnetic shield deflects solar wind particles.',
    options: [
      { text: 'Troposphere Cloud Layer', isCorrect: false, explanation: 'Incorrect: Troposphere is the lowest weather atmosphere layer.' },
      { text: 'Magnetosphere & Van Allen Belts', isCorrect: true, explanation: 'Correct! Earth geodynamo magnetic bubble deflects solar wind thousands of kilometers above space.' },
      { text: 'Kármán Line', isCorrect: false, explanation: 'Incorrect: Kármán line at 100km is an aviation boundary.' }
    ],
    xp: 350
  },
  {
    id: 'm4',
    title: 'Mission 04: Boundary of Space',
    objective: 'Identify the physical boundary where Earth atmosphere officially ends.',
    options: [
      { text: 'Exact physical wall at 100 km', isCorrect: false, explanation: 'Incorrect: Air pressure decreases exponentially; there is no physical wall.' },
      { text: 'No single sharp boundary (Kármán line convention)', isCorrect: true, explanation: 'Correct! Atmosphere fades gradually into interplanetary space; Kármán 100km is a legal convention while geocorona extends past the Moon!' }
    ],
    xp: 400
  }
];

interface MythRealityCard {
  id: string;
  myth: string;
  reality: string;
  explanation: string;
  source: string;
  sourceUrl: string;
}

const MYTH_REALITY_CARDS: MythRealityCard[] = [
  {
    id: 'mr-1',
    myth: 'Seasons happen because Earth is closer to the Sun during summer.',
    reality: 'Seasons are caused primarily by Earth 23.4° axial tilt!',
    explanation: 'Northern summer occurs when the Northern Hemisphere is tilted toward the Sun. In fact, Earth reaches its closest solar distance (perihelion) in January during Northern winter!',
    source: 'NASA Climate Science',
    sourceUrl: 'https://science.nasa.gov/science-research/earth-science/milankovitch-orbital-cycles-and-their-role-in-earths-climate/'
  },
  {
    id: 'mr-2',
    myth: 'Earth is a perfectly smooth sphere.',
    reality: 'Earth is an oblate spheroid bulging at the equator!',
    explanation: 'Earth rotation causes an equatorial bulge. The distance from Earth center to the equator is 21 km further than to either pole.',
    source: 'ESA Earth Observation',
    sourceUrl: 'https://www.esa.int/Applications/Observing_the_Earth/10_remarkable_facts_about_Earth'
  },
  {
    id: 'mr-3',
    myth: 'Space begins at an exact physical wall at 100 km.',
    reality: 'There is no sharp physical boundary separating atmosphere from space.',
    explanation: 'The Kármán line at 100 km is a practical aviation convention. Atmosphere molecules fade continuously out to the hydrogen geocorona at ~629,300 km.',
    source: 'NASA Earth Atmosphere',
    sourceUrl: 'https://science.nasa.gov/earth/earth-atmosphere/'
  },
  {
    id: 'mr-4',
    myth: 'Humanity has mapped and explored the entire ocean floor.',
    reality: 'Over 73% of deep ocean bathymetry remains unmapped in high resolution!',
    explanation: 'NOAA reports explorers have directly seen less than 0.001% of the deep ocean floor. We know the surfaces of Mars and Venus better than our own seafloor.',
    source: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/ocean-fact/ocean-depth/'
  }
];

export const EarthDiscoveryGame: React.FC = () => {
  // Game state
  const [currentMissionIdx, setCurrentMissionIdx] = useState<number>(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [scoreXP, setScoreXP] = useState<number>(0);
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);
  const [feedbackMsg, setFeedbackMsg] = useState<{ isCorrect: boolean; text: string } | null>(null);

  // Myth card flip state
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectOption = (optIdx: number) => {
    if (selectedOptionIdx !== null) return; // Prevent double submission
    setSelectedOptionIdx(optIdx);
    const mission = GAME_MISSIONS[currentMissionIdx];
    const option = mission.options[optIdx];

    if (option.isCorrect) {
      setScoreXP(prev => prev + mission.xp);
      setCompletedMissions(prev => [...prev, mission.id]);
      setFeedbackMsg({ isCorrect: true, text: option.explanation });
    } else {
      setFeedbackMsg({ isCorrect: false, text: option.explanation });
    }
  };

  const handleNextMission = () => {
    setSelectedOptionIdx(null);
    setFeedbackMsg(null);
    if (currentMissionIdx < GAME_MISSIONS.length - 1) {
      setCurrentMissionIdx(prev => prev + 1);
    }
  };

  const handleResetGame = () => {
    setCurrentMissionIdx(0);
    setSelectedOptionIdx(null);
    setScoreXP(0);
    setCompletedMissions([]);
    setFeedbackMsg(null);
  };

  const currentMission = GAME_MISSIONS[currentMissionIdx];

  return (
    <div className="space-y-12">
      
      {/* 🎮 SECTION 1: EARTH DISCOVERY GAME EXPEDITIONS */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
              <Gamepad2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>GAMIFIED SCIENTIFIC EXPEDITION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Earth Discovery Mode — Earn XP & Explorer Badges
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Complete scientific research missions to earn research XP and unlock planetary badges!
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <div className="bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl font-bold text-emerald-600 dark:text-emerald-300">
              Total XP Earned: {scoreXP} XP
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-xl font-bold text-cyan-600 dark:text-cyan-300">
              Missions: {completedMissions.length} / {GAME_MISSIONS.length}
            </div>
          </div>
        </div>

        {/* Mission Box */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-slate-900/90 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
            <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white">
              {currentMission.title}
            </h3>
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              Reward: +{currentMission.xp} XP
            </span>
          </div>

          <p className="text-sm font-sans font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
            OBJECTIVE: {currentMission.objective}
          </p>

          <div className="space-y-2.5 font-mono text-xs">
            {currentMission.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={selectedOptionIdx !== null}
                className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between ${
                  selectedOptionIdx === idx
                    ? opt.isCorrect
                      ? 'bg-emerald-600 text-white border-emerald-500 font-bold shadow-md'
                      : 'bg-rose-600 text-white border-rose-500 font-bold shadow-md'
                    : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-emerald-500/40'
                }`}
              >
                <span>{opt.text}</span>
                {selectedOptionIdx === idx && (
                  <span>{opt.isCorrect ? '✓ CORRECT' : '✗ INCORRECT'}</span>
                )}
              </button>
            ))}
          </div>

          {/* Feedback Message Box */}
          {feedbackMsg && (
            <div className={`p-4 rounded-xl font-sans text-xs sm:text-sm leading-relaxed border ${
              feedbackMsg.isCorrect
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-800 dark:text-rose-300'
            }`}>
              <strong>{feedbackMsg.isCorrect ? '🎉 Great Job Explorer!' : '💡 Scientific Insight:'}</strong> {feedbackMsg.text}
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/10">
            <button
              onClick={handleResetGame}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Game</span>
            </button>

            {selectedOptionIdx !== null && currentMissionIdx < GAME_MISSIONS.length - 1 && (
              <button
                onClick={handleNextMission}
                className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md"
              >
                Next Mission ➔
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 🧠 SECTION 2: EARTH MYTH VS REALITY FLIP CARDS */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
              <Award className="w-3.5 h-3.5 text-cyan-500" />
              <span>POPULAR MISCONCEPTIONS BUSTED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Earth Myth vs Reality — Scientific Truths
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Click any card below to flip between viral internet myths and peer-reviewed scientific reality!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MYTH_REALITY_CARDS.map((card) => {
            const isFlipped = flippedCards[card.id] || false;
            return (
              <div
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 shadow-md cursor-pointer hover:border-cyan-500/50 transition-all min-h-[220px] flex flex-col justify-between space-y-4"
              >
                {!isFlipped ? (
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300">
                      <span>❌ COMMON MYTH</span>
                    </div>
                    <h3 className="text-lg font-display font-extrabold text-slate-900 dark:text-white leading-snug">
                      "{card.myth}"
                    </h3>
                    <p className="text-xs font-mono text-slate-500 font-semibold pt-2">
                      👆 Click card to reveal scientific reality...
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 animate-fade-in-up">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>✅ SCIENTIFIC REALITY</span>
                    </div>
                    <h3 className="text-lg font-display font-extrabold text-emerald-600 dark:text-emerald-300 leading-snug">
                      "{card.reality}"
                    </h3>
                    <p className="text-xs font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
                      {card.explanation}
                    </p>
                    <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex justify-end">
                      <a
                        href={card.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        <span>Source: {card.source}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
