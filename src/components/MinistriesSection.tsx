import React from "react";
import { BookOpen, Music, Sparkles, Flame, Home, Compass, Clock, Heart } from "lucide-react";
import { CHURCH_DATA, Ministry } from "@/data/churchData";
import styles from "./MinistriesSection.module.css";

export default function MinistriesSection() {
  const getMinistryIcon = (iconName: string) => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen size={24} />;
      case "Music":
        return <Music size={24} />;
      case "Sparkles":
        return <Sparkles size={24} />;
      case "Flame":
        return <Flame size={24} />;
      case "Home":
        return <Home size={24} />;
      case "Compass":
        return <Compass size={24} />;
      default:
        return <Heart size={24} />;
    }
  };

  return (
    <section id="ministerios" className={`section section-ice ${styles.ministriesSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-gold">
            <Heart size={14} />
            Vida Comunitária
          </span>
          <h2>Departamentos e Ministérios da ICE Cohatrac</h2>
          <p>
            Um lugar de comunhão, crescimento espiritual e serviço prático para cada membro
            da sua família, desde a primeira infância até a melhor idade.
          </p>
        </div>

        {/* Grid de 6 Ministérios */}
        <div className={styles.ministriesGrid}>
          {CHURCH_DATA.ministries.map((min: Ministry) => (
            <div key={min.id} className={styles.ministryCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>
                  {getMinistryIcon(min.icon)}
                </div>
                <div className={styles.titleGroup}>
                  <h3 className={styles.ministryTitle}>{min.title}</h3>
                  <span className={styles.ministrySubtitle}>{min.subtitle}</span>
                </div>
              </div>

              <p className={styles.ministryDesc}>{min.description}</p>

              <div className={styles.scheduleRow}>
                <Clock size={16} className={styles.scheduleIcon} />
                <span>{min.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
