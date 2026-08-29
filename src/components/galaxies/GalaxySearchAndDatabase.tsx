import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { COMPREHENSIVE_GALAXIES_DATABASE } from '../../data/galaxiesAtlasData';
import type { ComprehensiveGalaxy } from '../../data/galaxiesAtlasData';

export const GalaxySearchAndDatabase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGalaxyModal, setSelectedGalaxyModal] = useState<ComprehensiveGalaxy | null>(null);

  const filteredCatalog = COMPREHENSIVE_GALAXIES_DATABASE.filter((g) => {
    const q = searchQuery.toLowerCase();
    return (
      g.name.toLowerCase().includes(q) ||
      g.type.toLowerCase().includes(q) ||
      g.constellation.toLowerCase().includes(q) ||
      g.catalogNames.some(c => c.toLowerCase().includes(q)) ||
      (g.blackHole && g.blackHole.name.toLowerCase().includes(q))
    );
  });

  return (
    <section id="galaxy-search" className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-[#020616] space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            SECTIONS 77 & 78 · GLOBAL GALAXY SEARCH & DATABASE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-2 mt-1">
            <Search className="w-6 h-6 text-cyan-400" />
            <span>EXTRAGALACTIC DATABASE SEARCH</span>
          </h2>
        </div>

        <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-xl border border-cyan-500/30">
          Catalog Entries: {COMPREHENSIVE_GALAXIES_DATABASE.length} Records
        </span>
      </div>

      {/* Global Search Bar Input */}
      <div className="relative">
        <Search className="w-5 h-5 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by Messier ID, NGC number, galaxy type, black hole, constellation..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950 border border-cyan-500/40 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-all placeholder:text-slate-500"
        />
      </div>

      {/* Search Database Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/80">
        <table className="w-full text-left font-mono text-xs">
          <thead className="bg-slate-900 border-b border-white/10 text-cyan-400 text-[11px]">
            <tr>
              <th className="p-3.5">Galaxy Name</th>
              <th className="p-3.5">Type & Subtype</th>
              <th className="p-3.5">Distance</th>
              <th className="p-3.5">Diameter</th>
              <th className="p-3.5">Supermassive Black Hole</th>
              <th className="p-3.5">Telemetry</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-300">
            {filteredCatalog.map((galaxy) => (
              <tr key={galaxy.id} className="hover:bg-cyan-950/20 transition-colors">
                <td className="p-3.5 font-bold text-white flex items-center gap-2">
                  <span>{galaxy.name}</span>
                </td>
                <td className="p-3.5">
                  <span className="bg-cyan-500/10 text-cyan-300 px-2.5 py-0.5 rounded border border-cyan-500/30 text-[10px]">
                    {galaxy.type}
                  </span>
                </td>
                <td className="p-3.5 text-slate-300">{galaxy.distance}</td>
                <td className="p-3.5 text-slate-300">{galaxy.diameter}</td>
                <td className="p-3.5 text-emerald-300 font-bold">
                  {galaxy.blackHole ? galaxy.blackHole.name : <span className="text-slate-500 font-normal">None / Unconfirmed</span>}
                </td>
                <td className="p-3.5">
                  <button
                    onClick={() => setSelectedGalaxyModal(galaxy)}
                    className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 text-[11px] font-bold transition-all cursor-pointer"
                  >
                    Inspect Records
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Galaxy Detail Modal */}
      {selectedGalaxyModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-6 rounded-3xl border border-cyan-500/40 bg-[#03081c] max-w-2xl w-full space-y-4 max-h-[90vh] overflow-y-auto custom-scrollbar relative text-white font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] text-cyan-400 font-bold uppercase">{selectedGalaxyModal.type} GALAXY RECORD</span>
                <h3 className="text-2xl font-display font-bold text-white">{selectedGalaxyModal.name}</h3>
              </div>
              <button
                onClick={() => setSelectedGalaxyModal(null)}
                className="px-3 py-1 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-white/10"
              >
                Close ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900 p-3 rounded-xl border border-white/5">Catalog Names: <strong className="text-white block">{selectedGalaxyModal.catalogNames.join(', ')}</strong></div>
              <div className="bg-slate-900 p-3 rounded-xl border border-white/5">Distance: <strong className="text-cyan-300 block">{selectedGalaxyModal.distance}</strong></div>
              <div className="bg-slate-900 p-3 rounded-xl border border-white/5">Diameter: <strong className="text-amber-300 block">{selectedGalaxyModal.diameter}</strong></div>
              <div className="bg-slate-900 p-3 rounded-xl border border-white/5">Star Formation Rate: <strong className="text-emerald-300 block">{selectedGalaxyModal.starFormationRate}</strong></div>
              <div className="bg-slate-900 p-3 rounded-xl border border-white/5">Stellar Mass: <strong className="text-purple-300 block">{selectedGalaxyModal.stellarMass}</strong></div>
              <div className="bg-slate-900 p-3 rounded-xl border border-white/5">Total Mass (Inc. Dark Matter): <strong className="text-cyan-300 block">{selectedGalaxyModal.totalMass}</strong></div>
            </div>

            {selectedGalaxyModal.blackHole && (
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
                <span className="text-emerald-400 font-bold uppercase text-[10px]">Central Black Hole Telemetry:</span>
                <div className="text-white font-bold">{selectedGalaxyModal.blackHole.name} ({selectedGalaxyModal.blackHole.mass})</div>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
