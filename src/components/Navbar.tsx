"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Radio } from "lucide-react";
import ChurchEmblem from "@/components/ChurchEmblem";
import { YoutubeIcon } from "@/components/icons/SocialIcons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLive, setIsLive] = useState(false);

  // Verifica se o momento atual é o horário real de culto com transmissão ao vivo
  // Horário oficial: Domingo das 18h30 às 20h30 (horário de São Luís / Brasília)
  useEffect(() => {
    const checkIfLive = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("pt-BR", {
          timeZone: "America/Fortaleza",
          hour: "numeric",
          minute: "numeric",
          hourCycle: "h23",
        });
        const parts = formatter.formatToParts(now);
        const getPart = (type: string) => parts.find((p) => p.type === type)?.value;
        const day = now.getDay(); // 0 = Domingo
        const hour = parseInt(getPart("hour") || "0", 10);
        const minute = parseInt(getPart("minute") || "0", 10);
        const timeInMinutes = hour * 60 + minute;

        // Ao vivo: Domingo entre 18h30 (1110 min) e 20h30 (1230 min)
        const isSundayLive = day === 0 && timeInMinutes >= 1110 && timeInMinutes <= 1230;
        setIsLive(isSundayLive);
      } catch {
        setIsLive(false);
      }
    };

    checkIfLive();
    const timer = setInterval(checkIfLive, 60000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "A Igreja", href: "#sobre" },
    { label: "No Que Cremos", href: "#cremos" },
    { label: "Liderança", href: "#lideranca" },
    { label: "Departamentos", href: "#departamentos" },
    { label: "Horários", href: "#horarios" },
    { label: "Mensagens", href: "#sermoes" },
    { label: "Dízimos", href: "#dizimos" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* LOGO & IDENTIDADE ICE COHATRAC */}
        <a href="#inicio" className={styles.logoLink} aria-label="Página Inicial - ICE Cohatrac">
          <div className={styles.logoBadge}>
            <ChurchEmblem size={38} />
          </div>

          <div className={styles.brandInfo}>
            <span className={styles.brandTitle}>ICE Cohatrac</span>
            <span className={styles.brandSubtitle}>Desde 2002 no Cohatrac</span>
          </div>
        </a>

        {/* Links Desktop com Flexbox Fluido e Espaçamento Equilibrado */}
        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Topo: Só ativa indicador "Ao Vivo" quando estiver em transmissão real */}
        <div className={styles.headerActions}>
          {isLive ? (
            <a
              href="#sermoes"
              className={`${styles.headerActionButton} ${styles.liveActiveBtn}`}
              aria-label="Culto Ao Vivo Agora na ICE Cohatrac"
            >
              <span className="pulse-dot"></span>
              <Radio size={14} />
              <span>Ao Vivo</span>
            </a>
          ) : (
            <a
              href="#sermoes"
              className={`${styles.headerActionButton} ${styles.calmButton}`}
              aria-label="Ver mensagens e transmissões no YouTube"
            >
              <YoutubeIcon size={16} />
              <span>Cultos & Vídeos</span>
            </a>
          )}

          {/* Botão Menu Mobile (Três Barrinhas) */}
          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop e Menu Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className={styles.backdrop}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className={styles.mobileDrawer} role="dialog" aria-modal="true">
            <div className="container">
              <nav className={styles.mobileNav}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#sermoes"
                  className={`${styles.drawerActionButton} ${
                    isLive ? styles.liveActiveBtn : styles.calmButton
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isLive ? (
                    <>
                      <span className="pulse-dot"></span>
                      <Radio size={15} />
                      <span>Ao Vivo Agora</span>
                    </>
                  ) : (
                    <>
                      <YoutubeIcon size={18} />
                      <span>Assistir Cultos no YouTube</span>
                    </>
                  )}
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
