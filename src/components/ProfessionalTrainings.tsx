import { motion } from "motion/react";
import { Award } from "lucide-react";

const trainings = [
  {
    year: "2023",
    title: "Machine Learning for Weather and Climate",
    org: "ECMWF / WMO Online",
    type: "Certificat",
    desc: "Applications of ML/DL techniques to NWP post-processing, extreme event prediction, and data-driven weather forecasting.",
    tags: ["ML", "Deep Learning", "NWP", "ECMWF"],
  },
  {
    year: "2022",
    title: "Numerical Weather Prediction — Advanced Training",
    org: "WMO Regional Training Centre",
    type: "Formation",
    desc: "Advanced techniques in NWP modeling, data assimilation, and ensemble forecasting for operational meteorology.",
    tags: ["NWP", "Data Assimilation", "Ensemble"],
  },
  {
    year: "2021",
    title: "HARP — Harmonised Analysis and Reporting for Predictions",
    org: "ACCORD Consortium",
    type: "Atelier",
    desc: "Training on the HARP R-based verification package for meteorological models scores computation and interactive visualization.",
    tags: ["HARP", "R", "Verification", "ACCORD"],
  },
  {
    year: "2021",
    title: "EPyGrAM — Advanced Usage & Contribution",
    org: "Météo-France / CNRM",
    type: "Formation",
    desc: "Advanced training on the EPyGrAM Python library for reading, processing, and plotting meteorological fields from GRIB and FA formats.",
    tags: ["EPyGrAM", "Python", "GRIB", "FA"],
  },
];

export default function ProfessionalTrainings() {
  return (
    <section id="trainings" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-font text-3xl font-bold text-nordic-text mb-2 border-b-4 border-nordic-sage inline-block pb-2">
            Professional Trainings
          </h2>
          <p className="text-zinc-500 mt-6 mb-12 max-w-2xl">
            Formations continues, ateliers et certificats dans les domaines de la PNT, du Machine Learning et du Software Engineering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainings.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-nordic-bg rounded-2xl p-6 border border-zinc-100 hover:shadow-md transition-shadow flex gap-5"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-nordic-sage/10 rounded-xl flex items-center justify-center">
                  <Award size={22} className="text-nordic-sage" />
                </div>

                <div>
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-white bg-nordic-sage px-2.5 py-0.5 rounded-full">
                      {t.year}
                    </span>
                    <span className="text-xs font-semibold text-nordic-terra">
                      {t.type}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-nordic-text mb-1 leading-snug">
                    {t.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-3">
                    {t.org}
                  </p>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed mb-4">
                    {t.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {t.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 bg-white border border-zinc-200 text-zinc-500 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
