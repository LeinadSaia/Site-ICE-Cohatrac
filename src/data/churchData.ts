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

export interface ScheduleItem {
  day: string;
  time: string;
  title: string;
  description: string;
  isMain?: boolean;
}

export const CHURCH_DATA = {
  name: "ICE Cohatrac",
  fullName: "Igreja Cristã Evangélica em Cohatrac",
  legalName: "Igreja Cristã Evangélica em Cohatrac",
  cnpj: "05.349.364/0001-03",
  cnpjRaw: "05349364000103",
  foundingYear: 2002,
  badgeText: "Desde 2002 no Cohatrac",
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
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=-2.5374585,-44.2121065",
    embedUrl: "https://maps.google.com/maps?q=-2.5374585,-44.2121065+(Igreja+Crist%C3%A3+Evang%C3%A9lica+em+Cohatrac)&t=&z=18&ie=UTF8&iwloc=&output=embed"
  },

  socials: {
    youtube: "https://www.youtube.com/@ICECOHATRAC",
    youtubeHandle: "@ICECOHATRAC",
    youtubeCount: "+750 transmissões e mensagens",
    instagram: "https://www.instagram.com/icecohatrac/",
    instagramHandle: "@icecohatrac",
    linktree: "https://linktr.ee/Icecohatrac"
  },

  giving: {
    beneficiary: "Igreja Cristã Evangélica em Cohatrac",
    pixKey: "05.349.364/0001-03",
    pixKeyClean: "05349364000103",
    pixKeyType: "CNPJ",
    bank: "Conta Institucional da Igreja",
    verseText: "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria.",
    verseRef: "2 Coríntios 9:7"
  },

  schedule: [
    {
      day: "Domingo (Manhã)",
      time: "09h30 às 11h00",
      title: "Escola Bíblica Dominical (EBD)",
      description: "Classes de ensino sistemático da Bíblia para todas as faixas etárias e salas dedicadas do MCC infantil.",
      isMain: true
    },
    {
      day: "Domingo (Noite)",
      time: "18h30 às 20h00",
      title: "Culto Dominical de Celebração e Adoração",
      description: "Culto congregacional da família com louvor bíblico, pregação expositiva da Palavra e transmissão ao vivo.",
      isMain: true
    },
    {
      day: "Terça-feira",
      time: "19h30",
      title: "Culto de Oração e Estudo Bíblico",
      description: "Momento solene de intercessão e aprofundamento doutrinário nas Escrituras Sagradas."
    },
    {
      day: "Sexta-feira",
      time: "19h30",
      title: "Encontros de Departamentos",
      description: "Reuniões simultâneas: Clube dos Homens, DLOM (Mulheres) e Cadetes a Jato (Adolescentes)."
    },
    {
      day: "Sábado",
      time: "17h00 (Quinzenal)",
      title: "Jovens",
      description: "Encontros da mocidade com comunhão fraterna, estudos contextualizados e louvor."
    }
  ] as ScheduleItem[],

  leaders: [
    {
      name: "Pr. Madson Oliveira",
      role: "Pastor Titular",
      description: "Ministro da Palavra, responsável pela liderança espiritual da igreja, pregação expositiva nos cultos e pastoreio da comunidade.",
      tag: "Pastor Titular"
    },
    {
      name: "Pr. Júnior Vieira",
      role: "Pastor Auxiliar",
      description: "Atuação ministerial e pastoral, auxiliando no pastoreio, visitação às famílias, ensino bíblico e aconselhamento.",
      tag: "Pastor Auxiliar"
    },
    {
      name: "Pr. Cícero Balduíno",
      role: "Pastor",
      description: "Ministério pastoral dedicado ao ensino bíblico, cuidado congregacional e fortalecimento dos membros na fé cristã.",
      tag: "Pastor"
    }
  ] as Leader[],

  government: [
    {
      title: "Conselho de Presbíteros",
      description: "Corpo de presbíteros eleitos pela comunidade que atuam juntamente com o corpo pastoral no zelo doutrinário, supervisão espiritual e condução da igreja."
    },
    {
      title: "Junta Diaconal (Diaconato)",
      description: "Servos consagrados dedicados à assistência fraternal, socorro e beneficência, acolhimento dos membros e visitantes, e ordem do culto público."
    }
  ],

  ministries: [
    {
      id: "ebd",
      title: "Escola Bíblica Dominical",
      subtitle: "Ensino Sistemático das Escrituras",
      description: "O coração doutrinário da igreja. Classes bíblicas preparadas para crianças, adolescentes, jovens e adultos todos os domingos.",
      schedule: "Domingos das 09h30 às 11h00",
      icon: "BookOpen"
    },
    {
      id: "coral",
      title: "Coral da ICE Cohatrac",
      subtitle: "Música Sacra e Reverente",
      description: "Zelo pela rica hinologia cristã histórica, cânticos espirituais bíblicos e apresentações do tradicional Coral da ICE Cohatrac.",
      schedule: "Ensaios e cultos dominicais",
      icon: "Music"
    },
    {
      id: "mcc",
      title: "MCC — Ministério Crescer com Cristo",
      subtitle: "Ministério Infantil da ICE Cohatrac",
      description: "Ensino bíblico acolhedor e criativo para as crianças, fundamentando a fé em Jesus desde a infância durante a EBD e cultos.",
      schedule: "Domingos às 09h30 e às 18h30",
      icon: "Sparkles"
    },
    {
      id: "jovens",
      title: "Jovens",
      subtitle: "Comunhão e Vida Cristã",
      description: "Reuniões quinzenais aos sábados com estudos bíblicos, louvor e comunhão para os jovens cristãos.",
      schedule: "Sábados às 17h00 (Quinzenal)",
      icon: "Flame"
    },
    {
      id: "cadetes",
      title: "Cadetes a Jato",
      subtitle: "Grupo de Adolescentes",
      description: "Espaço voltado para o discipulado bíblico, amizade cristã e crescimento na fé dos adolescentes da igreja.",
      schedule: "Sextas-feiras às 19h30",
      icon: "Rocket"
    },
    {
      id: "homens",
      title: "Clube dos Homens",
      subtitle: "Liderança e Firmeza Bíblica",
      description: "Encontros de homens para oração, encorajamento mútuo e fortalecimento do papel cristão na família e na sociedade.",
      schedule: "Sextas-feiras às 19h30",
      icon: "Shield"
    },
    {
      id: "dlom",
      title: "DLOM",
      subtitle: "Departamento Local de Mulheres",
      description: "Círculo de mulheres dedicado à oração fervorosa, edificação espiritual mútua e serviço amoroso na casa de Deus.",
      schedule: "Sextas-feiras às 19h30",
      icon: "Heart"
    }
  ] as Ministry[],

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
      description: "Jesus Cristo é o único mediador entre Deus e os homens; somente em Sua pessoa e obra redentora vicária há salvação.",
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

  sermons: [
    {
      id: "1",
      title: "Culto Dominical - Noite (11/10/2026)",
      preacher: "ICE Cohatrac Ao Vivo",
      date: "Última Transmissão",
      youtubeId: "AYFOmZ7a07g"
    },
    {
      id: "2",
      title: "Culto Dominical - Manhã (11/10/2026)",
      preacher: "ICE Cohatrac Ao Vivo",
      date: "EBD / Manhã",
      youtubeId: "Rwyw5I6FIvQ"
    },
    {
      id: "3",
      title: "Culto Dominical -Noite (04/10/2026)",
      preacher: "ICE Cohatrac Ao Vivo",
      date: "Transmissão Anterior",
      youtubeId: "3L0DSW--fr4"
    },
    {
      id: "4",
      title: "Culto Dominical -Noite (27/09/2026)",
      preacher: "ICE Cohatrac Ao Vivo",
      date: "Transmissão Anterior",
      youtubeId: "Sl9tlIdrvC0"
    },
    {
      id: "5",
      title: "Culto Dominical - Manhã (27/09/2026)",
      preacher: "ICE Cohatrac Ao Vivo",
      date: "Transmissão Anterior",
      youtubeId: "hE1jY-XVSDM"
    },
    {
      id: "6",
      title: "Culto Dominical - Noite(20/09/2026)",
      preacher: "ICE Cohatrac Ao Vivo",
      date: "Transmissão Anterior",
      youtubeId: "TZIIqreXZDs"
    }
  ] as SermonVideo[]
};
