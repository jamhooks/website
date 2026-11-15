# AGENTS.md

Working guide for AI coding agents (and humans) in the Jamhooks website.

## What this is

The public, one-page marketing site for [Jamhooks](https://github.com/jamhooks/jamhooks),
a visual IVR flow manager for Jambonz. It is built with plain Astro (no UI framework, no
Tailwind) and ships no client-side JavaScript. It deploys to GitHub Pages from `master`
(`.github/workflows/deploy.yml`).

Manuals and reference live on the docs site (`../jamhooks-docs`); this site only links
to them.

## Commands

```bash
npm ci                 # install from package-lock.json
npm run dev            # http://localhost:4321
npm run build          # build into dist/
npm run preview        # serve dist/ locally
```

Astro needs Node 22.23.4 or newer; `.node-version` (24) is what CI uses. When starting a
server from an agent, use `astro dev --background` (or `astro preview`, which detaches
by itself) and stop it with `astro dev stop` / `astro preview stop`.

## Where things live

| Path | What |
|---|---|
| `src/pages/index.astro` | The page. Its copy is in plain arrays at the top (facts, lists, features, FAQ) |
| `src/components/FlowMock.astro` | The hero visual: a sample flow and the webhook response it produces |
| `src/components/Header.astro`, `Footer.astro`, `Logo.astro` | Site chrome and the mark |
| `src/layouts/Base.astro` | `<head>`, skip link, header and footer around every page |
| `src/styles/global.css` | All styling. Colour and size tokens are on `:root` at the top |
| `src/site.ts` | Every outbound link, including `DOCS_URL` |
| `public/favicon.svg` | The mark; keep it the same drawing as `Logo.astro` |

`DOCS_URL` (in `src/site.ts`) and `site` (in `astro.config.mjs`) are placeholders until
the domains are chosen.

## Writing rules

- Every product claim must hold for the app: check it against the app's `README.md` and
  `docs/*.md` (FLOWS, RUNTIME, API, PRIVACY) before you write it. When the app changes a
  name or a behaviour, update the copy here.
- Name UI controls as the editor shows them: Deploy, Simulate, Debug.
- Never write the em-dash character; rewrite the sentence instead.
- Never put real personal data in examples (phone numbers, names, recordings). Use
  placeholders and the `example.com` domain.
- No cookies, analytics or third-party requests: fonts are self-hosted (`@fontsource`)
  and icons are inlined at build time (`@lucide/astro`). The footer says so; keep it
  true.
- The site is dark only. Check new colours for contrast against `--bg` and `--bg-raised`.

## Pins

Every workflow action is pinned to a full commit SHA with the release in a comment, and
the runner is pinned (`ubuntu-24.04`); Dependabot proposes the bumps. Never replace a pin
with a tag. Node's version is in `.node-version`.

Full Astro docs: https://docs.astro.build.
