import React, { useState, useEffect } from 'react';
import { SALON_DATA } from '../data/salonData';
import { WhatsApp3DIcon } from './icons/BrandIcons';
import { X, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Atendimento WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble in 3D */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-[#14141a]/95 text-zinc-100 text-xs px-4 py-2.5 rounded-2xl border border-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-xl animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="font-medium">Olá! Agende seu horário pelo WhatsApp ✨</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors ml-1 cursor-pointer"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating 3D Action Button with Glowing Aura */}
      <a
        href={SALON_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center p-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/25 shadow-[0_12px_35px_rgba(37,211,102,0.45),inset_0_1px_2px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-115 active:scale-95 cursor-pointer"
        aria-label="Conversar no WhatsApp Oficial Fios Design"
      >
        {/* Animated breathing pulse ring */}
        <span className="absolute -inset-2 rounded-full bg-emerald-500/25 blur-lg group-hover:bg-emerald-500/40 animate-pulse pointer-events-none" />
        <span className="absolute -inset-1 rounded-full bg-radial from-emerald-400/30 to-transparent blur-md pointer-events-none" />

        <WhatsApp3DIcon size={52} />
      </a>
    </aside>
  );
};
