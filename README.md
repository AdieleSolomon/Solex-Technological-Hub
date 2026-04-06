# Solex Technological Hub

A professional static website for a frontend development bootcamp, built with plain HTML, CSS, and JavaScript.

Live site:
https://adielesolomon.github.io/Solex-Technological-Hub/

## Overview

Solex Technological Hub presents a structured 16-week frontend learning experience with:

- 36 classes across 6 phases
- a polished marketing homepage
- a searchable course catalog
- responsive layouts for desktop, tablet, and mobile
- GitHub Pages-ready static deployment

The experience is inspired by the clarity and hierarchy of premium learning platforms, while staying lightweight and easy to maintain.

## Pages Setup

This repository is configured to publish with GitHub Pages from the `main` branch root.

Supporting static publishing files included in the repo:

- `.nojekyll`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- branded icons and social preview assets in `assets/`

## Project Structure

```text
Solex-Technological-Hub/
├── 404.html
├── courses-data.js
├── courses.html
├── favicon.svg
├── index.html
├── QUICK_START.md
├── README.md
├── robots.txt
├── script.js
├── site.webmanifest
├── sitemap.xml
├── styles.css
└── assets/
```

## Key Files

- `index.html`: homepage and marketing content
- `courses.html`: searchable course catalog
- `courses-data.js`: curriculum and featured-course data
- `styles.css`: shared design system and responsive layout
- `script.js`: navigation, reveals, FAQ behavior, and course catalog interactions

## Local Preview

Open `index.html` directly in a browser, or serve the folder locally.

Example with Python:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## SEO and Sharing

The site includes:

- canonical URLs
- Open Graph and Twitter metadata
- structured data
- sitemap and robots configuration
- app manifest and icons
- a share preview image

If you later move to a custom domain, update the absolute URLs in:

- `index.html`
- `courses.html`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`

## Customization

To update curriculum content:

- edit `courses-data.js`

To adjust branding, layout, or colors:

- edit `styles.css`
- update `favicon.svg`
- replace assets inside `assets/`

To update homepage messaging:

- edit `index.html`

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

## License

This project includes the Apache 2.0 license in [`LICENSE`](LICENSE).
