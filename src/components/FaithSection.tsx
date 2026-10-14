"use client";

import React, { useState, useMemo } from "react";
import { BookOpen, ChevronDown, ScrollText, Search, ChevronsUpDown, CheckCircle } from "lucide-react";
import { CONFESSION_DATA, CONFESSION_METADATA } from "@/data/confessionData";
import styles from "./FaithSection.module.css";

export default function FaithSection() {
  // Gaveta I aberta por padrão para demonstrar o conteúdo
  const [openChapters, setOpenChapters] = useState<string[]>(["escrituras"]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleChapter = (chapterId: string) => {
    setOpenChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const expandAll = () => {
    setOpenChapters(CONFESSION_DATA.map((ch) => ch.id));
  };

  const collapseAll = () => {
    setOpenChapters([]);
  };

  // Filtragem por busca
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return CONFESSION_DATA;
    const q = searchQuery.toLowerCase();
    return CONFESSION_DATA.filter((ch) => {
      const matchChapterTitle = ch.title.toLowerCase().includes(q) || ch.roman.toLowerCase().includes(q);
      const matchArticles = ch.articles.some(
        (art) =>
          art.title.toLowerCase().includes(q) ||
          art.text.toLowerCase().includes(q) ||
          art.references.toLowerCase().includes(q)
      );
      return matchChapterTitle || matchArticles;
    });
  }, [searchQuery]);

  // Se houver busca ativa, abre automaticamente os capítulos encontrados
  React.useEffect(() => {
    if (searchQuery.trim()) {
      setOpenChapters(filteredChapters.map((ch) => ch.id));
    }
  }, [searchQuery, filteredChapters]);

  return (
    <section id="cremos" className={`section section-clean ${styles.faithSection}`}>
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <span className="badge-gold">
            <ScrollText size={14} />
            Doutrina e Fundamento
          </span>
          <h2>Confissão de Fé da AICEB</h2>
          <p>
            <strong>{CONFESSION_METADATA.motto}</strong> — Nossas convicções bíblicas e doutrinárias
            estruturadas conforme a Confissão de Fé oficial da Aliança das Igrejas Cristãs Evangélicas do Brasil.
          </p>
        </div>

        {/* Barra de Ações: Busca & Gavetas */}
        <div className={styles.controlsBar}>
          <div className={styles.searchBox}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Pesquisar por tema (ex: Escrituras, Trindade, Batismo, Graça)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Buscar na confissão de fé"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className={styles.clearSearchBtn}
              >
                Limpar
              </button>
            )}
          </div>

          <div className={styles.toggleButtons}>
            <button
              type="button"
              onClick={expandAll}
              className={styles.toggleBtn}
              title="Abrir todas as seções"
            >
              <ChevronsUpDown size={15} />
              <span>Expandir Todas</span>
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className={styles.toggleBtn}
              title="Fechar todas as seções"
            >
              <span>Recolher Todas</span>
            </button>
          </div>
        </div>

        {/* Lista de Gavetas (Accordions) em Flexbox */}
        <div className={styles.drawersList}>
          {filteredChapters.map((chapter) => {
            const isOpen = openChapters.includes(chapter.id);

            return (
              <div
                key={chapter.id}
                className={`${styles.drawerCard} ${isOpen ? styles.drawerOpen : ""}`}
              >
                {/* Cabeçalho da Gaveta (Botão Clicável) */}
                <button
                  type="button"
                  onClick={() => toggleChapter(chapter.id)}
                  className={styles.drawerHeader}
                  aria-expanded={isOpen}
                  aria-controls={`drawer-content-${chapter.id}`}
                >
                  <div className={styles.drawerHeaderLeft}>
                    <span className={styles.romanBadge}>{chapter.roman}</span>
                    <div className={styles.drawerTitleGroup}>
                      <h3 className={styles.drawerTitle}>{chapter.title}</h3>
                      <span className={styles.articlesCount}>
                        {chapter.articles.length} {chapter.articles.length === 1 ? "artigo" : "artigos"}
                      </span>
                    </div>
                  </div>

                  <div className={styles.chevronWrap}>
                    <ChevronDown
                      size={20}
                      className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ""}`}
                    />
                  </div>
                </button>

                {/* Conteúdo da Gaveta Aberta */}
                {isOpen && (
                  <div
                    id={`drawer-content-${chapter.id}`}
                    className={styles.drawerContent}
                  >
                    <div className={styles.articlesFlex}>
                      {chapter.articles.map((article, idx) => (
                        <article key={idx} className={styles.articleItem}>
                          {/* Título do Artigo */}
                          <div className={styles.articleHeader}>
                            <span className={styles.articleBullet}></span>
                            <h4 className={styles.articleTitle}>{article.title}</h4>
                          </div>

                          {/* Texto Doutrinário */}
                          <p className={styles.articleText}>{article.text}</p>

                          {/* Caixa de Referências Bíblicas */}
                          {article.references && (
                            <div className={styles.referencesBox}>
                              <div className={styles.refHeader}>
                                <BookOpen size={14} className={styles.refIcon} />
                                <strong>Referências Bíblicas:</strong>
                              </div>
                              <p className={styles.refText}>{article.references}</p>
                            </div>
                          )}
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Nota Institucional de Aprovação */}
        <div className={styles.approvalBox}>
          <CheckCircle size={18} className={styles.approvalIcon} />
          <p>{CONFESSION_METADATA.approval}</p>
        </div>
      </div>
    </section>
  );
}
