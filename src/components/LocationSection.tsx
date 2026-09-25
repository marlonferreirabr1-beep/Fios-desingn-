import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Coffee, Wifi, Car, ExternalLink, Sparkles } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { GlowingIcon3D } from './ui/GlowingIcon3D';
import { Card3D } from './ui/Card3D';
import { getSalonStatus, type SalonStatus } from '../utils/salonStatus';

export const LocationSection: React.FC = () => {
  const [salonStatus, setSalonStatus] = useState<SalonStatus>(getSalonStatus);

  useEffect(() => {
    // Re-check salon status every 30 seconds in real time
    const interval = setInterval(() => {
      setSalonStatus(getSalonStatus());
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="localizacao"
      className="relative py-32 px-4 bg-gradient-to-b from-[#08080a] via-[#111116] to-[#070709] border-t border-white/10 overflow-hidden preserve-3d"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-zinc-400 font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>Localização Privilegiada</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-white uppercase mb-3 drop-shadow-md">
            Onde Estamos
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Um ambiente pensado em cada detalhe para acolher você com conforto, discrição e sofisticação no bairro Antares.
          </p>
        </motion.div>

        {/* Location Grid: Information Card + Visual Dark Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Card with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-full"
          >
            <Card3D
              intensity={8}
              glowColor="rgba(255, 255, 255, 0.12)"
              className="h-full"
            >
              <div className="metallic-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full relative">
                {/* Top Metallic Rim */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.3)]" />

                <div>
                  {/* Address Lockup with Glowing 3D Medallion */}
                  <div className="flex items-start gap-4 mb-8">
                    <GlowingIcon3D
                      icon={<MapPin className="w-6 h-6 text-zinc-100" />}
                      glowColor="silver"
                      size="md"
                    />
                    <div>
                      <h3 className="font-cinzel text-xl font-bold text-white uppercase tracking-wider mb-2 drop-shadow-sm">
                        Fios Design Maceió
                      </h3>
                      <address className="not-italic text-sm text-zinc-300 leading-relaxed space-y-0.5">
                        <p className="font-medium text-white">{SALON_DATA.address.street}</p>
                        <p>{SALON_DATA.address.neighborhood}</p>
                        <p>{SALON_DATA.address.city}</p>
                        <p className="text-zinc-400 text-xs mt-1">CEP: {SALON_DATA.address.cep}</p>
                      </address>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="mb-8 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-zinc-300">
                        <Clock className="w-4 h-4 text-emerald-400" />
                        <span>Horários de Atendimento</span>
                      </div>

                      {/* 3D Dynamic Status Balloon (Aberto agora / Fechado) */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border shadow-[0_4px_16px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 ${
                          salonStatus.isOpen
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
                            : 'bg-rose-950/60 text-rose-300 border-rose-500/35 shadow-[0_0_15px_rgba(244,63,94,0.15)]'
                        }`}
                      >
                        <span className="relative flex h-2 w-2">
                          {salonStatus.isOpen && (
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          )}
                          <span
                            className={`relative inline-flex rounded-full h-2 w-2 ${
                              salonStatus.isOpen ? 'bg-emerald-400' : 'bg-rose-400'
                            }`}
                          />
                        </span>
                        <span className="font-bold">{salonStatus.statusText}</span>
                        <span className="text-[10px] opacity-80 font-normal">({salonStatus.details})</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      {SALON_DATA.hours.map((h, i) => {
                        const isTodayRow =
                          (i === 0 && salonStatus.todayDayOfWeek >= 2 && salonStatus.todayDayOfWeek <= 5) ||
                          (i === 1 && salonStatus.todayDayOfWeek === 6) ||
                          (i === 2 && (salonStatus.todayDayOfWeek === 0 || salonStatus.todayDayOfWeek === 1));

                        return (
                          <div
                            key={h.day}
                            className={`flex justify-between items-center py-2 px-2.5 rounded-xl transition-all border ${
                              isTodayRow
                                ? 'bg-white/[0.07] border-white/20 text-white font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]'
                                : 'border-transparent text-zinc-300'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={isTodayRow ? 'text-white font-semibold' : 'text-zinc-400'}>
                                {h.day}
                              </span>
                              {isTodayRow && (
                                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                                  Hoje
                                </span>
                              )}
                            </div>
                            <span className={`font-semibold ${isTodayRow ? 'text-white' : 'text-zinc-200'}`}>
                              {h.hours}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Salon Amenities with 3D Chips */}
                  <div className="pt-6 border-t border-white/10 mb-8">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-zinc-400 block mb-3.5">
                      Comodidades Exclusivas
                    </span>
                    <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300">
                      <span className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                        <Car className="w-3.5 h-3.5 text-emerald-400" /> Estacionamento
                      </span>
                      <span className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                        <Wifi className="w-3.5 h-3.5 text-cyan-400" /> Wi-Fi Ultrarrápido
                      </span>
                      <span className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                        <Coffee className="w-3.5 h-3.5 text-amber-400" /> Café Gourmet
                      </span>
                      <span className="flex items-center gap-2 bg-white/5 p-2 rounded-xl border border-white/5">
                        <Navigation className="w-3.5 h-3.5 text-rose-400" /> Climatização
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botão: VER NO MAPA */}
                <a
                  href={SALON_DATA.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-silver shimmer-trigger w-full py-4 rounded-xl font-bold text-xs sm:text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-2.5 transition-transform duration-300 shadow-xl"
                >
                  <Navigation className="w-4 h-4 text-zinc-950" />
                  <span>VER NO MAPA</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-950" />
                </a>
              </div>
            </Card3D>
          </motion.div>

          {/* Visual Dark Map Card with 3D Depth */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 metallic-card rounded-3xl overflow-hidden relative min-h-[420px] lg:min-h-full flex flex-col justify-between p-6 sm:p-8 border border-white/20 shadow-2xl"
          >
            {/* Dark Styled Map Visualization */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-[#0d0d12] to-zinc-950 opacity-95">
              <svg className="w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern-3d" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern-3d)" />
                <path d="M-100,200 Q200,100 500,300 T1200,250" fill="none" stroke="#a1a1aa" strokeWidth="4" />
                <path d="M150,-50 L350,600" fill="none" stroke="#71717a" strokeWidth="3" />
                <path d="M600,-50 L500,600" fill="none" stroke="#52525b" strokeWidth="2.5" />
                <circle cx="50%" cy="50%" r="100" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
                <circle cx="50%" cy="50%" r="160" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 6" opacity="0.2" />
              </svg>
            </div>

            {/* Map Header Overlay */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-100 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                Antares • Maceió - AL
              </span>
              <span className="text-xs text-zinc-300 font-mono bg-black/60 px-3 py-1 rounded-full border border-white/10">
                CEP 57048-570
              </span>
            </div>

            {/* Central Animated 3D Map Marker */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto py-12">
              <a
                href={SALON_DATA.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer block"
                title="Abrir no Google Maps"
              >
                {/* Radar pulse rings */}
                <div className="absolute -inset-6 bg-white/20 rounded-full animate-ping opacity-40" />
                <div className="absolute -inset-10 bg-emerald-500/20 rounded-full animate-pulse opacity-50" />

                {/* 3D Marker Plaque */}
                <div className="relative px-6 py-3.5 rounded-2xl bg-gradient-to-b from-[#2a2a34] to-[#0c0c10] border border-white/40 shadow-[0_15px_35px_rgba(0,0,0,0.95),inset_0_1.5px_2px_rgba(255,255,255,0.5)] flex items-center gap-3.5 group-hover:scale-105 group-hover:border-white/60 transition-all duration-300">
                  <div className="w-9 h-9 rounded-full bg-white text-zinc-950 flex items-center justify-center font-bold text-xs shadow-md">
                    FD
                  </div>
                  <div className="text-left">
                    <span className="font-cinzel text-xs font-bold text-white tracking-widest block uppercase">
                      Fios Design
                    </span>
                    <span className="text-[10px] text-zinc-300 tracking-wider">
                      {SALON_DATA.address.street}
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Map Footer Prompt */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10 bg-black/60 backdrop-blur-md -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 px-6 sm:px-8">
              <span className="text-xs text-zinc-300 font-light text-center sm:text-left">
                Clique para traçar sua rota no GPS ou aplicativo de navegação.
              </span>
              <a
                href={SALON_DATA.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-dark px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider flex items-center gap-2 whitespace-nowrap shadow-lg"
              >
                <span>Abrir Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
