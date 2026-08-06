export const site = {
  name: "Faza",
  role: "Full Stack Developer",
  // Production domain — used for metadataBase, canonical,
  // OG/Twitter URLs, sitemap, robots, and JSON-LD.
  url: "http://portofolio.fazahusain.dev",
  email: "contact@fazahusain.dev",
  github: "https://github.com/husainfaza",
  linkedin: "https://id.linkedin.com/in/faza-husain-muhammad-zaen-27bb7132a",
  x: "https://x.com/faza232",
  resumeUrl: "/resume.pdf",
  portrait: "/portrait.png",
};

export type Project = {
  title: string;
  outcome: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Ayasha Hijab House",
    outcome:
      "Storefront for Yogyakarta's modest-wear supplier — 377K followers, ordering straight through WhatsApp and Shopee.",
    description:
      "A conversion-first shop for a hijab and modest-wear supplier that sells through chat, not checkout. Category browsing, weekly new-arrival grid, social proof from an existing 377K audience, and every product card wired to a prefilled WhatsApp or Shopee order — so the site feeds the channels the business already runs on.",
    tags: ["TanStack Start", "React", "Tailwind CSS", "WhatsApp Commerce"],
    image: "/work/ayasha.png",
    liveUrl: "https://ayasha-style-hub.fazahusain.dev",
    year: "2026",
  },
  {
    title: "AUREN",
    outcome:
      "Quiet-luxury fashion house on the web — editorial pacing over a full storefront.",
    description:
      "A brand site for a fictional Italian atelier, built to hold an editorial rhythm at commerce scale: collection chapters, a men's and women's catalogue, product quick-view, journal, and cart. Scroll-linked motion (Lenis + Framer Motion) carries the pacing without ever getting between the reader and the garment.",
    tags: ["TanStack Start", "React", "Framer Motion", "Tailwind CSS"],
    image: "/work/auren.png",
    liveUrl: "https://auren-identity-builder.fazahusain.dev",
    year: "2026",
  },
  {
    title: "Isvara Kitchen & Coffee",
    outcome:
      "Restaurant site for a Yogyakarta kitchen — menu, reservations, and local SEO that Google can actually read.",
    description:
      "An eight-route site for a restaurant and specialty coffee bar: menu, coffee programme, gallery, promotions, private events, and reservations. Business facts (name, address, phone, opening hours) live in one module that also emits Restaurant JSON-LD, so the structured data can never drift from what the footer shows.",
    tags: ["TanStack Start", "React", "TypeScript", "Local SEO / JSON-LD"],
    image: "/work/isvara.png",
    liveUrl: "https://isvara-resto.fazahusain.dev",
    year: "2026",
  },
  {
    title: "Bali Swara",
    outcome:
      "Editorial e-commerce for a luxury batik label — heritage told in gold on black.",
    description:
      "A dark, art-directed storefront for a Balinese batik house. Built the full experience — typographic hero, the Lereng Kembang collection grid, product detail, and cart — with a cinematic black-and-gold visual system and motion that keeps the focus on the cloth.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce"],
    image: "/work/baliswara.png",
    liveUrl: "#",
    year: "2026",
  },
  {
    title: "Soga Story",
    outcome:
      "Warm, story-first shop for Solo Laweyan batik dyed by hand for generations.",
    description:
      "A commerce site for Kampung Laweyan's batik artisans — landing, collection browsing by category, heritage storytelling, and WhatsApp-based checkout. Soft editorial palette of warm browns and cream that mirrors the soga dye itself.",
    tags: ["TanStack Start", "React", "Tailwind CSS", "WhatsApp Commerce"],
    image: "/work/soga.png",
    liveUrl: "https://batik-soga.fazahusain.dev",
    year: "2026",
  },
];

export const stack = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Go", "PostgreSQL", "Redis", "Drizzle ORM", "REST / gRPC"],
  },
  {
    label: "DevOps",
    items: ["Docker", "AWS (EC2 · S3 · RDS)", "Nginx", "GitHub Actions", "Linux"],
  },
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    period: "2024 — now",
    role: "Full Stack Developer",
    company: "Synetica",
    points: [
      "Own product features end to end: schema design, APIs, UI, and deployment.",
      "Run AWS infrastructure (EC2, Docker, Nginx) with CI/CD via GitHub Actions.",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Software Engineer",
    company: "Previous Company",
    points: [
      "Built and maintained customer-facing web applications in React and Node.js.",
      "Introduced typed APIs and automated testing, cutting regression bugs significantly.",
    ],
  },
];
