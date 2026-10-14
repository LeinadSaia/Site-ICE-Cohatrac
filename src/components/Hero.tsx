import React from "react";
import { MapPin, Sun, BookOpen, Clock, PlayCircle, ArrowRight } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          {/* Badge Superior */}
          <div className={styles.badgeWrapper}>
            <span className="badge-gold">
              <span className={styles.goldDot}></span>
              {CHURCH_DATA.badgeText}
            </span>
          </div>

          {/* Título Principal H1 */}
          <h1 className={styles.title}>
            Uma igreja família, firmada na Palavra e proclamando a Graça de Cristo.
          </h1>

          {/* Subtítulo */}
          <p className={styles.subtitle}>
            Bem-vindo à {CHURCH_DATA.fullName}. Celebramos a Deus com reverência,
            ensinamos as Escrituras Sagradas com fidelidade e acolhemos você e sua família
            com amor cristão em São Luís do Maranhão.
          </p>

          {/* Botões de Ação */}
          <div className={styles.ctaGroup}>
            <a href="#horarios" className="btn btn-gold">
              <Clock size={17} />
              <span>Conheça Nossos Cultos</span>
            </a>
            <a href="#sermoes" className="btn btn-outline-white">
              <PlayCircle size={17} />
              <span>Assista aos Cultos Online</span>
            </a>
            <a href="#localizacao" className="btn btn-outline-white">
              <MapPin size={17} />
              <span>Como Chegar</span>
            </a>
          </div>
        </div>

        {/* Barra de Acesso Rápido em Flexbox */}
        <div className={styles.quickCardsWrapper}>
          <div className={styles.quickCard}>
            <div className={styles.quickIconBox}>
              <Sun size={20} />
            </div>
            <div className={styles.quickInfo}>
              <span className={styles.quickDay}>Domingo</span>
              <strong className={styles.quickTitle}>EBD às 09h30 & Culto às 18h30</strong>
              <span className={styles.quickSub}>Escola Bíblica de manhã e Celebração à noite</span>
            </div>
          </div>

          <div className={styles.quickCard}>
            <div className={styles.quickIconBox}>
              <BookOpen size={20} />
            </div>
            <div className={styles.quickInfo}>
              <span className={styles.quickDay}>Terça-feira</span>
              <strong className={styles.quickTitle}>Culto de Oração às 19h30</strong>
              <span className={styles.quickSub}>Intercessão e estudo sistemático da Bíblia</span>
            </div>
          </div>

          <div className={styles.quickCard}>
            <div className={styles.quickIconBox}>
              <MapPin size={20} />
            </div>
            <div className={styles.quickInfo}>
              <span className={styles.quickDay}>Localização</span>
              <strong className={styles.quickTitle}>Cohatrac / Parque Aurora</strong>
              <span className={styles.quickSub}>Rua 2100, Quadra 23, Nº 11</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
