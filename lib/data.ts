export const site = {
  name: "Faza",
  role: "Full Stack Developer",
  // TODO: set to the real production domain — used for metadataBase, canonical,
  // OG/Twitter URLs, sitemap, robots, and JSON-LD.
  url: "https://faza.dev",
  email: "faza@synetica.co",
  github: "https://github.com/faza",
  linkedin: "https://www.linkedin.com/in/faza",
  x: "https://x.com/faza",
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Commerce"],
    image: "/work/soga.png",
    liveUrl: "#",
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
