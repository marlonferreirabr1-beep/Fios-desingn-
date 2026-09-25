import React from 'react';
import { motion } from 'motion/react';
import { Flame, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { RealWhatsAppLogo } from './icons/BrandIcons';
import { Card3D } from './ui/Card3D';
import { GlowingIcon3D } from './ui/GlowingIcon3D';

export const PromoSection: React.FC = () => {
  return (
    <section
      id="promocao"
      className="relative py-32 px-4 bg-gradient-to-b from-[#0a0a0d] via-[#14141c] to-[#08080a] border-t border-white/10 overflow-hidden preserve-3d"
    >
      {/* 3D Atmospheric Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-red-900/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-zinc-700/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Urgency Ribbon / Top Badge with 3D Medallion */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-950/50 border border-red-500/40 text-red-200 text-xs tracking-[0.25em] uppercase font-bold backdrop-blur-xl shadow-[0_8px_25px_rgba(239,68,68,0.25),inset_0_1px_1px_rgba(255,255,255,0.3)]"
          >
            <Flame className="w-4 h-4 text-red-400 animate-pulse" />
            <span>OFERTA EXCLUSIVA POR TEMPO LIMITADO</span>
          </motion.div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-white uppercase mb-3 drop-shadow-md">
            {SALON_DATA.promo.title}
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-zinc-300 tracking-wider">
            {SALON_DATA.promo.subtitle}
          </p>
        </motion.div>

        {/* Main Promo Grid: Official Promo Image + Structured Offer Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Column 1: Official Promo Image with 3D Tilt Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <Card3D
              intensity={12}
              glowColor="rgba(255, 255, 255, 0.15)"
              className="max-w-md w-full"
            >
              <div className="relative group rounded-3xl overflow-hidden bg-black border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1px_2px_rgba(255,255,255,0.35)] p-2">
                {/* 3D Top Sheen Rim */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />

                <div className="rounded-2xl overflow-hidden bg-zinc-950">
                  <img
                    src={SALON_DATA.promoImageUrl}
                    alt="Promoção Cronograma Capilar Fios Design"
                    className="w-full h-auto object-contain select-none transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </Card3D>
          </motion.div>

          {/* Column 2: Offer Details, 4 Treatments & Pricing in 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* The 4 Treatments Grid with 3D Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {SALON_DATA.promo.treatments.map((t, idx) => (
                <div
                  key={t.title}
                  className="p-4 rounded-xl bg-zinc-900/70 border border-white/10 metallic-sheen hover:border-white/25 hover:-translate-y-1 transition-all duration-300 flex items-start gap-3.5 shadow-md"
                >
                  <span className="text-2xl select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" role="img" aria-label={t.title}>
                    {t.icon}
                  </span>
                  <div>
                    <h4 className="font-cinzel text-sm font-bold tracking-[0.15em] text-white uppercase">
                      {t.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
                      {t.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Showcase Card in 3D Relief */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#202028] via-[#14141a] to-[#0c0c10] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9),inset_0_1.5px_2px_rgba(255,255,255,0.3)] relative overflow-hidden mb-6 preserve-3d">
              {/* Metallic highlight hairline */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.4)]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 block mb-1">
                    Valor Regular
                  </span>
                  <span className="text-xl sm:text-2xl font-cinzel line-through text-zinc-500 font-semibold">
                    {SALON_DATA.promo.originalPrice}
                  </span>
                </div>

                <div className="sm:text-right">
                  <span className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold block mb-1">
                    Condição Especial
                  </span>
                  <div className="flex items-baseline sm:justify-end gap-1.5">
                    <span className="text-xs text-zinc-300 uppercase tracking-wider">Por apenas</span>
                    <span className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-wider drop-shadow-md">
                      {SALON_DATA.promo.currentPrice}
                    </span>
                  </div>
                </div>
              </div>

              {/* Urgency Callout */}
              <div className="flex items-center gap-2.5 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide mb-6 bg-amber-500/10 border border-amber-500/30 px-4 py-3 rounded-xl shadow-inner">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SALON_DATA.promo.urgencyText}</span>
              </div>

              {/* Botão: QUERO AGENDAR -> WhatsApp Oficial */}
              <a
                href={SALON_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-silver shimmer-trigger w-full py-4 rounded-2xl font-bold text-sm sm:text-base tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-transform duration-300 shadow-xl"
              >
                <RealWhatsAppLogo size={24} />
                <span>QUERO AGENDAR</span>
              </a>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-[11px] text-zinc-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-300" /> 4 Sessões
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-300" /> Avaliação Capilar
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-300" /> Produtos Nobres
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
