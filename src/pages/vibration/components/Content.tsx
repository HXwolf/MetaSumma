export default function Content() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Main Content Container */}
        <div className="border border-white/80 p-12 md:p-16">
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 leading-tight tracking-tight bg-white/90 px-8 py-4 border border-slate-200 inline-block">
              VIBE CHECK
            </h2>
          </div>

          {/* Body Content */}
          <div className="space-y-8 mb-16">
            <p className="text-xl md:text-2xl font-light text-slate-700 leading-relaxed bg-white/85 px-6 py-4">
              What this is...
            </p>

            <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4">
              A practical model for how emotional states affect thinking quality, decision-making, and behavior.
            </p>

            <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4">
              Lower states = narrower thinking
            </p>

            <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4">
              Higher states = broader, calmer, more effective thinking
            </p>

            <p className="text-xl md:text-2xl font-light text-slate-700 leading-relaxed bg-white/85 px-6 py-4 mt-12">
              What's your current vibe? (Or what is your vibe's current?)
            </p>

            <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4">
              Your vibe isn't just a mood, it's a signal, a frequency you're broadcasting into the world. Every thought, feeling, and action shifts your energy up or down, shaping how you experience life and what you attract.
            </p>

            <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4">
              Some days you might be flowing high, calm, and inspired; other days, low, anxious, or stuck in frustration.
            </p>

            <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4">
              Checking in on your vibe is like reading your personal energy dashboard: it tells you where you are, what's influencing you, and what adjustments can lift or stabilize your current state.
            </p>

            <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4">
              Ask yourself honestly... what's your current vibe, and what currents are running through it?
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/40 my-16" />

          {/* Checking Your Vibe Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-light text-slate-800 leading-tight bg-white/90 px-6 py-4 border border-slate-200 inline-block mb-12">
              Checking Your Vibe
            </h3>

            <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4 mb-12">
              Your "vibe" isn't just a mood, it's a signal of your current state, influencing thinking, attitude, behavior, and creativity.
            </p>

            {/* Graphic Image */}
            <div className="flex justify-center mb-12">
              <img 
                src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/58d341facc779c173936c2c6c482e4a6.png"
                alt="Vibe zones visualization"
                className="w-full max-w-3xl h-auto"
              />
            </div>

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

              {/* Zone 1 */}
              <div className="relative z-10 bg-white/75 px-6 py-5 border-l-4 border-red-600">
                <p className="text-lg font-medium text-slate-800 mb-3">
                  Zone 1 – Survival / Threat 🔴
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Emotions:</span> shame, guilt, fear, anger
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Thinking:</span> narrow, reactive
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Behavior:</span> reacting, blaming, avoiding
                </p>
                <p className="text-sm text-slate-600 italic">
                  You can't do clear thinking here.
                </p>
              </div>

              {/* Zone 2 */}
              <div className="relative z-10 bg-white/75 px-6 py-5 border-l-4 border-orange-500">
                <p className="text-lg font-medium text-slate-800 mb-3">
                  Zone 2 – Control / Ego 🟠
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Emotions:</span> ambition, pride, hustle
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Thinking:</span> goal-driven but tense
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Behavior:</span> competing, proving, chasing outcomes
                </p>
                <p className="text-sm text-slate-600 italic">
                  Productive, but energy-draining; prone to burnout.
                </p>
              </div>

              {/* Zone 3 */}
              <div className="relative z-10 bg-white/75 px-6 py-5 border-l-4 border-yellow-500">
                <p className="text-lg font-medium text-slate-800 mb-3">
                  Zone 3 – Stability / Agency 🟡
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Emotions:</span> courage, neutrality, acceptance
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Thinking:</span> calm, strategic, learning-focused
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Behavior:</span> clear decisions, long-term planning
                </p>
                <p className="text-sm text-slate-600 italic">
                  Your baseline for reliable judgment and growth.
                </p>
              </div>

              {/* Zone 4 */}
              <div className="relative z-10 bg-white/75 px-6 py-5 border-l-4 border-green-600">
                <p className="text-lg font-medium text-slate-800 mb-3">
                  Zone 4 – Flow / Integration 🟢
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Emotions:</span> love, joy, peace
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Thinking:</span> broad, coherent, creative
                </p>
                <p className="text-base text-slate-700 mb-2">
                  <span className="font-medium">Behavior:</span> deep focus, pattern recognition, high-quality output
                </p>
                <p className="text-sm text-slate-600 italic">
                  Peak states of performance and insight, but temporary and self-reinforcing.
                </p>
              </div>
            </div>
          </div>

          {/* The Shift Section */}
          <div className="mb-16">
            <div className="relative border border-white/60 p-8 overflow-hidden">
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

              <div className="relative z-10 space-y-6">
                <p className="text-xl font-medium text-slate-800 bg-white/75 px-6 py-4">
                  Courage = the shift. From reacting → choosing
                </p>

                <p className="text-base text-slate-700 bg-white/75 px-6 py-4">
                  Below it: life happens to you
                </p>

                <p className="text-base text-slate-700 bg-white/75 px-6 py-4">
                  Above it: you act on life
                </p>

                <p className="text-base text-slate-700 bg-white/75 px-6 py-4">
                  Move one zone at a time: Fear → Stability, Anger → Clarity, Hustle → Focus. Momentum, not force, drives growth.
                </p>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-light text-slate-800 leading-tight bg-white/90 px-6 py-4 border border-slate-200 inline-block mb-12">
              🛠️ Tips to Help Shift Your State
            </h3>

            <div className="space-y-6">
              <div className="bg-white/85 px-6 py-5 border-l-4 border-slate-400">
                <p className="text-base font-medium text-slate-800 mb-2">
                  Check in honestly:
                </p>
                <p className="text-base text-slate-700">
                  "What's my current vibe?"
                </p>
              </div>

              <div className="bg-white/85 px-6 py-5 border-l-4 border-slate-400">
                <p className="text-base font-medium text-slate-800 mb-2">
                  Observe currents:
                </p>
                <p className="text-base text-slate-700">
                  What's tightening your loops or creating emotional noise?
                </p>
              </div>

              <div className="bg-white/85 px-6 py-5 border-l-4 border-slate-400">
                <p className="text-base font-medium text-slate-800 mb-2">
                  Shift intentionally:
                </p>
                <p className="text-base text-slate-700">
                  Use breath, posture, social cues, or small wins to regulate your nervous system first. Then let your thoughts follow.
                </p>
              </div>

              <div className="bg-white/85 px-6 py-5 border-l-4 border-slate-400">
                <p className="text-base font-medium text-slate-800 mb-2">
                  Clear emotional noise:
                </p>
                <p className="text-base text-slate-700">
                  Growth isn't forcing positivity, it's reducing tension, clearing clutter, and widening your circulation.
                </p>
              </div>

              <div className="bg-white/85 px-6 py-5 border-l-4 border-slate-400">
                <p className="text-base font-medium text-slate-800 mb-2">
                  Heal old wounds:
                </p>
                <p className="text-base text-slate-700">
                  Give yourself permission to notice and process past emotional experiences. Unresolved pain, shame, or grief can tighten your inner loops and create subtle resistance
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/40 my-16" />

          {/* Navigating Your Emotions Section */}
          <div className="relative z-10 w-full flex justify-center my-16">
            <img 
              src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/b5091d82cd34395481f53d495dd5274d.png"
              alt="Vibration Zones Visualization"
              className="max-w-3xl w-full h-auto"
            />
          </div>

          {/* Navigating Your Emotions Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-light text-slate-800 leading-tight bg-white/90 px-6 py-4 border border-slate-200 inline-block mb-12">
              🌪️ Navigating Your Emotions: A Grounded Map for Clarity, Flow, and Growth
            </h3>

            <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4 mb-12">
              Emotions aren't a ladder you climb, they're a circulating flow. They loop, self-reinforce, and shape how you think, act, and experience life. Understanding this flow can turn emotional chaos into clarity, creativity, and momentum.
            </p>

            {/* Toroidal Flow */}
            <div className="mb-12">
              <h4 className="text-xl font-light text-slate-800 bg-white/90 px-6 py-4 border border-slate-200 inline-block mb-8">
                🌀 The Toroidal Flow of Emotion
              </h4>

              <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4 mb-8">
                Instead of thinking "up is good, down is bad," imagine your emotions moving through an energetic torus-field flow.
              </p>

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

                <div className="relative z-10 bg-white/75 px-6 py-5">
                  <p className="text-base font-medium text-slate-800 mb-2">
                    Core axis:
                  </p>
                  <p className="text-base text-slate-700">
                    Your neutral center-awareness, regulation, and steady attention. This is your pivot point.
                  </p>
                </div>

                <div className="relative z-10 bg-white/75 px-6 py-5">
                  <p className="text-base font-medium text-slate-800 mb-2">
                    Inner ring:
                  </p>
                  <p className="text-base text-slate-700">
                    Threat and survival states-fear, shame, guilt, anger. Protective, reactive, narrowing your thinking.
                  </p>
                </div>

                <div className="relative z-10 bg-white/75 px-6 py-5">
                  <p className="text-base font-medium text-slate-800 mb-2">
                    Middle ring:
                  </p>
                  <p className="text-base text-slate-700">
                    Regulated engagement-curiosity, hope, contentment. Learning, strategy, and effective decision-making live here.
                  </p>
                </div>

                <div className="relative z-10 bg-white/75 px-6 py-5">
                  <p className="text-base font-medium text-slate-800 mb-2">
                    Outer ring:
                  </p>
                  <p className="text-base text-slate-700">
                    Expansive and integrative-joy, love, passion, freedom. Peak creativity and connection, but temporary.
                  </p>
                </div>

                <div className="relative z-10 bg-white/75 px-6 py-5 border-l-4 border-slate-400">
                  <p className="text-base text-slate-700 italic">
                    You don't "climb" through these states. You circulate, tightening or widening loops, shifting lanes, and letting momentum guide you.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Emotions Loop */}
            <div className="mb-12">
              <h4 className="text-xl font-light text-slate-800 bg-white/90 px-6 py-4 border border-slate-200 inline-block mb-8">
                🧠 Why Emotions Loop: Polyvagal + Predictive Processing
              </h4>

              <p className="text-base text-slate-600 leading-relaxed bg-white/85 px-6 py-4 mb-8">
                Your nervous system and brain predict the world constantly, which is why emotions feel self-reinforcing:
              </p>

              <div className="space-y-6">
                <div className="bg-white/85 px-6 py-5 border-l-4 border-slate-400">
                  <p className="text-base font-medium text-slate-800 mb-2">
                    Polyvagal theory:
                  </p>
                  <p className="text-base text-slate-700">
                    Your body chooses a state based on perceived safety. Safe? You're calm and open. Threatened? You're reactive or shutting down.
                  </p>
                </div>

                <div className="bg-white/85 px-6 py-5 border-l-4 border-slate-400">
                  <p className="text-base font-medium text-slate-800 mb-2">
                    Predictive processing:
                  </p>
                  <p className="text-base text-slate-700">
                    Your brain predicts sensory input and minimizes prediction error. Low error = calm; high or unresolvable error = anxiety, anger, or collapse.
                  </p>
                </div>

                <div className="bg-white/85 px-6 py-5">
                  <p className="text-base text-slate-700">
                    Together, these systems form a loop: your nervous system picks a state, your brain predictions confirm it, and the loop repeats. That's your emotional spiral-but now you can understand it, and shift it.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="mb-12">
              <h4 className="text-xl font-light text-slate-800 bg-white/90 px-6 py-4 border border-slate-200 inline-block mb-8">
                💡 Key Takeaways
              </h4>

              <div className="space-y-4">
                <p className="text-base text-slate-700 bg-white/85 px-6 py-4">
                  Emotions are self-stabilizing, circulating systems, not flaws.
                </p>

                <p className="text-base text-slate-700 bg-white/85 px-6 py-4">
                  Neutrality / stability = pivot; use it to orbit outward.
                </p>

                <p className="text-base text-slate-700 bg-white/85 px-6 py-4">
                  Incremental, believable shifts compound into lasting momentum.
                </p>

                <p className="text-base text-slate-700 bg-white/85 px-6 py-4">
                  Flow and joy aren't permanent baselines, they're peaks within a regulated loop.
                </p>

                <p className="text-base text-slate-700 bg-white/85 px-6 py-4">
                  Understanding your toroidal map, nervous system states, and "vibe zones" gives you a practical navigation system for life, creativity, and decision-making.
                </p>
              </div>
            </div>

            {/* Growth Statement */}
            <div className="relative border border-white/60 p-8 overflow-hidden">
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

              <div className="relative z-10">
                <h4 className="text-2xl font-light text-slate-800 bg-white/85 px-6 py-3 mb-8">
                  You don't level up by force.
                </h4>

                <h4 className="text-2xl font-light text-slate-800 bg-white/85 px-6 py-3 mb-8">
                  You level up by reducing emotional noise.
                </h4>

                <p className="text-base text-slate-700 bg-white/85 px-6 py-4">
                  Growth isn't about pushing harder or forcing change, it's about clearing the static inside. Every layer of emotional noise, doubt, or resistance clouds your signal. The quieter your inner world becomes, the higher your vibration rises, not from effort, but from clarity. You don't climb upward, you open space. And that space elevates you.
                </p>
              </div>
            </div>

            {/* Meditation Graphic */}
            <div className="relative flex justify-center py-16 z-10">
              <img 
                src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/454b316b9ec37c39c5458e008e822438.png"
                alt="Meditation and Energy Visualization"
                className="w-full max-w-3xl h-auto relative z-10"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/40 my-16" />

          {/* Description Section */}
          <div>
            <h4 className="text-lg font-light text-slate-700 tracking-wide bg-white/85 px-6 py-3 border border-slate-200 inline-block mb-8">
              Essence
            </h4>

            <div className="space-y-6">
              <p className="text-base text-slate-600 leading-relaxed bg-white/75 px-6 py-4">
                Vibration is the underlying frequency of all things.
              </p>

              <p className="text-base text-slate-600 leading-relaxed bg-white/75 px-6 py-4">
                It moves through matter and consciousness alike.
              </p>

              <p className="text-base text-slate-600 leading-relaxed bg-white/75 px-6 py-4">
                Energy in perpetual motion.
              </p>

              <p className="text-base text-slate-600 leading-relaxed bg-white/75 px-6 py-4">
                The rhythm that connects all phenomena.
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
