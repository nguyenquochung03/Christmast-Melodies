import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw } from 'lucide-react';

export interface LyricLine {
  text: string;
  delayMs: number;
}

interface LyricsDisplayProps {
  lines: LyricLine[];
  onStateChange?: (isStarted: boolean) => void;
}

const lineColors = [
  'text-christmas-gold',
  'text-christmas-red-bright',
  'text-christmas-green-bright',
  'text-christmas-pink',
  'text-christmas-cyan',
];

const LyricsDisplay = ({ lines, onStateChange }: LyricsDisplayProps) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<number[]>([]);

  const hasStarted = displayedLines.length > 0;
  const isComplete = displayedLines.length === lines.length;

  useEffect(() => {
    onStateChange?.(hasStarted);
  }, [hasStarted, onStateChange]);

  useEffect(() => {
    if (!isPlaying || currentIndex >= lines.length - 1) {
      if (currentIndex >= lines.length - 1) setIsPlaying(false);
      return;
    }

    const delay = lines[currentIndex].delayMs;

    const timer = setTimeout(() => {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setDisplayedLines((prev) => [...prev, nextIndex]);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying, lines]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    if (currentIndex === -1) {
      setCurrentIndex(0);
      setDisplayedLines([0]);
    }
  }, [currentIndex]);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setCurrentIndex(-1);
    setDisplayedLines([]);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Lyrics container */}
      <div
        className={`glass-card rounded-2xl px-6 md:px-12 py-8 md:py-10 w-full max-w-4xl mx-auto transition-all duration-500 ${
          hasStarted ? 'min-h-[300px]' : 'min-h-[200px]'
        }`}
      >
        {!hasStarted && (
          <div className="text-center animate-fade-in-up">
            <div className="text-5xl mb-4">🎵</div>
            <p className="text-muted-foreground text-lg">
              Press "Start" to enjoy Christmas song lyrics!
            </p>
          </div>
        )}

        <div className="space-y-6 text-center">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                displayedLines.includes(index)
                  ? 'opacity-100 animate-lyric-appear'
                  : 'opacity-0 h-0 overflow-hidden'
              }`}
            >
              <p
                className={`font-script text-2xl md:text-4xl lg:text-5xl leading-relaxed transition-all duration-300 ${
                  index === currentIndex
                    ? `${lineColors[index % lineColors.length]} animate-lyric-glow scale-[1.02]`
                    : 'text-foreground/60'
                }`}
              >
                {line.text}
              </p>
            </div>
          ))}
        </div>

        {isComplete && (
          <div className="mt-8 text-center animate-scale-in">
            <div className="text-4xl mb-2">🎄 ✨ 🎅 ✨ 🎄</div>
            <p className="text-muted-foreground font-medium">
              Merry Christmas!
            </p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-8">
        {!isPlaying && currentIndex < lines.length - 1 && (
          <Button
            onClick={handlePlay}
            size="lg"
            className="bg-gradient-to-r from-christmas-red to-christmas-green hover:opacity-90 text-foreground font-semibold gap-2 animate-pulse-glow px-8 py-6 text-base rounded-full shadow-lg"
          >
            <Play className="w-5 h-5" />
            {currentIndex === -1 ? 'Start' : 'Continue'}
          </Button>
        )}

        {hasStarted && (
          <Button
            onClick={handleReset}
            size="lg"
            variant="outline"
            className="border-christmas-gold/40 text-christmas-gold hover:bg-christmas-gold/10 gap-2 px-6 py-6 text-base rounded-full"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};

export default LyricsDisplay;
