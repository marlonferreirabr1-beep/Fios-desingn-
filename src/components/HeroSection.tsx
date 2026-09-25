import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Award, Star, Compass } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { RealWhatsAppLogo, RealInstagramLogo } from './icons/BrandIcons';
import { GlowingIcon3D } from './ui/GlowingIcon3D';

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallaxLogo = useTransform(scrollY, [0, 600], [0, 90]);
  const opacityFade = useTransform(scrollY, [0, 450], [1, 0.2]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#09090c] via-[#070709] to-[#0a0a0d] preserve-3d"
    >
      {/* 3D Cinematic Volumetric Overhead Spotlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Diamond Rim Light Overhead */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[650px] bg-gradient-to-b from-zinc-200/25 via-zinc-600/10 to-transparent blur-[140px] rounded-full" />
        
        {/* Dynamic Secondary Spotlights */}
        <div className="absolute top-1/4 left-[-5%] w-[450px] h-[450px] bg-zinc-500/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-[-5%] w-[500px] h-[500px] bg-zinc-600/15 rounded-full blur-[150px] animate-pulse" />

        {/* Diagonal 3D Specular Light Beams */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />
      </div>

      <motion.div
        style={{ opacity: opacityFade }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center preserve-3d"
      >
        {/* LOGO OFICIAL FIOS DESIGN — 3D CINEMATIC FLOATING COM HALO VOLUMÉTRICO */}
        <motion.div
          style={{ y: yParallaxLogo }}
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative group mb-10 px-4 preserve-3d"
        >
          {/* Luminous Glow Halo Layer 1: Wide Deep Soft Ambient */}
          <div className="absolute inset-0 -inset-x-20 -inset-y-14 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-3xl opacity-85 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full" />
          
          {/* Luminous Glow Halo Layer 2: Core Radiant Specular Ring */}
          <div className="absolute inset-0 -inset-x-8 -inset-y-6 bg-radial from-white/40 via-zinc-200/20 to-transparent blur-2xl opacity-95 group-hover:scale-110 transition-all duration-700 pointer-events-none rounded-full" />

          {/* Core Spotlight Behind Logo Center with Breathing Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-white/25 blur-2xl rounded-full pointer-events-none animate-pulse" />

          {/* Continuous Smooth 3D Levitation Float */}
          <motion.div
            animate={{ y: [-6, 6, -6], rotateZ: [-0.3, 0.3, -0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex justify-center cursor-pointer preserve-3d"
          >
            <img
              src={SALON_DATA.logoUrl}
              alt="Logo Oficial Fios Design"
              className="w-auto h-52 sm:h-64 md:h-76 max-w-[92vw] object-contain select-none transition-transform duration-700 group-hover:scale-[1.04]"
              style={{
                filter:
                  'drop-shadow(0 0 35px rgba(255, 255, 255, 0.55)) drop-shadow(0px 20px 35px rgba(0, 0, 0, 0.98)) drop-shadow(0px 3px 6px rgba(255, 255, 255, 0.4))',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Frase de Apoio Elegante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mb-10 max-w-xl mx-auto px-4"
        >
          <p className="font-editorial italic text-2xl sm:text-3xl text-zinc-100 tracking-wide leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            "{SALON_DATA.heroSubtitle}"
          </p>
        </motion.div>

        {/* Os Dois Botões Principais em Alto Relevo 3D com Logos Oficiais Brilhantes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto px-4"
        >
          {/* Botão 1: AGENDAR HORÁRIO -> WhatsApp Oficial com 3D Sheen */}
          <a
            href={SALON_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d-silver shimmer-trigger group w-full sm:w-auto min-w-[260px] px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3.5 transition-all duration-300 relative overflow-hidden"
          >
            <RealWhatsAppLogo size={24} />
            <span>AGENDAR HORÁRIO</span>
          </a>

          {/* Botão 2: CONHECER O INSTAGRAM -> Instagram Oficial com 3D Sheen */}
          <a
            href={SALON_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d-dark shimmer-trigger group w-full sm:w-auto min-w-[260px] px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3.5 transition-all duration-300 relative overflow-hidden"
          >
            <RealInstagramLogo size={24} />
            <span>CONHECER O INSTAGRAM</span>
          </a>
        </motion.div>

        {/* Micro-Features Row with 3D Mini-Medallions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="mt-16 pt-10 border-t border-white/10 w-full grid grid-cols-3 gap-3 sm:gap-8 text-center text-xs text-zinc-400"
        >
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <GlowingIcon3D
              icon={<Star className="w-5 h-5 text-zinc-100" />}
              size="sm"
              glowColor="silver"
            />
            <span className="font-cinzel text-sm sm:text-base font-bold text-zinc-100 uppercase tracking-wider">
              100% Personalizado
            </span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 hidden sm:inline">
              Visagismo & Cuidado
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group cursor-default border-x border-white/10 px-2 sm:px-4">
            <GlowingIcon3D
              icon={<Award className="w-5 h-5 text-amber-200" />}
              size="sm"
              glowColor="amber"
            />
            <span className="font-cinzel text-sm sm:text-base font-bold text-zinc-100 uppercase tracking-wider">
              Alto Padrão
            </span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 hidden sm:inline">
              Atendimento VIP
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 group cursor-default">
            <GlowingIcon3D
              icon={<Compass className="w-5 h-5 text-emerald-300" />}
              size="sm"
              glowColor="emerald"
            />
            <span className="font-cinzel text-sm sm:text-base font-bold text-zinc-100 uppercase tracking-wider">
              Antares
            </span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 hidden sm:inline">
              Maceió - AL
            </span>
          </div>
        </motion.div>

        {/* Scroll Motion Indicator */}
        <motion.a
          href="#sobre"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-12 text-zinc-400 hover:text-white transition-colors flex flex-col items-center gap-1.5 group cursor-pointer"
          aria-label="Rolar para baixo"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold opacity-75 group-hover:opacity-100 text-zinc-300">
            Descubra o Espaço
          </span>
          <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center shadow-lg group-hover:border-white/40 transition-colors">
            <ChevronDown className="w-4 h-4 text-zinc-200" />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};
