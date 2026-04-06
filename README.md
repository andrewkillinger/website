# andrewkillinger.com

A retro-cool personal site for Andrew Killinger. Synthwave grid, CRT scanlines,
glitchy type, WebAudio beeps, and a few hidden surprises.

## Live

[https://andrewkillinger.com](https://andrewkillinger.com)

## Stack

- [Astro](https://astro.build/) (static output, zero JS frameworks)
- Vanilla CSS + Google Fonts (VT323, Space Mono, Major Mono Display)
- WebAudio API for sound effects (no audio files)
- GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview
```

## Easter eggs

- Tap or click the name → glitch + beep
- Tap the name **5 times** → pixel rain
- **Long-press** the name → hidden message
- Konami code (`↑ ↑ ↓ ↓ ← → ← → B A`) → rainbow mode + confetti
- `⏻ off` button → power down the CRT
- Open the browser console for a love note

## Project structure

```
public/         static assets (favicon, CNAME, robots, sitemap)
src/pages/      index.astro — entire site lives here
.github/        deploy workflow
```

Custom domain is configured via `public/CNAME`.
