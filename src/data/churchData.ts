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
    mapsUrl: "https://maps.google.com/?cid=2873994002996943705",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.9529369527637!2d-44.2088825!3d-2.5222047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f6920f670fa93f%3A0x27de7d0d0891d179!2sIgreja%20Crist%C3%A3%20Evang%C3%A9lica%20No%20Cohatrac!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
  },

  socials: {
    youtube: "https://www.youtube.com/@ICECOHATRAC",
    youtubeHandle: "@ICECOHATRAC",
    youtubeCount: "+750 transmissões e mensagens",
    instagram: "https://www.instagram.com/icecohatrac/",
    instagramHandle: "@icecohatrac",
    linktree: "https://linktr.ee/Icecohatrac",
    whatsapp: "https://wa.me/5598988000000?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20ICE%20Cohatrac."
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
      description: "Reuniões simultâneas: Clube dos Homens, DELOM (Mulheres) e Cadetes a Jato (Adolescentes)."
    },
    {
      day: "Sábado",
      time: "17h00 (Quinzenal)",
      title: "Rede de Jovens",
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
      id: "louvor",
      title: "Coral & Ministério de Louvor",
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
      title: "Rede de Jovens",
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
      id: "delom",
      title: "DELOM",
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
      preacher: "Corpo Pastoral",
      date: "Exposição das Escrituras",
      youtubeId: "q2U4zBXyXI8",
      passage: "Doutrina e Vida Cristã",
      duration: "1h 30m"
    },
    {
      id: "4",
      title: "Culto Dominical - Pregação da Palavra",
      preacher: "Pastores da ICE Cohatrac",
      date: "Ministração da Palavra",
      youtubeId: "qaDEFSLCXqc",
      passage: "Vida Cristã Prática",
      duration: "1h 40m"
    }
  ] as SermonVideo[]
};
