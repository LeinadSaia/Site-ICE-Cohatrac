"use client";

import React, { useState } from "react";
import { Award, Calendar, BookOpen, MapPin } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section id="sobre" className={`section section-white ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.aboutFlex}>
          {/* Coluna de Texto */}
          <div className={styles.textColumn}>
            <span className="badge-blue">Nossa História & Identidade</span>
            <h2 className={styles.heading}>Uma comunidade firmada na fé e no amor cristão</h2>

            <p className={styles.leadText}>
              A <strong>{CHURCH_DATA.fullName}</strong> atua há mais de duas décadas
              anunciando o Evangelho de Jesus Cristo na região do Cohatrac e Parque Aurora,
              em São Luís do Maranhão.
            </p>

            <p className={styles.bodyText}>
              Fundada em 2002, nossa igreja reúne famílias que compartilham a fé no Deus Triúno,
              o compromisso com a pregação fiel das Sagradas Escrituras, o ensino bíblico sistemático
              e a adoração solene e alegre.
            </p>

            <p className={styles.bodyText}>
              Aqui você encontra acolhimento para todas as idades: desde os pequenos no MCC
              (Ministério Crescer com Cristo), aos adolescentes nos Cadetes a Jato, à mocidade
              na Rede de Jovens, aos homens no Clube dos Homens e às mulheres no DELOM.
            </p>

            {/* Informação Institucional */}
            <div className={styles.legalInfoBox}>
              <MapPin size={18} className={styles.legalIcon} />
              <div>
                <strong>{CHURCH_DATA.fullName}</strong>
                <span>{CHURCH_DATA.address.street} • Cohatrac / Parque Aurora</span>
              </div>
            </div>
          </div>

          {/* Coluna Visual e Pilares */}
          <div className={styles.cardColumn}>
            {/* Brasão / Logo Oficial com Fallback */}
            <div className={styles.emblemCard}>
              <div className={styles.emblemFrame}>
                {!logoError ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/assets/img/logo-ice-cohatrac.png"
                    alt="Logo ICE Cohatrac"
                    className={styles.emblemImg}
                    onError={() => setLogoError(true)}
                  />
                ) : null}

                {logoError && (
                  <div className={styles.fallbackEmblem}>
                    <BookOpen size={42} className={styles.fallbackIcon} />
                    <span className={styles.fallbackText}>ICE Cohatrac</span>
                    <span className={styles.fallbackSub}>Desde 2002</span>
                  </div>
                )}
              </div>

              <div className={styles.emblemDescription}>
                <h3>ICE Cohatrac</h3>
                <p>Comunhão, Reverência e Ensino Bíblico</p>
              </div>
            </div>

            {/* Pilares em Flexbox */}
            <div className={styles.pillarsFlex}>
              <div className={styles.pillarItem}>
                <div className={styles.pillarIcon}>
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className={styles.pillarTitle}>Desde 2002</h4>
                  <p className={styles.pillarDesc}>
                    Mais de 24 anos anunciando a graça de Deus no Cohatrac.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <div className={styles.pillarIcon}>
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className={styles.pillarTitle}>Ensino Bíblico Fiel</h4>
                  <p className={styles.pillarDesc}>
                    Exposição clara e fundamentada na Bíblia Sagrada.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <div className={styles.pillarIcon}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 className={styles.pillarTitle}>Igreja Acolhedora</h4>
                  <p className={styles.pillarDesc}>
                    Ambiente familiar e seguro para todas as gerações.
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
