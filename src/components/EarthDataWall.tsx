import React, { useState } from 'react';
import { Table, ExternalLink, Globe, HeartHandshake, ChevronRight, Droplets, Sun, Wind, TestTube, Shield, Mountain, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DataMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  category: string;
  explanation: string;
  source: string;
  sourceUrl: string;
}

const EARTH_METRICS: DataMetric[] = [
  {
    id: 'm-1',
    label: 'Equatorial Diameter',
    value: '12,756 km',
    unit: 'Kilometers (7,926 miles)',
    category: 'Physical Dimension',
    explanation: 'Measured via satellite altimetry. Earth equatorial diameter is 43 km wider than its polar diameter (12,714 km) due to rotational centrifugal force.',
    source: 'NASA Earth Facts',
    sourceUrl: 'https://science.nasa.gov/earth/facts/'
  },
  {
    id: 'm-2',
    label: 'Planetary Mass',
    value: '5.972 × 10²⁴ kg',
    unit: 'Kilograms (5.97 Sextillion Tonnes)',
    category: 'Mass & Density',
    explanation: 'Calculated using Cavendish gravitational constant experiments and orbital satellite mechanics ($G \cdot M$). Earth is the densest planet in the Solar System (5.514 g/cm³).',
    source: 'NASA Earth Facts',
    sourceUrl: 'https://science.nasa.gov/earth/facts/'
  },
  {
    id: 'm-3',
    label: 'Surface Gravity',
    value: '9.80665 m/s²',
    unit: 'Standard Gravity ($1.0\,g$)',
    category: 'Gravitational Field',
    explanation: 'Standard acceleration due to gravity at sea level. Varies slightly from 9.78 m/s² at the equator to 9.83 m/s² at the poles.',
    source: 'USGS Geophysics',
    sourceUrl: 'https://pubs.usgs.gov/gip/geotime/age.html'
  },
  {
    id: 'm-4',
    label: 'Axial Tilt (Obliquity)',
    value: '23.44°',
    unit: 'Degrees from Orbital Perpendicular',
    category: 'Rotational Orientation',
    explanation: 'Responsible for Earth seasons. Obliquity wobbles between 22.1° and 24.5° over a 41,000-year Milankovitch cycle.',
    source: 'NASA Climate Science',
    sourceUrl: 'https://science.nasa.gov/science-research/earth-science/milankovitch-orbital-cycles-and-their-role-in-earths-climate/'
  },
  {
    id: 'm-5',
    label: 'Mean Sun Distance',
    value: '149.6 Million km',
    unit: '1 Astronomical Unit (AU)',
    category: 'Solar Orbit',
    explanation: 'Average distance between Earth and Sun centers. Light takes ~8 minutes 20 seconds (501 seconds) to travel this distance.',
    source: 'NASA Earth Facts',
    sourceUrl: 'https://science.nasa.gov/earth/facts/'
  },
  {
    id: 'm-6',
    label: 'Mean Moon Distance',
    value: '384,400 km',
    unit: 'Kilometers (~30 Earth Diameters)',
    category: 'Lunar Orbit',
    explanation: 'Average Earth-Moon distance measured by Lunar Laser Ranging. Recedes outward by ~3.8 cm per year due to tidal friction.',
    source: 'ESA Earth Observation',
    sourceUrl: 'https://www.esa.int/Applications/Observing_the_Earth/10_remarkable_facts_about_Earth'
  },
  {
    id: 'm-7',
    label: 'Orbital Period (Year)',
    value: '365.256 days',
    unit: '1 Sidereal Year',
    category: 'Solar Orbit',
    explanation: 'Time taken for Earth to complete one full orbit around the Sun relative to distant background stars.',
    source: 'NASA Earth Facts',
    sourceUrl: 'https://science.nasa.gov/earth/facts/'
  },
  {
    id: 'm-8',
    label: 'Sidereal Rotation Day',
    value: '23h 56m 4.09s',
    unit: 'Sidereal Hours',
    category: 'Rotational Telemetry',
    explanation: 'Earth true rotation speed relative to distant stars. Solar day takes 24h because Earth advances ~1° along its orbit daily.',
    source: 'NASA Earth Facts',
    sourceUrl: 'https://science.nasa.gov/earth/facts/'
  }
];

