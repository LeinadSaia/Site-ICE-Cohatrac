import React from "react";
import { UserCheck, Shield, Users } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./LeadershipSection.module.css";

export default function LeadershipSection() {
  return (
    <section id="lideranca" className={`section section-white ${styles.leadershipSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-blue">
            <UserCheck size={14} />
            Corpo Pastoral
          </span>
          <h2>Liderança e Governo da Igreja</h2>
          <p>
            A ICE Cohatrac é pastoreada por ministros dedicados ao pastoreio, ao ensino da
            Palavra e ao cuidado espiritual da comunidade local.
          </p>
        </div>

        {/* Corpo Pastoral em Flexbox */}
        <div className={styles.pastorsFlex}>
          {CHURCH_DATA.leaders.map((leader, idx) => (
            <div key={idx} className={styles.pastorCard}>
              <div className={styles.avatarBox}>
                <div className={styles.avatarCircle}>
                  <UserCheck size={32} />
                </div>
                <span className={styles.pastorTag}>{leader.tag}</span>
              </div>

              <div className={styles.pastorContent}>
                <h3 className={styles.pastorName}>{leader.name}</h3>
                <span className={styles.pastorRole}>{leader.role}</span>
                <p className={styles.pastorDesc}>{leader.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Conselho de Presbíteros e Junta Diaconal em Flexbox */}
        <div className={styles.governanceFlex}>
          <div className={styles.govBox}>
            <div className={styles.govHeader}>
              <div className={styles.govIcon}>
                <Shield size={20} />
              </div>
              <h4 className={styles.govTitle}>Conselho de Presbíteros</h4>
            </div>
            <p className={styles.govText}>
              Corpo de presbíteros eleitos que auxiliam os pastores no zelo bíblico,
              no aconselhamento e na supervisão espiritual da congregação.
            </p>
          </div>

          <div className={styles.govBox}>
            <div className={styles.govHeader}>
              <div className={styles.govIcon}>
                <Users size={20} />
              </div>
              <h4 className={styles.govTitle}>Junta Diaconal</h4>
            </div>
            <p className={styles.govText}>
              Corpo de diáconos consagrados ao serviço fraternal, socorro e assistência,
              visitação, ordem e acolhimento nos cultos públicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
