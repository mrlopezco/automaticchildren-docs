# Automatic Children — Documentation

Welcome! This repository contains the **official documentation** for [Automatic Children](https://marketplace.visualstudio.com/items?itemName=LopezColl.automatic-children), an Azure DevOps extension that automatically creates child work items from parent work items using configurable rules and cascades.

The docs cover getting started, core concepts (general rules, cascades, placeholders, licensing), and practical examples you can use in your own projects. The site is built with [Next.js](https://nextjs.org/) and [Nextra](https://nextra.site/).

---

## What’s in this repo

- **User-facing documentation** — Guides, concepts, and examples for using Automatic Children in Azure DevOps.
- **Source for the docs site** — Content (MDX), assets, and configuration to build and deploy the documentation website.

This repo is **documentation only**. The extension itself and its source code live in separate repositories.

---

## Bugs & feedback

We’d love to hear from you.

- **Found a bug or mistake in the docs?**  
  Open a [GitHub Issue](https://github.com/LopezColl/automaticchildren-docs/issues) and describe what’s wrong (e.g. broken link, outdated step, unclear sentence).

- **Have an idea to improve the docs or the extension?**  
  Use [GitHub Issues](https://github.com/LopezColl/automaticchildren-docs/issues) to suggest changes, request new topics, or share feedback.

Please use the issue templates when available and include enough context so we can act on your report. Thank you for helping make the docs better for everyone.

---

## Running the docs locally

If you want to build or contribute to the documentation:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The site will hot-reload as you edit the content under `content/`.

| Command | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the site for production |
| `npm run start` | Serve the production build locally |

---

## License

The documentation in this repository is made available under the same terms as the project it describes. See the repository or the extension’s Marketplace page for details.
