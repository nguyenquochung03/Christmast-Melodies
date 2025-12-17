import { useMemo } from 'react';

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  isSnow: boolean;
}

const Snowfall = () => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.3,
      isSnow: i % 6 !== 0,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-snowfall"
          style={{
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.isSnow ? (
            <div 
              className="rounded-full bg-christmas-snow"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
              }}
            />
          ) : (
            <span 
              className="text-christmas-gold"
              style={{ 
                fontSize: `${particle.size * 3}px`,
                opacity: particle.opacity + 0.2,
                filter: 'drop-shadow(0 0 4px hsl(45, 100%, 55%))',
              }}
            >
              ✦
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
