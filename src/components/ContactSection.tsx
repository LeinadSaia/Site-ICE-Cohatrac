"use client";

import React, { useState } from "react";
import { MessageSquare, CalendarCheck, MapPin, Navigation, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { CHURCH_DATA } from "@/data/churchData";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<"oracao" | "visita">("oracao");

  // Estados do formulário de Oração
  const [prayerName, setPrayerName] = useState("");
  const [prayerPhone, setPrayerPhone] = useState("");
  const [prayerReason, setPrayerReason] = useState("");
  const [shareTuesday, setShareTuesday] = useState(true);
  const [prayerSubmitting, setPrayerSubmitting] = useState(false);
  const [prayerSuccess, setPrayerSuccess] = useState<string | null>(null);

  // Estados do formulário de Visita
  const [visitName, setVisitName] = useState("");
  const [visitPhone, setVisitPhone] = useState("");
  const [visitService, setVisitService] = useState("Domingo às 18h00 (Culto de Celebração)");
  const [withFamily, setWithFamily] = useState(true);
  const [visitSubmitting, setVisitSubmitting] = useState(false);
  const [visitSuccess, setVisitSuccess] = useState<string | null>(null);

  // Submissão do Pedido de Oração
  const handlePrayerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerName.trim() || !prayerReason.trim()) return;

    setPrayerSubmitting(true);
    try {
      const res = await fetch("/api/pedidos-oracao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: prayerName,
          phone: prayerPhone,
          prayerReason: prayerReason,
          shareInTuesdayMeeting: shareTuesday
        })
      });
      const data = await res.json();
      if (res.ok) {
        setPrayerSuccess(data.message || "Pedido enviado com sucesso!");
        setPrayerName("");
        setPrayerPhone("");
        setPrayerReason("");
      } else {
        alert(data.error || "Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch {
      alert("Falha de conexão. Tente novamente.");
    } finally {
      setPrayerSubmitting(false);
    }
  };

  // Submissão do Planejamento de Visita
  const handleVisitSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitName.trim() || !visitService) return;

    setVisitSubmitting(true);
    try {
      const res = await fetch("/api/visitas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: visitName,
          phone: visitPhone,
          serviceTime: visitService,
          withFamily: withFamily
        })
      });
      const data = await res.json();
      if (res.ok) {
        setVisitSuccess(data.message || "Visita confirmada!");
        setVisitName("");
        setVisitPhone("");
      } else {
        alert(data.error || "Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch {
      alert("Falha de conexão. Tente novamente.");
    } finally {
      setVisitSubmitting(false);
    }
  };

  return (
    <section id="contato" className={`section section-ice ${styles.contactSection}`}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="section-header">
          <span className="badge-blue">
            <MessageSquare size={14} />
            Fale Conosco & Localização
          </span>
          <h2>Planeje sua Visita ou Peça Oração</h2>
          <p>
            Queremos caminhar com você. Envie seu motivo de oração ou avise-nos sobre sua visita
            para prepararmos a melhor acolhida.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Coluna 1: Formulário Interativo com Abas */}
          <div className={styles.formCard}>
            {/* Abas */}
            <div className={styles.tabsHeader}>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === "oracao" ? styles.tabActive : ""}`}
                onClick={() => setActiveTab("oracao")}
              >
                <MessageSquare size={18} />
                <span>Pedido de Oração</span>
              </button>

              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === "visita" ? styles.tabActive : ""}`}
                onClick={() => setActiveTab("visita")}
              >
                <CalendarCheck size={18} />
                <span>Sou Novo Aqui</span>
              </button>
            </div>

            {/* Conteúdo Aba 1: Pedido de Oração */}
            {activeTab === "oracao" && (
              <div className={styles.tabContent}>
                {prayerSuccess ? (
                  <div className={styles.successBox}>
                    <CheckCircle2 size={40} className={styles.successIcon} />
                    <h4 className={styles.successTitle}>Pedido Registrado</h4>
                    <p className={styles.successMsg}>{prayerSuccess}</p>
                    <div className={styles.successActions}>
                      <button
                        type="button"
                        onClick={() => setPrayerSuccess(null)}
                        className="btn btn-outline-blue"
                      >
                        Enviar Outro Pedido
                      </button>
                      <a
                        href={CHURCH_DATA.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold"
                      >
                        <MessageCircle size={18} />
                        <span>Falar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handlePrayerSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="p-name">Seu Nome Completo *</label>
                      <input
                        id="p-name"
                        type="text"
                        required
                        placeholder="Ex: Maria dos Santos"
                        value={prayerName}
                        onChange={(e) => setPrayerName(e.target.value)}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="p-phone">WhatsApp / Telefone (Opcional)</label>
                      <input
                        id="p-phone"
                        type="tel"
                        placeholder="(98) 99999-9999"
                        value={prayerPhone}
                        onChange={(e) => setPrayerPhone(e.target.value)}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="p-reason">Motivo de Oração / Intercessão *</label>
                      <textarea
                        id="p-reason"
                        required
                        rows={4}
                        placeholder="Descreva aqui sua necessidade, motivo de saúde, família, gratidão ou causa espiritual..."
                        value={prayerReason}
                        onChange={(e) => setPrayerReason(e.target.value)}
                        className={styles.textarea}
                      ></textarea>
                    </div>

                    <div className={styles.checkboxGroup}>
                      <input
                        type="checkbox"
                        id="tuesday-share"
                        checked={shareTuesday}
                        onChange={(e) => setShareTuesday(e.target.checked)}
                        className={styles.checkbox}
                      />
                      <label htmlFor="tuesday-share">
                        Desejo que meu pedido seja apresentado no Culto de Oração da próxima terça-feira (19h30).
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={prayerSubmitting}
                      className="btn btn-gold"
                      style={{ width: "100%" }}
                    >
                      {prayerSubmitting ? (
                        <span>Enviando pedido...</span>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Enviar Pedido de Oração</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Conteúdo Aba 2: Sou Novo Aqui / Visita */}
            {activeTab === "visita" && (
              <div className={styles.tabContent}>
                {visitSuccess ? (
                  <div className={styles.successBox}>
                    <CheckCircle2 size={40} className={styles.successIcon} />
                    <h4 className={styles.successTitle}>Visita Planejada!</h4>
                    <p className={styles.successMsg}>{visitSuccess}</p>
                    <div className={styles.successActions}>
                      <button
                        type="button"
                        onClick={() => setVisitSuccess(null)}
                        className="btn btn-outline-blue"
                      >
                        Agendar Outra Visita
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleVisitSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="v-name">Seu Nome Completo *</label>
                      <input
                        id="v-name"
                        type="text"
                        required
                        placeholder="Ex: João da Silva"
                        value={visitName}
                        onChange={(e) => setVisitName(e.target.value)}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="v-phone">WhatsApp para Contato</label>
                      <input
                        id="v-phone"
                        type="tel"
                        placeholder="(98) 99999-9999"
                        value={visitPhone}
                        onChange={(e) => setVisitPhone(e.target.value)}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="v-service">Qual culto pretende visitar?</label>
                      <select
                        id="v-service"
                        value={visitService}
                        onChange={(e) => setVisitService(e.target.value)}
                        className={styles.select}
                      >
                        <option value="Domingo às 09h00 (EBD)">Domingo às 09h00 (Escola Bíblica Dominical)</option>
                        <option value="Domingo às 18h00 (Culto de Celebração)">Domingo às 18h00 (Culto Dominical Principal)</option>
                        <option value="Terça às 19h30 (Estudo Bíblico)">Terça-feira às 19h30 (Oração & Estudo Bíblico)</option>
                      </select>
                    </div>

                    <div className={styles.checkboxGroup}>
                      <input
                        type="checkbox"
                        id="v-family"
                        checked={withFamily}
                        onChange={(e) => setWithFamily(e.target.checked)}
                        className={styles.checkbox}
                      />
                      <label htmlFor="v-family">
                        Vou acompanhado(a) de familiares ou crianças (para prepararmos as salas apropriadas).
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={visitSubmitting}
                      className="btn btn-blue"
                      style={{ width: "100%" }}
                    >
                      {visitSubmitting ? (
                        <span>Registrando visita...</span>
                      ) : (
                        <>
                          <CalendarCheck size={18} />
                          <span>Confirmar Visita à Igreja</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Coluna 2: Mapa e Informações de Localização */}
          <div className={styles.locationCard}>
            <div className={styles.locationHeader}>
              <div className={styles.locationIcon}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 className={styles.locationTitle}>Onde Estamos</h3>
                <span className={styles.locationSub}>Bairro Parque Aurora / Cohatrac</span>
              </div>
            </div>

            <div className={styles.addressBox}>
              <p className={styles.addressStreet}>{CHURCH_DATA.address.street}</p>
              <p className={styles.addressCity}>
                {CHURCH_DATA.address.neighborhood} • {CHURCH_DATA.address.city} - {CHURCH_DATA.address.state}
              </p>
              <p className={styles.addressCep}>CEP: {CHURCH_DATA.address.cep}</p>
            </div>

            {/* Iframe do Mapa do Google */}
            <div className={styles.mapFrameWrapper}>
              <iframe
                title="Localização ICE Cohatrac no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9529369527637!2d-44.2088825!3d-2.5222047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f6920f670fa93f%3A0x27de7d0d0891d179!2sIgreja%20Crist%C3%A3%20Evang%C3%A9lica%20No%20Cohatrac!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapIframe}
              ></iframe>
            </div>

            {/* Botão de Rota */}
            <div className={styles.routeBtnBox}>
              <a
                href={CHURCH_DATA.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: "100%" }}
              >
                <Navigation size={18} />
                <span>Abrir Rota no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
