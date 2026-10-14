"use client";

import React, { useState } from "react";
import { Play, Tv, ExternalLink, User, Calendar, CheckCircle2 } from "lucide-react";
import { CHURCH_DATA, SermonVideo } from "@/data/churchData";
import styles from "./SermonsSection.module.css";

export default function SermonsSection() {
  const [activeVideo, setActiveVideo] = useState<SermonVideo>(CHURCH_DATA.sermons[0]);

  return (
    <section id="sermoes" className={`section section-navy-dark ${styles.sermonsSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-gold">
            <Tv size={14} />
            Canal Oficial @ICECOHATRAC
          </span>
          <h2 style={{ color: "#FFFFFF" }}>Mensagens e Transmissões ao Vivo</h2>
          <p style={{ color: "rgba(255, 255, 255, 0.82)" }}>
            Assista às nossas pregações expositivas e cultos dominicais transmitidos diretamente do
            nosso templo em São Luís do Maranhão.
          </p>
        </div>

        {/* Layout Interativo: Player Principal + Lista de Vídeos */}
        <div className={styles.playerContainer}>
          {/* Coluna 1: Player do Vídeo em Destaque */}
          <div className={styles.mainVideoColumn}>
            <div className={styles.iframeWrapper}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.iframe}
              ></iframe>
            </div>

            <div className={styles.activeVideoDetails}>
              <div className={styles.detailsHeader}>
                <span className={styles.activeBadge}>
                  <CheckCircle2 size={14} />
                  Em Reprodução
                </span>
                <span className={styles.durationTag}>{activeVideo.duration}</span>
              </div>

              <h3 className={styles.activeTitle}>{activeVideo.title}</h3>

              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <User size={15} />
                  <span>{activeVideo.preacher}</span>
                </div>
                <div className={styles.metaItem}>
                  <Calendar size={15} />
                  <span>{activeVideo.date}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Galeria e Troca Dinâmica de Vídeos */}
          <div className={styles.playlistColumn}>
            <div className={styles.playlistHeader}>
              <h4>Cultos Recentes no YouTube</h4>
              <span>Clique para carregar no player</span>
            </div>

            <div className={styles.videoList}>
              {CHURCH_DATA.sermons.map((video) => {
                const isSelected = activeVideo.youtubeId === video.youtubeId;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className={`${styles.videoCardBtn} ${isSelected ? styles.cardActive : ""}`}
                  >
                    <div className={styles.thumbnailBox}>
                      <div className={styles.playOverlay}>
                        <Play size={18} fill="currentColor" />
                      </div>
                      <span className={styles.ytTag}>YouTube</span>
                    </div>

                    <div className={styles.videoCardInfo}>
                      <h5 className={styles.videoCardTitle}>{video.title}</h5>
                      <span className={styles.videoCardPreacher}>{video.preacher}</span>
                      <span className={styles.videoCardDate}>{video.date}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Link para o canal no YouTube */}
            <div className={styles.channelLinkBox}>
              <a
                href={CHURCH_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: "100%" }}
              >
                <span>Acessar Acervo Completo ({CHURCH_DATA.socials.youtubeCount})</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
