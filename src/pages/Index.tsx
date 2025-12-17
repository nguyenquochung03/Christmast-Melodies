import { useState, useCallback } from 'react';
import Background from '@/components/Background';
import Snowfall from '@/components/Snowfall';
import ChristmasLights from '@/components/ChristmasLights';
import FloatingDecorations from '@/components/FloatingDecorations';
import Header from '@/components/Header';
import LyricsDisplay, { type LyricLine } from '@/components/LyricsDisplay';

const Index = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStateChange = useCallback((started: boolean) => {
    setIsStarted(started);
  }, []);

  const lyrics: LyricLine[] = [
    {
      text: 'Me? I guess I was a shoulder to cry on',
      delayMs: 4050,
    },
    {
      text: 'A face on a lover with a fire in his heart',
      delayMs: 4000,
    },
    {
      text: 'A man undercover but you tore me apart',
      delayMs: 6200,
    },
    {
      text: 'Oooh Oooh',
      delayMs: 3000,
    },
    {
      text: "Now I've found a real love, you'll never fool me again",
      delayMs: 6000,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <Background />
      <Snowfall />
      <ChristmasLights />
      <FloatingDecorations />

      <main className="relative z-30 flex-1 flex flex-col justify-center container mx-auto px-4 py-20">
        <Header isStarted={isStarted} />
        <LyricsDisplay
          lines={lyrics}
          onStateChange={handleStateChange}
        />
      </main>

      <footer className="relative z-30 text-center pb-8">
        <p className="text-sm text-muted-foreground/60">
          Made with ❤️ for Christmas 2024
        </p>
      </footer>
    </div>
  );
};

export default Index;
