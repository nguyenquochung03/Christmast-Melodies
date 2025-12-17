interface HeaderProps {
  isStarted: boolean;
}

const Header = ({ isStarted }: HeaderProps) => {
  return (
    <header className={`text-center transition-all duration-700 ${isStarted ? 'mb-8' : 'mb-12'}`}>
      {/* Main title */}
      <div className="relative inline-block">
        <h1 
          className={`font-display christmas-glow text-christmas-gold tracking-wide transition-all duration-700 ${
            isStarted 
              ? 'text-4xl md:text-5xl lg:text-6xl mb-2' 
              : 'text-5xl md:text-7xl lg:text-8xl mb-4'
          }`}
        >
          Merry Christmas
        </h1>
        
        {/* Decorative sparkles */}
        {!isStarted && (
          <>
            <span className="absolute -top-2 -left-4 text-xl md:text-2xl animate-twinkle text-christmas-gold" style={{ animationDelay: '0s' }}>✦</span>
            <span className="absolute -top-1 -right-3 text-lg md:text-xl animate-twinkle text-christmas-gold" style={{ animationDelay: '0.7s' }}>✦</span>
          </>
        )}
      </div>
      
      {/* Subtitle */}
      <p className={`font-script rainbow-text transition-all duration-700 ${
        isStarted ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
      }`}>
        Giáng Sinh An Lành
      </p>

      {/* Decorative line */}
      <div className={`glow-line mx-auto mt-4 transition-all duration-700 ${
        isStarted ? 'w-32 md:w-48' : 'w-48 md:w-64'
      }`} />

      {/* Emoji row - only show when not started */}
      {!isStarted && (
        <div className="flex justify-center gap-3 mt-6">
          {['🎄', '🎅', '🦌', '🎁', '⭐'].map((emoji, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-3xl animate-bounce-soft"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
