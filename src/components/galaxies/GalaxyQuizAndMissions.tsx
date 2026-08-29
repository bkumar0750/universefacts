import React, { useState } from 'react';
import { CheckCircle2, Trophy, ArrowRight } from 'lucide-react';
import { GALAXY_MISSIONS, GALAXY_QUIZ_QUESTIONS } from '../../data/galaxiesAtlasData';

export const GalaxyQuizAndMissions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'missions' | 'quiz'>('missions');
  const [completedMissions, setCompletedMissions] = useState<string[]>(['m1', 'm3']);
  
  // Quiz State
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const toggleMission = (id: string) => {
    if (completedMissions.includes(id)) {
      setCompletedMissions(completedMissions.filter(m => m !== id));
    } else {
      setCompletedMissions([...completedMissions, id]);
    }
  };

  const handleSelectQuizOption = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === GALAXY_QUIZ_QUESTIONS[currentQuizIdx].correctIndex) {
      setQuizScore(quizScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    if (currentQuizIdx < GALAXY_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuizIdx(currentQuizIdx + 1);
    }
  };

  return (
    <section id="galaxy-missions-quiz" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020516] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTIONS 75 & 76 · GAMIFIED MISSIONS & QUIZ
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Trophy className="w-6 h-6 text-amber-400" />
            <span>COSMIC MISSIONS & KNOWLEDGE EVALUATION</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('missions')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'missions' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
            }`}
          >
            Missions Tracker ({completedMissions.length}/{GALAXY_MISSIONS.length})
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeTab === 'quiz' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' : 'bg-slate-900 text-slate-400 border border-white/5'
            }`}
          >
            Galaxy Quiz
          </button>
        </div>
      </div>

      {/* MISSIONS TAB */}
      {activeTab === 'missions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-300 font-bold">12 Gamified Cosmic Exploration Missions:</span>
            <span className="text-amber-300 font-bold">Earned Badges: {completedMissions.length} / 12</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {GALAXY_MISSIONS.map((m) => {
              const isDone = completedMissions.includes(m.id);
              return (
                <div
                  key={m.id}
                  onClick={() => toggleMission(m.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 font-mono text-xs ${
                    isDone
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-200'
                      : 'bg-slate-950/60 border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <div className={`mt-0.5 p-1 rounded-full border ${isDone ? 'bg-amber-500 text-slate-950 border-amber-400' : 'border-slate-600'}`}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-xs">{m.title}</span>
                      <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                        {m.rewardBadge}
                      </span>
                    </div>
                    <p className="text-[11px] font-sans text-slate-300">{m.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* QUIZ TAB */}
      {activeTab === 'quiz' && (
        <div className="space-y-6">
          {currentQuizIdx < GALAXY_QUIZ_QUESTIONS.length ? (
            <div className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3">
                <span className="text-cyan-400 font-bold">Question {currentQuizIdx + 1} of {GALAXY_QUIZ_QUESTIONS.length}</span>
                <span className="text-amber-300 font-bold">Score: {quizScore}</span>
              </div>

              <h3 className="text-xl font-display font-bold text-white">
                {GALAXY_QUIZ_QUESTIONS[currentQuizIdx].question}
              </h3>

              <div className="space-y-2">
                {GALAXY_QUIZ_QUESTIONS[currentQuizIdx].options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === GALAXY_QUIZ_QUESTIONS[currentQuizIdx].correctIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuizOption(idx)}
                      disabled={isSubmitted}
                      className={`w-full p-4 rounded-xl text-left text-xs font-mono transition-all border ${
                        isSubmitted
                          ? isCorrect
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold'
                            : isSelected
                            ? 'bg-rose-500/20 text-rose-300 border-rose-500 font-bold'
                            : 'bg-slate-900 text-slate-500 border-white/5 opacity-50'
                          : isSelected
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                          : 'bg-slate-900 text-slate-300 border-white/5 hover:bg-slate-800'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Submit & Explanation */}
              <div className="pt-2">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="px-6 py-3 rounded-xl text-xs font-mono font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    SUBMIT ANSWER
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono space-y-1">
                      <span className="text-emerald-400 font-bold uppercase block">Scientific Explanation & Citation:</span>
                      <p className="text-slate-200 font-sans text-xs">{GALAXY_QUIZ_QUESTIONS[currentQuizIdx].explanation}</p>
                      <div className="text-[10px] text-slate-400 pt-1">Source: {GALAXY_QUIZ_QUESTIONS[currentQuizIdx].source}</div>
                    </div>

                    <button
                      onClick={handleNextQuestion}
                      className="px-6 py-3 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center gap-2 hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer"
                    >
                      <span>NEXT QUESTION</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-slate-950 border border-amber-500/30 text-center space-y-4 font-mono">
              <Trophy className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
              <h3 className="text-3xl font-display font-bold text-white">QUIZ COMPLETED!</h3>
              <p className="text-sm text-cyan-300">
                You scored <strong className="text-amber-300">{quizScore}</strong> out of {GALAXY_QUIZ_QUESTIONS.length}!
              </p>
              <button
                onClick={() => { setCurrentQuizIdx(0); setQuizScore(0); setSelectedOption(null); setIsSubmitted(false); }}
                className="px-6 py-3 rounded-xl text-xs font-mono font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all cursor-pointer"
              >
                RESTART QUIZ
              </button>
            </div>
          )}
        </div>
      )}

    </section>
  );
};
