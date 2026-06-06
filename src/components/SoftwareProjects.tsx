import { ArrowRight, Box } from "lucide-react";

export default function SoftwareProjects() {
  const projects = [
    {
      title: "falfilfa4py",
      version: "v0.1.4",
      headerBg: "bg-nordic-sage",
      badge: "PyPI",
      badgeColor: "bg-emerald-100 text-emerald-700",
      desc: "Interface Python pour formats FA/LFI/LFA (ACCORD)",
      tags: "Python · Fortran · CMake · scikit-build · Docker manylinux2014",
      features: [
        "Wheel cross-platform",
        "Intégration EPyGrAM",
        "Docker manylinux2014"
      ]
    },
    {
      title: "EPyGrAM (Packaging)",
      version: "v1.5.1",
      headerBg: "bg-nordic-terra",
      badge: "PyPI",
      badgeColor: "bg-emerald-100 text-emerald-700",
      desc: "Mise en package PIP de la bibliothèque EPyGrAM (Enhanced Python for Graphics and Analysis)",
      tags: "Python · setuptools · src layout",
      features: [
        "PyPI distribution",
        "src layout architecture",
        "Pip installable"
      ]
    },
    {
      title: "FALFILFA",
      version: "Internal",
      headerBg: "bg-zinc-600",
      badge: "ACCORD",
      badgeColor: "bg-blue-100 text-blue-700",
      desc: "Externalisation du package FALFILFA de IAL (rendu installable avec CMake)",
      tags: "Fortran · CMake · ACCORD Consortium",
      features: [
        "CMake build",
        "Indépendant de IAL",
        "Utilisé par falfilfa4py"
      ]
    },
    {
      title: "PyTAPS",
      version: "Production",
      headerBg: "bg-purple-600",
      badge: "Internal",
      badgeColor: "bg-emerald-100 text-emerald-700",
      desc: "Python Toolkit for Algerian Production Suite",
      tags: "Python · pip installable · modular design",
      features: [
        "Automation production",
        "Traitement données",
        "CI/CD ready"
      ]
    }
  ];

  return (
    <section id="projects" className="bg-nordic-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-font text-3xl font-bold text-nordic-text mb-2 border-b-4 border-nordic-sage inline-block pb-2">
          Projets Logiciels & Open Source
        </h2>
        <p className="text-zinc-600 mb-10">Packages Python, externalisation bibliothèques, contributions ACCORD</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className={`${p.headerBg} px-6 py-4 flex justify-between items-center text-white font-bold`}>
                 <span className="text-lg">{p.title}</span>
                 <span className="text-sm opacity-90">{p.version}</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                 <div className="mb-4">
                   <span className={`px-2.5 py-1 ${p.badgeColor} text-[10px] uppercase font-bold tracking-wider rounded-full`}>
                     {p.badge}
                   </span>
                 </div>
                 <h3 className="text-lg font-medium text-nordic-text mb-2 leading-snug">{p.desc}</h3>
                 <p className="text-xs text-zinc-400 font-medium mb-6 uppercase tracking-wide">{p.tags}</p>
                 
                 <div className="space-y-2 mb-8 mt-auto">
                    {p.features.map((f, j) => (
                       <div key={j} className="flex items-center gap-2 text-sm text-zinc-600">
                          <Box size={14} className="text-zinc-400 flex-shrink-0"/> {f}
                       </div>
                    ))}
                 </div>

                 <div>
                    <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-colors">
                       Voir sur GitHub <ArrowRight size={14}/>
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
