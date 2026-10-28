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
  /** 3-4 viñetas, orientadas a lo que se consiguió. **texto** = resaltado (máx. 1 por puesto). */
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
  cases: {
    heading: string;
    intro: string;
    labels: { problem: string; action: string; result: string };
    items: { title: string; company: string; problem: string; action: string; result: string }[];
  };
  tech: {
    heading: string;
    intro: string;
    items: { title: string; context: string; text: string }[];
  };
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
    title: "Lautaro Barrera Cisterna · F&B Manager · Operaciones, costes y tecnología",
    description:
      "Más de 10 años en restauración: aperturas, alta gastronomía, hoteles y control de costes. Implantación de TPV y gestión de stock. Málaga.",
    ogAlt: "Lautaro Barrera Cisterna, F&B Manager",
  },
  nav: [
    { id: "perfil", label: "Perfil" },
    { id: "casos", label: "Casos" },
    { id: "tecnologia", label: "Tecnología" },
    { id: "experiencia", label: "Experiencia" },
    { id: "competencias", label: "Competencias" },
    { id: "formacion", label: "Formación" },
    { id: "contacto", label: "Contacto" },
  ],
  langSwitch: { label: "EN", href: "/en", aria: "View in English" },
  name: "Lautaro Barrera Cisterna",
  title: "F&B Manager · Operaciones, costes y tecnología",
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
  cases: {
    heading: "Casos",
    intro: "Tres proyectos contados como reto, intervención y resultado.",
    labels: { problem: "El reto", action: "Qué hice", result: "Resultado" },
    items: [
      {
        title: "Del dato disperso al dato útil",
        company: "Grupo Trocadero · 2024 – 2026",
        problem: "TPV, stock, reservas y contabilidad funcionaban por separado: había datos valiosos que nadie estaba usando.",
        action: "Implantación de Ágora TPV en todos los locales, integración con G-Stock, CoverManager y A3, depuración de más de 200 recetas y escandallos y formación de los equipos.",
        result: "Coste teórico vs. real por local y datos fiables para dirección y para el resto de departamentos.",
      },
      {
        title: "Crecer sin perder el control",
        company: "Grupo Dani García · 2021 – 2022",
        problem: "La Gran Familia Mediterránea pasó de menos de 10 a más de 20 restaurantes en año y medio.",
        action: "Sistemas de costes, inventarios y cierres de mes; facturación automatizada con tSpoonLab y piloto de lectura de albaranes por foto conectado con la contabilidad.",
        result: "Un método de facturación y cierre que acompañó toda la expansión.",
      },
      {
        title: "Abrir al otro lado del Atlántico",
        company: "Mercedes-Benz Gourmet Experience · Quito · 2023",
        problem: "Primer restaurante de Mercedes-Benz en Latinoamérica, con un chef invitado distinto cada mes.",
        action: "Contratación y formación del equipo de sala desde cero; carta escandallada con tSpoonLab y maridajes para cada chef.",
        result: "Un equipo local estable, capaz de operar con chefs rotativos y una carta con costes controlados.",
      },
    ],
  },
  tech: {
    heading: "Tecnología aplicada a F&B",
    intro: "La tecnología no como informática, sino como herramienta de control de gestión: menos trabajo manual y mejores decisiones.",
    items: [
      {
        title: "TPV, stock y datos",
        context: "Grupo Trocadero",
        text: "Implantación de Ágora TPV como key user e integración con G-Stock, CoverManager y A3. Escandallado masivo con apoyo de IA: más de 200 recetas depuradas o creadas.",
      },
      {
        title: "IA para formar equipos",
        context: "Grupo Trocadero",
        text: "Asistente de formación con NotebookLM de Google: procedimientos, manuales, cartas, escandallos y recetarios que cualquier empleado puede consultar, con preguntas y fichas de estudio generadas.",
      },
      {
        title: "Automatización de albaranes",
        context: "Grupo Dani García",
        text: "Piloto de lectura de albaranes por foto con tSpoonLab, conectado con Navision y la contabilidad, trabajando junto al equipo de desarrollo.",
      },
      {
        title: "Herramientas propias",
        context: "Grupo Trocadero",
        text: "Prototipos desarrollados por iniciativa propia: un back-office para el equipo de RR. HH. y una web conectada a Ágora para publicar las cartas en tiempo real.",
      },
    ],
  },
  facts: [
    { value: "+10", label: "años en restauración" },
    { value: "4", label: "aperturas: Madrid, Ginebra, Quito y Vigo" },
    { value: "6", label: "países: España, Suiza, Ecuador, Argentina, Francia y Países Bajos" },
  ],
  profile: {
    heading: "Perfil",
    paragraphs: [
      "Más de 10 años en restauración uniendo operación, control del margen y tecnología en hoteles, alta gastronomía, beach clubs y delivery.",
      "Mi terreno son las aperturas y la alta gastronomía, como puente entre la cocina y los números: el equipo aporta la creación y yo le pongo coste, rentabilidad y un lugar en una carta equilibrada.",
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
          "**Implantación de Ágora TPV en todos los locales** como key user: desde la decisión y la puesta en marcha hasta el soporte técnico posterior.",
          "Integración con G-Stock, CoverManager y A3 y depuración de la base de datos de ingredientes y recetas: datos reales que antes no se aprovechaban, integrados en el trabajo de cada departamento.",
          "Food & beverage cost por local: coste teórico vs. real, desviaciones y acciones correctoras; escandallos con cocina (I+D) e ingeniería de menú.",
          "Cierres de mes y control de compras: inventarios, albaranes, facturas y homologación de proveedores.",
        ],
      },
      {
        role: "Maître",
        company: "Hoteles Globales Gardenia",
        place: "Fuengirola",
        dates: "May 2024 – Dic 2024",
        note: "Hotel de 3 estrellas en todo incluido, unas 250 habitaciones. Contrato fijo discontinuo: el fin de temporada coincidió con mi incorporación a Grupo Trocadero.",
        tags: ["Hotel", "Sala"],
        bullets: [
          "Dirección de sala en 4 puntos de venta: buffet principal (desayuno, comida y cena), buffet de media mañana y merienda, bar de piscina y bar de noche con zona de entretenimiento.",
          "Pedidos, inventarios y control de costes.",
          "Atención al cliente y resolución de incidencias.",
        ],
      },
      {
        role: "Asesor gastronómico",
        company: "Proyectos independientes",
        place: "Vigo y Madrid",
        dates: "2023 – 2024",
        note: "Asesorías y ferias gastronómicas junto al chef Miguel Fernández Vidal (Restaurante Morgana).",
        tags: ["Apertura", "Asesoría", "Control de costes"],
        bullets: [
          "**Apertura de Voltarei (Vigo)**, cocina gallega tradicional para tapear y compartir con un aire más moderno: diseño de menús, escandallos, sistema de control de costes, formación del equipo de cocina y apoyo en las fotos para la carta digital y el marketing.",
          "La Florería (calle Ponzano, Madrid): recetario y control de costes sobre la herramienta de escandallos del chef, para renovar la carta y mejorar el beneficio.",
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
          "Apertura del **primer restaurante de Mercedes-Benz en Latinoamérica**: contratación, formación del equipo de sala, decoración e inauguración.",
          "Lanzamiento con prensa, televisión, entrevistas e influencers.",
          "Maridaje, ingeniería de menú y escandallos de carta con tSpoonLab.",
        ],
      },
      {
        role: "F&B Controller Delivery",
        company: "Grupo Dani García",
        place: "Málaga",
        dates: "Jun 2021 – Dic 2022",
        note: "Proyecto de delivery La Gran Familia Mediterránea.",
        tags: ["Multi-local", "Control de costes", "Delivery"],
        bullets: [
          "Control de costes durante la expansión del proyecto: **de menos de 10 a más de 20 restaurantes** en año y medio.",
          "Inventarios y cierres de mes, con un método para facturar y cerrar más de 20 locales a la vez.",
          "Facturación automatizada junto a tSpoonLab; análisis de ventas, procedimientos y logística.",
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
        note: "Cocina gallega de fusión en Chueca (Madrid).",
        tags: ["Apertura", "Sala y barra"],
        bullets: [
          "Primer empleado: apertura y puesta en marcha, cubriendo todas las posiciones.",
          "**N.º 1 de Tripadvisor en Madrid** durante el primer año, con lista de espera constante.",
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
        text: "Implantación de TPV e integraciones, automatización con IA (formación y escandallos), herramientas propias e informes.",
      },
    ],
    systemsTitle: "Herramientas",
    systems: ["Ágora TPV (key user)", "G-Stock", "tSpoonLab", "CoverManager", "A3", "NotebookLM", "Microsoft Office"],
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
    skillsSystems: "Ágora TPV (key user), G-Stock, tSpoonLab, CoverManager, A3, NotebookLM, Microsoft Office",
  },
  footer: "Lautaro Barrera Cisterna",
};

