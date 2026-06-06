import { FileText } from "lucide-react";

const stays = [
  {
    year: "Mai–Juin 2024",
    badge: "2024",
    badgeColor: "bg-nordic-sage",
    institution: "CNRM/GMAP · Météo-France",
    title: "Towards a more portable EPyGrAM",
    location: "Toulouse, France · Alexandre Mary",
    report: "/docs/falfilfa/CHIKHI_stay_report_28May_07Jun_corr.pdf",
    reportLabel: "Rapport PDF",
  },
  {
    year: "Fév. 2023",
    badge: "2023",
    badgeColor: "bg-nordic-terra",
    institution: "CNRM/GMAP · Météo-France",
    title: "Externalisation FALFILFA de IAL (ACCORD Consortium)",
    location: "Toulouse, France · Reyad El Khatib · Alexandre Mary",
    report: "/docs/falfilfa/stay_report_CHIKHI_Feb2023.pdf",
    reportLabel: "Rapport PDF",
  },
];

export default function ScientificStays() {
  return (
    <section className="bg-nordic-bg py-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-font text-3xl font-bold text-nordic-text mb-2 border-b-4 border-nordic-sage inline-block pb-2">
          Séjours Scientifiques
        </h2>

        <div className="mt-8 space-y-4 max-w-5xl">
          {stays.map((stay, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className={`${stay.badgeColor} text-white px-4 py-2 rounded-lg font-bold text-sm w-fit shadow-sm`}>
                  {stay.badge}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-zinc-400 tracking-wider uppercase mb-1">
                    {stay.institution}
                  </h3>
                  <h4 className="text-xl font-bold text-nordic-text mb-1">{stay.title}</h4>
                  <p className="text-sm text-zinc-500 font-medium">{stay.location}</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a
                  href={stay.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-nordic-terra text-nordic-terra px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide flex items-center gap-2 hover:bg-nordic-terra hover:text-white transition-colors w-full sm:w-auto justify-center shadow-sm"
                >
                  <FileText size={18} /> {stay.reportLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
