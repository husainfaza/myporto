import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { TerminalCard } from "@/components/terminal-card";
import { Spotlight } from "@/components/spotlight";
import { TechIcon } from "@/components/tech-icon";
import { site, projects, stack, experience } from "@/lib/data";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin, site.x],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to work
      </a>
      <SiteNav />
      <main id="top" className="flex-1">
        <Hero />
        <About />
        <Work />
        <Stack />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Accent glow behind the right column */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-accent/[0.07] blur-3xl"
      />
      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-12 lg:gap-8 lg:pt-16">
        <div className="lg:col-span-7">
          <p
            className="animate-rise font-mono text-xs tracking-[0.22em] text-accent"
            style={{ "--rise-delay": "0ms" } as React.CSSProperties}
          >
            FULL STACK DEVELOPER
          </p>
          <h1
            className="animate-rise mt-6 text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.05] tracking-tight"
            style={{ "--rise-delay": "80ms" } as React.CSSProperties}
          >
            Hi, I&rsquo;m {site.name} — I build{" "}
            <em className="font-serif font-normal text-accent">reliable</em>{" "}
            products end to end.
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-lg text-muted"
            style={{ "--rise-delay": "160ms" } as React.CSSProperties}
          >
            From database schema to pixel-perfect UI — I design, ship, and run
            web applications on real infrastructure.
          </p>
          <div
            className="animate-rise mt-9 flex flex-wrap items-center gap-4"
            style={{ "--rise-delay": "240ms" } as React.CSSProperties}
          >
            <a
              href="#work"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition duration-200 hover:-translate-y-px hover:bg-accent-dim active:translate-y-0 active:scale-[0.97]"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line-bright px-5 py-2.5 text-sm text-foreground transition duration-200 hover:-translate-y-px hover:border-accent hover:text-accent active:translate-y-0 active:scale-[0.97]"
            >
              Get in touch
            </a>
            <span className="ml-1 flex items-center gap-2.5 text-sm text-muted">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
              Available for work
            </span>
          </div>
        </div>

        <div
          className="animate-rise lg:col-span-5"
          style={{ "--rise-delay": "320ms" } as React.CSSProperties}
        >
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <Reveal>
          <SectionLabel index="01" title="ABOUT" />
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-3 rounded-2xl bg-accent/[0.06] blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
                <Image
                  src={site.portrait}
                  alt={`Portrait of ${site.name}`}
                  width={1122}
                  height={1402}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 320px, 100vw"
                  priority
                />
              </div>
            </div>
          </Reveal>
          <div className="space-y-5 text-muted lg:col-span-8">
            <h2
              id="about-title"
              className="text-3xl font-semibold tracking-tight text-foreground"
            >
              <Reveal>
                Engineering across the{" "}
                <em className="font-serif font-normal text-accent">whole</em>{" "}
                stack.
              </Reveal>
            </h2>
            <Reveal delay={80}>
              <p>
                I&rsquo;m a full-stack developer who likes owning problems from
                end to end: shaping the{" "}
                <span className="text-foreground">data model</span>, designing
                the <span className="text-foreground">API</span>, building the{" "}
                <span className="text-foreground">interface</span>, and running
                it in production on infrastructure I understand.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                My default toolkit is TypeScript and Next.js on the front,
                Node.js and Go behind it, PostgreSQL underneath, and AWS with
                Docker around all of it. I care about systems that stay simple,
                fast, and easy to operate.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="font-mono text-sm">
                <span className="text-accent">currently</span>{" "}
                <span className="text-foreground">
                  building at Synetica · open to new opportunities
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <Reveal>
          <SectionLabel index="02" title="WORK" />
        </Reveal>
        <Reveal>
          <h2
            id="work-title"
            className="mt-10 text-3xl font-semibold tracking-tight"
          >
            Featured{" "}
            <em className="font-serif font-normal text-accent">projects</em>
          </h2>
        </Reveal>
        <Reveal stagger className="mt-12 space-y-6">
          {projects.map((project) => (
            <Spotlight
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
            >
              <div className="relative z-[1]">
                  {project.image && (
                    <div className="relative aspect-[1916/894] overflow-hidden border-b border-line">
                      <Image
                        src={project.image}
                        alt={`${project.title} — screenshot`}
                        fill
                        sizes="(min-width: 1024px) 1024px, 100vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-muted">
                        {project.year}
                      </span>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target={project.liveUrl === "#" ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            aria-label={`${project.title} — open project`}
                            className="transition-colors after:absolute after:inset-0 group-hover:text-accent focus-visible:outline-none"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                    </div>
                    <p className="mt-2 text-foreground/90">{project.outcome}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition-colors group-hover:border-line-bright"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {(project.liveUrl || project.sourceUrl) && (
                      <div className="mt-6 flex flex-wrap gap-5">
                        {project.liveUrl && (
                          <span className="text-sm text-foreground transition-colors group-hover:text-accent">
                            Visit site{" "}
                            <span className="arrow-nudge inline-block">↗</span>
                          </span>
                        )}
                        {project.sourceUrl && (
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-slide relative z-10 text-sm text-muted transition-colors hover:text-accent"
                          >
                            Source code <span className="arrow-nudge">↗</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Spotlight>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const stackIcons: Record<string, React.ReactNode> = {
  Frontend: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  Backend: (
    <>
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </>
  ),
  DevOps: (
    <>
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </>
  ),
};

function StackIcon({ label }: { label: string }) {
  return (
    <span
      aria-hidden
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-accent transition-colors duration-300 group-hover:border-accent/40"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {stackIcons[label] ?? <circle cx="12" cy="12" r="9" />}
      </svg>
    </span>
  );
}

function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <Reveal>
          <SectionLabel index="03" title="STACK" />
        </Reveal>
        <Reveal>
          <h2
            id="stack-title"
            className="mt-10 text-3xl font-semibold tracking-tight"
          >
            Tools I <em className="font-serif font-normal text-accent">ship</em>{" "}
            with
          </h2>
        </Reveal>
        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {stack.map((group) => (
            <div
              key={group.label}
              className="group h-full rounded-xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-bright"
            >
              <div className="flex items-center gap-3">
                <StackIcon label={group.label} />
                <h3 className="font-mono text-xs tracking-[0.18em] text-accent">
                  {group.label.toUpperCase()}
                </h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    <TechIcon className="h-4 w-4 shrink-0 text-line-bright transition-colors duration-200 group-hover:text-accent" name={item} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <Reveal>
          <SectionLabel index="04" title="EXPERIENCE" />
        </Reveal>
        <Reveal>
          <h2
            id="experience-title"
            className="mt-10 text-3xl font-semibold tracking-tight"
          >
            Where I&rsquo;ve{" "}
            <em className="font-serif font-normal text-accent">worked</em>
          </h2>
        </Reveal>
        <Reveal stagger className="mt-12">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="group grid gap-3 border-t border-line py-8 transition-colors duration-300 last:border-b hover:border-line-bright lg:grid-cols-12 lg:gap-8"
            >
              <p className="font-mono text-sm text-muted transition-colors duration-300 group-hover:text-foreground lg:col-span-3">
                {job.period}
              </p>
              <div className="lg:col-span-9">
                <h3 className="font-semibold">
                  {job.role} <span className="text-muted">@ {job.company}</span>
                </h3>
                <ul className="mt-3 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="text-sm text-muted">
                      <span className="mr-2.5 text-accent" aria-hidden>
                        ·
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-40">
        <Reveal>
          <p className="text-center font-mono text-xs tracking-[0.22em] text-accent">
            05 — CONTACT
          </p>
        </Reveal>
        <Reveal delay={60}>
          <h2
            id="contact-title"
            className="mx-auto mt-6 max-w-2xl text-center text-4xl font-semibold tracking-tight lg:text-5xl"
          >
            Let&rsquo;s build{" "}
            <em className="font-serif font-normal text-accent">something</em>{" "}
            together.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-xl text-center text-muted">
            Have a role or a project in mind? I usually reply within a day.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 text-center">
            <a
              href={`mailto:${site.email}`}
              className="link-slide text-xl text-accent lg:text-2xl"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={site.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              X
            </a>
            <a
              href={site.resumeUrl}
              className="rounded-lg border border-line-bright px-4 py-2 text-sm text-foreground transition-[color,border-color,transform] duration-200 hover:border-accent hover:text-accent active:scale-[0.97]"
            >
              Résumé ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name} · built with Next.js
        </p>
        <a
          href="#top"
          className="font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
