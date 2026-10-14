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
    <section id="contribua" className={`section section-white ${styles.givingSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-gold">
            <Heart size={14} />
            Dízimos e Ofertas
          </span>
          <h2>Generosidade e Fidelidade ao Reino</h2>
          <p>
            O sustento da obra do Senhor, dos ministérios locais e do avanço missionário
            é fruto da gratidão e amor voluntário do povo de Deus.
          </p>
        </div>

        {/* Card de Destaque Bíblico */}
        <div className={styles.verseCard}>
          <blockquote className={styles.verseQuote}>
            &ldquo;{CHURCH_DATA.giving.verseText}&rdquo;
          </blockquote>
          <cite className={styles.verseAuthor}>— {CHURCH_DATA.giving.verseRef}</cite>
        </div>

        {/* Card Principal do PIX */}
        <div className={styles.pixContainer}>
          <div className={styles.pixGrid}>
            {/* Coluna 1: Dados do PIX e Botão Copiar */}
            <div className={styles.pixInfoCol}>
              <div className={styles.pixHeader}>
                <span className={styles.pixTypeBadge}>Chave Oficial • {CHURCH_DATA.giving.pixKeyType}</span>
                <span className={styles.pixSecurity}>
                  <ShieldCheck size={16} />
                  Conta Institucional da Igreja
                </span>
              </div>

              <div className={styles.favorecidoBox}>
                <span className={styles.favLabel}>Favorecido:</span>
                <strong className={styles.favName}>{CHURCH_DATA.giving.beneficiary}</strong>
              </div>

              {/* Caixa da Chave com Botão de Cópia */}
              <div className={styles.keyBox}>
                <div className={styles.keyDisplay}>
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
                      <Check size={18} />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      <span>Copiar Chave</span>
                    </>
                  )}
                </button>
              </div>

              {copied && (
                <div className={styles.copySuccessAlert}>
                  <Check size={16} />
                  <span>Chave PIX copiada para a área de transferência! Cole no aplicativo do seu banco.</span>
                </div>
              )}

              <p className={styles.pixInstructions}>
                Você pode contribuir pelo seu aplicativo bancário usando a opção <strong>PIX Copia e Cola</strong> ou <strong>Chave CNPJ</strong>.
              </p>
            </div>

            {/* Coluna 2: QR Code Oficial com Fallback Inteligente */}
            <div className={styles.qrCol}>
              <div className={styles.qrWrapper}>
                {!qrError ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/assets/img/qrcode-pix-ice.png"
                    alt="QR Code PIX ICE Cohatrac"
                    className={styles.qrImg}
                    onError={() => setQrError(true)}
                  />
                ) : null}

                {qrError && (
                  <div className={styles.qrFallback}>
                    <QrCode size={96} className={styles.qrIcon} />
                    <span className={styles.qrFallbackText}>QR Code PIX</span>
                    <span className={styles.qrFallbackSub}>{CHURCH_DATA.giving.pixKey}</span>
                  </div>
                )}
              </div>

              <span className={styles.qrCaption}>
                Aponte a câmera do aplicativo do seu banco
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
