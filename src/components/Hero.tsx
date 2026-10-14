import React from "react";
import { MapPin, Sun, BookOpen, ArrowRight, PlayCircle } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.heroSection}>
      {/* Background Overlay com Gradiente da Identidade */}
      <div className={styles.heroOverlay}></div>

      <div className={`container ${styles.heroContent}`}>
        {/* Badge Superior Institucional */}
        <div className={styles.badgeWrapper}>
          <span className="badge-gold">
            <span className={styles.goldDot}></span>
            Filiada à AICEB • Desde 2002 no Cohatrac e Parque Aurora
          </span>
        </div>

        {/* H1 Principal */}
        <h1 className={styles.title}>
          Uma igreja família, firmada na Palavra e proclamando a Graça de Cristo em São Luís.
        </h1>

        {/* Subheadline */}
        <p className={styles.subtitle}>
          Bem-vindo à {CHURCH_DATA.fullName}. Celebramos a Deus com reverência,
          ensinamos as Escrituras Sagradas com fidelidade e acolhemos você e sua família
          com amor cristão.
        </p>

        {/* CTAs de Ação */}
        <div className={styles.ctaGroup}>
          <a href="#contato" className="btn btn-gold">
            <span>Planeje sua Visita</span>
            <ArrowRight size={18} />
          </a>
          <a href="#sermoes" className="btn btn-outline-white">
            <PlayCircle size={18} />
            <span>Assista aos Cultos Online</span>
          </a>
        </div>
      </div>

      {/* Quick Info Bar - Barra de Informações Rápidas */}
      <div className={styles.quickBar}>
        <div className={`container ${styles.quickGrid}`}>
          <div className={styles.quickItem}>
            <div className={styles.quickIcon}>
              <MapPin size={20} />
            </div>
            <div className={styles.quickText}>
              <span className={styles.quickLabel}>Localização</span>
              <span className={styles.quickValue}>
                Rua 2100, Qd. 23, Nº 11 — Parque Aurora / Cohatrac
              </span>
            </div>
          </div>

          <div className={styles.quickItem}>
            <div className={styles.quickIcon}>
              <Sun size={20} />
            </div>
            <div className={styles.quickText}>
              <span className={styles.quickLabel}>Cultos Dominicais</span>
              <span className={styles.quickValue}>
                Domingos: 09h00 (EBD) e 18h00 (Culto de Celebração)
              </span>
            </div>
          </div>

          <div className={styles.quickItem}>
            <div className={styles.quickIcon}>
              <BookOpen size={20} />
            </div>
            <div className={styles.quickText}>
              <span className={styles.quickLabel}>Estudo Bíblico & Oração</span>
              <span className={styles.quickValue}>
                Terças-feiras às 19h30
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
