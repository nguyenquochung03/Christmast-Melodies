const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base dark gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% -10%, hsl(220, 50%, 15%) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 0% 100%, hsl(350, 60%, 12%) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 100% 100%, hsl(150, 50%, 10%) 0%, transparent 50%),
            hsl(240, 20%, 6%)
          `,
        }}
      />

      {/* Subtle aurora */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(ellipse 60% 30% at 30% 20%, hsl(280, 70%, 40% / 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 50% 25% at 70% 30%, hsl(200, 80%, 50% / 0.3) 0%, transparent 50%)
          `,
        }}
      />

      {/* Stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-christmas-snow animate-twinkle"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
