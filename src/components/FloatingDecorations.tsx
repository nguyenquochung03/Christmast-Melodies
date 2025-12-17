import { useMemo } from 'react';

const FloatingDecorations = () => {
  const decorations = useMemo(() => [
    { emoji: '🎄', position: 'top-28 left-4 md:left-8', size: 'text-4xl md:text-5xl', delay: 0 },
    { emoji: '⭐', position: 'top-36 right-4 md:right-12', size: 'text-3xl md:text-4xl', delay: 0.5 },
    { emoji: '🎁', position: 'bottom-32 left-6 md:left-12', size: 'text-4xl md:text-5xl', delay: 1 },
    { emoji: '🎅', position: 'bottom-24 right-4 md:right-8', size: 'text-4xl md:text-5xl', delay: 1.5 },
    { emoji: '❄️', position: 'top-1/2 left-2 md:left-6', size: 'text-2xl md:text-3xl', delay: 2 },
    { emoji: '🔔', position: 'top-1/3 right-2 md:right-6', size: 'text-2xl md:text-3xl', delay: 2.5 },
  ], []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {decorations.map((dec, index) => (
        <div
          key={index}
          className={`absolute ${dec.position} ${dec.size} animate-float opacity-50`}
          style={{ 
            animationDelay: `${dec.delay}s`,
            animationDuration: '5s',
          }}
        >
          {dec.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingDecorations;
