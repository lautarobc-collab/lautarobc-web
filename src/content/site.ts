/**
 * Contenido de lautarobc.com.
 * Fuente única: CV de Lautaro Barrera Cisterna (oct 2026).
 * Reglas: sin cifras de personas a cargo, sin datos internos de Grupo Trocadero,
 * sin teléfono. No añadir nada que no esté en el CV.
 */

export const LOCALES = ["es", "en"] as const; // "fr" previsto en una fase posterior
export type Locale = (typeof LOCALES)[number];

export const SITE_URL = "https://www.lautarobc.com";
export const EMAIL = "lautarobc@gmail.com";
export const LINKEDIN =
  "https://www.linkedin.com/in/lautaro-barrera-cisterna-48b484184";
export const CV_PDF = "/cv/CV-Lautaro-Barrera-Cisterna.pdf";
export const CV_PDF_EN = "/cv/CV-Lautaro-Barrera-Cisterna-EN.pdf";

export type Job = {
  role: string;
  company: string;
  place: string;
  dates: string;
  note?: string;
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
  hero: { downloadCv: string; contact: string; linkedin: string };
  facts: { value: string; label: string }[];
  profile: { heading: string; paragraphs: string[] };
  experience: { heading: string; jobs: Job[]; early: { heading: string; dates: string; items: string[] } };
  skills: {
    heading: string;
    groups: { title: string; text: string }[];
    systemsTitle: string;
    systems: string[];
  };
  education: { heading: string; degree: string; school: string; dates: string; detail: string };
  languages: { heading: string; items: { name: string; level: string; cefr: number }[] };
  portfolio: { heading: string; intro: string; items: PortfolioItem[] };
  contact: {
    heading: string;
    lead: string;
    email: string;
    linkedin: string;
    cv: string;
    cvNote?: string;
    moreHeading: string;
    more: string[];
  };
  footer: string;
};

const systems = [
  "Ágora TPV (key user)",
  "G-Stock",
  "CoverManager",
  "A3",
  "Microsoft Office",
];

