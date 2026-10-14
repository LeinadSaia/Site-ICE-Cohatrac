import React from "react";
import { Calendar, Clock, MapPin, Radio, ArrowRight, FileText, CalendarDays, Sparkles } from "lucide-react";
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

        {/* Grade de Horários Semanais */}
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

        {/* Bloco de Eventos Especiais & Boletim Informativo (Benchmark ICE Timon) */}
        <div className={styles.eventsAndBulletinWrapper}>
          <div className={styles.eventsColumn}>
            <div className={styles.subHeader}>
              <div className={styles.subIcon}>
                <CalendarDays size={20} />
              </div>
              <div>
                <h3 className={styles.subTitle}>Eventos Especiais & Destaques</h3>
                <span className={styles.subDesc}>Próximas atividades e conferências da comunidade</span>
              </div>
            </div>

            <div className={styles.eventsList}>
              {CHURCH_DATA.events.map((ev) => (
                <article key={ev.id} className={styles.eventCard}>
                  <div className={styles.dateBlock}>
                    <span className={styles.dateDay}>{ev.dayBadge}</span>
                    <span className={styles.dateMonth}>{ev.monthBadge}</span>
                  </div>

                  <div className={styles.eventInfo}>
                    <div className={styles.eventHeaderRow}>
                      <span className={styles.categoryBadge}>{ev.category}</span>
                      {ev.daysRemaining ? (
                        <span className={styles.countdownBadge}>
                          <span className={styles.countdownDot}></span>
                          Faltam {ev.daysRemaining} dias
                        </span>
                      ) : null}
                    </div>

                    <h4 className={styles.eventTitle}>{ev.title}</h4>
                    <p className={styles.eventDesc}>{ev.description}</p>

                    <div className={styles.eventMeta}>
                      <span className={styles.metaSpan}>
                        <Clock size={14} />
                        {ev.time}
                      </span>
                      <span className={styles.metaSpan}>
                        <MapPin size={14} />
                        {ev.location}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Coluna do Boletim Informativo */}
          <div className={styles.bulletinColumn}>
            <div className={styles.bulletinCard}>
              <div className={styles.bulletinTop}>
                <span className={styles.bulletinTag}>
                  <FileText size={14} />
                  Informativo Mensal
                </span>
                <span className={styles.bulletinDate}>
                  {CHURCH_DATA.bulletin.month} / {CHURCH_DATA.bulletin.year}
                </span>
              </div>

              <h4 className={styles.bulletinHeadline}>
                {CHURCH_DATA.bulletin.headline}
              </h4>

              <p className={styles.bulletinSummary}>
                {CHURCH_DATA.bulletin.summary}
              </p>

              <div className={styles.prayerFocusBox}>
                <div className={styles.prayerFocusTitle}>
                  <Sparkles size={15} />
                  <span>Motivo de Oração do Mês</span>
                </div>
                <p className={styles.prayerFocusText}>
                  {CHURCH_DATA.bulletin.prayerFocus}
                </p>
              </div>

              <div className={styles.bulletinFooter}>
                <a href="#contato" className="btn btn-gold" style={{ width: "100%" }}>
                  <span>Enviar Motivo de Intercessão</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
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
