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
      {/* 1. Header & Navbar com Navegação em Flexbox */}
      <Navbar />

      <main>
        {/* 2. Hero Section com Headline, Badges Oficiais e CTAs */}
        <Hero />

        {/* 3. Sobre a Igreja — História desde 2002 no Cohatrac */}
        <AboutSection />

        {/* 4. No Que Cremos — Os 5 Solas da Reforma */}
        <FaithSection />

        {/* 5. Liderança Pastoral e Governo Eclesiástico (Presbitério e Diaconato) */}
        <LeadershipSection />

        {/* 6. Departamentos e Ministérios (MCC, Cadetes, DELOM, Homens, Jovens) */}
        <MinistriesSection />

        {/* 7. Programação dos Cultos e Atividades Semanais */}
        <ScheduleSection />

        {/* 8. Sermões e Mensagens em Vídeo no YouTube */}
        <SermonsSection />

        {/* 9. Dízimos e Ofertas — Chave PIX e QR Code */}
        <GivingSection />

        {/* 10. Como Chegar & Localização no Cohatrac com Google Maps e WhatsApp */}
        <ContactSection />
      </main>

      {/* 11. Rodapé Institucional */}
      <Footer />
    </>
  );
}
