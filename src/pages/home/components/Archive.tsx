export default function Archive() {
  return (
    <section id="archive" className="relative min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Content Panel */}
        <div className="relative bg-white/90 p-16 border border-slate-200 overflow-hidden">
          {/* Animated Neon Grid Background */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            {/* Dark Shadow Base */}
            <div className="absolute inset-0 bg-black/40" />
            
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path 
                    d="M 40 0 L 0 0 0 40" 
                    fill="none" 
                    stroke="rgb(139, 0, 60)" 
                    strokeWidth="1"
                  />
                </pattern>
                <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(136, 19, 55)" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="rgb(159, 18, 57)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(127, 29, 29)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#gridGradient)" />
            </svg>
          </div>

          {/* Glitching Blue Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              animation: 'slideGlitch 12s ease-in-out infinite'
            }}
          >
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="blueGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path 
                    d="M 40 0 L 0 0 0 40" 
                    fill="none" 
                    stroke="rgb(15, 23, 42)" 
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blueGrid)" />
            </svg>
          </div>

          <style>{`
            @keyframes slideGlitch {
              0%, 100% { 
                transform: translate(0, 0);
                opacity: 0.25;
              }
              25% { 
                transform: translate(20px, -15px);
                opacity: 0.35;
              }
              50% { 
                transform: translate(-15px, 20px);
                opacity: 0.15;
              }
              75% { 
                transform: translate(18px, 12px);
                opacity: 0.3;
              }
            }
          `}</style>

          {/* Section Marker */}
          <div className="relative z-10 flex items-center space-x-4 mb-12">
            <div className="w-12 h-px bg-slate-300" />
            <span className="text-xs tracking-widest uppercase text-slate-400 bg-white/80 px-3 py-1">Archive</span>
            <div className="w-12 h-px bg-slate-300" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 space-y-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight tracking-tight bg-white/85 px-6 py-4 border border-slate-200 inline-block">
              Preservation without curation
            </h2>

            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                The archive is not a museum. It does not select for importance or arrange for narrative. It simply holds what has been observed, maintaining context without imposing interpretation.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                This is storage as infrastructure, not as editorial statement. The goal is availability, not canonization. What matters is preserved not because it is deemed significant, but because it <span className="text-amber-600 bg-amber-50/80 px-2 py-1">existed</span>.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                Future observers will draw their own conclusions. The archive's responsibility is to ensure they have access to the raw material of observation, unfiltered by present-day assumptions about value or relevance.
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-slate-200 my-16" />

            {/* Archive Structure */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm tracking-widest uppercase text-slate-400 mb-6 bg-white/80 px-3 py-2 inline-block">Archive Principles</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6 bg-white/75 px-6 py-6 border border-slate-200">
                    <span className="text-2xl font-extralight text-slate-300 bg-white/80 px-3 py-1">01</span>
                    <div>
                      <h4 className="text-base font-light text-slate-800 mb-2 bg-white/80 px-3 py-2 inline-block">Completeness over Selection</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Capture everything within scope. Let time and future observers determine what matters.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 bg-white/75 px-6 py-6 border border-slate-200">
                    <span className="text-2xl font-extralight text-slate-300 bg-white/80 px-3 py-1">02</span>
                    <div>
                      <h4 className="text-base font-light text-slate-800 mb-2 bg-white/80 px-3 py-2 inline-block">Context over Content</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Preserve the conditions of observation. What was visible, when, and from where.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 bg-white/75 px-6 py-6 border border-slate-200">
                    <span className="text-2xl font-extralight text-slate-300 bg-white/80 px-3 py-1">03</span>
                    <div>
                      <h4 className="text-base font-light text-slate-800 mb-2 bg-white/80 px-3 py-2 inline-block">Access over Presentation</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Make material available without prescribing how it should be understood or used.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}