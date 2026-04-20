# ZaiferTech

ZaiferTech is a Next.js 16 marketing website for a digital systems studio focused on search visibility, web experience, analytics, and workflow automation.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI primitives where interaction needs them

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
copy .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Run linting:

```bash
npm run lint
```

5. Run a production build:

```bash
npm run build
```

## Environment Variables

The lead form uses Resend on the server. Configure these in `.env.local`:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `INQUIRY_TO_EMAIL` (optional, defaults to the public site email)
- `NEXT_PUBLIC_SITE_URL` (recommended for canonical metadata, robots, and sitemap)

## Project Notes

- Site content is centralized in `src/lib/site-content.ts`.
- The inquiry form uses a Next.js Server Action in `src/app/actions/submit-lead-inquiry.ts`.
- Metadata helpers live in `src/lib/metadata.ts`.
- `src/app/opengraph-image.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` handle SEO file conventions.

## Current Priority

This codebase is optimized for a premium editorial-style marketing site with:

- truth-first company messaging
- repo-managed content rather than a CMS
- server-first rendering where interaction is not needed
- a real inquiry flow with WhatsApp as a secondary fallback
