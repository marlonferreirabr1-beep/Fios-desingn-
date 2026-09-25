import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Gem, HeartHandshake, Eye, Flower2, Footprints, ArrowUpRight } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { GlowingIcon3D } from './ui/GlowingIcon3D';
import { Card3D } from './ui/Card3D';

export const AboutSection: React.FC = () => {
  const getPillarConfig = (type: string) => {
    switch (type) {
      case 'cabelo':
        return {
          icon: <Sparkles className="w-6 h-6 text-zinc-100" />,
          glow: 'silver' as const,
        };
      case 'unha':
        return {
          icon: <Gem className="w-6 h-6 text-rose-200" />,
          glow: 'rose' as const,
        };
      case 'pele':
        return {
          icon: <HeartHandshake className="w-6 h-6 text-emerald-300" />,
          glow: 'emerald' as const,
        };
      case 'sobrancelha':
        return {
          icon: <Eye className="w-6 h-6 text-cyan-200" />,
          glow: 'cyan' as const,
        };
      case 'facial':
        return {
          icon: <Flower2 className="w-6 h-6 text-amber-200" />,
          glow: 'amber' as const,
        };
      case 'spa-pes':
      default:
        return {
          icon: <Footprints className="w-6 h-6 text-emerald-200" />,
          glow: 'emerald' as const,
        };
    }
  };

  return (
    <section
      id="sobre"
      className="relative py-32 px-4 bg-gradient-to-b from-[#09090c] via-[#101015] to-[#0a0a0d] border-t border-white/10 overflow-hidden preserve-3d"
    >
      {/* 3D Atmospheric Radial Glow in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-zinc-600/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Cinematic Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-zinc-400 font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
            <span>Conceito & Essência</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.2em] text-white uppercase mb-6 drop-shadow-md">
            {SALON_DATA.name}
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent mx-auto mb-6 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light drop-shadow-sm">
            {SALON_DATA.aboutText}
          </p>
        </motion.div>

        {/* 6 Cards 3D Interactive Tilt: Cabelo, Unha, Pele, Sobrancelha, Facial, Spa dos Pés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SALON_DATA.pillars.map((pillar, index) => {
            const config = getPillarConfig(pillar.id);

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40, rotateX: 6 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card3D
                  href="#servicos"
                  intensity={10}
                  glowColor="rgba(255, 255, 255, 0.12)"
                  className="h-full"
                >
                  <div className="metallic-card rounded-2xl p-7 flex flex-col justify-between h-full relative cursor-pointer group transition-all duration-300">
                    {/* Top 3D Chrome Bevel Edge */}
                    <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-2xl shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

                    <div>
                      {/* Top Header Row with 3D Glowing Medallion & Clean Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <GlowingIcon3D
                          icon={config.icon}
                          glowColor={config.glow}
                          size="md"
                        />

                        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-zinc-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 shadow-inner">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.18em] text-white uppercase mb-3 group-hover:text-zinc-100 transition-colors drop-shadow-sm">
                        {pillar.title}
                      </h3>

                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light group-hover:text-zinc-300 transition-colors">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Action Link Footer with 3D Elevated Button */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs tracking-wider uppercase text-zinc-300 group-hover:text-white transition-colors">
                      <span className="font-semibold tracking-[0.15em]">Conhecer serviço</span>
                      <div className="w-8 h-8 rounded-full bg-zinc-800/90 border border-white/15 flex items-center justify-center group-hover:bg-zinc-700 group-hover:border-white/30 group-hover:scale-110 shadow-md transition-all">
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-200 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
