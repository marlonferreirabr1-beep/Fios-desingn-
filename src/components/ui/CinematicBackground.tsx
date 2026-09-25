import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const CinematicBackground: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax transform calculations for floating cinematic depth
  const yOrb1 = useTransform(scrollY, [0, 3000], [0, -350]);
  const yOrb2 = useTransform(scrollY, [0, 3000], [0, 420]);
  const yOrb3 = useTransform(scrollY, [0, 3000], [0, -180]);
  const opacityBeams = useTransform(scrollY, [0, 500, 2000], [0.35, 0.55, 0.25]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cinematic Film Vignette Edge */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#070709]/40 to-[#050507] opacity-90" />

      {/* Floating 3D Ambient Orbs */}
      <motion.div
        style={{ y: yOrb1 }}
        className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-zinc-600/15 via-zinc-800/10 to-transparent blur-[140px]"
      />

      <motion.div
        style={{ y: yOrb2 }}
        className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-zinc-500/12 via-zinc-900/10 to-transparent blur-[160px]"
      />

      <motion.div
        style={{ y: yOrb3 }}
        className="absolute top-[75%] left-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-zinc-700/15 via-zinc-900/10 to-transparent blur-[150px]"
      />

      {/* Subtle Volumetric Light Beam from Top */}
      <motion.div
        style={{ opacity: opacityBeams }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-gradient-to-b from-white/10 via-zinc-400/5 to-transparent blur-[100px] transform -rotate-6"
      />

      {/* Microscopic Fine Noise Texture for Film Grain Feel */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};
