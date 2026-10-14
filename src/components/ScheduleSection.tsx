import React from "react";
import { Calendar, Clock, MapPin, Radio, ArrowRight } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./ScheduleSection.module.css";

export default function ScheduleSection() {
  return (
    <section id="horarios" className={`section section-white ${styles.scheduleSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-blue">
            <Calendar size={14} />
            Agenda e Horários
          </span>
          <h2>Programação Semanal da Igreja</h2>
          <p>
            Participe dos nossos encontros congregacionais. Em todos os cultos temos salas
            especiais para acolher crianças e visitantes.
          </p>
        </div>

        {/* Grade de Horários */}
        <div className={styles.scheduleGrid}>
          {CHURCH_DATA.schedule.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.scheduleCard} ${item.isMain ? styles.mainCard : ""}`}
            >
              {item.isMain && (
                <div className={styles.mainBadge}>
                  <Radio size={14} className={styles.liveIcon} />
                  <span>Culto Principal • Transmissão Ao Vivo</span>
                </div>
              )}

              <div className={styles.cardTop}>
                <span className={styles.dayLabel}>{item.day}</span>
                <div className={styles.timeTag}>
                  <Clock size={15} />
                  <span>{item.time}</span>
                </div>
              </div>

              <h3 className={styles.scheduleTitle}>{item.title}</h3>
              <p className={styles.scheduleDesc}>{item.description}</p>

              <div className={styles.cardFooter}>
                <div className={styles.locationSnippet}>
                  <MapPin size={14} />
                  <span>Templo Sede • Cohatrac</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Boas-Vindas */}
        <div className={styles.welcomeBanner}>
          <div className={styles.bannerContent}>
            <h3>Primeira vez conosco?</h3>
            <p>
              Estamos de braços abertos para receber você e sua família. Nossos recepcionistas
              estarão na entrada para orientar sua chegada e acomodação.
            </p>
          </div>
          <a href="#contato" className="btn btn-gold">
            <span>Planejar Minha Visita</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
