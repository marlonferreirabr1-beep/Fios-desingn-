import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { RealInstagramLogo, RealWhatsAppLogo } from './icons/BrandIcons';
import { MapPin, ArrowUp } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-zinc-400 border-t border-white/10 pt-20 pb-12 px-4 overflow-hidden">
      {/* Subtle Top Metallic Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={SALON_DATA.logoUrl}
                alt="Fios Design Logo"
                className="h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
              />
              <div>
                <h3 className="font-cinzel text-xl font-bold tracking-[0.2em] text-white uppercase">
                  {SALON_DATA.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
                  {SALON_DATA.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm mb-6">
              Beleza, cuidado e sofisticação em um só lugar. Especialistas em realçar sua beleza natural com exclusividade e conforto.
            </p>

            {/* REAL OFFICIAL LOGOS FOR INSTAGRAM & WHATSAPP */}
            <div className="flex items-center gap-4">
              <a
                href={SALON_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-2.5 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-white/20 transition-all shadow-md"
                aria-label="Instagram Oficial Fios Design"
              >
                <RealInstagramLogo size={32} />
                <span className="text-xs uppercase font-semibold text-zinc-300 group-hover:text-white pr-2">
                  {SALON_DATA.instagramHandle}
                </span>
              </a>

              <a
                href={SALON_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-2.5 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-white/20 transition-all shadow-md"
                aria-label="WhatsApp Oficial Fios Design"
              >
                <RealWhatsAppLogo size={32} />
                <span className="text-xs uppercase font-semibold text-zinc-300 group-hover:text-white pr-2">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation & Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-[0.25em] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a Fios Design</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços Exclusivos</a>
              </li>
              <li>
                <a href="#promocao" className="hover:text-white transition-colors">Promoção Cronograma Capilar</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-white transition-colors">Redes Sociais</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização & Contato</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & WhatsApp CTA */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-[0.25em] mb-4">
                Endereço
              </h4>
              <div className="flex items-start gap-2.5 text-xs text-zinc-400 mb-6">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5 leading-relaxed">
                  <p className="text-zinc-200">{SALON_DATA.address.street}</p>
                  <p>{SALON_DATA.address.neighborhood}, {SALON_DATA.address.city}</p>
                  <p>CEP: {SALON_DATA.address.cep}</p>
                </div>
              </div>
            </div>

            {/* Botão WhatsApp: Agendar atendimento */}
            <a
              href={SALON_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-silver shimmer-trigger w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 transition-transform"
            >
              <RealWhatsAppLogo size={20} />
              <span>Agendar atendimento</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-light">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {SALON_DATA.name}. Todos os direitos reservados.</span>
            <span>•</span>
            <span className="italic font-editorial text-zinc-400">{SALON_DATA.tagline}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group p-2 rounded-lg bg-zinc-900 border border-white/5"
            aria-label="Voltar ao topo"
          >
            <span className="text-[11px] uppercase tracking-wider">Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
