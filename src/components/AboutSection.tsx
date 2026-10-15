"use client";

import React from "react";
import { Award, Calendar, BookOpen, MapPin } from "lucide-react";
import ChurchEmblem from "@/components/ChurchEmblem";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
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
              na Rede de Jovens, aos homens no Clube dos Homens e às mulheres no DLOM.
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
            {/* Brasão / Emblema Vetorial Oficial */}
            <div className={styles.emblemCard}>
              <div className={styles.emblemFrame}>
                <ChurchEmblem size={84} />
              </div>

              <div className={styles.emblemDescription}>
                <h3>ICE Cohatrac</h3>
                <p>Comunhão, Reverência e Ensino Bíblico</p>
                <span className={styles.badgeDesde}>Desde 2002 no Cohatrac</span>
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

        {/* Banner Panorâmico Oficial da Família ICE Cohatrac */}
        <div className={styles.familyBannerWrapper}>
          <div className={styles.bannerFrame}>
            <img
              src="/assets/img/banner-ice-familia.png"
              alt="Família da Igreja Cristã Evangélica em Cohatrac reunida em amor e comunhão diante do templo"
              className={styles.bannerImg}
            />
          </div>
          <div className={styles.bannerCaptionBar}>
            <div className={styles.bannerTagGroup}>
              <span className={styles.bannerBadge}>Uma Igreja Família</span>
              <span className={styles.bannerSubtext}>Comunhão fraterna para todas as gerações</span>
            </div>
            <p className={styles.bannerVerse}>
              “Oh! Quão bom e quão suave é que os irmãos vivam em união!”
              <strong className={styles.bannerRef}> — Salmo 133:1</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
