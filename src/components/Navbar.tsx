import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { RealWhatsAppLogo, RealInstagramLogo } from './icons/BrandIcons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Promoção', href: '#promocao' },
    { label: 'Redes Sociais', href: '#instagram' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#09090c]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Wordmark / Official Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-90"
            aria-label="Fios Design Início"
          >
            <img
              src={SALON_DATA.logoUrl}
              alt="Fios Design"
              className="h-10 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-zinc-200 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Buttons with Real Brand Logos */}
          <div className="flex items-center gap-3">
            <a
              href={SALON_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Instagram Oficial Fios Design"
            >
              <RealInstagramLogo size={20} />
            </a>

            <a
              href={SALON_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-silver hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
            >
              <RealWhatsAppLogo size={18} />
              <span>Agendar</span>
            </a>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900/60 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden pt-24 px-6 pb-8 flex flex-col justify-between"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-[0.2em] font-cinzel text-zinc-200 hover:text-white py-2.5 border-b border-zinc-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800/80 flex flex-col gap-3">
            <a
              href={SALON_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-silver w-full py-3.5 rounded-full flex items-center justify-center gap-2.5 text-sm font-semibold tracking-wider uppercase"
            >
              <RealWhatsAppLogo size={20} />
              <span>Agendar Horário</span>
            </a>
            <a
              href={SALON_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-dark w-full py-3.5 rounded-full flex items-center justify-center gap-2.5 text-sm font-medium tracking-wider uppercase"
            >
              <RealInstagramLogo size={20} />
              <span>Instagram Oficial</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
