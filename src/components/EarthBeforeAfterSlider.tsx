import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, HelpCircle, Layers } from 'lucide-react';

interface BeforeAfterItem {
  id: string;
  title: string;
  location: string;
  timeframe: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  explanation: string;
  source: string;
  sourceUrl: string;
}

const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Muir Glacier Retreat in Alaska',
    location: 'Glacier Bay National Park, Alaska',
    timeframe: '1941 vs 2021 (80-Year Decline)',
    beforeImg: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'August 1941 (Massive Ice Sheet)',
    afterLabel: 'August 2021 (7 km Retreat & Dense Forest Growth)',
    explanation: 'NASA satellite observations and USGS Earthshots record Muir Glacier retreating more than 7 kilometers and thinning by over 800 meters as ice transforms into ocean water and lush coastal forest.',
    source: 'USGS EROS Earthshots',
    sourceUrl: 'https://eros.usgs.gov/earthshots'
  },
  {
    id: 'ba-2',
    title: 'Aral Sea Water Level Loss',
    location: 'Kazakhstan / Uzbekistan',
    timeframe: '2000 vs 2024 (24-Year Shrinkage)',
    beforeImg: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'August 2000 (Substantial Water Body)',
    afterLabel: 'August 2024 (Aralkum Desert Transformation)',
    explanation: 'NASA Terra satellite MODIS observations capture the Aral Sea shrinking to less than 10% of its original size due to agricultural river diversion, turning former seafloor into toxic salt desert.',
    source: 'NASA Earth Observatory',
    sourceUrl: 'https://earthobservatory.nasa.gov/world-of-change/AralSea'
  },
  {
    id: 'ba-3',
    title: 'Las Vegas Urban Growth & Lake Mead',
    location: 'Nevada, United States',
    timeframe: '1984 vs 2024 (Landsat 40-Year Record)',
    beforeImg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    afterImg: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'Landsat 5 (1984 Population 500k)',
    afterLabel: 'Landsat 9 (2024 Population 2.3M)',
    explanation: 'Landsat satellite time-series imagery demonstrates explosive urban sprawl into the Mojave Desert alongside fluctuating water levels in Lake Mead reservoir.',
    source: 'USGS / NASA Landsat Program',
    sourceUrl: 'https://landsat.gsfc.nasa.gov/'
  }
];

interface HowDoWeKnowItem {
  fact: string;
  method: string;
  evidence: string;
  result: string;
  source: string;
  sourceUrl: string;
}

const HOW_DO_WE_KNOW_ITEMS: HowDoWeKnowItem[] = [
  {
    fact: "Earth is 4.54 billion years old",
    method: "Radiometric Isotope Dating (Uranium-Lead $U-Pb$ decay)",
    evidence: "Lead isotope ratios ($^{207}Pb/^{206}Pb$) measured in Canyon Diablo iron meteorites and Jack Hills zircons.",
    result: "Constrains Earth and Solar System accretion age to 4.54 ± 0.05 billion years.",
    source: "USGS Geochronology",
    sourceUrl: "https://pubs.usgs.gov/gip/geotime/age.html"
  },
  {
    fact: "Earth's outer core is liquid metal",
    method: "Seismic Wave Tomography ($P$-waves and $S$-waves)",
    evidence: "Shear waves ($S$-waves) cannot travel through liquids and create a seismic shadow zone on the opposite side of Earth during earthquakes.",
    result: "Proves the outer core between 2,890 km and 5,150 km depth is liquid fluid metal.",
    source: "USGS Geophysics",
    sourceUrl: "https://pubs.usgs.gov/gip/geotime/age.html"
  },
  {
    fact: "Challenger Deep is 10,935 meters deep",
    method: "Multibeam Sonar Bathymetry & Pressure Transducers",
    evidence: "Acoustic ping transit times sent from research vessels and calibrated by deep-sea submersible pressure gauges.",
    result: "Confirms Mariana Trench maximum depth at 10,935 ± 10 meters under 1,086 atmospheres.",
    source: "NOAA Ocean Exploration",
    sourceUrl: "https://oceanexplorer.noaa.gov/ocean-fact/ocean-depth/"
  },
  {
    fact: "The Moon is moving away by ~3.8 cm/year",
    method: "Lunar Laser Ranging (LLR)",
    evidence: "Short laser pulses fired from Earth bounce back off retroreflector mirrors left on the Moon by Apollo 11, 14, 15 missions.",
    result: "Measures Earth-Moon distance precision to within millimeters, proving 3.8 cm/yr recession.",
    source: "NASA Lunar Science",
    sourceUrl: "https://science.nasa.gov/earth/facts/"
  }
];

