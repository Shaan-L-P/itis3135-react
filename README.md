# ITIS 3135 React Site

A React + Vite recreation of the core ITIS 3135 course website pages: Home, Introduction, Course Contract, and About.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The Vite base path is configured for the repository name `/itis3135-react/`. The included GitHub Actions workflow builds the site and deploys the `dist` folder to GitHub Pages when changes are pushed to `main`.

In the repository's GitHub settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Pages

- Home: `#/`
- Introduction: `#/introduction`
- Contract: `#/contract`
- About: `#/about`

The header and footer are reusable React components. The browser tab title updates automatically when the page changes. Hash-based routing keeps direct links and page refreshes working on GitHub Pages without a custom server rewrite.

The logo, Brooklyn Bridge photo, and favicon are reused from the original public course-site repository.