export const en: Dict = {
  locale: "en",
  htmlLang: "en",
  path: "/en",
  meta: {
    title: "Lautaro Barrera Cisterna · F&B Manager · Operations, Cost Control & Technology",
    description:
      "Over 10 years in hospitality: openings, fine dining, hotels and cost control. POS and stock management rollouts. Málaga, Spain.",
    ogAlt: "Lautaro Barrera Cisterna, F&B Manager",
  },
  nav: [
    { id: "profile", label: "Profile" },
    { id: "cases", label: "Cases" },
    { id: "technology", label: "Technology" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
  langSwitch: { label: "ES", href: "/", aria: "Ver en español" },
  name: "Lautaro Barrera Cisterna",
  title: "F&B Manager · Operations, Cost Control & Technology",
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
  cases: {
    heading: "Cases",
    intro: "Three projects told as challenge, action and result.",
    labels: { problem: "Challenge", action: "What I did", result: "Result" },
    items: [
      {
        title: "From scattered data to useful data",
        company: "Grupo Trocadero · 2024 – 2026",
        problem: "POS, stock, reservations and accounting ran separately: valuable data was going unused.",
        action: "Rollout of Ágora POS across all venues, integration with G-Stock, CoverManager and A3, clean-up of more than 200 recipes and costings, and team training.",
        result: "Theoretical vs. actual cost per venue and reliable data for management and other departments.",
      },
      {
        title: "Growing without losing control",
        company: "Grupo Dani García · 2021 – 2022",
        problem: "La Gran Familia Mediterránea grew from fewer than 10 to more than 20 restaurants in a year and a half.",
        action: "Cost, inventory and month-end closing systems; automated invoicing with tSpoonLab and a pilot reading delivery notes from photos, connected to accounting.",
        result: "An invoicing and closing method that kept pace with the whole expansion.",
      },
      {
        title: "Opening across the Atlantic",
        company: "Mercedes-Benz Gourmet Experience · Quito · 2023",
        problem: "Mercedes-Benz's first restaurant in Latin America, with a different guest chef every month.",
        action: "Hiring and training the front-of-house team from scratch; menu costing in tSpoonLab and wine pairings for each chef.",
        result: "A stable local team able to run with rotating chefs and a cost-controlled menu.",
      },
    ],
  },
  tech: {
    heading: "Technology in F&B",
    intro: "Technology not as IT, but as a management control tool: less manual work and better decisions.",
    items: [
      {
        title: "POS, stock and data",
        context: "Grupo Trocadero",
        text: "Rollout of Ágora POS as key user and integration with G-Stock, CoverManager and A3. AI-assisted bulk recipe costing: more than 200 recipes cleaned up or created.",
      },
      {
        title: "AI for team training",
        context: "Grupo Trocadero",
        text: "Training assistant built with Google NotebookLM: procedures, manuals, menus, costings and recipe books any employee can query, with generated questions and study cards.",
      },
      {
        title: "Delivery note automation",
        context: "Grupo Dani García",
        text: "Pilot reading delivery notes from photos with tSpoonLab, connected to Navision and accounting, working alongside the development team.",
      },
      {
        title: "In-house tools",
        context: "Grupo Trocadero",
        text: "Prototypes built on my own initiative: a back-office for the HR team and a website connected to Ágora to publish menus in real time.",
      },
    ],
  },
  facts: [
    { value: "10+", label: "years in hospitality" },
    { value: "4", label: "openings: Madrid, Geneva, Quito and Vigo" },
    { value: "6", label: "countries: Spain, Switzerland, Ecuador, Argentina, France and the Netherlands" },
  ],
  profile: {
    heading: "Profile",
    paragraphs: [
      "Over 10 years in hospitality bringing together operations, margin control and technology across hotels, fine dining, beach clubs and delivery.",
      "My ground is openings and fine dining, as the bridge between the kitchen and the numbers: the team brings the creativity, and I add cost, profitability and a place on a balanced menu.",
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
          "**Rollout of Ágora POS across all venues** as key user: from the decision and go-live to ongoing technical support.",
          "Integration with G-Stock, CoverManager and A3 and clean-up of the ingredient and recipe database: actual data that was previously unused, built into every department's work.",
          "Food & beverage cost per venue: theoretical vs. actual cost, variances and corrective actions; recipe costing with the kitchen (R&D) and menu engineering.",
          "Month-end closing and purchasing control: inventories, delivery notes, invoices and supplier approval.",
        ],
      },
      {
        role: "Maître d'",
        company: "Hoteles Globales Gardenia",
        place: "Fuengirola",
        dates: "May 2024 – Dec 2024",
        note: "3-star all-inclusive hotel, around 250 rooms. Seasonal contract: the end of the season overlapped with my start at Grupo Trocadero.",
        tags: ["Hotel", "Front of house"],
        bullets: [
          "Front-of-house management across 4 outlets: main buffet (breakfast, lunch and dinner), mid-morning and afternoon buffet, pool bar and night bar with entertainment area.",
          "Ordering, inventories and cost control.",
          "Guest service and incident resolution.",
        ],
      },
      {
        role: "Restaurant Consultant",
        company: "Independent projects",
        place: "Vigo and Madrid",
        dates: "2023 – 2024",
        note: "Consulting and food fairs alongside chef Miguel Fernández Vidal (Restaurante Morgana).",
        tags: ["Opening", "Consulting", "Cost control"],
        bullets: [
          "**Opening of Voltarei (Vigo)**, traditional Galician cuisine for tapas and sharing with a more modern touch: menu design, recipe costing, cost control system, kitchen team training and support for the digital menu and marketing photo shoots.",
          "La Florería (Calle Ponzano, Madrid): recipe book and cost control built on the chef's own costing tool, to refresh the menu and improve profit.",
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
          "Opening of **Mercedes-Benz's first restaurant in Latin America**: hiring, front-of-house training, decoration and launch.",
          "Launch with press, television, interviews and influencers.",
          "Wine pairing, menu engineering and menu costing in tSpoonLab.",
        ],
      },
      {
        role: "F&B Controller, Delivery",
        company: "Grupo Dani García",
        place: "Málaga",
        dates: "Jun 2021 – Dec 2022",
        note: "La Gran Familia Mediterránea delivery project.",
        tags: ["Multi-venue", "Cost control", "Delivery"],
        bullets: [
          "Cost control through the project's expansion: **from fewer than 10 to more than 20 restaurants** in a year and a half.",
          "Inventories and month-end closing, with a disciplined method to invoice and close more than 20 venues at once.",
          "Automated invoicing together with tSpoonLab; sales analysis, procedures and logistics.",
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
        note: "Galician fusion cuisine in Chueca (Madrid).",
        tags: ["Opening", "Floor and bar"],
        bullets: [
          "First employee: opening and launch, covering every position.",
          "**No. 1 on Tripadvisor in Madrid** during the first year, with a constant waiting list.",
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
        text: "POS rollouts and integrations, AI automation (training and costing), in-house tools and reporting.",
      },
    ],
    systemsTitle: "Tools",
    systems: ["Ágora POS (key user)", "G-Stock", "tSpoonLab", "CoverManager", "A3", "NotebookLM", "Microsoft Office"],
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
    skillsSystems: "Ágora POS (key user), G-Stock, tSpoonLab, CoverManager, A3, NotebookLM, Microsoft Office",
  },
  footer: "Lautaro Barrera Cisterna",
};

export const dictionaries: Record<Locale, Dict> = { es, en };
