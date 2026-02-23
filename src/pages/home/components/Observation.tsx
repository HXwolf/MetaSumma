export default function Observation() {
  return (
    <section id="observation" className="relative min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Content Panel */}
        <div className="bg-white/88 p-16 border border-slate-200">
          {/* Section Marker */}
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-px bg-slate-300" />
            <span className="text-xs tracking-widest uppercase text-slate-400 bg-white/80 px-3 py-1">Observation</span>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight tracking-tight bg-white/85 px-6 py-4 border border-slate-200 inline-block">
              Watching systems without intervention
            </h2>

            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                To observe is to resist the impulse to optimize. MetaSumma does not seek to improve what it sees, only to document it with clarity and without judgment.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                This is not passive witnessing. It is active restraint. The discipline of seeing without shaping, of noting without naming prematurely. Observation requires distance, but not detachment.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                From this vantage, certain truths become visible: how communities self-organize, how musical genres evolve in parallel, how technical systems mirror social ones. These are not insights to be <span className="text-amber-600 bg-amber-50/80 px-2 py-1">extracted</span>, but patterns to be acknowledged.
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-slate-200 my-16" />

            {/* Observation Grid */}
            <div className="space-y-8">
              <div className="border-l-2 border-slate-300 pl-8 bg-white/75 py-4 pr-6">
                <h3 className="text-sm tracking-widest uppercase text-slate-400 mb-3 bg-white/80 px-3 py-2 inline-block">Temporal Patterns</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  How ideas recur across decades, reappearing in different forms but maintaining core structure. The same pattern in different contexts.
                </p>
              </div>

              <div className="border-l-2 border-slate-300 pl-8 bg-white/75 py-4 pr-6">
                <h3 className="text-sm tracking-widest uppercase text-slate-400 mb-3 bg-white/80 px-3 py-2 inline-block">Spatial Distribution</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Geographic and conceptual distance between similar phenomena. Parallel evolution without direct contact or influence.
                </p>
              </div>

              <div className="border-l-2 border-slate-300 pl-8 bg-white/75 py-4 pr-6">
                <h3 className="text-sm tracking-widest uppercase text-slate-400 mb-3 bg-white/80 px-3 py-2 inline-block">Emergent Behavior</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  What arises when systems reach critical mass. The moment when quantity becomes quality, when accumulation becomes transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}