export interface Ministry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  schedule: string;
  icon: string;
}

export interface Leader {
  name: string;
  role: string;
  description: string;
  tag: string;
}

export interface SermonVideo {
  id: string;
  title: string;
  preacher: string;
  date: string;
  youtubeId: string;
  duration?: string;
  passage?: string;
}

export interface Sola {
  latin: string;
  portuguese: string;
  description: string;
  verse: string;
}

export interface FaithArticle {
  title: string;
  content: string;
  reference: string;
}

export interface ScheduleItem {
  day: string;
  time: string;
  title: string;
  description: string;
  isMain?: boolean;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  dayBadge: string;
  monthBadge: string;
  time: string;
  location: string;
  category: string;
  daysRemaining?: number;
  description: string;
}

export interface Bulletin {
  title: string;
  month: string;
  year: number;
  headline: string;
  summary: string;
  prayerFocus: string;
}

export const CHURCH_DATA = {
  name: "ICE Cohatrac",
  fullName: "Igreja Cristã Evangélica em Cohatrac",
  legalName: "Igreja Cristã Evangélica da AICEB em Cohatrac",
  denomination: "Aliança das Igrejas Cristãs Evangélicas do Brasil (AICEB)",
  cnpj: "05.349.364/0001-03",
  cnpjRaw: "05349364000103",
  foundingYear: 2002,
  historyYears: 24,
  aicebFoundingYear: 1947,
  rating: "4.8 / 5.0 estrelas no Google Maps",
  tagline: "Uma igreja família, firmada na Palavra e proclamando a Graça de Cristo em São Luís.",
  subtagline: "Celebramos a Deus com reverência, ensinamos as Escrituras Sagradas com fidelidade e acolhemos você e sua família com amor cristão.",
  motto: "Soli Deo Gloria — A Deus toda a glória",

  address: {
    street: "Rua Dois Mil e Cem (Rua 2100), Quadra 23, Nº 11",
    neighborhood: "Parque Aurora / Cohatrac",
    city: "São Luís",
    state: "MA",
    cep: "65051-856",
    mapsUrl: "https://maps.google.com/?cid=2873994002996943705",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9529369527637!2d-44.2088825!3d-2.5222047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f6920f670fa93f%3A0x27de7d0d0891d179!2sIgreja%20Crist%C3%A3%20Evang%C3%A9lica%20No%20Cohatrac!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
  },

  socials: {
    youtube: "https://www.youtube.com/@ICECOHATRAC",
    youtubeHandle: "@ICECOHATRAC",
    youtubeCount: "+750 vídeos de cultos e mensagens",
    instagram: "https://www.instagram.com/icecohatrac/",
    instagramHandle: "@icecohatrac",
    linktree: "https://linktr.ee/Icecohatrac",
    whatsapp: "https://wa.me/5598988000000?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20ICE%20Cohatrac."
  },

  giving: {
    beneficiary: "Igreja Cristã Evangélica da AICEB em Cohatrac",
    pixKey: "05.349.364/0001-03",
    pixKeyClean: "05349364000103",
    pixKeyType: "CNPJ",
    bank: "Banco do Brasil / Instituição Financeira",
    verseText: "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria.",
    verseRef: "2 Coríntios 9:7"
  },

  schedule: [
    {
      day: "Domingo (Manhã)",
      time: "09h00 às 11h30",
      title: "Escola Bíblica Dominical (EBD) & Culto",
      description: "Classes bíblicas divididas por faixa etária (Infantil, Jovens e Adultos) seguidas de momento devocional.",
      isMain: true
    },
    {
      day: "Domingo (Noite)",
      time: "18h00 às 20h30",
      title: "Culto Dominical de Celebração e Adoração",
      description: "Culto principal da família cristã com louvor congregacional, pregação expositiva da Palavra e comunhão.",
      isMain: true
    },
    {
      day: "Terça-feira",
      time: "19h30 às 20h30",
      title: "Culto de Oração e Estudo Bíblico",
      description: "Reunião solene de intercessão por famílias, enfermos, missões e aprofundamento nas Sagradas Escrituras."
    },
    {
      day: "Sexta-feira",
      time: "19h30 às 21h00",
      title: "Atividades Ministeriais e Pequenos Grupos",
      description: "Encontros nos lares, estudos temáticos, discipulado e fortalecimento dos laços fraternos."
    },
    {
      day: "Sábado",
      time: "17h00 às 19h00",
      title: "Reuniões de Departamentos e Coral",
      description: "Encontros das redes de jovens, adolescentes e ensaio do tradicional Coral da ICE Cohatrac."
    }
  ] as ScheduleItem[],

  solas: [
    {
      latin: "Sola Scriptura",
      portuguese: "Somente a Escritura",
      description: "A Bíblia Sagrada é a Palavra de Deus inspirada, inerrante e nossa única regra infalível de fé e prática para a vida cristã.",
      verse: "2 Timóteo 3:16-17"
    },
    {
      latin: "Solus Christus",
      portuguese: "Somente Cristo",
      description: "Jesus Cristo é o único mediador entre Deus e os homens; somente em Sua pessoa e obra redentora vicária há reconciliação e salvação.",
      verse: "1 Timóteo 2:5"
    },
    {
      latin: "Sola Gratia",
      portuguese: "Somente a Graça",
      description: "A salvação do pecador é inteiramente obra da graça soberana e imerecida de Deus Pai, do início ao fim, sem méritos humanos.",
      verse: "Efésios 2:8-9"
    },
    {
      latin: "Sola Fide",
      portuguese: "Somente a Fé",
      description: "O pecador é justificado diante da justiça de Deus exclusivamente por meio da fé no sacrifício consumado do Senhor Jesus na cruz.",
      verse: "Romanos 5:1"
    },
    {
      latin: "Soli Deo Gloria",
      portuguese: "Glória Somente a Deus",
      description: "Toda a criação, a redenção e o propósito da Igreja existem para a eterna glória e majestade soberana do Deus Triúno.",
      verse: "1 Coríntios 10:31"
    }
  ] as Sola[],

  faithArticles: [
    {
      title: "1. As Sagradas Escrituras",
      content: "Cremos que a Bíblia, composta pelo Antigo e Novo Testamento (66 livros), foi divinamente inspirada pelo Espírito Santo de forma plenária e verbal. Ela é a inerrante e suficiente Palavra de Deus, autoridade final e regra única e imutável para toda a fé, moral e conduta humana.",
      reference: "2 Pedro 1:20-21; 2 Timóteo 3:15-17"
    },
    {
      title: "2. O Único Deus e a Santíssima Trindade",
      content: "Cremos em um único Deus vivo, verdadeiro, pessoal, infinito em poder, sabedoria, santidade e amor. Ele subsiste eternamente em três pessoas distintas, coeternas e consubstanciais: o Pai, o Filho e o Espírito Santo, iguais em essência, atributos e glória.",
      reference: "Deuteronômio 6:4; Mateus 28:19; 2 Coríntios 13:13"
    },
    {
      title: "3. A Queda e a Salvação pela Graça",
      content: "Cremos que o ser humano foi criado reto e à imagem de Deus, mas caiu voluntariamente em desobediência e pecado, tornando-se espiritualmente morto e incapaz de salvar a si mesmo. A salvação é concedida exclusivamente pela graça divina, mediante a fé em Jesus Cristo, operada pelo Espírito Santo através da regeneração e justificação.",
      reference: "Gênesis 1:26-27; Romanos 3:23-24; Tito 3:5"
    },
    {
      title: "4. A Igreja e as Suas Duas Ordenanças",
      content: "Cremos na Igreja Universal como corpo de Cristo, composto por todos os regenerados, e na Igreja Local como expressão visível desse corpo reunido para culto, proclamação do Evangelho, pastoreio e disciplina amorosa. Reconhecemos duas ordenanças bíblicas instituídas por Cristo: o Batismo por imersão dos que professam a fé e a Ceia do Senhor em memória de Seu sacrifício redentor.",
      reference: "Mateus 28:19; 1 Coríntios 11:23-26; Atos 2:41-47"
    },
    {
      title: "5. A Segunda Vinda de Cristo e o Estado Eterno",
      content: "Cremos no retorno pessoal, corpóreo, visível e glorioso do Senhor Jesus Cristo. Cremos na ressurreição dos mortos — tanto dos justos para a vida eterna na presença de Deus, quanto dos injustos para o julgamento e condenação eterna conscientes.",
      reference: "Atos 1:11; 1 Tessalonicenses 4:16-17; Apocalipse 20:11-15"
    }
  ] as FaithArticle[],

  leaders: [
    {
      name: "Pr. Madson Oliveira",
      role: "Pastor e Ministro da Palavra",
      description: "Responsável pelo pastoreio do rebanho, ministração da Palavra nos cultos dominicais, pregação expositiva e liderança espiritual da comunidade.",
      tag: "Ministério Pastoral"
    },
    {
      name: "Pr. Mário Rúbens",
      role: "Pastor Auxiliar",
      description: "Atuação histórica na liderança pastoral da ICE Cohatrac, aconselhamento bíblico de famílias, visitação e ensino sistemático das Escrituras.",
      tag: "Ministério Pastoral"
    },
    {
      name: "Ev. Daniel",
      role: "Evangelista e Professor",
      description: "Dedicação à proclamação do Evangelho, formação de novos discípulos, ensino na Escola Bíblica Dominical e fortalecimento dos jovens.",
      tag: "Ensino & Evangelismo"
    }
  ] as Leader[],

  government: [
    {
      title: "Conselho de Presbíteros",
      description: "Corpo de presbíteros eleitos pela assembleia que auxiliam os pastores no governo bíblico, no zelo doutrinário, no aconselhamento e na supervisão espiritual da igreja local."
    },
    {
      title: "Junta Diaconal (Diaconato)",
      description: "Corpo de servos consagrados para o cuidado diaconal, socorro aos necessitados, ordem no culto público, administração material do templo e apoio às famílias."
    }
  ],

  ministries: [
    {
      id: "ebd",
      title: "Escola Bíblica Dominical",
      subtitle: "Ensino Sistemático da Bíblia",
      description: "O coração do ensino e aprendizado da igreja. Classes preparadas pedagogicamente para crianças, adolescentes, jovens, adultos e novos convertidos.",
      schedule: "Domingos às 09h00",
      icon: "BookOpen"
    },
    {
      id: "louvor",
      title: "Coral & Ministério de Louvor",
      subtitle: "Música Sacra e Reverente",
      description: "Preservação da rica hinologia cristã, cânticos bíblicos contemporâneos e apresentações históricas do tradicional Coral da ICE Cohatrac nos eventos da AICEB.",
      schedule: "Ensaios aos Sábados às 17h00",
      icon: "Music"
    },
    {
      id: "infantil",
      title: "Ministério Infantil (Cordeirinhos)",
      subtitle: "Discipulado desde a Infância",
      description: "Ambiente acolhedor, seguro e bíblico com atividades pedagógicas, lições bíblicas ilustradas e acompanhamento de professoras dedicadas durante os cultos.",
      schedule: "Domingos às 09h00 e 18h00",
      icon: "Sparkles"
    },
    {
      id: "juventude",
      title: "Jovens & Adolescentes",
      subtitle: "Fé Fiel na Sociedade Atual",
      description: "Encontros semanais, estudos bíblicos contextualizados, vigílias, conferências e projetos de serviço que preparam a juventude para honrar a Deus no mundo.",
      schedule: "Sábados às 17h30",
      icon: "Flame"
    },
    {
      id: "familias",
      title: "Famílias, Homens e Mulheres",
      subtitle: "Fortalecendo o Lar Cristão",
      description: "Círculos de oração feminina, reuniões dos homens de fé e encontros de casais voltados para a edificação matrimonial e familiar fundamentada nas Escrituras.",
      schedule: "Reuniões mensais e pequenos grupos",
      icon: "Home"
    },
    {
      id: "missoes",
      title: "Missões & Evangelismo",
      subtitle: "Anunciando a Graça de Cristo",
      description: "Ações evangelísticas no Cohatrac e Parque Aurora, sustento e oração por campos missionários da AICEB no Maranhão, no Brasil e no mundo.",
      schedule: "Ações contínuas e viagens",
      icon: "Compass"
    }
  ] as Ministry[],

  sermons: [
    {
      id: "1",
      title: "Culto Dominical - Noite (ICE Cohatrac)",
      preacher: "Pr. Madson Oliveira",
      date: "Culto Dominical Principal",
      youtubeId: "3L0DSW--fr4",
      passage: "Exposição Bíblica",
      duration: "1h 45m"
    },
    {
      id: "2",
      title: "Culto Dominical de Adoração e Exposição Bíblica",
      preacher: "Pastores da ICE Cohatrac",
      date: "Celebração e Pregação",
      youtubeId: "Sl9tlIdrvC0",
      passage: "Palavra de Edificação",
      duration: "1h 38m"
    },
    {
      id: "3",
      title: "Mensagem Dominical - ICE Cohatrac",
      preacher: "Ministério Pastoral",
      date: "Exposição das Escrituras",
      youtubeId: "q2U4zBXyXI8",
      passage: "Doutrina e Vida Cristã",
      duration: "1h 30m"
    },
    {
      id: "4",
      title: "Culto Dominical - Pregação da Palavra",
      preacher: "Ev. Daniel / Pr. Madson",
      date: "Ministração Especial",
      youtubeId: "qaDEFSLCXqc",
      passage: "Vida Cristã Prática",
      duration: "1h 40m"
    }
  ] as SermonVideo[],

  bulletin: {
    title: "Boletim Informativo",
    month: "Outubro",
    year: 2026,
    headline: "Mês da Reforma Protestante & Firmeza na Fé",
    summary: "Escalas ministeriais dos cultos de domingo, avisos dos departamentos, aniversariantes do mês e compromissos da igreja local.",
    prayerFocus: "Oração pelas famílias da comunidade, pelos enfermos, pelo crescimento bíblico das crianças na EBD e pelos campos missionários da AICEB."
  } as Bulletin,

  events: [
    {
      id: "ev-1",
      title: "Conferência Bíblica: A Fé que Transforma",
      date: "24 a 25 de Outubro",
      dayBadge: "24",
      monthBadge: "OUT",
      time: "Sábado às 19h00 • Domingo às 18h00",
      location: "Templo Sede • Cohatrac",
      category: "Conferência",
      daysRemaining: 10,
      description: "Dois dias dedicados ao estudo expositivo das Escrituras, louvor congregacional e comunhão com convidados da AICEB."
    },
    {
      id: "ev-2",
      title: "Ensaio Geral do Coral ICE Cohatrac & Encontro de Louvor",
      date: "Sábado às 17h00",
      dayBadge: "SÁB",
      monthBadge: "SEM",
      time: "17h00 às 19h00",
      location: "Nave do Templo",
      category: "Música Sacra",
      description: "Preparação dos hinos históricos e cânticos espirituais para os cultos dominicais e encontros da aliança."
    },
    {
      id: "ev-3",
      title: "Culto Solene da Ceia do Senhor & Ações de Graças",
      date: "Primeiro Domingo do Mês",
      dayBadge: "DOM",
      monthBadge: "MÊS",
      time: "18h00 às 20h30",
      location: "Templo Sede",
      category: "Ordenança Bíblica",
      description: "Momento solene de celebração da Ceia, memorial do sacrifício de Cristo na cruz e comunhão entre os irmãos."
    }
  ] as ChurchEvent[]
};
