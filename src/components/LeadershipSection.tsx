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
            Corpo Pastoral & Liderança
          </span>
          <h2>Nossa Liderança e Governo Eclesiástico</h2>
          <p>
            Seguindo as orientações do Novo Testamento e o estatuto da AICEB, a ICE Cohatrac
            é pastoreada por ministros vocacionados e governada de forma bíblica e representativa.
          </p>
        </div>

        {/* Grid de Pastores e Evangelistas */}
        <div className={styles.leadersGrid}>
          {CHURCH_DATA.leaders.map((leader, idx) => (
            <div key={idx} className={styles.leaderCard}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatarPlaceholder}>
                  <UserCheck size={36} />
                </div>
                <span className={styles.leaderTag}>{leader.tag}</span>
              </div>

              <div className={styles.leaderInfo}>
                <h3 className={styles.leaderName}>{leader.name}</h3>
                <span className={styles.leaderRole}>{leader.role}</span>
                <p className={styles.leaderDesc}>{leader.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Estrutura de Governo Eclesiástico */}
        <div className={styles.governmentGrid}>
          <div className={styles.govCard}>
            <div className={styles.govHeader}>
              <div className={styles.govIcon}>
                <Shield size={24} />
              </div>
              <h4 className={styles.govTitle}>Conselho de Presbíteros</h4>
            </div>
            <p className={styles.govText}>
              Corpo de presbíteros eleitos pela assembleia da igreja local. Atuam juntamente
              com o corpo pastoral no zelo pela sã doutrina bíblica, supervisão espiritual,
              aconselhamento e condução das decisões eclesiásticas.
            </p>
          </div>

          <div className={styles.govCard}>
            <div className={styles.govHeader}>
              <div className={styles.govIcon}>
                <Users size={24} />
              </div>
              <h4 className={styles.govTitle}>Junta Diaconal (Diaconato)</h4>
            </div>
            <p className={styles.govText}>
              Homens e mulheres de Deus dedicados ao serviço misericordioso, amparo social às
              famílias e viúvas, beneficência, zelo pela ordem e acolhimento nos cultos e
              manutenção das instalações do templo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
