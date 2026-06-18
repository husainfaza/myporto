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
};

export type Project = {
  title: string;
  outcome: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Synetica Platform",
    outcome: "B2B SaaS platform serving production workloads end to end.",
    description:
      "Designed and built the core product — multi-tenant data model, REST + webhook APIs, billing integration, and a dashboard UI. Owned the stack from Postgres schema to deployment on AWS.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "AWS"],
    liveUrl: "https://synetica.co",
    year: "2025",
  },
  {
    title: "API Gateway",
    outcome: "High-throughput gateway handling auth, rate limiting, routing.",
    description:
      "Go service fronting internal microservices: JWT validation, per-client rate limits backed by Redis, request shaping, and structured audit logs. Deployed via Docker with zero-downtime rollouts.",
    tags: ["Go", "Redis", "gRPC", "Docker", "Nginx"],
    sourceUrl: "https://github.com/faza",
    year: "2024",
  },
  {
    title: "Ops CLI",
    outcome: "Internal CLI that cut deploy + database tasks to one command.",
    description:
      "TypeScript CLI for environment bootstrap, migrations, seeded test data, and tagged releases through GitHub Actions. Adopted as the team's standard tooling.",
    tags: ["TypeScript", "Node.js", "GitHub Actions", "PostgreSQL"],
    sourceUrl: "https://github.com/faza",
    year: "2024",
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
