interface HeroProps {
  scrollProgress: number;
}

export default function Hero({ scrollProgress }: HeroProps) {
  // Calculate opacity and position for each line based on scroll
  const line3Opacity = Math.max(0, 1 - (scrollProgress / 5));
  const line2Opacity = Math.max(0.3, 1 - ((scrollProgress - 5) / 10));
  const line2TranslateY = Math.min(20, (scrollProgress - 5) * 2);
  const line1Scale = Math.max(0.85, 1 - ((scrollProgress - 12) / 100));
  const line1TranslateY = Math.min(30, (scrollProgress - 12) * 1.5);
  const line1Opacity = Math.max(0.6, 1 - ((scrollProgress - 25) / 50));

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8">
      {/* Logo - Top Left, Navigation - Top Right */}
      <div className="fixed top-8 left-8 z-50 flex items-start gap-8">
        <div>
          <h1 className="text-2xl font-light tracking-tight text-slate-800 bg-white/90 px-4 py-2 border border-slate-200">
            MetaSumma
          </h1>
          {/* Hexagon Logo - Now clickable */}
          <a href="/resonance" className="block mt-4">
            <div className="flex items-center justify-center w-16 h-16 bg-white/90 border border-slate-200 hover:bg-white transition-colors duration-300 cursor-pointer">
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 48 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-700"
              >
                <path 
                  d="M24 4L40 14V34L24 44L8 34V14L24 4Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none"
                />
                <path 
                  d="M24 14L32 19V29L24 34L16 29V19L24 14Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  fill="none"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Hero Text - Three Lines with Staggered Fade */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* MetaSumma Logo Image */}
        <div
          className="transition-all duration-1000 ease-out mb-12"
          style={{
            opacity: line1Opacity,
            transform: `translateY(${line1TranslateY}px) scale(${line1Scale})`,
          }}
        >
          <img 
            src="https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/4094870d4918670db0a15844c06705ac.png" 
            alt="MetaSumma"
            className="h-24 md:h-32 lg:h-40 w-auto mx-auto"
          />
        </div>

        {/* Line 1 - Strongest */}
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: line1Opacity,
            transform: `translateY(${line1TranslateY}px) scale(${line1Scale})`,
          }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 leading-tight tracking-tight bg-white/90 px-8 py-4 border border-slate-200 inline-block">
            A vantage point for pattern, signal, and shared altitude.
          </p>
        </div>

        {/* Line 2 - Medium */}
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: line2Opacity,
            transform: `translateY(${line2TranslateY}px)`,
          }}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-extralight text-slate-700 leading-tight tracking-tight bg-white/88 px-8 py-4 border border-slate-200 inline-block">
            Observations from beyond the loop.
          </p>
        </div>

        {/* Line 3 - Lightest */}
        <div
          className="transition-opacity duration-1000 ease-out"
          style={{
            opacity: line3Opacity,
          }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-extralight text-slate-600 leading-tight tracking-widest uppercase text-xs md:text-sm bg-white/85 px-8 py-4 border border-slate-200 inline-block">
            Reflections from worlds in overlay.
          </p>
        </div>

        {/* Social Media Icons */}
        <div
          className="transition-opacity duration-1000 ease-out pt-8"
          style={{
            opacity: line3Opacity,
          }}
        >
          <div className="flex items-center justify-center gap-6 bg-white/85 px-8 py-4 border border-slate-200 inline-flex">
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
    </section>
  );
}