/**
 * Contenido de lautarobc.com y de los CV en PDF (fuente única).
 * Origen: CV de Lautaro Barrera Cisterna (oct 2026) + respuestas de Lautaro (28/10/2026).
 * Reglas: sin cifras de personas a cargo, sin datos internos de Grupo Trocadero,
 * sin teléfono en la web. No añadir nada que Lautaro no haya dicho.
 */

export const LOCALES = ["es", "en"] as const; // "fr" previsto en una fase posterior
export type Locale = (typeof LOCALES)[number];

export const SITE_URL = "https://www.lautarobc.com";
export const EMAIL = "lautarobc@gmail.com";
export const PHONE = "+34 620 99 75 98"; // solo en los PDF que envía Lautaro, nunca en la web
export const LINKEDIN =
  "https://www.linkedin.com/in/lautaro-barrera-cisterna-48b484184";
export const LINKEDIN_SHORT = "linkedin.com/in/lautaro-barrera-cisterna-48b484184";
export const CV_PDF = "/cv/CV-Lautaro-Barrera-Cisterna.pdf";
export const CV_PDF_EN = "/cv/CV-Lautaro-Barrera-Cisterna-EN.pdf";

export type Job = {
  role: string;
  company: string;
  place: string;
  dates: string;
  /** Una línea de contexto: qué era el sitio. */
  note?: string;
  /** Etiquetas para lectura rápida. */
  tags: string[];
  /** 3-4 viñetas, orientadas a lo que se consiguió. */
  bullets: string[];
};

/** Fase 2: portfolio (platos, cartas, proyectos). Vacío = la sección no se muestra. */
export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  image?: string;
};

export type Dict = {
  locale: Locale;
  htmlLang: string;
  path: string;
  meta: { title: string; description: string; ogAlt: string };
  nav: { id: string; label: string }[];
  langSwitch: { label: string; href: string; aria: string };
  name: string;
  title: string;
  location: string;
  hero: { downloadCv: string; contact: string; linkedin: string; trajectory: string };
  trajectory: string[];
  facts: { value: string; label: string }[];
  profile: { heading: string; paragraphs: string[] };
  experience: {
    heading: string;
    jobs: Job[];
    early: { heading: string; dates: string; items: string[] };
  };
  skills: {
    heading: string;
    groups: { title: string; text: string }[];
    systemsTitle: string;
    systems: string[];
  };
  education: {
    heading: string;
    degree: string;
    school: string;
    dates: string;
    detail: string;
    ongoingTitle: string;
    ongoing: string[];
  };
  languages: { heading: string; items: { name: string; level: string; cefr: number }[] };
  portfolio: { heading: string; intro: string; items: PortfolioItem[] };
  contact: {
    heading: string;
    lead: string;
    email: string;
    linkedin: string;
    cv: string;
    moreHeading: string;
    more: string[];
  };
  /** Textos solo para el CV en PDF. */
  cv: {
    contact: string;
    languages: string;
    skills: string;
    profile: string;
    experience: string;
    experienceCont: string;
    education: string;
    more: string;
    moreItems: string[];
    sideRole: string;
    location: string;
    skillsSystems: string;
  };
  footer: string;
};

