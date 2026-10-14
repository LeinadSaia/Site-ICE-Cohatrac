"use client";

import React, { useState } from "react";

interface ChurchEmblemProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function ChurchEmblem({ size = 42, className }: ChurchEmblemProps) {
  const [imageError, setImageError] = useState(false);

  if (!imageError) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="/assets/img/logo-ice-cohatrac.png"
        alt="Logo Oficial ICE Cohatrac"
        width={size}
        height={size}
        className={className}
        onError={() => setImageError(true)}
        style={{
          display: "block",
          width: size,
          height: size,
          objectFit: "contain",
          borderRadius: "50%",
        }}
      />
    );
  }

  // Fallback vetorial de alta precisão do emblema oficial da ICEB
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", borderRadius: "50%" }}
    >
      {/* Círculo Azul Marinho Oficial */}
      <circle cx="60" cy="60" r="58" fill="#1A2850" stroke="#0F1A36" strokeWidth="2" />

      {/* Segmentos Superiores (Arco / Vitral) */}
      {/* 1. Inferior Esquerdo: Azul */}
      <path d="M 60 40 L 26 40 A 34 34 0 0 1 36 21 Z" fill="#0060B6" />
      {/* 2. Superior Esquerdo: Amarelo */}
      <path d="M 60 40 L 36 21 A 34 34 0 0 1 54 8 L 54 40 Z" fill="#FFF275" />
      {/* 3. Superior Direito: Verde */}
      <path d="M 60 40 L 66 40 L 66 8 A 34 34 0 0 1 84 21 Z" fill="#66B014" />
      {/* 4. Inferior Direito: Azul */}
      <path d="M 60 40 L 84 21 A 34 34 0 0 1 94 40 Z" fill="#0060B6" />

      {/* Cruz Branca com Contorno */}
      {/* Haste Vertical Superior */}
      <rect x="54" y="8" width="12" height="34" fill="#FFFFFF" stroke="#1A2850" strokeWidth="2" />
      {/* Braço Horizontal */}
      <rect x="22" y="38" width="76" height="13" fill="#FFFFFF" stroke="#1A2850" strokeWidth="2" />
      {/* Haste Vertical Inferior */}
      <rect x="54" y="50" width="12" height="58" fill="#FFFFFF" stroke="#1A2850" strokeWidth="2" />
    </svg>
  );
}
