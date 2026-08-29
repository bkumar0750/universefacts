import React, { useState } from 'react';
import { Gamepad2, Award, Trophy } from 'lucide-react';
import { COSMIC_QUIZ_QUESTIONS } from '../../data/universeAtlasData';

export const UniverseCosmicExplorerGame: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quest' | 'quiz'>('quest');
  const [questStep, setQuestStep] = useState<number>(0);
  const [userBadges, setUserBadges] = useState<string[]>([]);
  
  // Quiz State
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const QUEST_STATIONS = [
    { title: 'STATION 1: PLANET EARTH', requirement: 'Confirm observation of Earth home planet.', badge: 'TERRESTRIAL NAVIGATOR' },
    { title: 'STATION 2: HELIOSPHERE EDGE', requirement: 'Cross Voyager 1 boundary at 120 AU.', badge: 'SOLAR SYSTEM CARTOGRAPHER' },
    { title: 'STATION 3: SAGITTARIUS A* CORE', requirement: 'Inspect 4 million solar mass SMBH at galaxy center.', badge: 'GALACTIC EXPLORER' },
    { title: 'STATION 4: LOCAL GROUP SYSTEM', requirement: 'Locate Andromeda (M31) approaching at 110 km/s.', badge: 'LOCAL GROUP CARTOGRAPHER' },
    { title: 'STATION 5: COSMIC WEB FILAMENT', requirement: 'Trace dark matter scaffolding and cosmic voids.', badge: 'DARK MATTER DETECTIVE' },
    { title: 'STATION 6: MoM-z14 DEEP FIELD', requirement: 'Observe galaxy emitted ~280M yrs post Big Bang.', badge: 'EARLY UNIVERSE VETERAN' },
    { title: 'STATION 7: CMB RECOMBINATION', requirement: 'Capture 2.725 K relic radiation baby picture.', badge: 'COSMIC TIME TRAVELER' }
  ];

  const handleNextQuestStep = () => {
    const currentBadge = QUEST_STATIONS[questStep].badge;
    if (!userBadges.includes(currentBadge)) {
      setUserBadges((prev) => [...prev, currentBadge]);
    }
    if (questStep < QUEST_STATIONS.length - 1) {
      setQuestStep(questStep + 1);
    }
  };

  const handleQuizAnswer = (idx: number) => {
    setSelectedOption(idx);
    setShowAnswer(true);
    if (idx === COSMIC_QUIZ_QUESTIONS[currentQuizIdx].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQuizIdx < COSMIC_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizIdx(currentQuizIdx + 1);
    }
  };

  const quizItem = COSMIC_QUIZ_QUESTIONS[currentQuizIdx];

  return (
    <section id="cosmic-explorer-game" className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/40 dark:bg-[#02071a] bg-white/90 space-y-8 shadow-2xl transition-colors">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            <Gamepad2 className="w-4 h-4 text-cyan-500" />
            <span>SECTION 97 &amp; 98 · INTERACTIVE COSMIC EXPLORER GAME &amp; QUIZ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
            COSMIC EXPEDITION &amp; KNOWLEDGE QUIZ
          </h2>
        </div>

        <div className="flex gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveTab('quest')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeTab === 'quest'
                ? 'bg-cyan-500/20 text-cyan-900 dark:text-cyan-200 border-cyan-400 font-bold'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
            }`}
          >
            🚀 COSMIC QUEST
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl border cursor-pointer transition-all ${
              activeTab === 'quiz'
                ? 'bg-purple-500/20 text-purple-900 dark:text-purple-200 border-purple-400 font-bold'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/5'
            }`}
          >
            🧠 COSMIC QUIZ ({score}/{COSMIC_QUIZ_QUESTIONS.length})
          </button>
        </div>
      </div>

      {/* View 1: Quest Mode */}
      {activeTab === 'quest' && (
        <div className="space-y-6 font-mono text-xs">
          
          <div className="p-6 rounded-3xl bg-slate-950 border border-cyan-500/40 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-cyan-400 font-bold text-sm">MISSION PROGRESS</span>
              <span className="text-amber-400 font-bold">Station {questStep + 1} of {QUEST_STATIONS.length}</span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white">{QUEST_STATIONS[questStep].title}</h3>
            <p className="font-sans text-xs text-slate-300 leading-relaxed">{QUEST_STATIONS[questStep].requirement}</p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] text-slate-400">Unlockable Badge: {QUEST_STATIONS[questStep].badge}</span>
              <button
                onClick={handleNextQuestStep}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                {questStep === QUEST_STATIONS.length - 1 ? 'COMPLETE COSMIC EXPEDITION 🎉' : 'ADVANCE TO NEXT STATION →'}
              </button>
            </div>
          </div>

          {/* User Earned Badges Showcase */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase">
              <Trophy className="w-4 h-4" />
              <span>YOUR EARNED EXPEDITION BADGES ({userBadges.length})</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {userBadges.length === 0 ? (
                <span className="text-slate-500 text-[11px] font-sans">No badges unlocked yet. Complete stations above!</span>
              ) : (
                userBadges.map((b) => (
                  <span key={b} className="px-3 py-1 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300 font-bold text-[10px] flex items-center gap-1">
                    <Award className="w-3 h-3 text-amber-400" />
                    <span>{b}</span>
                  </span>
                ))
              )}
            </div>
          </div>

        </div>
      )}

      {/* View 2: Quiz Mode */}
      {activeTab === 'quiz' && (
        <div className="space-y-6 font-mono text-xs">
          <div className="p-6 rounded-3xl bg-slate-950 border border-purple-500/40 text-white space-y-4 shadow-xl">
            <div className="flex items-center justify-between text-xs">
              <span className="text-purple-400 font-bold">{quizItem.category}</span>
              <span className="text-slate-400">Question {currentQuizIdx + 1} of {COSMIC_QUIZ_QUESTIONS.length}</span>
            </div>

            <h3 className="text-xl font-display font-bold text-white">{quizItem.question}</h3>

            <div className="space-y-2 pt-2">
              {quizItem.options.map((opt, idx) => (
                <button
                  key={opt}
                  onClick={() => !showAnswer && handleQuizAnswer(idx)}
                  disabled={showAnswer}
                  className={`w-full p-3 rounded-xl border text-left font-sans text-xs transition-all cursor-pointer ${
                    showAnswer
                      ? idx === quizItem.correctIndex
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold'
                        : idx === selectedOption
                        ? 'bg-rose-500/20 border-rose-500 text-rose-200'
                        : 'bg-slate-900 border-white/10 opacity-50'
                      : 'bg-slate-900 border-white/10 hover:border-purple-400 text-slate-200'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {showAnswer && (
              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/40 space-y-2">
                <span className="text-emerald-400 font-bold block text-xs">EXPLANATION:</span>
                <p className="font-sans text-xs text-slate-200 leading-relaxed">{quizItem.explanation}</p>
                <div className="pt-2 flex justify-between items-center text-[10px]">
                  <span className="text-slate-400">Source: {quizItem.source}</span>
                  <button
                    onClick={handleNextQuizQuestion}
                    className="px-4 py-2 rounded-xl bg-purple-500 text-slate-950 font-bold font-mono text-xs cursor-pointer hover:bg-purple-400"
                  >
                    NEXT QUESTION →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
