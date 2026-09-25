import React from 'react';

interface GlowingIcon3DProps {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glowColor?: 'silver' | 'emerald' | 'amber' | 'rose' | 'cyan';
  className?: string;
}

export const GlowingIcon3D: React.FC<GlowingIcon3DProps> = ({
  icon,
  size = 'md',
  glowColor = 'silver',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 rounded-xl',
    md: 'w-14 h-14 rounded-2xl',
    lg: 'w-16 h-16 rounded-2xl',
    xl: 'w-20 h-20 rounded-3xl',
  }[size];

  const glowStyles = {
    silver: {
      radial: 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(200,200,220,0.15) 50%, transparent 80%)',
      border: 'border-white/30',
      dropShadow: 'drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]',
      specular: 'rgba(255,255,255,0.4)',
    },
    emerald: {
      radial: 'radial-gradient(circle, rgba(37,211,102,0.45) 0%, rgba(20,180,80,0.15) 50%, transparent 80%)',
      border: 'border-emerald-400/40',
      dropShadow: 'drop-shadow-[0_0_14px_rgba(37,211,102,0.45)]',
      specular: 'rgba(167,243,208,0.5)',
    },
    amber: {
      radial: 'radial-gradient(circle, rgba(251,191,36,0.45) 0%, rgba(217,119,6,0.15) 50%, transparent 80%)',
      border: 'border-amber-400/40',
      dropShadow: 'drop-shadow-[0_0_14px_rgba(251,191,36,0.4)]',
      specular: 'rgba(254,240,138,0.5)',
    },
    rose: {
      radial: 'radial-gradient(circle, rgba(244,63,94,0.45) 0%, rgba(190,18,60,0.15) 50%, transparent 80%)',
      border: 'border-rose-400/40',
      dropShadow: 'drop-shadow-[0_0_14px_rgba(244,63,94,0.4)]',
      specular: 'rgba(254,205,211,0.5)',
    },
    cyan: {
      radial: 'radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(2,132,199,0.15) 50%, transparent 80%)',
      border: 'border-cyan-400/40',
      dropShadow: 'drop-shadow-[0_0_14px_rgba(56,189,248,0.4)]',
      specular: 'rgba(186,230,253,0.5)',
    },
  }[glowColor];

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 group/medallion ${className}`}>
      {/* 3D Atmospheric Radial Glow Halo behind Medallion */}
      <div
        className="absolute -inset-2.5 rounded-full opacity-70 group-hover/medallion:opacity-100 blur-lg transition-all duration-500 pointer-events-none group-hover/medallion:scale-110"
        style={{ background: glowStyles.radial }}
      />

      {/* Main 3D Metallic Medallion */}
      <div
        className={`relative ${sizeClasses} bg-gradient-to-b from-[#2a2a34] via-[#181820] to-[#0c0c10] border ${glowStyles.border} flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.85),inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.8)] transition-all duration-400 group-hover/medallion:scale-105 group-hover/medallion:-translate-y-1 preserve-3d overflow-hidden`}
      >
        {/* Top 3D Specular Sheen Rim */}
        <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-xl" />

        {/* Diagonal Bevel Ray */}
        <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 pointer-events-none group-hover/medallion:translate-x-full transition-transform duration-700" />

        {/* The Icon Itself with Specular Glow */}
        <div className={`relative z-10 ${glowStyles.dropShadow} transition-transform duration-300 group-hover/medallion:scale-110`}>
          {icon}
        </div>
      </div>
    </div>
  );
};
