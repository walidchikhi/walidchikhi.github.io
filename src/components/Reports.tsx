import { motion } from "motion/react";
import { reports } from "../data";
import { FileText, ExternalLink } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import ReactMarkdown from "react-markdown";

export default function Reports() {
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);

  const selectedReport = reports.find(r => r.id === selectedReportId);

  return (
    <section id="reports" className="py-24 bg-nordic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="heading-font text-3xl font-bold text-nordic-text">Reports & Research</h2>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">Extracts from thesis, technical reports, and scientific stay documentation.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {reports.map((report, idx) => (
              <motion.div
                key={report.id}
                onClick={() => setSelectedReportId(report.id)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-xl border border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50 hover:border-nordic-sage/30 cursor-pointer transition-all flex flex-col md:flex-row gap-6 items-start group"
              >
                <div className="bg-nordic-bg p-4 rounded-lg flex-shrink-0 group-hover:bg-nordic-sage/10 transition-colors">
                  <FileText className="text-nordic-sage" size={32} />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                    <h3 className="heading-font text-lg font-bold text-nordic-text group-hover:text-nordic-sage transition-colors">{report.title}</h3>
                    <span className="text-xs font-medium bg-zinc-100 text-zinc-500 px-3 py-1 rounded-full whitespace-nowrap">
                      {report.type} • {report.date}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4 font-medium">{report.authors}</p>
                  <p className="text-zinc-600 font-light text-sm leading-relaxed mb-6">
                    {report.summary}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {report.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs text-nordic-sage font-medium tracking-wide bg-nordic-sage/5 px-2 py-1 rounded-md">
                        #{tag}
                      </span>
                    ))}
                    <div className="ml-auto flex items-center gap-2 text-xs font-medium text-nordic-terra opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Extract <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Modal isOpen={!!selectedReportId} onClose={() => setSelectedReportId(null)}>
        {selectedReport && (
          <div className="pt-2 pb-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium uppercase tracking-wider rounded-full">
                {selectedReport.type}
              </span>
              <span className="text-zinc-400 text-sm">{selectedReport.date}</span>
            </div>
            <h2 className="heading-font text-2xl sm:text-3xl font-bold text-nordic-text mb-4">
              {selectedReport.title}
            </h2>
            <p className="text-sm font-medium text-nordic-sage mb-8">
              Autheurs: {selectedReport.authors}
            </p>
            
            <div className="prose prose-zinc prose-a:text-nordic-sage hover:prose-a:text-nordic-terra prose-headings:heading-font prose-headings:font-bold prose-h1:text-xl prose-h1:mb-4 prose-h1:pb-2 prose-h1:border-b prose-h1:border-zinc-100 prose-p:font-light prose-p:leading-relaxed prose-li:font-light max-w-none">
              <ReactMarkdown>{selectedReport.content}</ReactMarkdown>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