interface LifeSupportPoint {
  title: string;
  icon: React.ReactNode;
  whatItIs: string;
  whyItMatters: string;
  evidence: string;
  unknowns: string;
}

const LIFE_SUPPORT_MATRIX: LifeSupportPoint[] = [
  {
    title: 'Liquid Water Reservoir',
    icon: <Droplets className="w-5 h-5 text-cyan-500" />,
    whatItIs: '1.39 billion km³ of global ocean water sitting at Earth triple point temperature range.',
    whyItMatters: 'Serves as universal biological solvent, biochemical transport medium, and climate temperature stabilizer.',
    evidence: 'Isotopic ratios in ancient zircons confirm liquid oceans existed 4.4 billion years ago.',
    unknowns: 'Exact proportion of water delivered by cometary impacts versus primordial mantle outgassing.'
  },
  {
    title: 'Stable Energy Source',
    icon: <Sun className="w-5 h-5 text-amber-500" />,
    whatItIs: 'Continuous solar flux at 1 AU distance ($1,361\,\text{W/m}^2$) plus mantle geothermal radiogenic heat.',
    whyItMatters: 'Powers photosynthetic primary production ($CO_2 \rightarrow O_2$) and ocean hydrothermal chemosynthesis.',
    evidence: '3.5 billion year old stromatolite fossils prove continuous solar energy utilization.',
    unknowns: 'How early life survived during the Faint Young Sun era when solar output was 30% dimmer.'
  },
  {
    title: 'Protective Atmosphere',
    icon: <Wind className="w-5 h-5 text-indigo-400" />,
    whatItIs: '78% Nitrogen, 21% Oxygen, and trace greenhouse gases bound by 1g surface gravity.',
    whyItMatters: 'Provides $O_2$ respiration, $CO_2$ carbon fixation, surface pressure, and UV ozone shielding.',
    evidence: 'Ice core gas bubbles record atmospheric evolution back 800,000 years.',
    unknowns: 'Exact tipping points governing atmospheric oxygen stability over multi-million year timescales.'
  },
  {
    title: 'Carbon Chemistry Environment',
    icon: <TestTube className="w-5 h-5 text-emerald-500" />,
    whatItIs: 'Abundant tetravalent carbon bonding with $H, O, N, P, S$ across surface reservoirs.',
    whyItMatters: 'Carbon forms stable complex organic polymer chains (DNA, RNA, proteins, lipids).',
    evidence: 'Organic carbon isotope ratios ($^{13}C/^{12}C$) preserved in ancient metamorphic rocks.',
    unknowns: 'Whether alternative non-carbon biochemistries (e.g. silicon) could function under extreme conditions.'
  },
  {
    title: 'Geodynamo Magnetic Shield',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    whatItIs: 'Magnetosphere generated by convection in Earth liquid metal outer core.',
    whyItMatters: 'Deflects energetic solar wind particles that would otherwise strip atmospheric water.',
    evidence: 'Paleomagnetic basalt striping proves magnetic shield has operated for over 3.5 billion years.',
    unknowns: 'Frequency and exact core fluid dynamics driving geomagnetic polarity reversals.'
  },
  {
    title: 'Active Geological Cycling',
    icon: <Mountain className="w-5 h-5 text-amber-600" />,
    whatItIs: 'Plate tectonics continuously recycling crustal rocks, minerals, and carbon.',
    whyItMatters: 'Prevents runaway greenhouse heating by sequestering atmospheric carbon into oceanic limestone.',
    evidence: 'Seismic wave tomography maps subducting oceanic slabs entering the deep mantle.',
    unknowns: 'When plate tectonics officially initiated on early Earth (estimates range from 4.0B to 2.5B yrs ago).'
  },
  {
    title: 'Long-Term Environment Stability',
    icon: <Compass className="w-5 h-5 text-blue-400" />,
    whatItIs: 'The Moon gravitational stabilization of Earth 23.4° axial tilt over planetary timescales.',
    whyItMatters: 'Prevents chaotic obliquity wobbles (0° to 85°), preserving habitability for billions of years.',
    evidence: 'Computer simulations demonstrate wild tilt instability in Moon-less Earth models.',
    unknowns: 'How stable planetary habitability remains during future solar luminosity increases.'
  }
];

