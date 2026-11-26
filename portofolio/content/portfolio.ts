export type Locale = "nl" | "en";
export type Localized = Record<Locale, string>;

type ProjectLink = {
  href: string;
  label: Localized;
};

export type Project = {
  slug: string;
  title: string;
  kind: Localized;
  summary: Localized;
  stack: readonly string[];
  image: {
    src: string;
    width: number;
    height: number;
    alt: Localized;
  };
  sections: readonly { title: Localized; text: Localized }[];
  source: ProjectLink;
  demo?: ProjectLink;
};

export const profile = {
  name: "Rayan el Kaouid",
  email: "elkaouid@hotmail.com",
  phone: "+32485711419",
  phoneLabel: "+32 485 71 14 19",
  github: "https://github.com/RayanElka",
  linkedin: "https://www.linkedin.com/in/rayan-el-kaouid-760336304/",
  cv: "/cv-rayan-el-kaouid-2026.pdf",
  formEndpoint: "https://formspree.io/f/xrblkqyn",
  siteUrl: "https://portofolio-five-amber.vercel.app",
} as const;

export const projects: readonly Project[] = [
  {
    slug: "trans-it",
    title: "Trans-IT",
    kind: {
      nl: "Full-stack stage · 2026",
      en: "Full-stack internship · 2026",
    },
    summary: {
      nl: "Ik werkte aan statusupdates en facturatie in logistieke software, van wijzigingen in de interface en e-mails tot Excel-export.",
      en: "I worked on status updates and billing for logistics software, from interface and email changes to Excel exports.",
    },
    stack: ["React", "TypeScript", "Git"],
    image: {
      src: "/work/stageblog.webp",
      width: 1344,
      height: 840,
      alt: {
        nl: "Screenshot van mijn openbare stageblog met weekverslagen over Trans-IT",
        en: "Screenshot of my public internship blog with weekly notes on Trans-IT",
      },
    },
    sections: [
      {
        title: { nl: "Vraagstuk", en: "Problem" },
        text: {
          nl: "Transportstatussen moeten ook bruikbaar blijven wanneer een aankomsttijd ontbreekt of dezelfde ontvanger bij meerdere ritten betrokken is.",
          en: "Transport updates need to remain useful when an arrival time is missing or the same recipient is associated with multiple trips.",
        },
      },
      {
        title: { nl: "Mijn bijdrage", en: "My contribution" },
        text: {
          nl: "Ik ontdubbelde e-mailadressen over ritten heen, voegde een fallback toe voor ontbrekende aankomsttijden en maakte zichtbaar wanneer de verwachte aankomst na de afspraak lag. Ik verwerkte daarna de feedback uit de technische review.",
          en: "I deduplicated email addresses across trips, added a fallback for missing arrival times, and surfaced when an expected arrival was later than the appointment. I then incorporated feedback from the technical review.",
        },
      },
      {
        title: { nl: "Facturatie-export", en: "Billing exports" },
        text: {
          nl: "Ik voegde een Excel-export toe voor het facturatieoverzicht en de transportgegevens op facturen, met uitvoer in de ingestelde taal. Mijn openbare stageblog beschrijft het werk per week.",
          en: "I added Excel exports for billing overviews and invoice transport data, using the configured language. My public internship blog documents the work week by week.",
        },
      },
    ],
    source: {
      href: "https://github.com/RayanElka/WPLStageBlog",
      label: { nl: "Broncode stageblog", en: "Internship blog source" },
    },
    demo: {
      href: "https://wpl-stage-blog.vercel.app",
      label: { nl: "Openbaar stageblog", en: "Public internship blog" },
    },
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    kind: { nl: "Soloproject · 2024", en: "Solo project · 2024" },
    summary: {
      nl: "Een webapp waarin gebruikers inkomsten en uitgaven kunnen registreren, wijzigen en filteren.",
      en: "A web app for recording, editing, and filtering income and expenses.",
    },
    stack: ["TypeScript", "Express", "EJS", "MongoDB"],
    image: {
      src: "/Finance.png",
      width: 1642,
      height: 996,
      alt: {
        nl: "Screenshot van de Finance Tracker-webapp",
        en: "Screenshot of the Finance Tracker web app",
      },
    },
    sections: [
      {
        title: { nl: "Vraagstuk", en: "Problem" },
        text: {
          nl: "Inkomsten en uitgaven bijhouden vraagt een overzicht waarin je transacties snel kunt vinden en bijwerken.",
          en: "Keeping track of income and expenses calls for a view where transactions are easy to find and update.",
        },
      },
      {
        title: { nl: "Mijn bijdrage", en: "My contribution" },
        text: {
          nl: "Ik bouwde de registratie- en aanmeldstroom, de formulieren voor inkomsten en uitgaven en de Express-routes die transacties toevoegen, wijzigen, verwijderen en filteren.",
          en: "I built registration and sign-in, the income and expense forms, and the Express routes for adding, editing, deleting, and filtering transactions.",
        },
      },
      {
        title: { nl: "Technische uitdaging", en: "Technical challenge" },
        text: {
          nl: "Het dashboard moest alleen transacties van de aangemelde gebruiker tonen. Ik koppelde de MongoDB-queries voor het dashboard aan de gebruikers-ID uit het aanmeldtoken en gaf de resultaten door aan de EJS-templates.",
          en: "The dashboard needed to show only the signed-in user's transactions. I scoped its MongoDB queries to the user ID from the sign-in token and passed the results to EJS templates.",
        },
      },
    ],
    source: {
      href: "https://github.com/RayanElka/Webontwikkeling-project-24-25",
      label: { nl: "Broncode op GitHub", en: "Source on GitHub" },
    },
    demo: {
      href: "https://webontwikkeling-project-24-25-1.onrender.com",
      label: { nl: "Demo op Render", en: "Demo on Render" },
    },
  },
  {
    slug: "bobkes",
    title: "Bobkes",
    kind: { nl: "Teamproject · 2024", en: "Team project · 2024" },
    summary: {
      nl: "Een webapp waarin spelers Pokémon kunnen vergelijken en minigames kunnen spelen.",
      en: "A web app where players can compare Pokémon and play minigames.",
    },
    stack: ["TypeScript", "Express", "EJS", "MongoDB"],
    image: {
      src: "/pokemon.png",
      width: 1917,
      height: 912,
      alt: {
        nl: "Screenshot van de Bobkes-webapp",
        en: "Screenshot of the Bobkes web app",
      },
    },
    sections: [
      {
        title: { nl: "Vraagstuk", en: "Problem" },
        text: {
          nl: "Ons team combineerde een Pokémon-overzicht, een vergelijking en meerdere minigames in één webapp.",
          en: "Our team combined a Pokémon overview, a comparison view, and several minigames in one web app.",
        },
      },
      {
        title: { nl: "Mijn bijdrage", en: "My contribution" },
        text: {
          nl: "Ik werkte aan de vergelijkingspagina, het gevechtsspel en het vangspel. Ook paste ik de layout van het overzicht aan voor kleinere schermen.",
          en: "I contributed to the comparison page, battle game, and catching game. I also adapted the overview layout for smaller screens.",
        },
      },
      {
        title: { nl: "Technische uitdaging", en: "Technical challenge" },
        text: {
          nl: "Voor het gevechtsspel werkte ik over meerdere lagen heen, van serverroutes en typen tot de EJS-view en JavaScript-interactie in de browser.",
          en: "For the battle game I worked across layers, from server routes and types to the EJS view and JavaScript interactions in the browser.",
        },
      },
    ],
    source: {
      href: "https://github.com/orhancalik/Bobkes",
      label: { nl: "Teamrepository op GitHub", en: "Team repository on GitHub" },
    },
  },
];

