"use client";

import React, { useState } from "react";
import { Copy, Check, QrCode, Heart, ShieldCheck } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./GivingSection.module.css";

export default function GivingSection() {
  const [copied, setCopied] = useState(false);
  const [qrError, setQrError] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(CHURCH_DATA.giving.pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  return (
    <section id="dizimos" className={`section section-white ${styles.givingSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-gold">
            <Heart size={14} />
            Dízimos e Ofertas
          </span>
          <h2>Generosidade e Sustento da Obra</h2>
          <p>
            O sustento das atividades e o cuidado da casa de Deus são frutos da gratidão
            voluntária do povo de Deus.
          </p>
        </div>

        {/* Versículo Bíblico */}
        <div className={styles.verseBox}>
          <blockquote className={styles.verseQuote}>
            &ldquo;{CHURCH_DATA.giving.verseText}&rdquo;
          </blockquote>
          <cite className={styles.verseRef}>— {CHURCH_DATA.giving.verseRef}</cite>
        </div>

        {/* Card Principal do PIX em Flexbox */}
        <div className={styles.pixCard}>
          <div className={styles.pixFlex}>
            {/* Informações da Chave */}
            <div className={styles.pixInfoCol}>
              <div className={styles.pixBadgeRow}>
                <span className={styles.pixTypeBadge}>Chave Oficial • {CHURCH_DATA.giving.pixKeyType}</span>
                <span className={styles.pixSecurity}>
                  <ShieldCheck size={15} />
                  Conta da Igreja
                </span>
              </div>

              <div className={styles.favorecidoBlock}>
                <span className={styles.favLabel}>Favorecido</span>
                <strong className={styles.favName}>{CHURCH_DATA.giving.beneficiary}</strong>
              </div>

              <div className={styles.keyBox}>
                <div className={styles.keyTextGroup}>
                  <span className={styles.keyLabel}>Chave PIX (CNPJ):</span>
                  <span className={styles.keyValue}>{CHURCH_DATA.giving.pixKey}</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPix}
                  className={`btn ${copied ? "btn-blue" : "btn-gold"} ${styles.copyBtn}`}
                  aria-label="Copiar Chave PIX"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copiar Chave</span>
                    </>
                  )}
                </button>
              </div>

              {copied && (
                <div className={styles.copySuccessAlert}>
                  <Check size={15} />
                  <span>Chave copiada com sucesso! Cole no app do seu banco.</span>
                </div>
              )}

              <p className={styles.pixHelp}>
                Você pode utilizar a função <strong>PIX Chave CNPJ</strong> em qualquer aplicativo bancário.
              </p>
            </div>

            {/* QR Code com Fallback SVG */}
            <div className={styles.qrCol}>
              <div className={styles.qrFrame}>
                {!qrError ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/assets/img/qrcode-pix-ice.png"
                    alt="QR Code PIX"
                    className={styles.qrImg}
                    onError={() => setQrError(true)}
                  />
                ) : null}

                {qrError && (
                  <div className={styles.qrFallback}>
                    <QrCode size={80} className={styles.qrIcon} />
                    <span className={styles.qrFallbackText}>QR Code PIX</span>
                    <span className={styles.qrFallbackKey}>{CHURCH_DATA.giving.pixKey}</span>
                  </div>
                )}
              </div>
              <span className={styles.qrSub}>Aponte a câmera do seu banco</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
