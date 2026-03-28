# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Original Prompt

Create a simple Astro project that mimics the aesthetic of a Mothership (the ttrpg) terminal, such as this example: https://redhg.com/ypsilon14/. Content can be organized in markdown or json (whichever makes more sense). For example content, it should be the ships log of the Matron's Call, a medium sized freighter, currently carrying unkown cargo with a deadline of 1 hyperspace week, written by Captain Sim Troob, who is totally a human (and android).

## Commands

```bash
npm run dev       # Start local dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview built site locally
```

No linting or test scripts are configured.

## Architecture

This is an **Astro static site** that renders as a retro CRT terminal interface for a fictional spaceship captain's log called "MATRON'S CALL."

### Content

Log entries live in `src/content/logs/` as Markdown files. The Content Collection schema (`src/content/config.ts`) enforces this frontmatter shape:

```ts
entry: string       // zero-padded number for sorting ("001", "002", ...)
title: string       // display title shown in list and entry header
stardate: string    // display date
author: string      // character name
status: enum        // "NOMINAL" | "CAUTION" | "WARNING" | "CRITICAL"
tags?: string[]     // optional metadata
```

### Pages

- `src/pages/index.astro` — lists all log entries sorted by entry number; derives ship system status from the latest entry
- `src/pages/logs/[slug].astro` — dynamic page per log entry with prev/next navigation; uses `entry.id.replace(/\.md$/, '')` for URL slugs
- `src/layouts/TerminalLayout.astro` — wraps all pages; loads Google Fonts (VT323, Share Tech Mono) and `terminal.css`

### Styling

All styling is in `src/styles/terminal.css`. The theme is a green-on-black CRT terminal (`#33ff57` on dark). Key effects:

- Scanlines via `repeating-linear-gradient`
- Vignette via `radial-gradient` pseudo-element
- Glow via `text-shadow`
- `WARNING`/`CRITICAL` statuses trigger CSS flicker animations
- No client-side JavaScript (pure CSS animations)