type ExperienceEntry = {
  company: string;
  role: Localized;
  period: Localized;
  summary: Localized;
};

export const experience: readonly ExperienceEntry[] = [
  {
    company: "Trans-IT",
    role: { nl: "Full-stack developer · stage", en: "Full-stack developer · internship" },
    period: { nl: "Jan–jun 2026", en: "Jan–Jun 2026" },
    summary: {
      nl: "Ik werkte met React en TypeScript aan logistieke workflows, bouwde exports voor facturatie en verwerkte technische feedback op mijn wijzigingen.",
      en: "I worked with React and TypeScript on logistics workflows, built billing exports, and incorporated technical feedback on my changes.",
    },
  },
  {
    company: "Outlier AI",
    role: { nl: "AI Trainer", en: "AI Trainer" },
    period: { nl: "2023–2025", en: "2023–2025" },
    summary: {
      nl: "Ik werkte op afstand aan trainingsprojecten voor AI, waaronder codegerelateerde taken, met aandacht voor consistente output.",
      en: "I worked remotely on AI training projects, including coding-related tasks, with an emphasis on consistent output.",
    },
  },
  {
    company: "AP Hogeschool Antwerpen",
    role: { nl: "Programmeren", en: "Computer Programming" },
    period: { nl: "Afgestudeerd in 2026", en: "Graduated in 2026" },
    summary: {
      nl: "Mijn opleiding in programmeren vormde de basis voor mijn werk aan webinterfaces en back-ends.",
      en: "My programming studies laid the foundation for my work on web interfaces and back ends.",
    },
  },
];

type SkillGroup = { title: Localized; items: readonly string[] };

export const skills: readonly SkillGroup[] = [
  {
    title: { nl: "Frontend & mobile", en: "Frontend & mobile" },
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "React Native"],
  },
  {
    title: { nl: "Backend & data", en: "Backend & data" },
    items: ["Node.js", "Express", "C#", "MongoDB", "PostgreSQL", "SQL"],
  },
  {
    title: { nl: "Cloud & tooling", en: "Cloud & tooling" },
    items: ["Azure", "Docker", "Git", "Linux"],
  },
];
