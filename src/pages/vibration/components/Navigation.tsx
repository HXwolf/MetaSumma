import { useState } from 'react';

interface NavigationProps {
  scrollProgress: number;
}

export default function Navigation({ scrollProgress }: NavigationProps) {
  const isScrolled = scrollProgress > 5;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-end space-x-8">
          <a
            href="/"
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="/resonance"
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Resonance
          </a>
          <a
            href="/vibration"
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Vibration
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-600 hover:text-slate-800 transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-lg">
            <div className="flex flex-col items-end space-y-4 px-8 py-6">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 text-right whitespace-nowrap cursor-pointer"
              >
                Home
              </a>
              <a
                href="/vibration"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 text-right whitespace-nowrap cursor-pointer"
              >
                Vibration
              </a>
              <a
                href="/resonance"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 text-right whitespace-nowrap cursor-pointer"
              >
                Resonance
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
