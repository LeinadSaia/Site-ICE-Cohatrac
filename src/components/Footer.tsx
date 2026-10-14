"use client";

import React, { useState } from "react";
import { Book, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./Footer.module.css";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className={styles.footer}>
      {/* Barra Dourada Superior */}
      <div className={styles.goldBar}></div>

      <div className="container">
        <div className={styles.footerGrid}>
          {/* Coluna 1: Logo & Dados da Igreja */}
          <div className={styles.brandCol}>
            <div className={styles.footerLogoLink}>
              <div className={styles.logoBadge}>
                {!logoError ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/assets/img/logo-ice-cohatrac.png"
                    alt="Logo ICE Cohatrac"
                    className={styles.logoImg}
                    onError={() => setLogoError(true)}
                  />
                ) : null}

                {logoError && (
                  <div className={styles.fallbackLogo}>
                    <Book size={28} />
                  </div>
                )}
              </div>

              <div className={styles.brandText}>
                <span className={styles.brandTitle}>{CHURCH_DATA.name}</span>
                <span className={styles.brandSubtitle}>Igreja Cristã Evangélica • AICEB</span>
              </div>
            </div>

            <p className={styles.legalInfo}>
              <strong>{CHURCH_DATA.legalName}</strong>
              <br />
              CNPJ: {CHURCH_DATA.cnpj}
              <br />
              Filiada à Aliança das Igrejas Cristãs Evangélicas do Brasil (fundada em 1947 no Maranhão).
            </p>

            <div className={styles.reputationBox}>
              <ShieldCheck size={16} className={styles.repIcon} />
              <span>Avaliação: {CHURCH_DATA.rating}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className={styles.navCol}>
            <h4 className={styles.footerHeading}>Navegação</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#inicio">Página Inicial</a></li>
              <li><a href="#sobre">Quem Somos & História</a></li>
              <li><a href="#cremos">Confissão de Fé (5 Solas)</a></li>
              <li><a href="#lideranca">Corpo Pastoral</a></li>
              <li><a href="#ministerios">Ministérios & Departamentos</a></li>
              <li><a href="#horarios">Programação dos Cultos</a></li>
              <li><a href="#sermoes">Cultos no YouTube</a></li>
              <li><a href="#contribua">Dízimos e Ofertas</a></li>
              <li><a href="#contato">Planeje sua Visita</a></li>
            </ul>
          </div>

          {/* Coluna 3: Endereço & Redes Oficiais */}
          <div className={styles.contactCol}>
            <h4 className={styles.footerHeading}>Onde Nos Encontrar</h4>
            <p className={styles.addressText}>
              {CHURCH_DATA.address.street}
              <br />
              {CHURCH_DATA.address.neighborhood}
              <br />
              {CHURCH_DATA.address.city} - {CHURCH_DATA.address.state} • CEP {CHURCH_DATA.address.cep}
            </p>

            <h4 className={styles.footerHeading} style={{ marginTop: "1.5rem" }}>Canais Oficiais</h4>
            <div className={styles.socialButtons}>
              <a
                href={CHURCH_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="YouTube ICE Cohatrac"
              >
                <YoutubeIcon size={20} />
                <span>YouTube (+750 vídeos)</span>
              </a>

              <a
                href={CHURCH_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram ICE Cohatrac"
              >
                <InstagramIcon size={20} />
                <span>Instagram @icecohatrac</span>
              </a>

              <a
                href={CHURCH_DATA.socials.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Linktree ICE Cohatrac"
              >
                <ExternalLink size={20} />
                <span>Linktree Oficial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha Final de Copyright */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2026 {CHURCH_DATA.fullName}. Todos os direitos reservados.
          </div>
          <div className={styles.motto}>
            <Heart size={14} className={styles.mottoHeart} />
            <span>{CHURCH_DATA.motto}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
