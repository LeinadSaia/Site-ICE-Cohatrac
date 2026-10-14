import React from "react";
import { BookOpen, Scroll } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./FaithSection.module.css";

export default function FaithSection() {
  return (
    <section id="cremos" className={`section section-navy ${styles.faithSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-gold">
            <Scroll size={14} />
            Doutrina Bíblica
          </span>
          <h2 style={{ color: "#FFFFFF" }}>No Que Cremos: Fundamento das Escrituras</h2>
          <p style={{ color: "rgba(255, 255, 255, 0.82)" }}>
            Nossa fé está alicerçada exclusivamente nas Sagradas Escrituras e nos pilares
            históricos do Evangelho de Cristo.
          </p>
        </div>

        {/* Os 5 Solas em Flexbox */}
        <div className={styles.solasFlex}>
          {CHURCH_DATA.solas.map((sola, idx) => (
            <div key={idx} className={styles.solaCard}>
              <div className={styles.cardHeader}>
                <span className={styles.solaNum}>0{idx + 1}</span>
                <span className={styles.solaPt}>{sola.portuguese}</span>
              </div>
              <h3 className={styles.solaLatin}>{sola.latin}</h3>
              <p className={styles.solaDesc}>{sola.description}</p>
              <div className={styles.solaVerse}>
                <BookOpen size={13} />
                <span>{sola.verse}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
