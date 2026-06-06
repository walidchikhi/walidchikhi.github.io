import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import {
  ArrowUpRight, ChevronLeft, ChevronRight, Code2,
  FileText, Github, Package, X, ZoomIn
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Lightbox (fullscreen viewer)
// ─────────────────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    // Prevent scrolling behind
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, prev, next]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium z-10">
            {idx + 1} / {images.length}
          </div>
        )}

        {/* Image */}
        <motion.img
          key={idx}
          src={images[idx]}
          alt={`image ${idx + 1}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            >
              <ChevronRight size={28} />
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-white" : "bg-white/35"}`}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Image thumbnail grid (always visible, click → lightbox)
// ─────────────────────────────────────────────────────────────────────────────
function ImageGrid({ images }: { images: string[] }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const first = images[0];
  const rest = images.slice(1, 4); // show up to 3 thumbnails

  return (
    <>
      {lightboxIdx !== null && (
        <Lightbox images={images} startIndex={lightboxIdx} onClose={() => setLightboxIdx(null)} />
      )}

      <div className="-mx-8 -mt-8 mb-6">
        {/* Main image */}
        <div
          className="relative cursor-zoom-in overflow-hidden group"
          onClick={() => setLightboxIdx(0)}
        >
          <img
            src={first}
            alt="main preview"
            className="w-full h-60 lg:h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-md">
              +{images.length - 1} photos
            </div>
          )}
        </div>

        {/* Thumbnail strip */}
        {rest.length > 0 && (
          <div className={`grid gap-1 mt-1`} style={{ gridTemplateColumns: `repeat(${rest.length}, 1fr)` }}>
            {rest.map((src, i) => (
              <div
                key={i}
                className="relative cursor-zoom-in overflow-hidden group"
                onClick={() => setLightboxIdx(i + 1)}
              >
                <img
                  src={src}
                  alt={`screenshot ${i + 2}`}
                  className="w-full h-20 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Single clickable image (GIF or screenshot)
// ─────────────────────────────────────────────────────────────────────────────
function SingleImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Lightbox images={[src]} startIndex={0} onClose={() => setOpen(false)} />}
      <div
        className="-mx-8 -mt-8 mb-6 overflow-hidden relative cursor-zoom-in group"
        onClick={() => setOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-60 lg:h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Code Snippet Block
// ─────────────────────────────────────────────────────────────────────────────
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
                <button onClick={copy} className="text-xs text-zinc-400 hover:text-white transition-colors font-medium">
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

// ─────────────────────────────────────────────────────────────────────────────
// Main Projects Component
// ─────────────────────────────────────────────────────────────────────────────
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
                {project.images && project.images.length > 0 ? (
                  <ImageGrid images={project.images} />
                ) : project.image ? (
                  <SingleImage src={project.image} alt={project.title} />
                ) : null}

                <div className="p-8">
                  {/* Category */}
                  <span className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-3 block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="heading-font text-xl font-bold text-nordic-text mb-4">
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
                  {(project.githubUrl || project.pypiUrl || project.link || (project as any).links) && (
                    <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-zinc-200/60">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="bg-zinc-800 hover:bg-zinc-900 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                          <Github size={13} /> GitHub <ArrowUpRight size={12} />
                        </a>
                      )}
                      {project.pypiUrl && (
                        <a href={project.pypiUrl} target="_blank" rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                          <Package size={13} /> PyPI <ArrowUpRight size={12} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="bg-nordic-sage hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                          <FileText size={13} /> Article PDF <ArrowUpRight size={12} />
                        </a>
                      )}
                      {(project as any).links?.map((l: { label: string; url: string }, i: number) => (
                        <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                          className="bg-nordic-terra hover:bg-amber-700 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                          <FileText size={13} /> {l.label} <ArrowUpRight size={12} />
                        </a>
                      ))}
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
