# AGENTS.md

Working guide for AI coding agents (and humans) in the Jamhooks website.

## What this is

The public, one-page marketing site for [Jamhooks](https://github.com/jamhooks/jamhooks),
a visual IVR flow manager for Jambonz. It is built with plain Astro (no UI framework, no
Tailwind) and ships no client-side JavaScript. It deploys to GitHub Pages from `master`
(`.github/workflows/deploy.yml`).

Manuals and reference live on the docs site (`../docs`); this site only links
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
| `src/components/Header.astro`, `Footer.astro`, `Logo.astro` | Site chrome and the logo (`logo-on-dark.svg` from the brand kit) |
| `src/layouts/Base.astro` | `<head>`, skip link, header and footer around every page |
| `src/styles/global.css` | All styling. Colour and size tokens are on `:root` at the top |
| `src/site.ts` | Every outbound link, including `DOCS_URL` |
| `public/brandkit/v1/` | Brand kit: favicons, app icons and logos. `Base.astro` links the favicons and touch icon, and `Logo.astro` the logo, by their `/brandkit/v1/` paths; update those links if the kit moves |

The site is served at `https://jamhooks.com` (`CNAME`, `site` in `astro.config.mjs`) and
links to the docs at `https://docs.jamhooks.com` (`DOCS_URL` in `src/site.ts`). Keep
those in step with the CNAME files if a domain ever changes.

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
- The site is dark teal only, in the brand kit's colours (Coral, Deep Teal, Dark Teal in
  `public/brandkit/v1/README.md`, tokens `--coral`, `--teal`, `--teal-dark`). Check new
  colours for contrast against `--bg` and `--bg-raised`. Coral is only 3:1 on Dark Teal
  and white on coral is only 3.2:1, so coral text stays on the darker surfaces and text
  on coral uses `--accent-ink`.

## Pins

Every workflow action is pinned to a full commit SHA with the release in a comment, and
the runner is pinned (`ubuntu-24.04`); Dependabot proposes the bumps. Never replace a pin
with a tag. Node's version is in `.node-version`.

Full Astro docs: https://docs.astro.build.
