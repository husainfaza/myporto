# Portfolio

Single-page developer portfolio. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Editing content

All page content lives in [`lib/data.ts`](lib/data.ts) — `site`, `projects`,
`stack`, `experience`. Edit data there; sections render from it automatically.
No need to touch the JSX in `app/page.tsx`.

Before deploying, set the real values in `lib/data.ts`:

- `site.url` — production domain (drives metadata, canonical, sitemap, robots, OG image, JSON-LD)
- `site.github` / `site.linkedin` / `site.x` — real profile URLs
- `site.email`
- add `public/resume.pdf` (linked via `site.resumeUrl`)

## Structure

| Path | Role |
| --- | --- |
| `app/page.tsx` | The page — composes all sections (server component) |
| `app/layout.tsx` | Root layout, fonts, metadata |
| `app/globals.css` | Tailwind v4 theme + design tokens + animations |
| `lib/data.ts` | Site content (single source) |
| `components/` | `site-nav`, `reveal`, `section-label` |
| `app/opengraph-image.tsx` | Generated social share image |
| `app/sitemap.ts` · `app/robots.ts` | SEO routes |

See [`CLAUDE.md`](CLAUDE.md) for architecture and conventions.

## Deploy

Deploys on [Vercel](https://vercel.com) with zero config. Set `site.url` first
so generated metadata points at the right domain.
