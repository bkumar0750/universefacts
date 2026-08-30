import { ShieldCheck, HelpCircle, BookOpen, Globe, Rocket, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const sourceHierarchy = [
    { rank: 1, agency: 'NASA (National Aeronautics and Space Administration)', role: 'Primary ephemeris, exoplanet catalog, mission data, and astronomical imagery.', icon: '🚀' },
    { rank: 2, agency: 'ISRO (Indian Space Research Organisation)', role: 'Chandrayaan-3 south pole lunar data, Aditya-L1 solar observations, MOM Mars imagery.', icon: '🛰️' },
    { rank: 3, agency: 'ESA (European Space Agency)', role: 'Planck CMB cosmic radiation data, Gaia astrometry star census, JUICE mission.', icon: '🌍' },
    { rank: 4, agency: 'JAXA (Japan Aerospace Exploration Agency)', role: 'Hayabusa2 asteroid sample data & solar sails.', icon: '☄️' },
    { rank: 5, agency: 'NOAA & USGS', role: 'Geophysical, geomagnetism, and Earth surface remote sensing data.', icon: '🌐' },
    { rank: 6, agency: 'Peer-Reviewed Scientific Literature', role: 'Nature Astronomy, Astrophysical Journal, Physical Review Letters, arXiv.', icon: '📚' }
  ];

  const accuracyBadges = [
    { label: '[Observed]', desc: 'Direct telescope imagery or in-situ rover detection.', color: 'cyan' },
    { label: '[Measured]', desc: 'Precise telemetry, radiometric, or gravitational measurement.', color: 'emerald' },
    { label: '[Estimated]', desc: 'Calculated within statistical error bounds (e.g. star counts).', color: 'amber' },
    { label: '[Hypothesis]', desc: 'Theoretical mathematical physics model.', color: 'purple' },
  ];

  return (
    <div className="space-y-12 pb-12">
      
      {/* Header */}
      <div className="space-y-4 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>MISSION & RIGOR DISCLOSURE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          About universefact
        </h1>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-sans max-w-3xl leading-relaxed">
          "universefact is an educational platform designed to make humanity's knowledge of the cosmos easier to explore, combining cinematic aesthetics with rigorous scientific sourcing."
        </p>
      </div>

      {/* Mission Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up delay-100">
        {[
          { icon: BookOpen, title: 'Scientific Accuracy', desc: 'Zero fabrication. All data sourced from verified agencies and peer-reviewed journals.', color: 'cyan' },
          { icon: Globe, title: 'Interactive & Immersive', desc: 'Real-time 3D visualizations, live NASA API feeds, and interactive simulations.', color: 'violet' },
          { icon: Rocket, title: 'Always Up-to-Date', desc: 'Mission data, exoplanet discoveries, and cosmological constants updated regularly.', color: 'amber' },
        ].map((card, i) => (
          <div key={i} className={`glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 animate-fade-in-up`} style={{ animationDelay: `${i * 100}ms` }}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              card.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' :
              card.color === 'violet' ? 'bg-violet-500/10 text-violet-600 dark:text-violet-400' :
              'bg-amber-500/10 text-amber-600 dark:text-amber-400'
            }`}>
              <card.icon className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">{card.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* SCIENTIFIC ACCURACY SECTION */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-5 animate-fade-in-up delay-200">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Scientific Sourcing & Integrity Principles</span>
        </h2>

        <p className="text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
          We strictly adhere to zero-fabrication guidelines. Measurements, physical parameters, orbital distances, and mission discoveries are sourced from verified space agencies and peer-reviewed journals. Speculative theoretical models (such as the Multiverse) are explicitly labeled as hypotheses.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          {accuracyBadges.map((b) => (
            <div key={b.label} className={`p-3 rounded-xl space-y-1 ${
              b.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300' :
              b.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300' :
              b.color === 'amber' ? 'bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300' :
              'bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300'
            }`}>
              <strong className="block">{b.label}</strong>
              <span className="text-[11px] leading-relaxed block text-current/80">{b.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SOURCE HIERARCHY */}
      <section className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6 animate-fade-in-up delay-300">
        <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white">
          Institutional Source Priority Hierarchy
        </h2>

        <div className="space-y-3">
          {sourceHierarchy.map((src, i) => (
            <div key={src.rank} className={`glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 flex items-start gap-4 text-xs font-sans glass-panel-hover animate-fade-in-up`} style={{ animationDelay: `${i * 60}ms` }}>
              <span className="w-9 h-9 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-700 dark:text-cyan-300 font-mono font-bold flex items-center justify-center shrink-0 text-sm">
                {src.icon}
              </span>
              <div>
                <strong className="text-slate-900 dark:text-white text-sm block font-display font-semibold">{src.agency}</strong>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">{src.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT & QUERIES BOX */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/30 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-purple-500/5 space-y-4 animate-fade-in-up">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-300">
              <Mail className="w-4 h-4 text-cyan-500" />
              <span>SEND ANY QUERY</span>
            </div>
            <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
              Questions or Data Corrections?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-xl">
              We welcome all scientific inquiries, feedback, and educational collaboration requests. Contact us directly at <strong className="font-mono text-cyan-600 dark:text-cyan-300">imbhuvi91@gmail.com</strong> or visit our Contact Us page.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-all shadow-md self-start sm:self-auto shrink-0"
          >
            <span>Go to Contact Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};
