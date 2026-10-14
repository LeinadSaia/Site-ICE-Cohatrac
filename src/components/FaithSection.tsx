"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Shield, Scroll } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./FaithSection.module.css";

export default function FaithSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="cremos" className={`section section-navy ${styles.faithSection}`}>
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <span className="badge-gold">
            <Scroll size={14} />
            Doutrina e Confissão de Fé
          </span>
          <h2 style={{ color: "#FFFFFF" }}>No Que Cremos: Fundamento Bíblico e Reformado</h2>
          <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
            Nossa fé está alicerçada exclusivamente nas Escrituras Sagradas e nos pilares históricos
            da Reforma Bíblica proclamados pela AICEB.
          </p>
        </div>

        {/* PARTE A: Os 5 Solas da Reforma */}
        <div className={styles.solasWrapper}>
          <div className={styles.solasHeader}>
            <h3 className={styles.solasTitle}>Os Cinco Solas da Reforma Cristã</h3>
            <p className={styles.solasSubtitle}>
              As cinco declarações essenciais que sintetizam o Evangelho bíblico
            </p>
          </div>

          <div className={styles.solasGrid}>
            {CHURCH_DATA.solas.map((sola, idx) => (
              <div key={idx} className={styles.solaCard}>
                <div className={styles.solaNumber}>0{idx + 1}</div>
                <h4 className={styles.solaLatin}>{sola.latin}</h4>
                <span className={styles.solaPt}>{sola.portuguese}</span>
                <p className={styles.solaDesc}>{sola.description}</p>
                <div className={styles.solaVerse}>
                  <BookOpen size={14} />
                  <span>{sola.verse}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PARTE B: Artigos Essenciais da Confissão de Fé (Accordion Interativo) */}
        <div className={styles.articlesWrapper}>
          <div className={styles.articlesHeader}>
            <div className={styles.articlesIconBox}>
              <Shield size={24} />
            </div>
            <div>
              <h3 className={styles.articlesTitle}>Artigos Essenciais da Fé Cristã Evangélica</h3>
              <p className={styles.articlesDesc}>
                Confissão doutrinária adotada pela ICE Cohatrac e pelas igrejas da AICEB
              </p>
            </div>
          </div>

          <div className={styles.accordionContainer}>
            {CHURCH_DATA.faithArticles.map((article, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.accordionButton}
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.accordionItemTitle}>{article.title}</span>
                    <span className={styles.accordionChevron}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.accordionContent}>
                      <p className={styles.articleText}>{article.content}</p>
                      <div className={styles.articleRef}>
                        <strong>Referências Bíblicas:</strong> {article.reference}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
