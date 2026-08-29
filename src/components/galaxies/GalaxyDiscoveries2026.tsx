import React, { useState } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const GalaxyDiscoveries2026: React.FC = () => {
  // States for interactive cards
  const [darkMatterView, setDarkMatterView] = useState<'galaxies' | 'dark-matter' | 'structure'>('galaxies');
  const [centaurusMode, setCentaurusMode] = useState<'visible' | 'infrared'>('visible');

  return (
    <section id="latest-2026-discoveries" className="space-y-10 animate-fade-in-up">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
            NEW DISCOVERIES · 2026 ASTRONOMICAL BREAKTHROUGHS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
            <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            <span>2026 JAMES WEBB &amp; HUBBLE RESEARCH EXPEDITIONS</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-mono text-cyan-700 dark:text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>VERIFIED BY NASA / ESA OBSERVATORIES (2026)</span>
        </div>
      </div>

      {/* Grid of 2026 Discovery Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* 1. Black Hole May Have Formed Before Its Galaxy (Abell2744-QSO1) */}
        <div id="abell2744-qso1-early-bh" className="glass-panel p-6 rounded-3xl border border-purple-500/40 dark:bg-[#04081c] bg-white/90 space-y-4 shadow-xl flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 border border-purple-500/40 text-purple-800 dark:text-purple-300">
                NEW DISCOVERY · MAY 2026
              </span>
              <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold">JWST OBSERVATION</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              THE BLACK HOLE MAY HAVE COME FIRST
            </h3>

            <div className="grid grid-cols-2 gap-2 font-mono text-xs pt-1">
              <div className="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">GALAXY TARGET</span>
                <div className="font-bold text-cyan-700 dark:text-cyan-300">Abell2744-QSO1</div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">BLACK HOLE MASS</span>
                <div className="font-bold text-purple-700 dark:text-purple-300">~50 Million Suns</div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">DISTANCE</span>
                <div className="font-bold text-amber-700 dark:text-amber-300">&gt; 13 Billion Light-Years</div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">STATUS</span>
                <div className="font-bold text-emerald-700 dark:text-emerald-300">ACTIVE RESEARCH</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-500/30 text-xs font-sans text-purple-900 dark:text-purple-100 space-y-1">
              <strong className="text-purple-800 dark:text-purple-300 font-mono block uppercase">WHY IT MATTERS:</strong>
              <p>Traditional models often begin with stars/galaxies and allow black holes to grow over billions of years. This observation suggests some black holes started enormous before their host galaxies became massive.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 space-y-1 font-mono text-xs">
              <span className="text-amber-700 dark:text-amber-400 font-bold uppercase text-[10px]">SCIENTIFICALLY SAFER STATEMENT:</span>
              <p className="text-slate-800 dark:text-slate-200 italic font-sans">
                "Webb observations provide evidence that some supermassive black holes may have formed before their host galaxies."
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-mono text-[11px] text-cyan-800 dark:text-cyan-300 font-bold flex items-center justify-between">
            <span>QUESTION: DID BLACK HOLES HELP BUILD GALAXIES?</span>
            <span className="text-slate-500 dark:text-slate-400 text-[10px]">NASA May 2026</span>
          </div>
        </div>

        {/* 2. "Little Red Dots" Mystery */}
        <div id="little-red-dots-mystery" className="glass-panel p-6 rounded-3xl border border-rose-500/40 dark:bg-[#04081c] bg-white/90 space-y-4 shadow-xl flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-rose-500/20 border border-rose-500/40 text-rose-800 dark:text-rose-300">
                🔴 THE LITTLE RED DOT MYSTERY · JULY 2026
              </span>
              <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold">JWST DEEP DISCOVERY</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              MYSTERIOUS COMPACT EARLY UNIVERSE OBJECTS
            </h3>

            {/* Animation Visual Box */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-rose-300 dark:border-rose-500/30 font-mono text-center space-y-2">
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">EARLY UNIVERSE DISTRIBUTION (z &gt; 4)</span>
              <div className="flex justify-center items-center gap-3 text-rose-500 text-lg animate-pulse py-2">
                <span>🔴</span>
                <span>🔴</span>
                <span>🔴</span>
                <span>🔴</span>
              </div>
              <span className="text-xs text-rose-700 dark:text-rose-300 font-bold">JWST "LITTLE RED DOTS"</span>
            </div>

            {/* Known vs Unknown System */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-slate-900 border border-emerald-300 dark:border-emerald-500/30 space-y-1">
                <strong className="text-emerald-800 dark:text-emerald-400 font-bold text-[10px] uppercase block">WHAT WE KNOW:</strong>
                <ul className="text-slate-800 dark:text-slate-300 font-sans text-[11px] space-y-1 list-disc pl-3">
                  <li>Extremely distant &amp; compact</li>
                  <li>Unusually red spectra</li>
                  <li>Abundant in early universe</li>
                  <li>Decline dramatically at later cosmic times</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-rose-50 dark:bg-slate-900 border border-rose-300 dark:border-rose-500/30 space-y-1">
                <strong className="text-rose-800 dark:text-rose-400 font-bold text-[10px] uppercase block">WHAT WE DON'T KNOW:</strong>
                <ul className="text-slate-800 dark:text-slate-300 font-sans text-[11px] space-y-1 list-disc pl-3">
                  <li>New category of galaxy?</li>
                  <li>Obscured active black holes?</li>
                  <li>Transient evolutionary phase?</li>
                  <li>Why disappear so rapidly?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/30 font-mono text-[11px] text-rose-900 dark:text-rose-200">
            NASA July 2026: Observational effects may explain part of their apparent evolution.
          </div>
        </div>

        {/* 3. MoM-z14 — 280 Million Years After Big Bang */}
        <div id="mom-z14-earliest-galaxy" className="glass-panel p-6 rounded-3xl border border-cyan-500/40 dark:bg-[#04081c] bg-white/90 space-y-4 shadow-xl flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300">
                ⏳ 280 MILLION YEARS AFTER THE BIG BANG
              </span>
              <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-bold">REDSHIFT z = 14.44</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              MoM-z14: BOUNDARY OF OBSERVABLE UNIVERSE
            </h3>

            {/* Timeline Visual */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-cyan-300 dark:border-cyan-500/30 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[10px]">
                <span>BIG BANG (0 Yrs)</span>
                <span>COSMIC TIMELINE</span>
                <span>TODAY (13.8B Yrs)</span>
              </div>
              <div className="relative h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3%] bg-rose-500" />
                <div className="absolute left-[3%] top-0 bottom-0 w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              </div>
              <div className="flex justify-between items-center text-[11px] pt-1">
                <span className="text-rose-600 dark:text-rose-400 font-bold">Big Bang</span>
                <span className="text-cyan-700 dark:text-cyan-300 font-bold">🔴 MoM-z14 (+280M Yrs)</span>
                <span className="text-slate-700 dark:text-slate-300 font-bold">Today</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-slate-100 dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">Redshift</span>
                <div className="font-bold text-cyan-700 dark:text-cyan-300">z = 14.44</div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">Observed with</span>
                <div className="font-bold text-amber-700 dark:text-amber-300">JWST NIRSpec</div>
              </div>
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
              When its light began its journey across deep space, the entire universe was only about 280 million years old.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-mono text-[11px] text-cyan-800 dark:text-cyan-300 font-bold">
            NASA JWST — Pushing boundaries of the observable universe
          </div>
        </div>

        {/* 4. 800,000 Galaxies + Dark Matter Map ("SEE THE INVISIBLE") */}
        <div id="dark-matter-800k-galaxies-map" className="glass-panel p-6 rounded-3xl border border-indigo-500/40 dark:bg-[#04081c] bg-white/90 space-y-4 shadow-xl flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-indigo-500/20 border border-indigo-500/40 text-indigo-800 dark:text-indigo-300">
                🧲 SEE THE INVISIBLE · 800,000 GALAXIES
              </span>
              <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold">JANUARY 2026 RELEASE</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              JWST COSMOS-WEB DARK MATTER MAP
            </h3>

            {/* Interactive Mode Toggles */}
            <div className="flex gap-2 font-mono text-xs">
              <button
                onClick={() => setDarkMatterView('galaxies')}
                className={`px-3 py-1.5 rounded-xl border cursor-pointer ${
                  darkMatterView === 'galaxies' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-800 dark:text-cyan-200 font-bold' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400'
                }`}
              >
                GALAXIES
              </button>
              <button
                onClick={() => setDarkMatterView('dark-matter')}
                className={`px-3 py-1.5 rounded-xl border cursor-pointer ${
                  darkMatterView === 'dark-matter' ? 'bg-indigo-500/20 border-indigo-400 text-indigo-800 dark:text-indigo-200 font-bold' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400'
                }`}
              >
                DARK MATTER MAP
              </button>
              <button
                onClick={() => setDarkMatterView('structure')}
                className={`px-3 py-1.5 rounded-xl border cursor-pointer ${
                  darkMatterView === 'structure' ? 'bg-purple-500/20 border-purple-400 text-purple-800 dark:text-purple-200 font-bold' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400'
                }`}
              >
                GRAVITATIONAL STRUCTURE
              </button>
            </div>

            {/* View Output Display */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-indigo-300 dark:border-indigo-500/30 font-mono text-xs space-y-2">
              <div className="text-[10px] text-indigo-700 dark:text-indigo-400 font-bold uppercase">
                ACTIVE LAYER: {darkMatterView.toUpperCase()}
              </div>
              <p className="text-slate-800 dark:text-slate-200 font-sans text-xs">
                {darkMatterView === 'galaxies' && 'Showing 800,000 visible stellar galaxies observed over 255 hours across 0.54 sq. deg.'}
                {darkMatterView === 'dark-matter' && 'Gravitational weak lensing reconstruction showing dark matter density peaks binding galaxy clusters.'}
                {darkMatterView === 'structure' && 'Large-scale cosmic web filaments connecting galaxy superclusters across billions of light-years.'}
              </p>
            </div>

            {/* Mandatory UI Label */}
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/50 font-mono text-[11px] text-purple-900 dark:text-purple-200 font-bold">
              LABEL: Dark matter is inferred from gravitational effects — it is not directly photographed.
            </div>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-500/30 font-mono text-[11px] text-indigo-800 dark:text-indigo-300 font-bold">
            NASA JWST COSMOS-Web Survey — 255 Hours of Observations
          </div>
        </div>

        {/* 5. CDG-2 — Darkest Galaxy */}
        <div id="cdg-2-darkest-galaxy" className="glass-panel p-6 rounded-3xl border border-slate-500/40 dark:bg-[#04081c] bg-white/90 space-y-4 shadow-xl flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-500/20 border border-slate-500/40 text-slate-800 dark:text-slate-300">
                🌑 THE GALAXY YOU CAN BARELY SEE
              </span>
              <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold">HUBBLE FEB 2026</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              CDG-2: ONE OF THE DARKEST KNOWN GALAXIES
            </h3>

            {/* Surface Brightness Bar */}
            <div className="space-y-2 font-mono text-xs p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10">
              <div className="space-y-1">
                <span className="text-cyan-700 dark:text-cyan-400 text-[10px] uppercase">NORMAL GALAXY SURFACE BRIGHTNESS</span>
                <div className="h-3 w-full bg-cyan-500 rounded-sm" />
              </div>
              <div className="space-y-1 pt-1">
                <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">CDG-2 ULTRA-LOW SURFACE BRIGHTNESS</span>
                <div className="h-3 w-[10%] bg-slate-600 rounded-sm" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 space-y-1 font-mono text-xs">
              <span className="text-amber-700 dark:text-amber-400 font-bold uppercase text-[10px]">WHY IS IT SO DARK?</span>
              <ul className="text-slate-800 dark:text-slate-300 font-sans text-xs space-y-1 list-disc pl-3">
                <li>Very low surface brightness</li>
                <li>Sparse visible stellar population</li>
                <li>Strong inferred dark-matter dominance</li>
              </ul>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono text-[11px] text-slate-800 dark:text-slate-300">
            Category: "Galaxies That Shouldn't Look Like This" (Hubble Feb 2026)
          </div>
        </div>

        {/* 6. Terzan 5 — Fossil Fragment of the Milky Way */}
        <div id="terzan-5-milky-way-fossil" className="glass-panel p-6 rounded-3xl border border-emerald-500/40 dark:bg-[#04081c] bg-white/90 space-y-4 shadow-xl flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-800 dark:text-emerald-300">
                🧬 A FOSSIL FROM THE MILKY WAY'S BIRTH
              </span>
              <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold">WEBB + HUBBLE JUNE 2026</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              TERZAN 5: PROTOTYPE BULGE FOSSIL
            </h3>

            {/* Formation Flow */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-emerald-300 dark:border-emerald-500/30 font-mono text-xs space-y-2 text-center">
              <div className="text-emerald-700 dark:text-emerald-400 font-bold">EARLY MILKY WAY</div>
              <div className="text-slate-400 text-[10px]">↓</div>
              <div className="text-amber-700 dark:text-amber-300 font-bold">GALACTIC BULGE FORMS</div>
              <div className="text-slate-400 text-[10px]">↓</div>
              <div className="text-cyan-700 dark:text-cyan-300 font-bold">MOST PRIMORDIAL CLUMPS MERGE / DISPERSE</div>
              <div className="text-slate-400 text-[10px]">↓</div>
              <div className="text-emerald-700 dark:text-emerald-300 font-bold text-sm">TERZAN 5 SURVIVES TODAY</div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-xs font-mono text-emerald-900 dark:text-emerald-200">
              <strong className="text-emerald-800 dark:text-emerald-300 font-bold block">FOUR SEPARATE GENERATIONS OF STARS:</strong>
              Researchers found evidence for four separate starbirth episodes, preserving the primordial build of the Milky Way center.
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 font-mono text-[11px] text-emerald-800 dark:text-emerald-300 font-bold">
            NASA / ESA June 2026 — History of Milky Way Bulge Formation
          </div>
        </div>

        {/* 7. Water and Dust Near Sagittarius A* */}
        <div id="sgr-a-water-dust-irs3" className="glass-panel p-6 rounded-3xl border border-blue-500/40 dark:bg-[#04081c] bg-white/90 space-y-4 shadow-xl flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 border border-blue-500/40 text-blue-800 dark:text-blue-300">
                💧 WATER NEXT TO A BLACK HOLE?
              </span>
              <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold">ESA / WEBB AUG 2026</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              MOLECULAR WATER SURVIVING NEAR SGR A*
            </h3>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-blue-300 dark:border-blue-500/30 font-mono text-xs text-center space-y-1">
              <div className="text-purple-700 dark:text-purple-400 font-bold">Sgr A* Supermassive Black Hole (●)</div>
              <div className="text-rose-600 dark:text-rose-400 text-[10px]">Extreme Radiation Environment</div>
              <div className="text-slate-400 text-[10px]">↑</div>
              <div className="text-amber-700 dark:text-amber-300 font-bold">Evolved Star IRS 3 (⭐)</div>
              <div className="text-slate-400 text-[10px]">↓</div>
              <div className="text-blue-700 dark:text-blue-300 font-bold">💧 WATER MOLECULES &amp; 🌫️ CARBON DUST</div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-xs font-sans text-slate-800 dark:text-slate-200">
              <strong className="text-blue-700 dark:text-blue-300 font-mono block mb-1">SCIENTIFIC CLARIFICATION:</strong>
              "The environment around Sagittarius A* is extreme, yet stars like IRS 3 continue contributing fresh water vapor molecules and dust grains to their surroundings." (Not a liquid ocean).
            </div>
          </div>

          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-500/30 font-mono text-[11px] text-blue-800 dark:text-blue-300 font-bold">
            ESA / Webb August 2026 Release
          </div>
        </div>

        {/* 8. Centaurus A — Webb Sees a Hidden Galaxy */}
        <div id="centaurus-a-hidden-core" className="glass-panel p-6 rounded-3xl border border-cyan-500/40 dark:bg-[#04081c] bg-white/90 space-y-4 shadow-xl flex flex-col justify-between transition-colors">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 border border-cyan-500/40 text-cyan-800 dark:text-cyan-300">
                👁️ THE GALAXY HAS TWO FACES
              </span>
              <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-bold">CENTAURUS A (11M LY)</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
              CENTAURUS A: DUST-PENETRATING INFRARED
            </h3>

            {/* Slider / Switcher Mode */}
            <div className="flex gap-2 font-mono text-xs">
              <button
                onClick={() => setCentaurusMode('visible')}
                className={`px-4 py-2 rounded-xl border cursor-pointer ${
                  centaurusMode === 'visible' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-900 dark:text-cyan-200 font-bold' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400'
                }`}
              >
                VISIBLE OPTICAL
              </button>
              <button
                onClick={() => setCentaurusMode('infrared')}
                className={`px-4 py-2 rounded-xl border cursor-pointer ${
                  centaurusMode === 'infrared' ? 'bg-amber-500/20 border-amber-400 text-amber-900 dark:text-amber-200 font-bold' : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400'
                }`}
              >
                WEBB INFRARED
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-cyan-300 dark:border-cyan-500/30 font-mono text-xs space-y-2">
              <span className="text-[10px] text-cyan-700 dark:text-cyan-400 font-bold uppercase">MODE: {centaurusMode.toUpperCase()}</span>
              <p className="text-slate-800 dark:text-slate-200 font-sans text-xs">
                {centaurusMode === 'visible' && 'Dark interstellar dust lanes completely obscure the galaxy center.'}
                {centaurusMode === 'infrared' && 'Webb infrared light pierces cosmic dust, revealing hidden star fields and active SMBH core jets.'}
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/30 font-mono text-[11px] text-cyan-800 dark:text-cyan-300 font-bold">
            NASA July 2026 — Webb uncovers galaxy shaped by cosmic collision
          </div>
        </div>

      </div>
    </section>
  );
};