export const EarthDataWall: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMetric, setSelectedMetric] = useState<DataMetric | null>(null);

  return (
    <div className="space-y-12">
      
      {/* 🌐 SECTION 1: EARTH DATA WALL */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
              <Table className="w-3.5 h-3.5 text-cyan-500" />
              <span>INTERACTIVE DATA WALL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Earth Baseline Physical Measurements
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              Click any metric below to inspect scientific methodology, orbital telemetry, and agency sources.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          {EARTH_METRICS.map((metric) => (
            <button
              key={metric.id}
              onClick={() => setSelectedMetric(metric)}
              className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 hover:border-cyan-500/50 transition-all text-left space-y-1.5 shadow-sm group"
            >
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase block truncate">
                {metric.label}
              </span>
              <div className="text-lg font-extrabold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {metric.value}
              </div>
              <span className="text-[10px] text-cyan-700 dark:text-cyan-300 font-semibold block truncate">
                {metric.unit}
              </span>
            </button>
          ))}
        </div>

        {/* Modal / Inspection Box */}
        {selectedMetric && (
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/40 bg-slate-950 text-white space-y-4 animate-fade-in-up shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">{selectedMetric.category}</span>
                <h3 className="text-xl font-display font-extrabold text-white">{selectedMetric.label}: {selectedMetric.value}</h3>
              </div>
              <button
                onClick={() => setSelectedMetric(null)}
                className="text-slate-400 hover:text-white font-mono text-xs p-1"
              >
                ✕ Close
              </button>
            </div>

            <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
              {selectedMetric.explanation}
            </p>

            <div className="flex justify-end pt-2">
              <a
                href={selectedMetric.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-cyan-300 hover:underline font-bold"
              >
                <span>Source: {selectedMetric.source}</span>
                <ExternalLink className="w-3 h-3 text-cyan-400" />
              </a>
            </div>
          </div>
        )}
      </section>

      {/* 🧬 SECTION 2: WHY EARTH CAN SUPPORT LIFE MATRIX */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span>EVIDENCE-BASED ASTROBIOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              Why Earth Can Support Life — 7 Core Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans mt-0.5">
              An evidence-based scientific breakdown of physical, chemical, and astronomical habitability factors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIFE_SUPPORT_MATRIX.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-4 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-2 text-xs font-sans">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 font-bold uppercase block">WHAT IT IS</span>
                    <p className="text-slate-700 dark:text-slate-300">{item.whatItIs}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase block">WHY IT MATTERS</span>
                    <p className="text-slate-700 dark:text-slate-300">{item.whyItMatters}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-cyan-600 dark:text-cyan-400 font-bold uppercase block">EMPIRICAL EVIDENCE</span>
                    <p className="text-slate-700 dark:text-slate-300">{item.evidence}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase block">WHAT IS STILL UNKNOWN</span>
                    <p className="text-slate-700 dark:text-slate-300 italic">{item.unknowns}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ⭐ SECTION 3: BEAUTIFUL FINALE SECTION */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-cyan-500/30 bg-white/90 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 text-slate-900 dark:text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300">
          <HeartHandshake className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>UNIVERSEFACT EARTH EXPEDITION FINALE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-display font-black text-slate-900 dark:text-white leading-tight">
          After All That… This Is Home.
        </h2>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
          One planet. One known biosphere. One thin atmosphere protecting billions of lives. One small world moving through an enormous, mysterious universe.
        </p>

        <div className="pt-4 flex justify-center">
          <button
            onClick={() => navigate('/planets')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-mono font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 text-white hover:from-cyan-500 hover:to-indigo-500 transition-all shadow-xl hover:scale-105"
          >
            <span>CONTINUE OUTWARD → EXPLORE PLANETS & SOLAR SYSTEM</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
