import React from "react";
import { Calendar, Clock, MapPin, Radio } from "lucide-react";
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
            Programação Regular
          </span>
          <h2>Cultos e Atividades Semanais</h2>
          <p>
            Reunimo-nos para adorar a Deus, orar e nos aprofundar nas Escrituras Sagradas.
            Todas as reuniões acontecem na ICE Cohatrac.
          </p>
        </div>

        {/* Grade de Horários em Flexbox */}
        <div className={styles.scheduleFlex}>
          {CHURCH_DATA.schedule.map((item, idx) => (
            <div
              key={idx}
              className={`${styles.scheduleCard} ${item.isMain ? styles.mainCard : ""}`}
            >
              {item.isMain && (
                <div className={styles.mainBadge}>
                  <Radio size={13} className={styles.liveIcon} />
                  <span>Transmissão Ao Vivo</span>
                </div>
              )}

              <div className={styles.cardTop}>
                <span className={styles.dayLabel}>{item.day}</span>
                <div className={styles.timeTag}>
                  <Clock size={14} />
                  <span>{item.time}</span>
                </div>
              </div>

              <h3 className={styles.scheduleTitle}>{item.title}</h3>
              <p className={styles.scheduleDesc}>{item.description}</p>

              <div className={styles.cardFooter}>
                <div className={styles.locationSnippet}>
                  <MapPin size={13} />
                  <span>ICE Cohatrac</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
