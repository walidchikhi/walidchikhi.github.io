import { ArrowRight } from "lucide-react";

export default function Expertise() {
  const categories = [
    {
      title: "NWP Modeling",
      tags: "AROME · ALADIN · ARPEGE · HYPE",
      desc: "Configuration opérationnelle, cycles CY43...",
    },
    {
      title: "AI & Agentic Coding",
      tags: "GENAI · VIBE CODING · CLAUDE · GEMINI",
      desc: "Génération d'applications de bout en bout avec l'IA.",
    },
    {
      title: "Software Engineering",
      tags: "PYTHON · FORTRAN · CMAKE",
      desc: "Architecture MVC, PIP packages, C++ interop...",
    },
    {
      title: "Doc As Code",
      tags: "MKDOCS · MARKDOWN · MATERIAL",
      desc: "Documentation technique, scientifique et APIs.",
    },
    {
      title: "Microphysics",
      tags: "LIMA · ICE3 · VISIBILITY",
      desc: "Prévision brouillard, diagnostics avancés (acvisih).",
    },
    {
      title: "HPC & Data",
      tags: "GRIB · FA · LFI · NETCDF · ZARR",
      desc: "Belenos/Météo-France, manipulation de données lourdes.",
    }
  ];

  return (
    <section id="expertise" className="bg-nordic-bg py-20 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-font text-3xl font-bold text-nordic-text mb-2 border-b-4 border-nordic-sage inline-block pb-2">
          Domaines d'Expertise
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-nordic-sage/10 rounded-lg"></div>
                  <h3 className="text-xl font-bold text-nordic-text">{cat.title}</h3>
               </div>
               <p className="text-xs font-bold tracking-wider text-nordic-sage uppercase mb-3">{cat.tags}</p>
               <p className="text-zinc-600 text-sm mb-6">{cat.desc}</p>
               <a href="#projects" className="flex items-center gap-2 text-nordic-terra font-semibold text-sm hover:text-amber-700 w-fit">
                  <ArrowRight size={16} /> Explorer les projets
               </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
