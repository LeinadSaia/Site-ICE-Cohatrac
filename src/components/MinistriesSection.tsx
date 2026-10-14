import React from "react";
import { BookOpen, Music, Sparkles, Flame, Rocket, Shield, Heart, Clock } from "lucide-react";
import { CHURCH_DATA, Ministry } from "@/data/churchData";
import styles from "./MinistriesSection.module.css";

export default function MinistriesSection() {
  const getMinistryIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen size={22} />;
      case "Music":
        return <Music size={22} />;
      case "Sparkles":
        return <Sparkles size={22} />;
      case "Flame":
        return <Flame size={22} />;
      case "Rocket":
        return <Rocket size={22} />;
      case "Shield":
        return <Shield size={22} />;
      case "Heart":
        return <Heart size={22} />;
      default:
        return <Heart size={22} />;
    }
  };

  return (
    <section id="departamentos" className={`section section-clean ${styles.ministriesSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-gold">
            <Heart size={14} />
            Vida Comunitária
          </span>
          <h2>Departamentos e Atividades</h2>
          <p>
            Espaços dedicados para o crescimento na fé, comunhão e serviço para cada etapa da vida
            na ICE Cohatrac.
          </p>
        </div>

        {/* Departamentos em Flexbox Responsivo */}
        <div className={styles.ministriesFlex}>
          {CHURCH_DATA.ministries.map((min: Ministry) => (
            <div key={min.id} className={styles.ministryCard}>
              <div className={styles.cardTop}>
                <div className={styles.iconCircle}>
                  {getMinistryIcon(min.icon)}
                </div>
                <div className={styles.titleInfo}>
                  <h3 className={styles.ministryTitle}>{min.title}</h3>
                  <span className={styles.ministrySubtitle}>{min.subtitle}</span>
                </div>
              </div>

              <p className={styles.ministryDesc}>{min.description}</p>

              <div className={styles.scheduleRow}>
                <Clock size={15} className={styles.scheduleIcon} />
                <span>{min.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
