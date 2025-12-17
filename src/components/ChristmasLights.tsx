import { useMemo } from 'react';

const ChristmasLights = () => {
  const colors = useMemo(() => [
    { bg: 'bg-christmas-red', glow: 'hsl(350, 85%, 50%)' },
    { bg: 'bg-christmas-gold', glow: 'hsl(45, 100%, 55%)' },
    { bg: 'bg-christmas-green-bright', glow: 'hsl(140, 90%, 45%)' },
    { bg: 'bg-christmas-blue', glow: 'hsl(210, 100%, 70%)' },
    { bg: 'bg-christmas-pink', glow: 'hsl(330, 90%, 70%)' },
  ], []);

  const lights = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      delay: i * 0.2,
    })), [colors]);

  return (
    <div className="fixed top-0 left-0 right-0 z-20">
      {/* Wire line */}
      <div className="h-4 relative">
        <svg className="w-full h-full" viewBox="0 0 1200 20" preserveAspectRatio="none">
          <path
            d="M0,8 Q30,18 60,8 Q90,18 120,8 Q150,18 180,8 Q210,18 240,8 Q270,18 300,8 Q330,18 360,8 Q390,18 420,8 Q450,18 480,8 Q510,18 540,8 Q570,18 600,8 Q630,18 660,8 Q690,18 720,8 Q750,18 780,8 Q810,18 840,8 Q870,18 900,8 Q930,18 960,8 Q990,18 1020,8 Q1050,18 1080,8 Q1110,18 1140,8 Q1170,18 1200,8"
            fill="none"
            stroke="hsl(150, 30%, 20%)"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Lights row */}
      <div className="flex justify-between px-4 -mt-1">
        {lights.map((light, index) => (
          <div
            key={light.id}
            className="flex flex-col items-center"
            style={{
              transform: `translateY(${Math.sin(index * 0.5) * 6}px)`,
            }}
          >
            <div className="w-1.5 h-1.5 bg-muted rounded-t-sm" />
            <div
              className={`w-2.5 h-4 rounded-b-full ${light.color.bg} animate-twinkle`}
              style={{
                animationDelay: `${light.delay}s`,
                animationDuration: '1.5s',
                boxShadow: `0 0 8px ${light.color.glow}, 0 0 16px ${light.color.glow}`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChristmasLights;
