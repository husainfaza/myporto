# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Read the warning in `AGENTS.md` first.** This is Next.js 16.2.9 with breaking
> changes vs. older versions. Before writing Next-specific code, consult the
> bundled guides in `node_modules/next/dist/docs/` rather than relying on memory.

## Commands

```bash
npm run dev      # dev server (Turbopack) at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint-config-next)
```

No test framework is configured.

## Stack

- **Next.js 16** App Router · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** — configured entirely in CSS via `@import "tailwindcss"`
  and `@theme inline` in `app/globals.css`. There is **no `tailwind.config.js`**;
  add design tokens as CSS variables + `@theme` entries, not a JS config.
- Turbopack `root` is pinned in `next.config.ts`.
- Path alias `@/*` → repo root (e.g. `@/lib/data`, `@/components/...`).

## Architecture

Single-page marketing/portfolio site. The whole page is one route.

- **`app/page.tsx`** — the entire page. A server component that composes
  section sub-components (`Hero`, `About`, `Work`, `Stack`, `ExperienceSection`,
  `Contact`, `Footer`) defined in the same file. Content is mapped from `lib/data.ts`.
- **`lib/data.ts`** — the single source of content: `site` info, `projects`,
  `stack`, `experience`. **Edit this to change page content**, not the JSX.
  Adding a project/job/stack group automatically renders it.
- **`app/layout.tsx`** — root layout; loads the three Google fonts
  (Schibsted Grotesk / Instrument Serif / JetBrains Mono) and exposes them as
  the `--font-sans` / `--font-serif` / `--font-mono` theme variables. Holds the
  page `metadata` (title, description, OpenGraph).
- **`components/`** — three presentational pieces: `site-nav.tsx` (client,
  scroll-aware sticky header + mobile menu), `reveal.tsx` (client, IntersectionObserver
  scroll-in animation wrapper), `section-label.tsx` (server, numbered section heading).

Only `site-nav` and `reveal` are client components (`"use client"`) — they need
browser APIs (scroll, IntersectionObserver). Everything else is a server component.

## Conventions

- **Design tokens live in `app/globals.css`** as CSS custom properties under
  `:root`, surfaced to Tailwind through `@theme inline`. Use semantic utility
  classes (`bg-surface`, `text-muted`, `border-line`, `text-accent`, etc.) rather
  than raw hex. Dark theme only; accent is lime `--accent: #d7ff6e`.
- **Animations** are CSS-driven: `.animate-rise` (initial load, staggered via the
  `--rise-delay` inline var) and `.reveal` / `.is-visible` (scroll-triggered by the
  `Reveal` component). All animations are gated behind `prefers-reduced-motion`.
- **In-page navigation** uses anchor links to section `id`s (`#about`, `#work`, …);
  sections set `scroll-mt-20` to offset the fixed header. Nav links live in
  `components/site-nav.tsx`; keep them in sync with the section `id`s in `page.tsx`.
- Accessibility is intentional: skip link, `aria-labelledby` on sections,
  `aria-hidden` on decorative elements, `:focus-visible` ring. Preserve these.
