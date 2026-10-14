"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Copy, Check, Clock, ExternalLink } from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const fullAddressText = `${CHURCH_DATA.address.street}, ${CHURCH_DATA.address.neighborhood}, ${CHURCH_DATA.address.city} - ${CHURCH_DATA.address.state}, CEP: ${CHURCH_DATA.address.cep}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddressText);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 3000);
  };

  return (
    <section id="localizacao" className={`section section-ice ${styles.contactSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-blue">
            <MapPin size={14} />
            Como Chegar & Canais Diretos
          </span>
          <h2>Venha Nos Conhecer Pessoalmente</h2>
          <p>
            Nossas portas e corações estão abertos para você e sua família.
            Estamos localizados no coração do Cohatrac / Parque Aurora em São Luís.
          </p>
        </div>

        {/* Layout 100% Flexbox */}
        <div className={styles.locationFlex}>
          {/* Coluna 1: Informações, Endereço, Horários e Botões */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBadge}>
                <MapPin size={22} />
              </div>
              <div>
                <h3 className={styles.cardTitle}>Endereço da Igreja</h3>
                <span className={styles.cardSub}>Parque Aurora / Cohatrac • São Luís - MA</span>
              </div>
            </div>

            {/* Caixa de Endereço com Cópia Rápida */}
            <div className={styles.addressBox}>
              <p className={styles.addressStreet}>{CHURCH_DATA.address.street}</p>
              <p className={styles.addressNeighborhood}>
                {CHURCH_DATA.address.neighborhood} • {CHURCH_DATA.address.city} - {CHURCH_DATA.address.state}
              </p>
              <p className={styles.addressCep}>CEP: {CHURCH_DATA.address.cep}</p>

              <button
                type="button"
                onClick={handleCopyAddress}
                className={styles.copyAddressBtn}
                aria-label="Copiar endereço completo"
              >
                {copiedAddress ? (
                  <>
                    <Check size={14} className={styles.checkIcon} />
                    <span>Endereço copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar Endereço</span>
                  </>
                )}
              </button>
            </div>

            {/* Ações Primárias: Rota no Google Maps e Instagram */}
            <div className={styles.actionButtons}>
              <a
                href={CHURCH_DATA.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-gold ${styles.fullBtn}`}
              >
                <Navigation size={18} />
                <span>Abrir Rota no Google Maps</span>
              </a>

              <a
                href={CHURCH_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-blue ${styles.fullBtn}`}
              >
                <InstagramIcon size={18} />
                <span>Acompanhe no Instagram @icecohatrac</span>
              </a>
            </div>

            {/* Resumo dos Encontros da Semana */}
            <div className={styles.quickSchedule}>
              <div className={styles.quickScheduleHeader}>
                <Clock size={16} className={styles.clockIcon} />
                <h4 className={styles.quickScheduleTitle}>Encontros Presenciais</h4>
              </div>

              <div className={styles.scheduleRowList}>
                <div className={styles.scheduleRow}>
                  <strong className={styles.scheduleDay}>Domingo</strong>
                  <span className={styles.scheduleEvent}>09h30 (EBD) • 18h30 (Culto Dominical)</span>
                </div>
                <div className={styles.scheduleRow}>
                  <strong className={styles.scheduleDay}>Terça-feira</strong>
                  <span className={styles.scheduleEvent}>19h30 (Oração & Estudo Bíblico)</span>
                </div>
                <div className={styles.scheduleRow}>
                  <strong className={styles.scheduleDay}>Sexta-feira</strong>
                  <span className={styles.scheduleEvent}>19h30 (Departamentos: Homens, DLOM, Cadetes)</span>
                </div>
                <div className={styles.scheduleRow}>
                  <strong className={styles.scheduleDay}>Sábado</strong>
                  <span className={styles.scheduleEvent}>17h00 (Rede de Jovens • Quinzenal)</span>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className={styles.socialsGroup}>
              <span className={styles.socialsLabel}>Nossas Redes Oficiais:</span>
              <div className={styles.socialsFlex}>
                <a
                  href={CHURCH_DATA.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialTag}
                  aria-label="Canal no YouTube da ICE Cohatrac"
                >
                  <YoutubeIcon size={16} />
                  <span>YouTube</span>
                </a>

                <a
                  href={CHURCH_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialTag}
                  aria-label="Instagram da ICE Cohatrac"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>

                <a
                  href={CHURCH_DATA.socials.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialTag}
                  aria-label="Linktree da ICE Cohatrac"
                >
                  <ExternalLink size={15} />
                  <span>Linktree</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Mapa Interativo do Google Maps */}
          <div className={styles.mapCard}>
            <div className={styles.mapTopBar}>
              <span className={styles.mapBadge}>
                <span className="pulse-dot"></span>
                ICE Cohatrac no Google Maps
              </span>
              <span className={styles.mapRating}>{CHURCH_DATA.rating}</span>
            </div>

            <div className={styles.mapContainer}>
              <iframe
                title="Localização da Igreja Cristã Evangélica em Cohatrac no Google Maps"
                src={CHURCH_DATA.address.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              ></iframe>
            </div>

            <div className={styles.mapBottomTip}>
              <p>
                <strong>Dica de Chegada:</strong> A igreja está situada em via tranquila e residencial, com facilidade de estacionamento nas proximidades e acesso rápido pelas principais avenidas do Cohatrac.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
