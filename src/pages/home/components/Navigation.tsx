import { useState } from 'react';

interface NavigationProps {
  scrollProgress: number;
}

export default function Navigation({ scrollProgress }: NavigationProps) {
  const isScrolled = scrollProgress > 5;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-end space-x-8">
          <button
            onClick={() => scrollToSection('signal')}
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Signal
          </button>
          <button
            onClick={() => scrollToSection('observation')}
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Observation
          </button>
          <button
            onClick={() => scrollToSection('convergence')}
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Convergence
          </button>
          <button
            onClick={() => scrollToSection('archive')}
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Archive
          </button>
          <button
            onClick={() => scrollToSection('reflection')}
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Reflection
          </button>
          <button
            onClick={() => scrollToSection('connection')}
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Connection
          </button>
          <a
            href="/vibration"
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Vibration
          </a>
          <a
            href="/resonance"
            className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
          >
            Resonance
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
              <button
                onClick={() => scrollToSection('signal')}
                className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 text-right whitespace-nowrap cursor-pointer"
              >
                Signal
              </button>
              <button
                onClick={() => scrollToSection('observation')}
                className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 text-right whitespace-nowrap cursor-pointer"
              >
                Observation
              </button>
              <button
                onClick={() => scrollToSection('convergence')}
                className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 text-right whitespace-nowrap cursor-pointer"
              >
                Convergence
              </button>
              <button
                onClick={() => scrollToSection('archive')}
                className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 text-right whitespace-nowrap cursor-pointer"
              >
                Archive
              </button>
              <button
                onClick={() => scrollToSection('reflection')}
                className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 text-right whitespace-nowrap cursor-pointer"
              >
                Reflection
              </button>
              <button
                onClick={() => scrollToSection('connection')}
                className="text-sm tracking-widest uppercase text-slate-600 hover:text-slate-800 transition-colors duration-300 text-right whitespace-nowrap cursor-pointer"
              >
                Connection
              </button>
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
