export default function Connection() {
  return (
    <section id="connection" className="relative min-h-screen flex items-center justify-center px-8 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Content Panel */}
        <div className="bg-white/88 p-16 border border-slate-200">
          {/* Section Marker */}
          <div className="flex items-center space-x-4 mb-12">
            <div className="w-12 h-px bg-slate-300" />
            <span className="text-xs tracking-widest uppercase text-slate-400 bg-white/80 px-3 py-1">Connection</span>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight tracking-tight bg-white/85 px-6 py-4 border border-slate-200 inline-block">
              Where observation meets exchange
            </h2>

            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                Connection is not networking. It is the recognition that certain vantage points align, that certain observers see similar patterns from different positions.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                MetaSumma does not seek to build community. It simply acknowledges that those who observe from altitude may wish to share what they see, to compare notes, to verify that the patterns are not <span className="text-amber-600 bg-amber-50/80 px-2 py-1">illusion</span>.
              </p>

              <p className="bg-white/80 px-6 py-4 border border-slate-200">
                This is where the observer becomes plural. Where individual perspective meets collective verification. Where signal confirms signal.
              </p>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-slate-200 my-16" />

            {/* Connection Principles */}
            <div className="space-y-8">
              <h3 className="text-xl font-light text-slate-700 bg-white/85 px-6 py-3 border border-slate-200 inline-block">
                Principles of Exchange
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/75 p-6 border border-slate-200">
                  <h4 className="text-sm tracking-widest uppercase text-slate-500 mb-3 bg-white/80 px-3 py-2 inline-block">
                    Shared Altitude
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed bg-white/70 px-4 py-3">
                    Connection occurs between those who observe from similar distance, not those who operate within the same system.
                  </p>
                </div>

                <div className="bg-white/75 p-6 border border-slate-200">
                  <h4 className="text-sm tracking-widest uppercase text-slate-500 mb-3 bg-white/80 px-3 py-2 inline-block">
                    Pattern Verification
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed bg-white/70 px-4 py-3">
                    What one observer notes, another may confirm. This is not consensus, but triangulation.
                  </p>
                </div>

                <div className="bg-white/75 p-6 border border-slate-200">
                  <h4 className="text-sm tracking-widest uppercase text-slate-500 mb-3 bg-white/80 px-3 py-2 inline-block">
                    Non-Directive Exchange
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed bg-white/70 px-4 py-3">
                    Information flows without agenda. No one is convinced, recruited, or converted.
                  </p>
                </div>

                <div className="bg-white/75 p-6 border border-slate-200">
                  <h4 className="text-sm tracking-widest uppercase text-slate-500 mb-3 bg-white/80 px-3 py-2 inline-block">
                    Temporal Patience
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed bg-white/70 px-4 py-3">
                    Connection does not require immediacy. Some patterns take years to reveal themselves.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-slate-200 my-16" />

            {/* Closing Statement */}
            <div className="space-y-8">
              <p className="text-base text-slate-600 leading-relaxed bg-white/80 px-6 py-4 border border-slate-200">
                Those who wish to connect may do so. Not through forced interaction, but through the quiet recognition that others are watching from nearby peaks.
              </p>

              <p className="text-base text-slate-600 leading-relaxed bg-white/80 px-6 py-4 border border-slate-200">
                MetaSumma remains available. Not as a platform, but as a <span className="text-amber-600 bg-amber-50/80 px-2 py-1">coordinate</span>. A known position from which to orient.
              </p>

              {/* Link Section */}
              <div className="pt-12 space-y-6">
                <h3 className="text-xl font-light text-slate-700 bg-white/85 px-6 py-3 border border-slate-200 inline-block">
                  Link
                </h3>
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <p className="text-base text-slate-600 leading-relaxed bg-white/80 px-6 py-4 border border-slate-200 flex-1">
                    Send signal, open channel, initiate contact here: <a href="mailto:contact@metasumma.com" className="text-amber-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer bg-amber-50/80 px-2 py-1">LINK</a>
                  </p>

                  {/* Social Media Icons */}
                  <div className="flex items-center justify-center gap-6 bg-white/85 px-8 py-4 border border-slate-200">
                    {/* LinkedIn */}
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-linkedin-fill text-2xl"></i>
                      </div>
                    </a>

                    {/* TikTok */}
                    <a 
                      href="https://tiktok.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
                      aria-label="TikTok"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-tiktok-fill text-2xl"></i>
                      </div>
                    </a>

                    {/* YouTube */}
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
                      aria-label="YouTube"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-youtube-fill text-2xl"></i>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-instagram-fill text-2xl"></i>
                      </div>
                    </a>

                    {/* X (Twitter) */}
                    <a 
                      href="https://x.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
                      aria-label="X"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-twitter-x-fill text-2xl"></i>
                      </div>
                    </a>

                    {/* Farcaster */}
                    <a 
                      href="https://warpcast.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
                      aria-label="Farcaster"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-share-circle-fill text-2xl"></i>
                      </div>
                    </a>

                    {/* Buy Me a Coffee */}
                    <a 
                      href="https://buymeacoffee.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300"
                      aria-label="Buy Me a Coffee"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-cup-fill text-2xl"></i>
                      </div>
                    </a>
                  </div>
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
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <p className="text-xs tracking-widest uppercase text-slate-400 bg-white/80 px-4 py-2 inline-block border border-slate-200 max-w-xs md:max-w-none">
            MetaSumma A Vantage Point for Pattern, Signal, and Shared Altitude
          </p>
        </div>
      </div>
    </section>
  );
}