export const es: Dict = {
  locale: "es",
  htmlLang: "es",
  path: "/",
  meta: {
    title: "Lautaro Barrera Cisterna · F&B Manager · Control de costes y compras",
    description:
      "Más de 10 años en restauración: sala, cocina, compras y control de costes en hoteles, alta gastronomía, beach clubs y delivery. Málaga.",
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
  hero: { downloadCv: "Descargar CV", contact: "Contactar", linkedin: "LinkedIn" },
  facts: [
    { value: "+10", label: "años en restauración" },
    { value: "5", label: "países: España, Suiza, Ecuador, Argentina y Francia" },
    { value: "4", label: "idiomas" },
  ],
  profile: {
    heading: "Perfil",
    paragraphs: [
      "Más de 10 años en restauración: sala, cocina, compras y control de costes en hoteles, alta gastronomía, beach clubs y delivery.",
      "Uno la dirección de equipos y aperturas con el control del margen. Key user de TPV y gestión de stock: implantación y formación de equipos.",
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
        bullets: [
          "Food & beverage cost por local: coste teórico vs. real, análisis de desviaciones y acciones correctoras.",
          "Escandallos y fichas técnicas con mermas técnicas integradas; escandallo de nuevos platos con cocina (I+D).",
          "Ingeniería de menú: rentabilidad y popularidad de cartas, ajustes de precio y oferta.",
          "Cierres de mes: inventarios, variación de existencias, consumos y reporting a dirección.",
          "Control de compras: albaranes, facturas, precios pactados, incidencias y abonos.",
          "Negociación y homologación de proveedores; control y registro de mermas.",
          "Implantación de Ágora TPV como key user e integración con G-Stock, CoverManager y A3.",
          "Formación de equipos de sala, cocina y barra en TPV, pedidos, recepción e inventarios.",
        ],
      },
      {
        role: "Maître",
        company: "Hoteles Globales Gardenia",
        place: "Fuengirola",
        dates: "May 2024 – Dic 2024",
        bullets: [
          "Dirección de personal en 4 puntos de venta.",
          "Pedidos, inventarios y control de costes.",
          "Atención al cliente y resolución de incidencias.",
        ],
      },
      {
        role: "Maître",
        company: "Mercedes-Benz Gourmet Experience",
        place: "Quito (Ecuador)",
        dates: "Sep 2023 – Nov 2023",
        bullets: [
          "Apertura del primer restaurante de Mercedes-Benz en Latinoamérica.",
          "Selección y formación del equipo de sala.",
          "Maridaje, ingeniería de menú y cálculo de costes de carta.",
        ],
      },
      {
        role: "F&B Controller Delivery",
        company: "Grupo Dani García",
        place: "Málaga",
        dates: "Jun 2021 – Dic 2022",
        bullets: [
          "Control de costes y existencias del proyecto La Gran Familia Mediterránea.",
          "Análisis de ventas y desarrollo de procedimientos.",
          "Administración logística y control de incidencias.",
        ],
      },
      {
        role: "Supply and Restaurant Manager",
        company: "EatTasty",
        place: "Madrid",
        dates: "Abr 2019 – Jun 2020",
        bullets: [
          "Gestión de la cadena de suministro y compras; negociación con proveedores.",
          "Desarrollo de producto (I+D) para un menú diario de comida casera.",
          "Análisis de ventas, control de existencias y procedimientos operativos.",
        ],
      },
      {
        role: "Restaurant and Bar Manager",
        company: "Restaurante Morgana",
        place: "Madrid",
        dates: "Sep 2017 – Feb 2019",
        bullets: [
          "Apertura del establecimiento.",
          "Dirección de sala y barra.",
          "Gestión de reservas, control de existencias y atención al cliente.",
        ],
      },
      {
        role: "Junior Sous Chef",
        company: "Restaurant Bodega21",
        place: "Ginebra (Suiza)",
        dates: "Oct 2016 – Jul 2017",
        bullets: [
          "Apertura del establecimiento.",
          "Elaboración de menús y control de existencias.",
        ],
      },
    ],
    early: {
      heading: "Etapa formativa",
      dates: "2009 – 2016",
      items: [
        "NH Hotel Group: becario de compras en las oficinas centrales de NH Mercosur (Buenos Aires); prácticas de F&B y recepción.",
        "Palladium Hotel Group, Ushuaïa Ibiza Beach Hotel: room service.",
        "Finca Cortesín: sala y eventos.",
        "Centre International d'Antibes: administración.",
      ],
    },
  },
  skills: {
    heading: "Competencias",
    groups: [
      {
        title: "Control de costes",
        text: "Escandallos, coste teórico vs. real, desviaciones, mermas, inventarios, cierres de mes, menu engineering.",
      },
      {
        title: "Compras",
        text: "Negociación y homologación de proveedores, control de albaranes y facturas, cadena de suministro.",
      },
      {
        title: "Operaciones",
        text: "Dirección de sala y equipos, aperturas, formación, I+D y diseño de platos.",
      },
      {
        title: "Sistemas",
        text: "Implantación de TPV y gestión de stock, integraciones y análisis de datos.",
      },
    ],
    systemsTitle: "Herramientas",
    systems,
  },
  education: {
    heading: "Formación",
    degree: "Diploma Superior en Gestión Hotelera",
    school: "Centro Superior de Hostelería de Galicia (CSHG) · Dirección de Hotel",
    dates: "2009 – 2013",
    detail: "Especialización en Alimentos y Bebidas y Departamento de Compras.",
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
  portfolio: {
    heading: "Portfolio",
    intro: "Platos, cartas y proyectos.",
    items: [],
  },
  contact: {
    heading: "Contacto",
    lead: "Disponibilidad inmediata.",
    email: "Escribir un email",
    linkedin: "Ver perfil en LinkedIn",
    cv: "Descargar CV en PDF",
    moreHeading: "Más información",
    more: [
      "Carné de conducir y vehículo propio.",
      "Abierto a viajar, a formación en el extranjero y a trabajo híbrido.",
    ],
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
      "Over 10 years in hospitality: floor, kitchen, purchasing and cost control across hotels, fine dining, beach clubs and delivery. Málaga, Spain.",
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
  hero: { downloadCv: "Download CV", contact: "Get in touch", linkedin: "LinkedIn" },
  facts: [
    { value: "10+", label: "years in hospitality" },
    { value: "5", label: "countries: Spain, Switzerland, Ecuador, Argentina and France" },
    { value: "4", label: "languages" },
  ],
  profile: {
    heading: "Profile",
    paragraphs: [
      "Over 10 years in hospitality: floor, kitchen, purchasing and cost control across hotels, fine dining, beach clubs and delivery.",
      "I combine team leadership and openings with margin control. Key user for POS and stock management systems: implementation and team training.",
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
        bullets: [
          "Food & beverage cost per venue: theoretical vs. actual cost, variance analysis and corrective actions.",
          "Recipe costings and technical sheets with built-in yield losses; costing of new dishes with the kitchen (R&D).",
          "Menu engineering: profitability and popularity of menus, price and offer adjustments.",
          "Month-end closing: inventories, stock variation, consumption and reporting to management.",
          "Purchasing control: delivery notes, invoices, agreed prices, incidents and credit notes.",
          "Supplier negotiation and approval; waste control and logging.",
          "Rollout of Ágora POS as key user and integration with G-Stock, CoverManager and A3.",
          "Training of floor, kitchen and bar teams in POS, ordering, goods receiving and inventories.",
        ],
      },
      {
        role: "Maître d'",
        company: "Hoteles Globales Gardenia",
        place: "Fuengirola",
        dates: "May 2024 – Dec 2024",
        bullets: [
          "Staff management across 4 outlets.",
          "Ordering, inventories and cost control.",
          "Guest service and incident resolution.",
        ],
      },
      {
        role: "Maître d'",
        company: "Mercedes-Benz Gourmet Experience",
        place: "Quito (Ecuador)",
        dates: "Sep 2023 – Nov 2023",
        bullets: [
          "Opening of Mercedes-Benz's first restaurant in Latin America.",
          "Recruitment and training of the front-of-house team.",
          "Wine pairing, menu engineering and menu costing.",
        ],
      },
      {
        role: "F&B Controller, Delivery",
        company: "Grupo Dani García",
        place: "Málaga",
        dates: "Jun 2021 – Dec 2022",
        bullets: [
          "Cost and stock control for the La Gran Familia Mediterránea project.",
          "Sales analysis and procedure development.",
          "Logistics administration and incident management.",
        ],
      },
      {
        role: "Supply and Restaurant Manager",
        company: "EatTasty",
        place: "Madrid",
        dates: "Apr 2019 – Jun 2020",
        bullets: [
          "Supply chain and purchasing management; supplier negotiation.",
          "Product development (R&D) for a daily home-style menu.",
          "Sales analysis, stock control and operating procedures.",
        ],
      },
      {
        role: "Restaurant and Bar Manager",
        company: "Restaurante Morgana",
        place: "Madrid",
        dates: "Sep 2017 – Feb 2019",
        bullets: [
          "Opening of the restaurant.",
          "Front-of-house and bar management.",
          "Reservations, stock control and guest service.",
        ],
      },
      {
        role: "Junior Sous Chef",
        company: "Restaurant Bodega21",
        place: "Geneva (Switzerland)",
        dates: "Oct 2016 – Jul 2017",
        bullets: ["Opening of the restaurant.", "Menu development and stock control."],
      },
    ],
    early: {
      heading: "Early career and training",
      dates: "2009 – 2016",
      items: [
        "NH Hotel Group: purchasing intern at the NH Mercosur head office (Buenos Aires); F&B and front desk internships.",
        "Palladium Hotel Group, Ushuaïa Ibiza Beach Hotel: room service.",
        "Finca Cortesín: floor service and events.",
        "Centre International d'Antibes: administration.",
      ],
    },
  },
  skills: {
    heading: "Skills",
    groups: [
      {
        title: "Cost control",
        text: "Recipe costing, theoretical vs. actual cost, variances, waste, inventories, month-end closing, menu engineering.",
      },
      {
        title: "Purchasing",
        text: "Supplier negotiation and approval, delivery note and invoice control, supply chain.",
      },
      {
        title: "Operations",
        text: "Front-of-house and team leadership, openings, training, R&D and dish design.",
      },
      {
        title: "Systems",
        text: "POS and stock management rollout, integrations and data analysis.",
      },
    ],
    systemsTitle: "Tools",
    systems: [
      "Ágora POS (key user)",
      "G-Stock",
      "CoverManager",
      "A3",
      "Microsoft Office",
    ],
  },
  education: {
    heading: "Education",
    degree: "Higher Diploma in Hotel Management",
    school: "Centro Superior de Hostelería de Galicia (CSHG) · Hotel Management",
    dates: "2009 – 2013",
    detail: "Specialisation in Food & Beverage and Purchasing.",
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
  portfolio: {
    heading: "Portfolio",
    intro: "Dishes, menus and projects.",
    items: [],
  },
  contact: {
    heading: "Contact",
    lead: "Immediate availability.",
    email: "Send an email",
    linkedin: "View LinkedIn profile",
    cv: "Download CV (PDF)",
    moreHeading: "Additional information",
    more: [
      "Driving licence and own vehicle.",
      "Open to travel, training abroad and hybrid work.",
    ],
  },
  footer: "Lautaro Barrera Cisterna",
};

export const dictionaries: Record<Locale, Dict> = { es, en };