export const es: Dict = {
  locale: "es",
  htmlLang: "es",
  path: "/",
  meta: {
    title: "Lautaro Barrera Cisterna · F&B Manager · Control de costes y compras",
    description:
      "Más de 10 años en restauración: aperturas, alta gastronomía, hoteles y control de costes. Implantación de TPV y gestión de stock. Málaga.",
    ogAlt: "Lautaro Barrera Cisterna, F&B Manager",
  },
  nav: [
    { id: "perfil", label: "Perfil" },
    { id: "experiencia", label: "Experiencia" },
    { id: "competencias", label: "Competencias" },
    { id: "formacion", label: "Formación" },
    { id: "contacto", label: "Contacto" },
  ],
  langSwitch: { label: "EN", href: "/en", aria: "View in English" },
  name: "Lautaro Barrera Cisterna",
  title: "F&B Manager · Control de costes y compras",
  location: "Málaga",
  hero: {
    downloadCv: "Descargar CV",
    contact: "Contactar",
    linkedin: "LinkedIn",
    trajectory: "Trayectoria en",
  },
  trajectory: [
    "Grupo Trocadero",
    "Grupo Dani García",
    "Mercedes-Benz Gourmet Experience",
    "Hoteles Globales",
    "Finca Cortesín",
    "NH Hotel Group",
    "Palladium Hotel Group",
  ],
  facts: [
    { value: "+10", label: "años en restauración" },
    { value: "3", label: "aperturas: Madrid, Ginebra y Quito" },
    { value: "6", label: "países: España, Suiza, Ecuador, Argentina, Francia y Países Bajos" },
  ],
  profile: {
    heading: "Perfil",
    paragraphs: [
      "Más de 10 años en restauración: sala, cocina, compras y control de costes en hoteles, alta gastronomía, beach clubs y delivery.",
      "Mi terreno son las aperturas y la alta gastronomía, unidas al control del margen y a la tecnología: implantación de TPV y gestión de stock, datos fiables para decidir y uso de la IA en el día a día de la operación.",
    ],
  },
  experience: {
    heading: "Experiencia",
    jobs: [
      {
        role: "Control de Costes",
        company: "Grupo Trocadero",
        place: "Costa del Sol",
        dates: "Nov 2024 – Oct 2026",
        note: "Restauración premium y beach clubs: varios locales y obrador central. Equipo de operaciones, con reporte a dirección general.",
        tags: ["Multi-local", "Control de costes", "Tecnología"],
        bullets: [
          "Implantación de Ágora TPV en todos los locales como key user: desde la decisión y la puesta en marcha hasta el soporte técnico posterior.",
          "Integración con G-Stock, CoverManager y A3; depuración de la base de datos de ingredientes y recetas para obtener costes reales y datos fiables para el resto de departamentos.",
          "Food & beverage cost por local: coste teórico vs. real, desviaciones y acciones correctoras; escandallos con cocina (I+D) e ingeniería de menú.",
          "Cierres de mes y control de compras: inventarios, albaranes, facturas y homologación de proveedores.",
        ],
      },
      {
        role: "Maître",
        company: "Hoteles Globales Gardenia",
        place: "Fuengirola",
        dates: "May 2024 – Dic 2024",
        note: "Hotel de 3 estrellas en todo incluido, unas 250 habitaciones.",
        tags: ["Hotel", "Sala"],
        bullets: [
          "Dirección de sala en 4 puntos de venta: buffet (desayuno, comida, cena, media mañana y merienda), bar de piscina y bar de noche con zona de entretenimiento.",
          "Pedidos, inventarios y control de costes.",
          "Atención al cliente y resolución de incidencias.",
        ],
      },
      {
        role: "Maître",
        company: "Mercedes-Benz Gourmet Experience",
        place: "Quito (Ecuador)",
        dates: "Sep 2023 – Nov 2023",
        note: "Restaurante gastronómico pop-up con un chef invitado distinto cada mes y un equipo estable en Quito.",
        tags: ["Apertura", "Alta gastronomía"],
        bullets: [
          "Apertura del primer restaurante de Mercedes-Benz en Latinoamérica: contratación, formación del equipo de sala, decoración e inauguración.",
          "Lanzamiento con prensa, televisión, entrevistas e influencers.",
          "Maridaje, ingeniería de menú y cálculo de costes de carta.",
        ],
      },
      {
        role: "F&B Controller Delivery",
        company: "Grupo Dani García",
        place: "Málaga",
        dates: "Jun 2021 – Dic 2022",
        note: "Proyecto de delivery La Gran Familia Mediterránea.",
        tags: ["Control de costes", "Delivery"],
        bullets: [
          "Sistemas de control de costes, inventarios y cierres de mes.",
          "Facturación automatizada junto a Spoonlab.",
          "Análisis de ventas, procedimientos, logística y control de incidencias.",
        ],
      },
      {
        role: "Supply and Restaurant Manager",
        company: "EatTasty",
        place: "Madrid",
        dates: "Abr 2019 – Jun 2020",
        note: "Start-up portuguesa de comida para empresas. La operación en España se detuvo con la pandemia.",
        tags: ["Start-up", "Compras"],
        bullets: [
          "Captación de restaurantes colaboradores: selección del plato y negociación del precio con condiciones de calidad y cantidad.",
          "Cadena de suministro y compras; negociación con proveedores.",
          "Desarrollo de producto (I+D) para un menú diario de comida casera.",
        ],
      },
      {
        role: "Restaurant and Bar Manager",
        company: "Restaurante Morgana",
        place: "Madrid",
        dates: "Sep 2017 – Feb 2019",
        note: "Cocina gallega de fusión en Chueca, con el chef Miguel Fernández Vida.",
        tags: ["Apertura", "Sala y barra"],
        bullets: [
          "Primer empleado: apertura y puesta en marcha, cubriendo todas las posiciones.",
          "N.º 1 de Tripadvisor en Madrid durante el primer año, con lista de espera constante.",
          "Dirección de sala y barra, reservas y control de existencias.",
        ],
      },
      {
        role: "Junior Sous Chef",
        company: "Restaurant Bodega21",
        place: "Ginebra (Suiza)",
        dates: "Oct 2016 – Jul 2017",
        note: "Tapería y bar de cócteles de cocina española en el centro de Ginebra.",
        tags: ["Apertura", "Cocina"],
        bullets: [
          "Apertura del establecimiento.",
          "Segundo de cocina: menús, compras, escandallos y control de existencias.",
          "Apoyo en sumillería, con carta de vino español.",
        ],
      },
    ],
    early: {
      heading: "Etapa formativa",
      dates: "2009 – 2016",
      items: [
        "NH Hotel Group: becario de compras en las oficinas centrales de NH Mercosur (Buenos Aires); prácticas de F&B y recepción; cocina en NH Zandvoort (Países Bajos).",
        "Palladium Hotel Group, Ushuaïa Ibiza Beach Hotel: room service.",
        "Finca Cortesín: sala y eventos.",
        "Hesperia Isla de La Toja: recepción.",
        "Centre International d'Antibes: administración.",
      ],
    },
  },
  skills: {
    heading: "Competencias",
    groups: [
      {
        title: "Control de costes",
        text: "Escandallos, coste teórico vs. real, desviaciones, mermas, inventarios, cierres de mes e ingeniería de menú.",
      },
      {
        title: "Compras",
        text: "Negociación y homologación de proveedores, control de albaranes y facturas, cadena de suministro.",
      },
      {
        title: "Operaciones",
        text: "Aperturas, dirección de sala y equipos, formación, I+D y diseño de platos.",
      },
      {
        title: "Tecnología",
        text: "Implantación de TPV y gestión de stock, integraciones, limpieza de datos e IA aplicada al trabajo.",
      },
    ],
    systemsTitle: "Herramientas",
    systems: ["Ágora TPV (key user)", "G-Stock", "CoverManager", "A3", "Microsoft Office"],
  },
  education: {
    heading: "Formación",
    degree: "Diploma Superior en Gestión Hotelera",
    school: "Centro Superior de Hostelería de Galicia (CSHG) · Dirección de Hotel",
    dates: "2009 – 2013",
    detail: "Especialización en Alimentos y Bebidas y Departamento de Compras.",
    ongoingTitle: "En curso",
    ongoing: ["Google UX Design (diseño de experiencia de usuario)"],
  },
  languages: {
    heading: "Idiomas",
    items: [
      { name: "Castellano", level: "Nativo", cefr: 6 },
      { name: "Gallego", level: "Nativo", cefr: 6 },
      { name: "Inglés", level: "B2", cefr: 4 },
      { name: "Francés", level: "B2", cefr: 4 },
    ],
  },
  portfolio: { heading: "Portfolio", intro: "Platos, cartas y proyectos.", items: [] },
  contact: {
    heading: "Contacto",
    lead: "",
    email: "Escribir un email",
    linkedin: "Ver perfil en LinkedIn",
    cv: "Descargar CV en PDF",
    moreHeading: "Más información",
    more: [
      "Disponibilidad inmediata.",
      "Carné de conducir y vehículo propio.",
      "Abierto a viajar, a formación en el extranjero y a trabajo híbrido.",
      "Referencias disponibles a petición.",
    ],
  },
  cv: {
    contact: "Contacto",
    languages: "Idiomas",
    skills: "Competencias",
    profile: "Perfil",
    experience: "Experiencia",
    experienceCont: "Experiencia (continuación)",
    education: "Formación",
    more: "Más información",
    moreItems: [
      "Disponibilidad inmediata.",
      "Turnos rotativos.",
      "Carné de conducir y vehículo propio.",
      "Abierto a viajar, a formación en el extranjero y a trabajo híbrido.",
      "Referencias disponibles a petición.",
    ],
    sideRole: "F&B MANAGER",
    location: "Málaga",
    skillsSystems: "Ágora TPV (key user), G-Stock, CoverManager, A3, Microsoft Office, análisis de datos, IA",
  },
  footer: "Lautaro Barrera Cisterna",
};

