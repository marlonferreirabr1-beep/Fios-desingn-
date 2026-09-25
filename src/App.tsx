import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PromoSection } from './components/PromoSection';
import { SocialSection } from './components/SocialSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CinematicBackground } from './components/ui/CinematicBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 flex flex-col selection:bg-zinc-700 selection:text-white relative overflow-x-hidden">
      {/* Cinematic Parallax Ambient Lighting Layers */}
      <CinematicBackground />

      {/* Navigation Top Bar Contract */}
      <Navbar />

      {/* Main Cinematic Scroll Container */}
      <main className="flex-1 relative z-10">
        {/* SEÇÃO 1 — HERO / ABERTURA */}
        <HeroSection />

        {/* SEÇÃO 2 — SOBRE A FIOS DESIGN */}
        <AboutSection />

        {/* SEÇÃO 3 — SERVIÇOS */}
        <ServicesSection />

        {/* SEÇÃO 4 — PROMOÇÃO EM DESTAQUE (CRONOGRAMA CAPILAR) */}
        <PromoSection />

        {/* SEÇÃO 5 — REDES SOCIAIS */}
        <SocialSection />

        {/* SEÇÃO 6 — AGENDAMENTO */}
        <BookingSection />

        {/* SEÇÃO 7 — LOCALIZAÇÃO */}
        <LocationSection />
      </main>

      {/* SEÇÃO 8 — RODAPÉ */}
      <FooterSection />

      {/* Floating 3D WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
