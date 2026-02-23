export default function Reflection() {
  return (
    <section id="reflection" className="relative py-32 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Content Panel */}
        <div className="relative bg-transparent p-16 border border-slate-200 overflow-hidden">
          {/* Wine/Maroon Grid Background */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(127, 29, 29) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(127, 29, 29) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              filter: 'drop-shadow(0 0 8px rgba(127, 29, 29, 0.6))'
            }}
          />

          {/* Sliding Blue Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-25 pointer-events-none animate-grid-slide"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(15, 23, 42) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(15, 23, 42) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              filter: 'drop-shadow(0 0 6px rgba(15, 23, 42, 0.5))'
            }}
          />

          {/* Section Marker */}
          <div className="relative flex items-center space-x-4 mb-12">
            <div className="w-12 h-px bg-slate-300" />
            <span className="text-xs tracking-widest uppercase text-slate-400 bg-white/80 px-3 py-1">Reflection</span>
          </div>

          {/* Main Content */}
          <div className="relative space-y-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight tracking-tight bg-white/85 px-6 py-4 border border-slate-200 inline-block">
              What becomes visible from distance
            </h2>

            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                Reflection is not introspection. It is the act of looking back at what has been observed and noting what patterns have emerged over time. What was invisible up close becomes clear from altitude.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                This is where observation transforms into understanding. Not through analysis or theory, but through sustained attention. The pattern reveals itself when given space and time.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                MetaSumma does not claim to know what these patterns mean. It simply notes that they exist, that they recur, that they connect in ways that suggest deeper <span className="text-amber-600 bg-amber-50/80 px-2 py-1">structure</span>.
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-slate-200 my-16" />

            {/* Closing Statement */}
            <div className="space-y-8">
              <p className="text-base text-slate-600 leading-relaxed bg-white/80 px-6 py-4 border border-slate-200">
                The work continues. Systems evolve, patterns shift, new convergences emerge. MetaSumma remains at its vantage point, observing without controlling, documenting without prescribing.
              </p>

              <p className="text-base text-slate-600 leading-relaxed bg-white/80 px-6 py-4 border border-slate-200">
                This is not a conclusion. It is a position. A place from which to see clearly, to note accurately, and to share what becomes visible from shared altitude.
              </p>

              <div className="pt-12">
                <div className="w-full h-px bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grid-slide {
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

        .animate-grid-slide {
          animation: grid-slide 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}