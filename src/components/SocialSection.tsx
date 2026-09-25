import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Sparkles, Heart } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { RealInstagramLogo } from './icons/BrandIcons';
import { Card3D } from './ui/Card3D';

export const SocialSection: React.FC = () => {
  return (
    <section
      id="instagram"
      className="relative py-32 px-4 bg-gradient-to-b from-[#08080a] via-[#121218] to-[#0a0a0d] border-t border-white/10 overflow-hidden preserve-3d"
    >
      {/* Radiant Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-fuchsia-600/10 via-rose-600/10 to-amber-600/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-zinc-400 font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-300" />
            <span>Comunidade & Bastidores</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-white uppercase drop-shadow-md">
            Acompanhe a Fios Design
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-light max-w-lg mx-auto">
            Inspirações diárias, procedimentos passo a passo, dicas de cuidados e novidades exclusivas em nosso feed oficial.
          </p>
        </motion.div>

        {/* 3D Instagram Card Showcase with Interactive Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <Card3D
            intensity={14}
            glowColor="rgba(214, 36, 159, 0.18)"
            className="w-full"
          >
            <div className="rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-gradient-to-b from-[#202028] via-[#14141c] to-[#0c0c10] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1.5px_2px_rgba(255,255,255,0.3)] group">
              {/* Top Hairline Metallic Accent */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.4)]" />

              {/* REAL 3D Instagram Icon in High Relief */}
              <div className="flex justify-center mb-6">
                <div className="relative group/icon cursor-pointer">
                  {/* Backlight reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/40 via-fuchsia-500/30 to-amber-500/20 blur-2xl rounded-full scale-125 animate-pulse" />
                  <div className="p-3 rounded-3xl bg-zinc-900/80 border border-white/20 shadow-2xl relative z-10 backdrop-blur-md group-hover/icon:scale-105 transition-transform duration-300">
                    <RealInstagramLogo size={74} />
                  </div>
                </div>
              </div>

              {/* Official Handle */}
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-widest uppercase mb-2 drop-shadow-sm">
                {SALON_DATA.instagramHandle}
              </h3>

              <p className="text-zinc-400 text-sm font-light mb-8 max-w-md mx-auto leading-relaxed">
                Junte-se às nossas clientes e acompanhe as últimas tendências e transformações em Maceió.
              </p>

              {/* Social Proof Tags with 3D Chips */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-300 font-medium mb-8">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-300" /> Transformações Reais
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-rose-400" /> Atendimento de Excelência
                </span>
              </div>

              {/* Botão: SEGUIR NO INSTAGRAM -> Instagram Oficial */}
              <div className="flex justify-center">
                <a
                  href={SALON_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-silver shimmer-trigger px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3.5 transition-transform duration-300 min-w-[270px] shadow-xl"
                >
                  <RealInstagramLogo size={22} />
                  <span>SEGUIR NO INSTAGRAM</span>
                  <ExternalLink className="w-4 h-4 text-zinc-900" />
                </a>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
};
