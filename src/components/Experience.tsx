import { motion } from "motion/react";
import { experience, education } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-nordic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="heading-font text-3xl font-bold text-nordic-text">Professional Journey</h2>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">A track record of leading technical teams and advancing atmospheric research operations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Experience Timeline */}
            <div className="lg:col-span-7">
              <h3 className="text-xl font-semibold text-nordic-text mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-nordic-terra"></span>
                Experience
              </h3>
              <div className="space-y-12 pl-4 border-l border-zinc-200">
                {experience.map((exp, idx) => (
                  <div key={exp.id} className="relative pl-8">
                    <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-nordic-terra shadow-[0_0_0_4px_var(--color-nordic-bg)]"></span>
                    <span className="text-sm text-nordic-terra font-medium tracking-wide bg-nordic-terra/10 px-2 py-1 rounded inline-block mb-2">
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-bold text-nordic-text">{exp.title}</h4>
                    <span className="text-sm text-zinc-500 block mb-4">{exp.company} — {exp.location}</span>
                    <p className="text-zinc-600 font-light text-sm mb-4 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, idxi) => (
                        <li key={idxi} className="text-sm text-zinc-600 flex items-start gap-2">
                          <span className="text-zinc-300 mt-0.5">•</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="lg:col-span-5">
              <h3 className="text-xl font-semibold text-nordic-text mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-nordic-sage"></span>
                Education
              </h3>
              <div className="space-y-12 pl-4 border-l border-zinc-200">
                {education.map((edu, idx) => (
                  <div key={edu.id} className="relative pl-8">
                    <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-nordic-sage shadow-[0_0_0_4px_var(--color-nordic-bg)]"></span>
                    <span className="text-sm text-nordic-sage font-medium tracking-wide bg-nordic-sage/10 px-2 py-1 rounded inline-block mb-2">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-bold text-nordic-text">{edu.degree}</h4>
                    <span className="text-sm text-zinc-500 block mb-4">{edu.institution}</span>
                    <ul className="space-y-2">
                      {edu.details.map((det, idxi) => (
                        <li key={idxi} className="text-sm text-zinc-600 flex items-start gap-2">
                          <span className="text-zinc-300 mt-0.5">•</span>
                          {det}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
