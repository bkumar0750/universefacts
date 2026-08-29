import React, { useState } from 'react';
import { Clock, Sparkles } from 'lucide-react';

interface TimelineStage {
  id: string;
  time: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  atmosphere: string;
  temperature: string;
  lifeStatus: string;
  sourceUrl: string;
}

const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: 't-1',
    time: '4.54 BYA',
    title: 'Earth Formation & Giant Impact',
    badge: 'HADEAN EON',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    description: 'Accretion of dust and rocky planetesimals in the solar nebula. A Mars-sized body (Theia) collides with early Earth, launching debris that coalesces to form the Moon.',
    atmosphere: 'Methane, Carbon Dioxide, Water Vapor, Nitrogen (No Free Oxygen)',
    temperature: '>1,200°C (Molten Magma Surface)',
    lifeStatus: 'Prebiotic Organic Compounds',
    sourceUrl: 'https://pubs.usgs.gov/gip/geotime/age.html'
  },
  {
    id: 't-2',
    time: '4.40 BYA',
    title: 'Magma Crust Cooling & Zircon Formation',
    badge: 'HADEAN EON',
    image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80',
    description: 'The molten magma surface cools into a solid granitic crust. Ancient zircon crystals (Jack Hills, Australia) begin forming in the presence of liquid water.',
    atmosphere: 'Dense CO₂ Steam Envelope',
    temperature: '~200°C to 400°C',
    lifeStatus: 'None',
    sourceUrl: 'https://pubs.usgs.gov/gip/geotime/age.html'
  },
  {
    id: 't-3',
    time: '3.80 BYA',
    title: 'Condensation of Earth First Oceans',
    badge: 'ARCHEAN EON',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
    description: 'Torrential rains rain down from cooling atmospheric steam over millions of years, condensing Earth global liquid oceans.',
    atmosphere: 'Carbon Dioxide, Ammonia, Methane',
    temperature: '~70°C to 100°C',
    lifeStatus: 'Hydrothermal Pre-RNA Chemistry',
    sourceUrl: 'https://science.nasa.gov/earth/earth-observatory/the-water-planet-46209/'
  },
  {
    id: 't-4',
    time: '3.50 BYA',
    title: 'Emergence of Microscopic Microbial Life',
    badge: 'ARCHEAN EON',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'Chemoautotrophic bacteria and stromatolite colonies colonize shallow hydrothermal ocean margins, leaving fossilized bio-mats.',
    atmosphere: 'Anoxic High-Methane Haze',
    temperature: '~50°C to 70°C',
    lifeStatus: 'Single-Celled Anaerobic Microbes',
    sourceUrl: 'https://pubs.usgs.gov/gip/geotime/age.html'
  },
  {
    id: 't-5',
    time: '2.40 BYA',
    title: 'The Great Oxygenation Event (GOE)',
    badge: 'PROTEROZOIC EON',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Photosynthetic cyanobacteria flood oceans with free oxygen ($O_2$). Dissolved iron precipitates out into global Banded Iron Formations, forming Earth ozone shield.',
    atmosphere: 'Rising Free Oxygen (1% to 5%)',
    temperature: 'Cooling Glacial Snowball Earth Intervals',
    lifeStatus: 'Photosynthetic Cyanobacteria',
    sourceUrl: 'https://science.nasa.gov/earth/earth-atmosphere/'
  },
  {
    id: 't-6',
    time: '540 MYA',
    title: 'Cambrian Explosion of Complex Ocean Life',
    badge: 'PALEOZOIC ERA',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80',
    description: 'An explosion of complex marine animal body plans occurs. Trilobites, hard shells, eyes, and early marine predators fill shallow seas.',
    atmosphere: 'Oxygen Reaches ~15%',
    temperature: '~20°C Warm Tropical Seas',
    lifeStatus: 'Multicellular Invertebrates & Fish',
    sourceUrl: 'https://pubs.usgs.gov/gip/geotime/age.html'
  },
  {
    id: 't-7',
    time: '230 MYA',
    title: 'Pangaea Supercontinent & Dinosaurs',
    badge: 'MESOZOIC ERA',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    description: 'All Earth continents assemble into supercontinent Pangaea. Dinosaurs, early mammals, and vast gymnosperm forests dominate.',
    atmosphere: 'High CO₂ (~1,000 ppm), 21% O₂',
    temperature: 'Warm Greenhouse (+5°C warmer than today)',
    lifeStatus: 'Dinosaurs & Early Mammals',
    sourceUrl: 'https://pubs.usgs.gov/gip/geotime/age.html'
  },
  {
    id: 't-8',
    time: '66 MYA',
    title: 'Chicxulub Asteroid Mass Extinction',
    badge: 'K-Pg BOUNDARY',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    description: 'A 10 km asteroid strikes Chicxulub, Mexico, triggering global wildfires, acid rain, and a decade-long impact winter that wipes out 75% of species including non-avian dinosaurs.',
    atmosphere: 'Sulfate Aerosol Dark Haze',
    temperature: 'Rapid Global Cooling then Severe Thermal Pulse',
    lifeStatus: '75% Species Extinct',
    sourceUrl: 'https://science.nasa.gov/earth/facts/'
  },
  {
    id: 't-9',
    time: '50 MYA',
    title: 'Cenozoic Mammalian Diversification',
    badge: 'CENOZOIC ERA',
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80',
    description: 'Mammals adaptive radiation fills vacant ecological niches across grasslands, forests, and oceans (whales evolve from terrestrial ungulates).',
    atmosphere: 'Modern Atmospheric Composition',
    temperature: 'Thermal Peak then Slow Glacial Cooling',
    lifeStatus: 'Mammals & Flowering Plants',
    sourceUrl: 'https://pubs.usgs.gov/gip/geotime/age.html'
  },
  {
    id: 't-10',
    time: '300 KYA',
    title: 'Emergence of Anatomically Modern Humans',
    badge: 'PLEISTOCENE EPOCH',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    description: 'Homo sapiens evolves in Africa during Quaternary glacial cycles, utilizing language, toolmaking, and fire.',
    atmosphere: '78% N₂, 21% O₂, 0.03% CO₂',
    temperature: 'Glacial-Interglacial Cycles',
    lifeStatus: 'Homo Sapiens & Ice Age Megafauna',
    sourceUrl: 'https://pubs.usgs.gov/gip/geotime/age.html'
  },
  {
    id: 't-11',
    time: 'TODAY',
    title: 'Modern Anthropocene Technological Era',
    badge: 'HOLOCENE / ANTHROPOCENE',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
    description: '8 billion humans inhabit a globally connected biosphere monitored by space satellites and digital observation networks.',
    atmosphere: '78% N₂, 21% O₂, 0.042% CO₂',
    temperature: 'Mean Global Temp ~15°C',
    lifeStatus: 'Global Biosphere & Human Civilization',
    sourceUrl: 'https://science.nasa.gov/earth/facts/'
  }
];

