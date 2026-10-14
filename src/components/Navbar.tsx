"use client";

import React, { useState } from "react";
import { Book, Menu, X, Radio } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
      <div className={`container ${styles.navContainer}`}>
        {/* LOGO & IDENTIDADE ICE COHATRAC */}
        <a href="#inicio" className={styles.logoLink} aria-label="Página Inicial - ICE Cohatrac">
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
              <div className={styles.fallbackLogo} title="ICE Cohatrac">
                <Book className={styles.bibleIcon} size={22} />
              </div>
            )}
          </div>

          <div className={styles.brandInfo}>
            <span className={styles.brandTitle}>ICE Cohatrac</span>
            <span className={styles.brandSubtitle}>Desde 2002 no Cohatrac</span>
          </div>
        </a>

        {/* Links Desktop */}
        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Topo: Ao Vivo / Cultos */}
        <div className={styles.headerActions}>
          <a href="#sermoes" className={styles.liveButton}>
            <span className="pulse-dot"></span>
            <Radio size={15} />
            <span>Cultos Online</span>
          </a>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
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
                className={`${styles.liveButton} ${styles.mobileLiveButton}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="pulse-dot"></span>
                <Radio size={15} />
                <span>Assista Ao Vivo</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
