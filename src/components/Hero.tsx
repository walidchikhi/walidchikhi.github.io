export default function Hero() {
  return (
    <section id="home" className="bg-nordic-bg bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-font text-5xl md:text-6xl font-bold text-nordic-text leading-tight mb-6 tracking-tight">
              NWP, AI & <br />
              <span className="text-nordic-sage">Software Engineering</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-2 font-light">
              Head of NWP Department · AI Agentic Developer
            </p>
            <p className="text-sm font-medium text-zinc-400 mb-10 tracking-wide">
              Numerical Weather Prediction · Vibe Coding · HPC · Open Source
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-nordic-sage text-white text-sm font-semibold rounded-full">
                GenAI Apps
              </span>
              <span className="px-4 py-1.5 bg-nordic-terra text-white text-sm font-semibold rounded-full">
                PyPI Publisher
              </span>
              <span className="px-4 py-1.5 bg-zinc-500 text-white text-sm font-semibold rounded-full">
                WMO Standards
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a href="/docs/CV_Tech_En_Walid.pdf" target="_blank" rel="noopener noreferrer" className="bg-nordic-text text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download CV
              </a>
              <a href="#contact" className="text-nordic-text font-semibold text-sm hover:text-nordic-sage transition-colors">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end relative">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center">
              <img 
                src="/Walid_PHOTO.PNG" 
                alt="Walid Chikhi" 
                className="w-64 h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <div className="text-4xl font-bold text-nordic-sage mb-1">13+</div>
              <div className="text-sm font-bold text-nordic-text">Team Members</div>
              <div className="text-xs text-zinc-400 mt-1">NWP Department</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nordic-sage mb-1">2+</div>
              <div className="text-sm font-bold text-nordic-text">Apps Contributed</div>
              <div className="text-xs text-zinc-400 mt-1">Coding & Vibe Coding </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nordic-sage mb-1">3+</div>
              <div className="text-sm font-bold text-nordic-text">Full Apps Developped</div>
              <div className="text-xs text-zinc-400 mt-1">Coding & Vibe Coding </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nordic-sage mb-1">2+</div>
              <div className="text-sm font-bold text-nordic-text">Published Projects</div>
              <div className="text-xs text-zinc-400 mt-1">On PyPI/GitHub</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nordic-sage mb-1">3</div>
              <div className="text-sm font-bold text-nordic-text">Research Projects</div>
              <div className="text-xs text-zinc-400 mt-1">NWP & Hydrology</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-nordic-sage mb-1">2</div>
              <div className="text-sm font-bold text-nordic-text">Scientific Stays</div>
              <div className="text-xs text-zinc-400 mt-1">Météo-France CNRM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
