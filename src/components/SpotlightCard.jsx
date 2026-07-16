import { useState } from 'react';

const SpotlightCard = ({ children, className = '', glowColor = 'rgba(59, 130, 246, 0.1)' }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-3xl border border-white/[0.04] bg-white/[0.015] backdrop-blur-md transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${className}`}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Futuristic corner brackets */}
      <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-white/15 pointer-events-none group-hover:border-white/40 transition-colors duration-300" />
      <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-white/15 pointer-events-none group-hover:border-white/40 transition-colors duration-300" />
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-white/15 pointer-events-none group-hover:border-white/40 transition-colors duration-300" />
      <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-white/15 pointer-events-none group-hover:border-white/40 transition-colors duration-300" />

      {/* Decorative top grid lines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Inner Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
