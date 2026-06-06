import { FileText } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="bg-nordic-bg py-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-font text-3xl font-bold text-nordic-text mb-2 pb-2">
          Publications & Résultats Scientifiques
        </h2>
        <p className="text-zinc-600 mb-10">Articles, rapports de séjour, posters et présentations avec visualisations interactives</p>

        <div className="space-y-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
            <div className="bg-nordic-sage text-white px-6 py-3 font-bold text-lg">
              2023 · JAMA06 · Apport de la modélisation dynamique à la prévision des inondations
            </div>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-lg font-medium text-nordic-text mb-2">Modèle HYPE · Bassin versant du Côtier Algérois · 11 sous-bassins · 12 SLC</p>
                <p className="text-sm text-zinc-500 mb-6">Calibration: 11 ans (1985-1995) · Validation: Crue 06 Mars 1985 · Station Mazafran</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                   <div className="bg-nordic-sage text-white p-4 rounded-xl flex-1 min-w-[140px] shadow-sm">
                      <div className="text-xs font-bold uppercase opacity-90 mb-1 tracking-wide">NSE Mazafran</div>
                      <div className="text-4xl font-extrabold tracking-tight">0.58</div>
                   </div>
                   <div className="bg-nordic-sage text-white p-4 rounded-xl flex-1 min-w-[140px] shadow-sm">
                      <div className="text-xs font-bold uppercase opacity-90 mb-1 tracking-wide">NSE El-Harrach</div>
                      <div className="text-4xl font-extrabold tracking-tight">0.50</div>
                   </div>
                   <div className="bg-nordic-terra text-white p-4 rounded-xl flex-1 min-w-[140px] shadow-sm">
                      <div className="text-xs font-bold uppercase opacity-90 mb-1 tracking-wide">Débit obs.</div>
                      <div className="text-4xl font-extrabold tracking-tight">129.2 <span className="text-lg font-bold text-white/80">m³/s</span></div>
                   </div>
                   <div className="bg-zinc-600 text-white p-4 rounded-xl flex-1 min-w-[140px] shadow-sm">
                      <div className="text-xs font-bold uppercase opacity-90 mb-1 tracking-wide">Débit sim.</div>
                      <div className="text-4xl font-extrabold tracking-tight">70 <span className="text-lg font-bold text-white/80">m³/s</span></div>
                   </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-medium">
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Lire l'article PDF</span>
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Voir les cartes SLC</span>
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Voir le poster</span>
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Présentation mémoire</span>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-zinc-50 rounded-xl p-5 flex flex-col items-center justify-center border border-zinc-100">
                <p className="text-xs text-zinc-400 mb-6 uppercase tracking-wider font-semibold">Station Mazafran 1986-1995</p>
                <div className="w-full h-32 border-b border-l border-zinc-300 relative flex items-end ml-4 mb-4">
                   {/* mock line chart */}
                   <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polyline points="0,95 20,95 25,20 30,50 40,95 50,110 55,90 60,60 70,95 100,95" fill="none" stroke="#059669" strokeWidth="1.5"/>
                      <polyline points="0,95 21,95 25,10 30,40 40,90 50,120 57,80 60,55 70,95 100,95" fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3"/>
                   </svg>
                </div>
                <div className="flex gap-4 mt-2 text-[10px] text-zinc-500 font-semibold">
                  <span className="flex items-center gap-1.5"><span className="w-4 h-[2px] bg-nordic-terra"></span> Débit observé</span>
                  <span className="flex items-center gap-1.5"><span className="w-4 h-[2px] bg-nordic-sage"></span> Débit simulé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
            <div className="bg-nordic-terra text-white px-6 py-3 font-bold text-lg">
              2021 · ACCORD NL01 · Testing visibility diagnostics in AROME at high resolution
            </div>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-lg font-medium text-nordic-text mb-6">AROME CY46T1 · Résolutions 1.3km & 0.5km · 90 niveaux · Domaine Alger DAAG</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                   <div className="bg-nordic-sage text-white p-4 rounded-xl flex-1 min-w-[140px]">
                      <div className="text-xs font-bold uppercase opacity-90 mb-1 tracking-wide">PC AROME 1.3</div>
                      <div className="text-4xl font-extrabold tracking-tight">79.02%</div>
                   </div>
                   <div className="bg-nordic-sage text-white p-4 rounded-xl flex-1 min-w-[140px]">
                      <div className="text-xs font-bold uppercase opacity-90 mb-1 tracking-wide">PC AROME 0.5</div>
                      <div className="text-4xl font-extrabold tracking-tight">77.29%</div>
                   </div>
                   <div className="bg-nordic-terra text-white p-4 rounded-xl flex-1 min-w-[140px]">
                      <div className="text-xs font-bold uppercase opacity-90 mb-1 tracking-wide">POD 1.3km</div>
                      <div className="text-4xl font-extrabold tracking-tight">0.47</div>
                   </div>
                   <div className="bg-nordic-terra text-white p-4 rounded-xl flex-1 min-w-[140px]">
                      <div className="text-xs font-bold uppercase opacity-90 mb-1 tracking-wide">POD 0.5km</div>
                      <div className="text-4xl font-extrabold tracking-tight">0.53</div>
                   </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-medium">
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Lire l'article</span>
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Cartes visibilité</span>
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Tables contingence</span>
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Animations</span>
                </div>
              </div>

              {/* Grid Placeholder */}
              <div className="flex items-center justify-end gap-3 flex-wrap">
                 {[1,2,3].map((g) => (
                    <div key={g} className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 flex flex-col items-center shadow-sm">
                       <div className="grid grid-cols-4 gap-2 opacity-60 mb-3">
                           {Array.from({length: 16}).map((_, i) => (
                              <div key={i} className={`w-3.5 h-3.5 rounded-full ${i%3===0?'bg-nordic-terra':i%2===0?'bg-nordic-sage':'bg-blue-300'}`}></div>
                           ))}
                       </div>
                       <span className="text-[10px] uppercase text-zinc-500 font-bold">{g===1 ? 'AROME 1.3' : g===2 ? 'AROME 0.5' : 'Diff'}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
            <div className="bg-zinc-600 text-white px-6 py-3 font-bold text-lg">
              2024 · LIMA Visibility · Calcul des Visibilités avec le schéma LIMA
            </div>
            <div className="p-6">
                <p className="text-lg font-medium text-nordic-text mb-2">AROME CY48T1 · Schéma double moment LIMA · Initialisation aérosols CAMS · Brouillard chaud</p>
                <p className="text-sm text-zinc-500 mb-6">3 configurations: AROME_ICE3 | AROME_LIMA | AROME_INIT (CAMS + nouvelle formule)</p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-medium">
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Rapport technique</span>
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Comparaisons visibilités</span>
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> RMSE T2m/RH2m</span>
                  <span className="flex items-center gap-1.5 hover:text-nordic-text cursor-pointer transition-colors"><FileText size={16}/> Cas 1-3 Jan 2022</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
