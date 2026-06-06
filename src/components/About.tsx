import { motion } from "motion/react";

export default function About() {
  const skills = [
    { category: "Numerical Modeling", items: ["AROME", "ALADIN", "HYPE", "LIMA", "ICE3"] },
    { category: "Programming", items: ["Python", "Fortran 90/95", "CMake", "Shell (Bash)"] },
    { category: "Data & Architecture", items: ["FA", "LFI", "GRIB", "NetCDF", "Zarr", "PyPI"] },
    { category: "Computing", items: ["Linux", "HPC", "Git/GitHub", "Docker"] }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="heading-font text-3xl font-bold text-nordic-text mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-nordic-sage hidden sm:block"></span>
              Research Interests & Vision
            </h2>
            <div className="prose prose-zinc text-zinc-600 font-light leading-relaxed">
              <p>
                My work lies at the intersection of atmospheric sciences and software engineering. I focus on developing Numerical Weather Prediction (NWP) systems, optimizing model physics (particularly microphysics schemes like LIMA for fog forecasting), and architecting robust scientific software.
              </p>
              <p className="mt-4">
                As Head of the NWP Department, I bridge the gap between advanced research from consortiums like ACCORD and 24/7 operational forecasting readiness, aiming to bring high-performance numerical models to their full potential at Météo-Algérie.
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map((skillGroup, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <h3 className="text-sm font-semibold text-nordic-text uppercase tracking-wider mb-4 border-b border-zinc-100 pb-2">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item, idxi) => (
                      <li key={idxi} className="text-zinc-600 text-sm font-light flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nordic-sage/60"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
