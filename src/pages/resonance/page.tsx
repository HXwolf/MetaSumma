import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Content from './components/Content';
import Navigation from './components/Navigation';

export default function Resonance() {
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
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(https://static.readdy.ai/image/46e04b8c96e08f93680e66fd759611e1/22a4af870cfc45341fb00fe9bd09b3eb.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <Navigation scrollProgress={scrollProgress} />
        <Hero scrollProgress={scrollProgress} />
        <Content />
      </div>
    </div>
  );
}