import React, { useState } from 'react';
import { Disc, ZoomIn, AlertTriangle, ShieldCheck } from 'lucide-react';

interface ZoomLevel {
  id: string;
  title: string;
  scale: string;
  massScale: string;
  image: string;
  description: string;
  scientificFact: string;
}

const ZOOM_LEVELS: ZoomLevel[] = [
  {
    id: 'galaxy',
    title: '1. ENTIRE GALAXY DISK',
    scale: '100,000 Light-Years across',
    massScale: '~1 Trillion Solar Masses (Stars + Dark Matter)',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
    description: 'The galaxy is an enormous gravitational system spanning over 100,000 light-years containing hundreds of billions of stars, interstellar gas clouds, and dark matter halos.',
    scientificFact: 'The galaxy is NOT a black hole. Stars orbit the total mass of the galaxy, not just the central black hole.'
  },
  {
    id: 'bulge',
    title: '2. CENTRAL GALACTIC BULGE',
    scale: '10,000 Light-Years across',
    massScale: '~20 Billion Solar Masses (Old Population II Stars)',
    image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
    description: 'A spherical, tightly packed stellar hub dominated by ancient red giant stars orbiting in randomized 3D directions.',
    scientificFact: 'Stellar density in the galactic bulge is thousands of times higher than in our solar neighborhood.'
  },
  {
    id: 'smbh',
    title: '3. SUPERMASSIVE BLACK HOLE',
    scale: '0.1 Astronomical Units (Event Horizon ~24 Million km)',
    massScale: '4.15 Million Solar Masses (Sagittarius A*)',
    image: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    description: 'A compact gravitational singularity in space-time occupying a tiny fraction of the core radius.',
    scientificFact: 'Sagittarius A* has a mass of 4.15 million Suns, but its event horizon is smaller than Mercury’s orbit!'
  },
  {
    id: 'accretion-disk',
    title: '4. ACCRETION DISK & FRICTION',
    scale: '10 to 100 AU',
    massScale: 'Superheated Relativistic Plasma (Millions of K)',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    description: 'Interstellar gas spiraling inward experiences immense gravitational friction, glowing at millions of degrees in X-rays.',
    scientificFact: 'Accretion disks convert up to 40% of infalling mass into pure radiation energy (compared to 0.7% for nuclear fusion).'
  },
  {
    id: 'jet',
    title: '5. RELATIVISTIC GALACTIC JETS',
    scale: '5,000 to 100,000 Light-Years',
    massScale: 'Relativistic Particle Beams near light speed',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    description: 'Magnetic field lines channel plasma away from the event horizon poles, blasting jet columns across intergalactic space.',
    scientificFact: 'Active black holes like M87* (6.5 Billion M☉) launch 5,000 light-year jets out of their host galaxies!'
  }
];

export const BlackHoleToGalaxyZoom: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const step = ZOOM_LEVELS[activeStepIdx];

  return (
    <section id="black-hole-to-galaxy" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020516] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            EXPERIENCE 05 · SIGNATURE BLACK HOLE → GALAXY ZOOM
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Disc className="w-6 h-6 text-purple-400" />
            <span>BLACK HOLE vs GALAXY SCALE ZOOM</span>
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>NASA ASTROPHYSICS METRICS</span>
        </div>
      </div>

      {/* Critical Scientific Distinction Callout */}
      <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/40 text-xs sm:text-sm font-sans text-purple-100 leading-relaxed shadow-lg flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-purple-300 font-mono block mb-1">CRITICAL SCIENTIFIC DISTINCTION:</strong>
          "The central black hole is NOT the galaxy. It occupies an extremely tiny central region. Sagittarius A* is ~4 million solar masses, whereas the Milky Way galaxy disk contains over 100 billion stars and over 1 trillion solar masses of dark matter."
        </div>
      </div>

      {/* Interactive Zoom Level Tabs */}
      <div className="flex flex-wrap gap-2 pt-1">
        {ZOOM_LEVELS.map((z, idx) => (
          <button
            key={z.id}
            onClick={() => setActiveStepIdx(idx)}
            className={`px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              activeStepIdx === idx
                ? 'bg-purple-500/25 text-purple-200 border border-purple-400 font-bold scale-105 shadow-md'
                : 'bg-slate-900/80 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ZoomIn className="w-3.5 h-3.5 text-purple-400" />
            <span>{z.title}</span>
          </button>
        ))}
      </div>

      {/* Zoom Active Level Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        
        {/* Left Frame */}
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-purple-500/30 bg-slate-950 flex flex-col justify-end p-5 group min-h-[320px]">
          <img
            src={step.image}
            alt={step.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020516] via-[#020516]/40 to-transparent" />

          <div className="relative z-10 space-y-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-purple-500/20 border border-purple-500/40 text-purple-300 backdrop-blur-md">
              SPATIAL SCALE: {step.scale}
            </span>

            <h3 className="text-2xl font-display font-bold text-white">{step.title}</h3>
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="lg:col-span-6 space-y-4 font-mono text-xs flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">PHYSICAL PARAMETERS</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">{step.massScale}</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mt-2">
              {step.description}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-purple-500/30 text-xs font-sans space-y-1">
            <span className="text-amber-400 font-mono font-bold text-[10px] uppercase block">NASA VERIFIED SCIENTIFIC FACT:</span>
            <p className="text-slate-200">{step.scientificFact}</p>
          </div>
        </div>

      </div>

    </section>
  );
};
