"use client";

import React, { useState } from "react";
import { Play, Tv, ExternalLink, User, Calendar, CheckCircle2 } from "lucide-react";
import { CHURCH_DATA, SermonVideo } from "@/data/churchData";
import styles from "./SermonsSection.module.css";

export default function SermonsSection() {
  const [activeVideo, setActiveVideo] = useState<SermonVideo>(CHURCH_DATA.sermons[0]);

  return (
    <section id="sermoes" className={`section section-navy ${styles.sermonsSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-gold">
            <Tv size={14} />
            Transmissões & Mensagens
          </span>
          <h2 style={{ color: "#FFFFFF" }}>Cultos e Exposição da Palavra</h2>
          <p style={{ color: "rgba(255, 255, 255, 0.82)" }}>
            Acompanhe nossas mensagens bíblicas transmitidas ao vivo no canal oficial da ICE Cohatrac
            no YouTube.
          </p>
        </div>

        {/* Layout Flexbox: Player Principal + Lista de Vídeos */}
        <div className={styles.playerFlex}>
          {/* Coluna 1: Player Principal */}
          <div className={styles.mainVideoCol}>
            <div className={styles.iframeWrapper}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.iframe}
              ></iframe>
            </div>

            <div className={styles.videoDetails}>
              <div className={styles.detailsTop}>
                <span className={styles.activeBadge}>
                  <CheckCircle2 size={13} />
                  Em Reprodução
                </span>
                {activeVideo.duration && (
                  <span className={styles.durationTag}>{activeVideo.duration}</span>
                )}
              </div>

              <h3 className={styles.activeTitle}>{activeVideo.title}</h3>

              <div className={styles.metaRow}>
                <div className={styles.metaItem}>
                  <User size={14} />
                  <span>{activeVideo.preacher}</span>
                </div>
                {activeVideo.date && (
                  <div className={styles.metaItem}>
                    <Calendar size={14} />
                    <span>{activeVideo.date}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Coluna 2: Seletor de Transmissões */}
          <div className={styles.playlistCol}>
            <div className={styles.playlistHeader}>
              <h4>Transmissões Recentes</h4>
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
                    className={`${styles.videoBtn} ${isSelected ? styles.cardActive : ""}`}
                  >
                    <div className={styles.thumbnailBox}>
                      <Play size={16} fill="currentColor" />
                    </div>

                    <div className={styles.videoBtnInfo}>
                      <span className={styles.btnTitle}>{video.title}</span>
                      <span className={styles.btnPreacher}>{video.preacher}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className={styles.channelLinkBox}>
              <a
                href={CHURCH_DATA.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: "100%" }}
              >
                <span>Canal no YouTube ({CHURCH_DATA.socials.youtubeCount})</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
