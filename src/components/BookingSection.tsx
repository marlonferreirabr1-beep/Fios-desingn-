import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Check, ShieldCheck } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { RealWhatsAppLogo } from './icons/BrandIcons';
import { Card3D } from './ui/Card3D';
import { GlowingIcon3D } from './ui/GlowingIcon3D';

export const BookingSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Cronograma Capilar');

  const availableOptions = [
    'Cronograma Capilar',
    'Cabelo (Corte / Mechas)',
    'Unhas em Gel / Blindagem',
    'Extensão de Cílios',
    'Design de Sobrancelhas',
    'Estética Facial',
    'Spa dos Pés',
  ];

  const getTargetUrl = () => {
    if (!selectedService) return SALON_DATA.whatsappUrl;
    const message = encodeURIComponent(
      `Olá, equipe Fios Design! Gostaria de agendar um horário para: ${selectedService}. Como estão os horários disponíveis?`
    );
    return `https://api.whatsapp.com/send?phone=5582993859298&text=${message}`;
  };

  return (
    <section
      id="agendamento"
      className="relative py-32 px-4 bg-gradient-to-b from-[#08080a] via-[#0f0f15] to-[#070709] border-t border-white/10 overflow-hidden preserve-3d"
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-emerald-950/20 blur-[190px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 text-[11px] tracking-[0.3em] uppercase mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Atendimento VIP Personalizado</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-white uppercase mb-4 drop-shadow-md">
            SEU MOMENTO DE CUIDADO COMEÇA AQUI.
          </h2>

          <p className="font-editorial italic text-xl sm:text-2xl text-zinc-300 tracking-wide max-w-xl mx-auto">
            {SALON_DATA.heroSubtitle}
          </p>

          <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto font-light">
            Agende seu horário e venha viver uma experiência Fios Design com atendimento exclusivo em Maceió.
          </p>
        </motion.div>

        {/* Interactive Booking Module Card with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card3D
            intensity={10}
            glowColor="rgba(37, 211, 102, 0.15)"
            className="w-full"
          >
            <div className="rounded-3xl p-7 sm:p-12 relative overflow-hidden bg-gradient-to-b from-[#1e1e26] via-[#131319] to-[#0c0c10] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1.5px_2px_rgba(255,255,255,0.3)]">
              {/* Top Hairline Metallic Accent */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent shadow-[0_0_10px_rgba(37,211,102,0.3)]" />

              {/* Service Pill Selector for Personalization */}
              <div className="mb-10">
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-zinc-300 block mb-4">
                  Selecione o procedimento de seu interesse:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
                  {availableOptions.map((opt) => {
                    const isSelected = selectedService === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setSelectedService(opt)}
                        className={`px-4 py-2.5 rounded-xl text-xs tracking-wider uppercase font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md ${
                          isSelected
                            ? 'bg-gradient-to-b from-zinc-100 to-zinc-300 text-zinc-950 border border-white shadow-[0_4px_15px_rgba(255,255,255,0.3),inset_0_1px_1px_rgba(255,255,255,0.9)] scale-105'
                            : 'bg-zinc-900/80 text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 hover:bg-zinc-800'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-zinc-950" />}
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* O BOTÃO GRANDE DE AGENDAMENTO COM O ÍCONE REAL DO WHATSAPP EM 3D */}
              <div className="flex flex-col items-center justify-center gap-4">
                <a
                  href={getTargetUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-trigger group relative w-full sm:w-auto min-w-[280px] sm:min-w-[360px] px-9 py-5 rounded-2xl bg-gradient-to-b from-[#2fe578] via-[#25D366] to-[#128c7e] text-white font-bold text-sm sm:text-base tracking-[0.2em] uppercase flex items-center justify-center gap-4 shadow-[0_12px_35px_rgba(37,211,102,0.45),inset_0_1.5px_2px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.3)] hover:shadow-[0_18px_50px_rgba(37,211,102,0.6),inset_0_2px_2px_rgba(255,255,255,0.95)] hover:scale-[1.03] active:scale-[0.99] transition-all duration-300 border border-white/30"
                >
                  {/* REAL 3D WhatsApp Icon */}
                  <RealWhatsAppLogo size={36} />
                  <span className="drop-shadow-md">AGENDAR PELO WHATSAPP</span>
                </a>

                {/* Direct Official Link Backup */}
                <a
                  href={SALON_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-4 pt-1"
                >
                  Ou clique aqui para abrir o link direto do WhatsApp (wa.link/02mbsc)
                </a>
              </div>

              {/* Trust Assurances with 3D Glowing Medallions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10 text-xs text-zinc-300">
                <div className="flex items-center justify-center gap-3">
                  <GlowingIcon3D
                    icon={<Clock className="w-4 h-4 text-emerald-300" />}
                    size="sm"
                    glowColor="emerald"
                  />
                  <span className="font-medium">Resposta Ágil no Chat</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <GlowingIcon3D
                    icon={<ShieldCheck className="w-4 h-4 text-zinc-100" />}
                    size="sm"
                    glowColor="silver"
                  />
                  <span className="font-medium">Ambiente Privativo & Confortável</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <GlowingIcon3D
                    icon={<Sparkles className="w-4 h-4 text-amber-200" />}
                    size="sm"
                    glowColor="amber"
                  />
                  <span className="font-medium">Profissionais Qualificadas</span>
                </div>
              </div>
            </div>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
};
