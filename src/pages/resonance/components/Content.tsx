export default function Content() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Main Content Container */}
        <div className="border border-white/80 p-12 md:p-16">
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 leading-tight tracking-tight bg-white/90 px-8 py-4 border border-slate-200 inline-block">
              The Resonance
            </h2>
          </div>

          {/* Body Content */}
          <div className="space-y-8 mb-16">
            <p className="text-xl md:text-2xl font-light text-slate-700 leading-relaxed bg-white/85 px-6 py-4">
              Shared signals, held with discernment.
            </p>

            <p className="text-xl md:text-2xl font-light text-slate-700 leading-relaxed bg-white/85 px-6 py-4">
              Where signals echo and align.
            </p>

            <p className="text-xl md:text-2xl font-light text-slate-700 leading-relaxed bg-white/85 px-6 py-4">
              A living field of connection.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/40 my-16" />

          {/* Content Types */}
          <div className="mb-16">
            <div className="relative space-y-6 border border-white/60 p-8 overflow-hidden">
              {/* Wine/Maroon Base Grid */}
              <div 
                className="absolute inset-0 opacity-35 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgb(139, 0, 60) 1px, transparent 1px),
                    linear-gradient(90deg, rgb(139, 0, 60) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}
              />
              
              {/* Sliding Blue Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgb(15, 23, 42) 1px, transparent 1px),
                    linear-gradient(90deg, rgb(15, 23, 42) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                  animation: 'gridSlide 12s ease-in-out infinite'
                }}
              />

              <div className="relative z-10 bg-white/75 px-6 py-4">
                <p className="text-base text-slate-700">
                  <span className="font-medium text-slate-800">Signals</span> – links, people, projects, ideas
                </p>
              </div>

              <div className="relative z-10 bg-white/75 px-6 py-4">
                <p className="text-base text-slate-700">
                  <span className="font-medium text-slate-800">Echoes</span> – past references, archived influences
                </p>
              </div>

              <div className="relative z-10 bg-white/75 px-6 py-4">
                <p className="text-base text-slate-700">
                  <span className="font-medium text-slate-800">Vibes</span> – acknowledgements, not affiliations
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/40 my-16" />

          {/* Disclaimer Section */}
          <div>
            <h4 className="text-lg font-light text-slate-700 tracking-wide bg-white/85 px-6 py-3 border border-slate-200 inline-block mb-8">
              Disclaimer
            </h4>

            <div className="space-y-6">
              <p className="text-base text-slate-600 leading-relaxed bg-white/75 px-6 py-4">
                These are signals encountered, not opinions or positions held.
              </p>

              <p className="text-base text-slate-600 leading-relaxed bg-white/75 px-6 py-4">
                Shared for resonance, not endorsement.
              </p>

              <p className="text-base text-slate-600 leading-relaxed bg-white/75 px-6 py-4">
                Inclusion does not imply alignment.
              </p>

              <p className="text-base text-slate-600 leading-relaxed bg-white/75 px-6 py-4">
                Discernment encouraged.
              </p>
            </div>
          </div>

          <div className="pt-12">
            <div className="w-full h-px bg-slate-200" />
          </div>

          {/* Logo */}
          <div className="pt-12 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer transition-opacity duration-300 hover:opacity-80"
              aria-label="Return to top"
            >
              <img 
                src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/4094870d4918670db0a15844c06705ac.png" 
                alt="MetaSumma"
                className="h-20 md:h-24 lg:h-28 w-auto"
              />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridSlide {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -15px);
          }
          50% {
            transform: translate(-10px, 20px);
          }
          75% {
            transform: translate(15px, 10px);
          }
        }
      `}</style>
    </section>
  );
}