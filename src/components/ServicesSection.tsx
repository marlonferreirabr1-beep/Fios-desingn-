import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { RealWhatsAppLogo } from './icons/BrandIcons';
import { Card3D } from './ui/Card3D';

const FALLBACK_SERVICE_IMAGES: Record<string, string> = {
  cabelo: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
  unhas: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
  cilios: 'https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80',
  sobrancelhas: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
  facial: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
  'spa-pes': 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
  pele: 'https://images.unsplash.com/photo-1512290900672-1f4a9b6c00f6?auto=format&fit=crop&w=800&q=80',
};

export const ServicesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -390 : 390;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const getServiceBookingUrl = (serviceName: string) => {
    const msg = encodeURIComponent(`Olá! Gostaria de agendar um horário para o serviço de ${serviceName} na Fios Design.`);
    return `https://api.whatsapp.com/send?phone=5582993859298&text=${msg}`;
  };

  return (
    <section
      id="servicos"
      className="relative py-32 px-4 bg-[#08080b] border-t border-white/10 overflow-hidden preserve-3d"
    >
      {/* Background Volumetric Ambience */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-zinc-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-zinc-700/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with 3D Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-zinc-400 font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>Menu Exclusivo</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-white uppercase drop-shadow-md">
              Nossos Serviços
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-lg font-light">
              Protocolos de alta performance com técnicas modernas, conforto absoluto e produtos selecionados.
            </p>
          </motion.div>

          {/* Carousel Navigation 3D Buttons */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-white/20 text-white bg-zinc-900/90 hover:bg-zinc-800 hover:border-white/40 shadow-[0_4px_15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95'
                  : 'border-white/5 text-zinc-600 bg-zinc-900/40 cursor-not-allowed opacity-40'
              }`}
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-white/20 text-white bg-zinc-900/90 hover:bg-zinc-800 hover:border-white/40 shadow-[0_4px_15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95'
                  : 'border-white/5 text-zinc-600 bg-zinc-900/40 cursor-not-allowed opacity-40'
              }`}
              aria-label="Rolar para direita"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Carousel with 3D Depth */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-7 overflow-x-auto pb-10 pt-2 no-scrollbar snap-x-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 items-start preserve-3d"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SALON_DATA.services.map((service, index) => {
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="snap-start-card shrink-0 w-[310px] sm:w-[360px] md:w-[395px] preserve-3d"
              >
                <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c1c24] via-[#121218] to-[#0d0d12] border border-white/12 flex flex-col group relative shadow-[0_20px_45px_-10px_rgba(0,0,0,0.9),inset_0_1px_1.5px_rgba(255,255,255,0.25)] hover:border-white/30 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95),0_0_30px_rgba(255,255,255,0.06)] transition-all duration-400">
                  {/* Top Specular Rim */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none" />

                  {/* Image Container with Smooth 3D Zoom on Hover */}
                  <div className="relative h-64 overflow-hidden bg-zinc-950">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const fallback = FALLBACK_SERVICE_IMAGES[service.id] || FALLBACK_SERVICE_IMAGES.cabelo;
                        if (e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-95 group-hover:brightness-105"
                    />

                    {/* Cinematic Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c24] via-transparent to-black/40" />

                    {/* 3D Floating Category Plaque */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-100 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                        {service.name}
                      </span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.1em] text-white uppercase mb-3 drop-shadow-sm">
                        {service.name}
                      </h3>

                      {/* Descrição Principal Completa */}
                      <p className="text-zinc-300 text-sm leading-relaxed mb-4 font-light">
                        {service.description}
                      </p>

                      {/* Continuação Detalhada Expansível */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 pb-4 border-t border-white/10 mt-2">
                              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-zinc-300 block mb-2 flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3 text-zinc-200" /> Detalhes do Procedimento:
                              </span>
                              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light bg-black/40 p-4 rounded-xl border border-white/10 shadow-inner">
                                {service.continuation}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Botão para Ler Continuação / Menos Detalhes */}
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white transition-colors mb-5 cursor-pointer py-1 group/btn"
                        aria-expanded={isExpanded}
                      >
                        <span className="underline underline-offset-4 decoration-white/30 group-hover/btn:decoration-white">
                          {isExpanded ? 'Ocultar detalhes' : 'Ler continuação completa'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-zinc-200" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-zinc-200" />
                        )}
                      </button>

                      {/* Highlights Badges with 3D Metallic Edge */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-[11px] font-medium text-zinc-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1 shadow-sm"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 3D Action Button */}
                    <a
                      href={getServiceBookingUrl(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-3d-dark shimmer-trigger w-full py-3.5 rounded-xl flex items-center justify-center gap-2.5 text-xs uppercase font-bold tracking-[0.15em] transition-all group-hover:border-white/30"
                    >
                      <RealWhatsAppLogo size={20} />
                      <span>Consultar Horário</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center mt-3 text-xs text-zinc-400 font-light flex items-center justify-center gap-2">
          <span>Deslize para ver mais procedimentos</span>
          <ChevronRight className="w-3.5 h-3.5 animate-pulse text-zinc-300" />
        </div>
      </div>
    </section>
  );
};
