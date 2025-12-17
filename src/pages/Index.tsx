import { useState, useCallback } from 'react';
import Background from '@/components/Background';
import Snowfall from '@/components/Snowfall';
import ChristmasLights from '@/components/ChristmasLights';
import FloatingDecorations from '@/components/FloatingDecorations';
import Header from '@/components/Header';
import LyricsDisplay from '@/components/LyricsDisplay';

const Index = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStateChange = useCallback((started: boolean) => {
    setIsStarted(started);
  }, []);

  // Bạn có thể thay đổi nội dung này theo ý muốn
  const lyrics = [
    "🎄 Merry Christmas! 🎄",
    "Chúc bạn một mùa Giáng sinh an lành",
    "Tràn đầy yêu thương và hạnh phúc",
    "Những khoảnh khắc ấm áp bên người thân",
    "Và một năm mới tràn đầy niềm vui ✨",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background layers */}
      <Background />
      <Snowfall />
      <ChristmasLights />
      <FloatingDecorations />

      {/* Main content */}
      <main className="relative z-30 flex-1 flex flex-col justify-center container mx-auto px-4 py-20">
        <Header isStarted={isStarted} />
        <LyricsDisplay 
          lines={lyrics} 
          intervalMs={2500} 
          onStateChange={handleStateChange}
        />
      </main>

      {/* Footer */}
      <footer className="relative z-30 text-center pb-8">
        <p className="text-sm text-muted-foreground/60">
          Made with ❤️ for Christmas 2024
        </p>
      </footer>
    </div>
  );
};

export default Index;
