export default function Signal() {
  return (
    <section id="signal" className="relative min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Content Panel */}
        <div className="relative bg-white/90 p-16 border border-slate-200 overflow-hidden">
          {/* Animated Neon Grid Background */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            {/* Dark Shadow Base */}
            <div className="absolute inset-0 bg-black/40" />
            
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="signalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path 
                    d="M 40 0 L 0 0 0 40" 
                    fill="none" 
                    stroke="rgb(139, 0, 60)" 
                    strokeWidth="1"
                  />
                </pattern>
                <linearGradient id="signalGridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(136, 19, 55)" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="rgb(159, 18, 57)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="rgb(127, 29, 29)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#signalGrid)" />
              <rect width="100%" height="100%" fill="url(#signalGridGradient)" />
            </svg>
          </div>

          {/* Glitching Blue Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              animation: 'slideGlitchSignal 12s ease-in-out infinite'
            }}
          >
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="signalBlueGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path 
                    d="M 40 0 L 0 0 0 40" 
                    fill="none" 
                    stroke="rgb(15, 23, 42)" 
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#signalBlueGrid)" />
            </svg>
          </div>

          <style>{`
            @keyframes slideGlitchSignal {
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
            <span className="text-xs tracking-widest uppercase text-slate-400 bg-white/80 px-3 py-1">Signal</span>
            <div className="w-12 h-px bg-slate-300" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 space-y-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight tracking-tight bg-white/85 px-6 py-4 border border-slate-200 inline-block">
              Pattern recognition across distributed systems
            </h2>

            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                MetaSumma exists at the intersection of observation and interpretation. It is not a platform for content creation, but a framework for understanding how patterns emerge across seemingly disconnected domains.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                Signal is what remains when noise is removed. It is the <span className="text-amber-600 bg-amber-50/80 px-2 py-1">coherence</span> that persists across contexts, the structure that reveals itself through repetition and resonance.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                This is not about prediction or control. It is about recognition, seeing what is already present, but not yet articulated. The work is to make visible the connections that exist beneath the surface of apparent randomness.
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-slate-200 my-16" />

            {/* Signal Types */}
            <div className="space-y-12">
              <div>
                <h3 className="text-sm tracking-widest uppercase text-slate-400 mb-6 bg-white/80 px-3 py-2 inline-block">Signal Types</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6 bg-white/75 px-6 py-6 border border-slate-200">
                    <span className="text-2xl font-extralight text-slate-300 bg-white/80 px-3 py-1">01</span>
                    <div>
                      <h4 className="text-base font-light text-slate-800 mb-2 bg-white/80 px-3 py-2 inline-block">Structural Resonance</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Patterns that repeat across different scales and contexts. The same architecture appearing in social networks, biological systems, and information flows.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 bg-white/75 px-6 py-6 border border-slate-200">
                    <span className="text-2xl font-extralight text-slate-300 bg-white/80 px-3 py-1">02</span>
                    <div>
                      <h4 className="text-base font-light text-slate-800 mb-2 bg-white/80 px-3 py-2 inline-block">Temporal Alignment</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Events that cluster in time without obvious causal connection. Synchronicities that suggest underlying coordination mechanisms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 bg-white/75 px-6 py-6 border border-slate-200">
                    <span className="text-2xl font-extralight text-slate-300 bg-white/80 px-3 py-1">03</span>
                    <div>
                      <h4 className="text-base font-light text-slate-800 mb-2 bg-white/80 px-3 py-2 inline-block">Conceptual Convergence</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Ideas emerging simultaneously in separate domains. The independent discovery of similar frameworks across disciplines.
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