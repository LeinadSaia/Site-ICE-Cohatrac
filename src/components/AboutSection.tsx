"use client";

import React, { useState } from "react";
import { Award, Calendar, BookOpen, ShieldCheck } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section id="sobre" className={`section section-white ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Coluna 1: História e Identidade */}
          <div className={styles.textColumn}>
            <span className="badge-blue">Nossa História & Vocação</span>
            <h2 className={styles.heading}>Quem Somos: Nossa História e Identidade</h2>

            <p className={styles.leadText}>
              A <strong>{CHURCH_DATA.fullName}</strong> atua há mais de duas décadas
              anunciando o Evangelho de Jesus Cristo na região do Cohatrac e Parque Aurora,
              em São Luís do Maranhão.
            </p>

            <p className={styles.bodyText}>
              Oficialmente organizada como pessoa jurídica em junho de 2002, somos uma
              comunidade local filiada à <strong>AICEB (Aliança das Igrejas Cristãs Evangélicas do Brasil)</strong>,
              denominação histórica fundada em 1947 no próprio estado do Maranhão.
            </p>

            <p className={styles.bodyText}>
              Nossa identidade é marcada pelo compromisso inegociável com a exposição fiel das
              Escrituras Sagradas, pelo ensino sistemático na Escola Bíblica Dominical, pelo
              louvor congregacional reverente, pela comunhão fraterna entre as famílias e pelo
              zelo missionário.
            </p>

            {/* Selo Jurídico e Denominacional */}
            <div className={styles.legalNotice}>
              <ShieldCheck size={20} className={styles.legalIcon} />
              <div>
                <strong>{CHURCH_DATA.legalName}</strong>
                <span>CNPJ: {CHURCH_DATA.cnpj} • Filiada à AICEB desde a sua organização</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Selo Institucional da Logo & Pilares */}
          <div className={styles.cardColumn}>
            {/* Espaço em Destaque para o Brasão / Logo Oficial com Fallback */}
            <div className={styles.emblemCard}>
              <div className={styles.emblemFrame}>
                {!logoError ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/assets/img/logo-ice-cohatrac.png"
                    alt="Brasão Oficial ICE Cohatrac"
                    className={styles.emblemImg}
                    onError={() => setLogoError(true)}
                  />
                ) : null}

                {logoError && (
                  <div className={styles.fallbackEmblem}>
                    <BookOpen size={48} className={styles.fallbackIcon} />
                    <span className={styles.fallbackText}>ICE Cohatrac</span>
                    <span className={styles.fallbackSub}>AICEB • Desde 2002</span>
                  </div>
                )}
              </div>

              <div className={styles.emblemDescription}>
                <h3>Igreja Cristã Evangélica</h3>
                <p>Comunhão, Reverência e Fé Bíblica Reformada</p>
              </div>
            </div>

            {/* Cards de Estatísticas e Pilares */}
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <Calendar size={22} />
                </div>
                <div>
                  <h4 className={styles.pillarTitle}>+24 Anos</h4>
                  <p className={styles.pillarDesc}>
                    Servindo à comunidade do Cohatrac e Parque Aurora (desde 2002).
                  </p>
                </div>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <Award size={22} />
                </div>
                <div>
                  <h4 className={styles.pillarTitle}>Tradição AICEB</h4>
                  <p className={styles.pillarDesc}>
                    Parte de uma aliança de igrejas evangélicas fundada em 1947.
                  </p>
                </div>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className={styles.pillarTitle}>Ensino Bíblico</h4>
                  <p className={styles.pillarDesc}>
                    Compromisso com a pregação expositiva e fidelidade doutrinária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