export const en: Dict = {
  locale: "en",
  htmlLang: "en",
  path: "/en",
  meta: {
    title: "Lautaro Barrera Cisterna · F&B Manager · Cost Control & Purchasing",
    description:
      "Over 10 years in hospitality: openings, fine dining, hotels and cost control. POS and stock management rollouts. Málaga, Spain.",
    ogAlt: "Lautaro Barrera Cisterna, F&B Manager",
  },
  nav: [
    { id: "profile", label: "Profile" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
  langSwitch: { label: "ES", href: "/", aria: "Ver en español" },
  name: "Lautaro Barrera Cisterna",
  title: "F&B Manager · Cost Control & Purchasing",
  location: "Málaga, Spain",
  hero: {
    downloadCv: "Download CV",
    contact: "Get in touch",
    linkedin: "LinkedIn",
    trajectory: "Experience at",
  },
  trajectory: [
    "Grupo Trocadero",
    "Grupo Dani García",
    "Mercedes-Benz Gourmet Experience",
    "Hoteles Globales",
    "Finca Cortesín",
    "NH Hotel Group",
    "Palladium Hotel Group",
  ],
  facts: [
    { value: "10+", label: "years in hospitality" },
    { value: "3", label: "openings: Madrid, Geneva and Quito" },
    { value: "6", label: "countries: Spain, Switzerland, Ecuador, Argentina, France and the Netherlands" },
  ],
  profile: {
    heading: "Profile",
    paragraphs: [
      "Over 10 years in hospitality: floor, kitchen, purchasing and cost control across hotels, fine dining, beach clubs and delivery.",
      "My ground is openings and fine dining, combined with margin control and technology: POS and stock management rollouts, reliable data for decision-making and everyday use of AI in operations.",
    ],
  },
  experience: {
    heading: "Experience",
    jobs: [
      {
        role: "Cost Controller",
        company: "Grupo Trocadero",
        place: "Costa del Sol",
        dates: "Nov 2024 – Oct 2026",
        note: "Premium dining and beach clubs: several venues and a central production kitchen. Operations team, reporting to general management.",
        tags: ["Multi-venue", "Cost control", "Technology"],
        bullets: [
          "Rollout of Ágora POS across all venues as key user: from the decision and go-live to ongoing technical support.",
          "Integration with G-Stock, CoverManager and A3; clean-up of the ingredient and recipe database to obtain actual costs and reliable data for other departments.",
          "Food & beverage cost per venue: theoretical vs. actual cost, variances and corrective actions; recipe costing with the kitchen (R&D) and menu engineering.",
          "Month-end closing and purchasing control: inventories, delivery notes, invoices and supplier approval.",
        ],
      },
      {
        role: "Maître d'",
        company: "Hoteles Globales Gardenia",
        place: "Fuengirola",
        dates: "May 2024 – Dec 2024",
        note: "3-star all-inclusive hotel, around 250 rooms.",
        tags: ["Hotel", "Front of house"],
        bullets: [
          "Front-of-house management across 4 outlets: buffet (breakfast, lunch, dinner, mid-morning and afternoon), pool bar and night bar with entertainment area.",
          "Ordering, inventories and cost control.",
          "Guest service and incident resolution.",
        ],
      },
      {
        role: "Maître d'",
        company: "Mercedes-Benz Gourmet Experience",
        place: "Quito (Ecuador)",
        dates: "Sep 2023 – Nov 2023",
        note: "Fine-dining pop-up with a different guest chef every month and a permanent team in Quito.",
        tags: ["Opening", "Fine dining"],
        bullets: [
          "Opening of Mercedes-Benz's first restaurant in Latin America: hiring, front-of-house training, decoration and launch.",
          "Launch with press, television, interviews and influencers.",
          "Wine pairing, menu engineering and menu costing.",
        ],
      },
      {
        role: "F&B Controller, Delivery",
        company: "Grupo Dani García",
        place: "Málaga",
        dates: "Jun 2021 – Dec 2022",
        note: "La Gran Familia Mediterránea delivery project.",
        tags: ["Cost control", "Delivery"],
        bullets: [
          "Cost control, inventory and month-end closing systems.",
          "Automated invoicing together with Spoonlab.",
          "Sales analysis, procedures, logistics and incident management.",
        ],
      },
      {
        role: "Supply and Restaurant Manager",
        company: "EatTasty",
        place: "Madrid",
        dates: "Apr 2019 – Jun 2020",
        note: "Portuguese food start-up for companies. Spanish operations stopped with the pandemic.",
        tags: ["Start-up", "Purchasing"],
        bullets: [
          "Onboarding of partner restaurants: dish selection and price negotiation under quality and portion standards.",
          "Supply chain and purchasing; supplier negotiation.",
          "Product development (R&D) for a daily home-style menu.",
        ],
      },
      {
        role: "Restaurant and Bar Manager",
        company: "Restaurante Morgana",
        place: "Madrid",
        dates: "Sep 2017 – Feb 2019",
        note: "Galician fusion cuisine in Chueca, with chef Miguel Fernández Vida.",
        tags: ["Opening", "Floor and bar"],
        bullets: [
          "First employee: opening and launch, covering every position.",
          "No. 1 on Tripadvisor in Madrid during the first year, with a constant waiting list.",
          "Front-of-house and bar management, reservations and stock control.",
        ],
      },
      {
        role: "Junior Sous Chef",
        company: "Restaurant Bodega21",
        place: "Geneva (Switzerland)",
        dates: "Oct 2016 – Jul 2017",
        note: "Spanish tapas and cocktail bar in central Geneva.",
        tags: ["Opening", "Kitchen"],
        bullets: [
          "Opening of the restaurant.",
          "Second in the kitchen: menus, purchasing, recipe costing and stock control.",
          "Sommelier support, with a Spanish wine list.",
        ],
      },
    ],
    early: {
      heading: "Early career and training",
      dates: "2009 – 2016",
      items: [
        "NH Hotel Group: purchasing intern at the NH Mercosur head office (Buenos Aires); F&B and front desk internships; kitchen at NH Zandvoort (Netherlands).",
        "Palladium Hotel Group, Ushuaïa Ibiza Beach Hotel: room service.",
        "Finca Cortesín: floor service and events.",
        "Hesperia Isla de La Toja: front desk.",
        "Centre International d'Antibes: administration.",
      ],
    },
  },
  skills: {
    heading: "Skills",
    groups: [
      {
        title: "Cost control",
        text: "Recipe costing, theoretical vs. actual cost, variances, waste, inventories, month-end closing and menu engineering.",
      },
      {
        title: "Purchasing",
        text: "Supplier negotiation and approval, delivery note and invoice control, supply chain.",
      },
      {
        title: "Operations",
        text: "Openings, front-of-house and team leadership, training, R&D and dish design.",
      },
      {
        title: "Technology",
        text: "POS and stock management rollouts, integrations, data clean-up and AI applied to daily work.",
      },
    ],
    systemsTitle: "Tools",
    systems: ["Ágora POS (key user)", "G-Stock", "CoverManager", "A3", "Microsoft Office"],
  },
  education: {
    heading: "Education",
    degree: "Higher Diploma in Hotel Management",
    school: "Centro Superior de Hostelería de Galicia (CSHG) · Hotel Management",
    dates: "2009 – 2013",
    detail: "Specialisation in Food & Beverage and Purchasing.",
    ongoingTitle: "In progress",
    ongoing: ["Google UX Design (user experience design)"],
  },
  languages: {
    heading: "Languages",
    items: [
      { name: "Spanish", level: "Native", cefr: 6 },
      { name: "Galician", level: "Native", cefr: 6 },
      { name: "English", level: "B2", cefr: 4 },
      { name: "French", level: "B2", cefr: 4 },
    ],
  },
  portfolio: { heading: "Portfolio", intro: "Dishes, menus and projects.", items: [] },
  contact: {
    heading: "Contact",
    lead: "",
    email: "Send an email",
    linkedin: "View LinkedIn profile",
    cv: "Download CV (PDF)",
    moreHeading: "Additional information",
    more: [
      "Immediate availability.",
      "Driving licence and own vehicle.",
      "Open to travel, training abroad and hybrid work.",
      "References available on request.",
    ],
  },
  cv: {
    contact: "Contact",
    languages: "Languages",
    skills: "Skills",
    profile: "Profile",
    experience: "Experience",
    experienceCont: "Experience (continued)",
    education: "Education",
    more: "Additional information",
    moreItems: [
      "Immediate availability.",
      "Rotating shifts.",
      "Driving licence and own vehicle.",
      "Open to travel, training abroad and hybrid work.",
      "References available on request.",
    ],
    sideRole: "F&B MANAGER",
    location: "Málaga, Spain",
    skillsSystems: "Ágora POS (key user), G-Stock, CoverManager, A3, Microsoft Office, data analysis, AI",
  },
  footer: "Lautaro Barrera Cisterna",
};

export const dictionaries: Record<Locale, Dict> = { es, en };
