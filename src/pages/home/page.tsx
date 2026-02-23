import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Signal from './components/Signal';
import Observation from './components/Observation';
import Convergence from './components/Convergence';
import Archive from './components/Archive';
import Reflection from './components/Reflection';
import Connection from './components/Connection';
import Navigation from './components/Navigation';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background - The World */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/535b47a4b929232e9268e00f9625663d.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content Layer - The Observer */}
      <div className="relative z-10">
        <Navigation scrollProgress={scrollProgress} />
        <Hero scrollProgress={scrollProgress} />
        <Signal />
        <Observation />
        <Convergence />
        <Archive />
        <Reflection />
        <Connection />
      </div>
    </div>
  );
}