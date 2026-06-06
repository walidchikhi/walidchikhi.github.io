import { FileText } from "lucide-react";

export default function ScientificStays() {
  return (
    <section className="bg-nordic-bg py-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-font text-3xl font-bold text-nordic-text mb-2 border-b-4 border-nordic-sage inline-block pb-2">
          Séjours Scientifiques
        </h2>

        <div className="mt-8 space-y-4 max-w-5xl">
           <div className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                 <div className="bg-nordic-sage text-white px-4 py-2 rounded-lg font-bold text-sm w-fit shadow-sm">
                    2024
                 </div>
                 <div>
                    <h3 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-1">CNRM/GMAP · Météo-France</h3>
                    <h4 className="text-xl font-bold text-nordic-text mb-1">Towards a more portable EPyGrAM</h4>
                    <p className="text-sm text-zinc-500 font-medium">Toulouse, France · Alexandre Mary · Mai-Juin 2024</p>
                 </div>
              </div>
              <div className="flex-shrink-0">
                 <a href="/docs/CHIKHI_stay_report_28May_07Jun_corr.pdf" target="_blank" rel="noopener noreferrer" className="bg-white border border-nordic-terra text-nordic-terra px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide flex items-center gap-2 hover:bg-nordic-terra hover:text-white transition-colors w-full sm:w-auto justify-center shadow-sm">
                    <FileText size={18}/> Rapport PDF
                 </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