export const EarthTimelineSlider: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(10);

  const currentStage = TIMELINE_STAGES[activeStageIndex];

  return (
    <div className="space-y-10">
      
      {/* 🕰️ SECTION 1: MOVE EARTH THROUGH TIME SLIDER */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300">
              <Clock className="w-3.5 h-3.5 text-purple-500" />
              <span>4.54 BILLION YEARS IN 60 SECONDS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Move Earth Through Time Timeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Drag the timeline slider to travel from molten Hadean protoplanet formation to modern satellite Earth.
            </p>
          </div>
          <span className="text-xs font-mono text-purple-400 font-bold bg-purple-500/10 px-3 py-1.5 rounded-xl border border-purple-500/30">
            Selected Era: {currentStage.time}
          </span>
        </div>

        {/* Range Slider */}
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-purple-400 font-bold">
            <span>4.54 Billion Years Ago</span>
            <span>{currentStage.time}</span>
            <span>Today</span>
          </div>

          <input
            type="range"
            min={0}
            max={TIMELINE_STAGES.length - 1}
            value={activeStageIndex}
            onChange={(e) => setActiveStageIndex(parseInt(e.target.value))}
            className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />

          <div className="flex flex-wrap gap-1.5 pt-2">
            {TIMELINE_STAGES.map((st, i) => (
              <button
                key={st.id}
                onClick={() => setActiveStageIndex(i)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all ${
                  activeStageIndex === i
                    ? 'bg-purple-600 text-white font-bold shadow-md'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-white'
                }`}
              >
                {st.time}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Stage Detail Display */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-950 text-white space-y-6 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-purple-500 text-white font-mono font-extrabold text-xs px-3 py-1 rounded-full">
                  {currentStage.badge}
                </span>
                <span className="text-purple-400 font-mono text-xs font-bold">{currentStage.time}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                {currentStage.title}
              </h3>

              <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                {currentStage.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-semibold">Atmosphere</span>
                  <div className="font-bold text-purple-300">{currentStage.atmosphere}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-semibold">Temperature</span>
                  <div className="font-bold text-amber-400">{currentStage.temperature}</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase font-semibold">Biosphere State</span>
                  <div className="font-bold text-emerald-400">{currentStage.lifeStatus}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src={currentStage.image}
                  alt={currentStage.title}
                  className="w-full h-60 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-slate-300 bg-slate-950/80 p-2 rounded-lg border border-white/10 truncate">
                  📷 NASA Paleoclimate Reconstruction
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🦖 SECTION 2: EARTH HAS CHANGED COMPLETELY SPLIT-SCREEN */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>THE 4.5-BILLION-YEAR STORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Earth Has Changed Completely
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              The Earth you see today is only one single frame in a 4.5-billion-year cosmic evolution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          
          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 text-white space-y-3">
            <span className="text-amber-400 font-bold block text-sm">4.5 BILLION YRS AGO</span>
            <div className="text-xs font-bold text-amber-300 font-display">Molten Magma Surface</div>
            <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
              No liquid oceans, constant asteroid bombardments, and incandescent magma lava oceans.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 text-white space-y-3">
            <span className="text-cyan-400 font-bold block text-sm">3.8 BILLION YRS AGO</span>
            <div className="text-xs font-bold text-cyan-300 font-display">Early Oceans & Life</div>
            <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
              Steam condenses into early hot oceans; hydrothermal vents host first anaerobic microbes.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 text-white space-y-3">
            <span className="text-purple-400 font-bold block text-sm">250 MILLION YRS AGO</span>
            <div className="text-xs font-bold text-purple-300 font-display">Pangaea Supercontinent</div>
            <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
              All landmasses assembled into Pangaea surrounded by single ocean Panthalassa.
            </p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 text-white space-y-3">
            <span className="text-emerald-400 font-bold block text-sm">TODAY</span>
            <div className="text-xs font-bold text-emerald-300 font-display">Modern Satellite Earth</div>
            <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
              Seven continents, blue global oceans, 21% oxygen atmosphere, and human spaceflight.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
