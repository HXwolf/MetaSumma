interface HeroProps {
  scrollProgress: number;
}

export default function Hero({ scrollProgress }: HeroProps) {
  const opacity = Math.max(0, 1 - scrollProgress / 30);
  const scale = Math.max(0.8, 1 - scrollProgress / 100);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="text-center"
        style={{
          opacity,
          transform: `scale(${scale})`,
          transition: 'opacity 0.1s ease-out'
        }}
      >
        <p className="text-5xl md:text-6xl lg:text-7xl font-extralight text-slate-800 leading-tight tracking-widest uppercase bg-white/90 px-8 py-4 border border-slate-200 inline-block">
          VIBRATION
        </p>
      </div>
    </section>
  );
}
