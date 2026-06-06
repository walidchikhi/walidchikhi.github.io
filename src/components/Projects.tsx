import { motion } from "motion/react";
import { projects } from "../data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="heading-font text-3xl font-bold text-nordic-text mb-2 border-b-4 border-nordic-sage inline-block pb-2">Projets & Réalisations</h2>
              <p className="text-zinc-500 mt-4 max-w-xl">Une sélection d'applications IA, outils d'automatisation et infrastructures de données.</p>
            </div>
          </div>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                className="group relative bg-nordic-bg p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-all overflow-hidden break-inside-avoid flex flex-col"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <ArrowUpRight className="text-zinc-400 bg-white rounded-full p-1" size={32} />
                </div>
                
                {project.image && (
                  <div className="-mx-8 -mt-8 mb-6 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 lg:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}

                <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-3 block">
                  {project.category}
                </span>
                <h3 className="heading-font text-xl font-bold text-nordic-text mb-4 pr-8">
                  {project.title}
                </h3>
                <p className="text-zinc-600 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 bg-white border border-zinc-200 text-zinc-500 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.githubUrl || project.pypiUrl) && (
                  <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-zinc-200/60">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-zinc-800 hover:bg-zinc-900 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                        GitHub <ArrowUpRight size={14}/>
                      </a>
                    )}
                    {project.pypiUrl && (
                      <a href={project.pypiUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                        PyPI <ArrowUpRight size={14}/>
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
