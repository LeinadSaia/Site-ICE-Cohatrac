import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FaithSection from "@/components/FaithSection";
import LeadershipSection from "@/components/LeadershipSection";
import MinistriesSection from "@/components/MinistriesSection";
import ScheduleSection from "@/components/ScheduleSection";
import SermonsSection from "@/components/SermonsSection";
import GivingSection from "@/components/GivingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Header & Navbar Fixa com Suporte a Logo Oficial */}
      <Navbar />

      <main>
        {/* 2. Hero Section com Headline, Badges, CTAs e Quick Info Bar */}
        <Hero />

        {/* 3. Sobre a Igreja, Nossa História desde 2002 e Selo Institucional */}
        <AboutSection />

        {/* 4. No Que Cremos (Os 5 Solas da Reforma + Artigos da Confissão da AICEB) */}
        <FaithSection />

        {/* 5. Nossa Liderança Pastoral e Governo Eclesiástico */}
        <LeadershipSection />

        {/* 6. Vida na Igreja — Departamentos e Ministérios */}
        <MinistriesSection />

        {/* 7. Programação Semanal dos Cultos */}
        <ScheduleSection />

        {/* 8. Sermões, Transmissões Ao Vivo e Player Interativo do YouTube */}
        <SermonsSection />

        {/* 9. Dízimos e Ofertas com PIX Interativo (Cópia em 1 clique) */}
        <GivingSection />

        {/* 10. Localização, "Planeje sua Visita" e Pedidos de Oração */}
        <ContactSection />
      </main>

      {/* 11. Rodapé Institucional Completo */}
      <Footer />
    </>
  );
}
