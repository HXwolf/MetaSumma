
export default function Convergence() {
  return (
    <section id="convergence" className="relative min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Content Panel */}
        <div className="relative bg-transparent p-16 border border-slate-200 overflow-hidden">
          {/* Wine/Maroon Base Grid */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(136, 19, 55, 0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(136, 19, 55, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              filter: 'drop-shadow(0 0 8px rgba(136, 19, 55, 0.6))'
            }}
          />
          
          {/* Sliding Blue Overlay Grid */}
          <div 
            className="absolute inset-0 opacity-25 animate-grid-glitch"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(30, 58, 138, 0.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(30, 58, 138, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              filter: 'drop-shadow(0 0 10px rgba(30, 58, 138, 0.7))',
              animation: 'gridGlitch 12s ease-in-out infinite'
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Section Marker */}
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-px bg-slate-300" />
              <span className="text-xs tracking-widest uppercase text-slate-400 bg-white/80 px-3 py-1">Convergence</span>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight tracking-tight bg-white/85 px-6 py-4 border border-slate-200 inline-block">
                Where separate trajectories meet
              </h2>

              <div className="space-y-8 text-slate-600 leading-relaxed">
                <p className="text-lg bg-white/80 p-6 border border-slate-200">
                  Convergence is not collision. It is the natural result of systems following their own logic until they arrive at similar conclusions. Independent paths leading to shared destinations.
                </p>

                <p className="bg-white/75 p-6 border border-slate-200">
                  In music, this appears as genre fusion that no one planned. In technology, as different teams solving the same problem with similar solutions. In thought, as ideas that emerge simultaneously across cultures.
                </p>

                <p className="bg-white/75 p-6 border border-slate-200">
                  The archive documents these moments of convergence, not as endpoints, but as waypoints. Places where separate journeys briefly align before continuing on their own trajectories.
                </p>
              </div>

              {/* Convergence Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/85 p-6 border border-slate-200">
                  <div className="text-sm tracking-widest uppercase text-slate-400 mb-3">Point Alpha</div>
                  <div className="text-slate-700">Independent systems arriving at shared solutions</div>
                </div>
                <div className="bg-white/85 p-6 border border-slate-200">
                  <div className="text-sm tracking-widest uppercase text-slate-400 mb-3">Point Beta</div>
                  <div className="text-slate-700">Parallel evolution across isolated contexts</div>
                </div>
                <div className="bg-white/85 p-6 border border-slate-200">
                  <div className="text-sm tracking-widest uppercase text-slate-400 mb-3">Point Gamma</div>
                  <div className="text-slate-700">Emergent patterns from distributed sources</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
