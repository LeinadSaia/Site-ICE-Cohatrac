import type { Metadata } from "next";
import "./globals.css";
import { CHURCH_DATA } from "@/data/churchData";

export const metadata: Metadata = {
  title: "ICE Cohatrac — Igreja Cristã Evangélica em Cohatrac | São Luís - MA",
  description:
    "Site oficial da Igreja Cristã Evangélica em Cohatrac. Desde 2002 no Cohatrac, São Luís - MA. Cultos dominicais, Escola Bíblica, sermões expositivos, vida comunitária e proclamação do Evangelho.",
  keywords: [
    "ICE Cohatrac",
    "Igreja Cristã Evangélica",
    "Cohatrac",
    "Parque Aurora",
    "Igreja em São Luís",
    "Igreja Evangélica São Luís",
    "Escola Bíblica Dominical",
    "Culto ao Vivo",
    "Pregação Expositiva",
    "Doutrinas da Graça"
  ],
  authors: [{ name: "ICE Cohatrac" }],
  creator: "Igreja Cristã Evangélica em Cohatrac",
  publisher: "ICE Cohatrac",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://icecohatrac.com.br",
    title: "ICE Cohatrac — Igreja Cristã Evangélica em Cohatrac",
    description:
      "Uma igreja família, firmada na Palavra e proclamando a Graça de Cristo em São Luís - MA desde 2002. Conheça nossos cultos e ministérios.",
    siteName: "ICE Cohatrac",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICE Cohatrac — Igreja Cristã Evangélica no Cohatrac",
    description: "Desde 2002 no Cohatrac e Parque Aurora, São Luís - MA.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: CHURCH_DATA.legalName,
    alternateName: CHURCH_DATA.fullName,
    description: CHURCH_DATA.tagline,
    url: "https://icecohatrac.com.br",
    telephone: "+55-98-98800-0000",
    address: {
      "@type": "PostalAddress",
      streetAddress: CHURCH_DATA.address.street,
      addressLocality: CHURCH_DATA.address.city,
      addressRegion: CHURCH_DATA.address.state,
      postalCode: CHURCH_DATA.address.cep,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -2.5222047,
      longitude: -44.2088825,
    },
    hasMap: CHURCH_DATA.address.mapsUrl,
    sameAs: [
      CHURCH_DATA.socials.youtube,
      CHURCH_DATA.socials.instagram,
      CHURCH_DATA.socials.linktree,
    ],
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
