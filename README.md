# Daniel Kalaora — Interactive CV / Resume

> Personal interactive resume and portfolio website, live at [chidoripunk.github.io](https://chidoripunk.github.io).

## Overview

A fast, accessible, and lightweight single-page resume built with **React** and bundled with **Vite**.

### Key Features

- **Accessibility First**: WCAG-conscious structure, keyboard navigation support, and a "skip to content" feature.
- **Dark Mode**: Automatic detection based on system preferences (`prefers-color-scheme`) with an on-demand manual toggle.
- **Print Friendly**: Dedicated `@media print` stylesheet optimized for clean PDF exports and physical printing.
- **Ultra-Fast & Lightweight**: Powered by Vite with sub-second builds, optimized assets, and modular SCSS architecture.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Modern [Sass](https://sass-lang.com/) (SCSS) using the `@use` module system
- **Hosting / Deployment**: [GitHub Pages](https://pages.github.com/) via `gh-pages`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/cHidoriPunk/chidoripunk.github.io.git
cd chidoripunk.github.io

# Install development dependencies
npm install
```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm start` *(or `npm run dev`)* | Starts the local Vite dev server with instant HMR |
| `npm run build` | Compiles and bundles the application into `build/` |
| `npm run preview` | Previews the production build locally |
| `npm run deploy` | Runs the build and publishes it to GitHub Pages |
