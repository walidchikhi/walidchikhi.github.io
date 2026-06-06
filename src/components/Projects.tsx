import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2, FileText, Github, Package } from "lucide-react";

// ── Image Gallery with arrows ──────────────────────────────────────────
function ImageGallery({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  if (images.length === 0) return null;

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="-mx-8 -mt-8 mb-6 relative overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          alt={`screenshot ${idx + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full h-56 lg:h-72 object-cover object-top"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Code Snippet Block ─────────────────────────────────────────────────
function CodeBlock({ code }: { code: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 text-xs font-bold text-nordic-sage hover:text-emerald-600 transition-colors"
      >
        <Code2 size={14} />
        {open ? "Masquer le code" : "Voir le code Python"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 relative rounded-xl overflow-hidden border border-zinc-200">
              <div className="flex items-center justify-between bg-zinc-900 px-4 py-2">
                <span className="text-xs text-zinc-400 font-mono">firedz_hdw_run.py</span>
                <button
                  onClick={copy}
                  className="text-xs text-zinc-400 hover:text-white transition-colors font-medium"
                >
                  {copied ? "✓ Copié !" : "Copier"}
                </button>
              </div>
              <pre className="bg-zinc-950 text-zinc-200 text-xs leading-relaxed p-4 overflow-x-auto max-h-80 overflow-y-auto font-mono">
                <code>{code}</code>
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Video Player ───────────────────────────────────────────────────────
function VideoPlayer({ src }: { src: string }) {
  return (
    <div className="-mx-8 -mt-8 mb-6 overflow-hidden bg-black">
      <video
        src={src}
        controls
        preload="metadata"
        className="w-full h-56 lg:h-72 object-contain"
      />
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────
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
          <div className="mb-16">
            <h2 className="heading-font text-3xl font-bold text-nordic-text mb-2 border-b-4 border-nordic-sage inline-block pb-2">
              Projets & Réalisations
            </h2>
            <p className="text-zinc-500 mt-6 max-w-2xl">
              Applications opérationnelles, packages Python, systèmes d'automatisation, 
              modélisation scientifique et développement assisté par IA.
            </p>
          </div>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                className="group relative bg-nordic-bg rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-lg transition-all overflow-hidden break-inside-avoid flex flex-col"
              >
                {/* Media */}
                {project.video && <VideoPlayer src={project.video} />}
                {!project.video && project.images && project.images.length > 0 && (
                  <ImageGallery images={project.images} />
                )}
                {!project.video && !project.images && project.image && (
                  <div className="-mx-8 -mt-8 mb-6 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 lg:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}

                <div className="p-8">
                  {/* Category */}
                  <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-3 block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="heading-font text-xl font-bold text-nordic-text mb-4 pr-8">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-600 font-light text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Code snippet */}
                  {project.codeSnippet && <CodeBlock code={project.codeSnippet} />}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-white border border-zinc-200 text-zinc-500 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.githubUrl || project.pypiUrl || project.link) && (
                    <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-zinc-200/60">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-zinc-800 hover:bg-zinc-900 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        >
                          <Github size={13} /> GitHub <ArrowUpRight size={12} />
                        </a>
                      )}
                      {project.pypiUrl && (
                        <a
                          href={project.pypiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        >
                          <Package size={13} /> PyPI <ArrowUpRight size={12} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-nordic-sage hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        >
                          <FileText size={13} /> Article PDF <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