export const EarthBeforeAfterSlider: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const currentItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  return (
    <div className="space-y-12">
      
      {/* 🛰️ SECTION 1: NASA / USGS BEFORE & AFTER EARTH CHANGES */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
              <Layers className="w-3.5 h-3.5 text-cyan-500" />
              <span>NASA & USGS EARTH OBSERVATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Earth Changes Every Day — Satellite Before & After
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Drag the interactive image slider to see glacier retreat, lake drying, and urban expansion captured by Landsat and Terra.
            </p>
          </div>

          <div className="flex gap-2">
            {BEFORE_AFTER_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => { setActiveItemIndex(idx); setSliderPosition(50); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeItemIndex === idx
                    ? 'bg-cyan-600 text-white font-bold shadow-md'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-cyan-500'
                }`}
              >
                Case {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Image Split Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-slate-700 dark:text-slate-300 font-bold">
            <span className="text-cyan-600 dark:text-cyan-400">◄ {currentItem.beforeLabel}</span>
            <span className="text-amber-600 dark:text-amber-400">{currentItem.afterLabel} ►</span>
          </div>

          <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-2xl select-none">
            
            {/* After Image (Background) */}
            <img
              src={currentItem.afterImg}
              alt={currentItem.afterLabel}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute bottom-4 right-4 bg-slate-950/80 text-amber-300 font-mono text-xs font-bold px-3 py-1 rounded-lg border border-amber-500/40">
              {currentItem.afterLabel}
            </span>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentItem.beforeImg}
                alt={currentItem.beforeLabel}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
              <span className="absolute bottom-4 left-4 bg-slate-950/80 text-cyan-300 font-mono text-xs font-bold px-3 py-1 rounded-lg border border-cyan-500/40">
                {currentItem.beforeLabel}
              </span>
            </div>

            {/* Drag handle line */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 font-extrabold flex items-center justify-center text-xs shadow-lg border-2 border-white">
                ↔
              </div>
            </div>

            {/* Hidden Input range covering the image */}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderPosition}
              onChange={(e) => setSliderPosition(parseInt(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />

          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">
                {currentItem.title} ({currentItem.location})
              </h3>
              <a
                href={currentItem.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold hover:underline"
              >
                <span>Source: {currentItem.source}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentItem.explanation}
            </p>
          </div>
        </div>
      </section>

      {/* 🔬 SECTION 2: HOW DO WE KNOW? SCIENTIFIC METHOD CARDS */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>EMPIRICAL SCIENTIFIC METHODOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              How Do We Know? — Evidence & Scientific Methods
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Every surprising Earth discovery is backed by rigorous empirical measurement methods:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOW_DO_WE_KNOW_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-4 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
                  <ShieldCheck className="w-3 h-3 text-amber-400" />
                  <span>FACT: "{item.fact}"</span>
                </div>

                <div className="space-y-1 font-mono text-xs pt-1">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-semibold">METHOD USED</span>
                  <strong className="text-cyan-700 dark:text-cyan-300 text-xs block">{item.method}</strong>
                </div>

                <div className="space-y-1 font-mono text-xs pt-1">
                  <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-semibold">EMPIRICAL EVIDENCE</span>
                  <p className="text-slate-700 dark:text-slate-300 font-sans text-xs leading-relaxed">{item.evidence}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400 font-sans text-xs">
                  Result: {item.result}
                </span>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-cyan-600 dark:text-cyan-400 font-bold hover:underline"
                >
                  <span>{item.source}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
