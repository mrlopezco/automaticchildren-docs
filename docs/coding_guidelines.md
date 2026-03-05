# Coding Guidelines — Automatic Children Docs

This document covers how to develop and maintain the documentation site for the **Automatic Children** Azure DevOps extension. It includes both the technical setup (how to run the project, add pages, deploy) and the writing guidelines (tone, structure, terminology) that keep the documentation consistent and accessible.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Local Development](#4-local-development)
5. [Adding and Editing Pages](#5-adding-and-editing-pages)
6. [MDX Gotchas](#6-mdx-gotchas)
7. [Screenshots](#7-screenshots)
8. [Deployment](#8-deployment)
9. [Writing Guidelines](#9-writing-guidelines)
10. [Site Structure and Navigation](#10-site-structure-and-navigation)
11. [Terminology](#11-terminology)

---

## 1. Project Overview

This is the public documentation site for the Automatic Children Azure DevOps extension. It's a static site built with Nextra (a documentation framework on top of Next.js) and deployed to Cloudflare Workers via OpenNext.

The site covers:

- **Getting Started** — Installation and first-run walkthrough.
- **Concepts** — Deep-dive pages on general rules, cascades, placeholders, and licensing.
- **Examples** — Practical, real-world scenarios users can recreate.
- **Support** — Bug reporting, feature requests, and contact info.

The source of truth for the extension's behaviour is the code in the `AutomaticChildren` repository. Documentation should always be cross-referenced against the extension code to ensure accuracy.

---

## 2. Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) with [Turbopack](https://turbo.build/pack) |
| Docs framework | [Nextra 4](https://nextra.site/) with `nextra-theme-docs` |
| Content format | MDX files in `content/` |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) (via Nextra theme) |
| Search | [Pagefind](https://pagefind.app/) (runs post-build) |
| Hosting | [Cloudflare Workers](https://workers.cloudflare.com/) via [@opennextjs/cloudflare](https://opennext.js.org/cloudflare) |
| Language | TypeScript 5, React 19 |

---

## 3. Project Structure

```
automaticchildren-docs/
├── content/                     ← All documentation lives here
│   ├── _meta.js                 ← Root sidebar navigation order
│   ├── index.mdx                ← Introduction page
│   ├── getting-started.mdx      ← Getting Started guide
│   ├── support.mdx              ← Support page
│   ├── concepts/
│   │   ├── _meta.js             ← Concepts section nav order
│   │   ├── general-rules.mdx
│   │   ├── cascades.mdx
│   │   ├── placeholders.mdx
│   │   └── licensing.mdx
│   └── examples/
│       ├── _meta.js             ← Examples section nav order
│       ├── epic-to-tasks.mdx
│       ├── bug-triage.mdx
│       └── sprint-planning.mdx
├── public/
│   ├── docs/screenshots/        ← Screenshot images for docs
│   ├── automatic-children.png   ← Logo
│   └── favico/                  ← Favicon files
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← Root layout (navbar, footer, sidebar)
│   │   ├── globals.css
│   │   └── [[...mdxPath]]/
│   │       └── page.tsx         ← Catch-all page route (Nextra)
│   └── mdx-components.tsx       ← MDX component overrides
├── docs/
│   └── coding_guidelines.md     ← This file
├── next.config.ts               ← Next.js + Nextra config
├── open-next.config.ts          ← OpenNext / Cloudflare config
├── wrangler.jsonc               ← Cloudflare Workers config
├── package.json
└── tsconfig.json
```

### Key rules

- **All documentation content is MDX** in the `content/` directory. Don't put documentation anywhere else.
- **Navigation order** is controlled by `_meta.js` files — one per directory. The keys are the filenames (without `.mdx`), and the values are the display labels shown in the sidebar.
- **Screenshots** go in `public/docs/screenshots/` and are referenced in MDX as `/docs/screenshots/filename.png`.
- **Don't modify `src/`** unless you're changing the site layout, navbar, footer, or MDX component behaviour. Content changes should only touch `content/`.

---

## 4. Local Development

### Prerequisites

- Node.js 18+
- npm

### Commands

| Command | What it does |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server (with hot reload) |
| `npm run build` | Production build (also runs Pagefind for search indexing) |
| `npm run lint` | Run ESLint |
| `npm run preview` | Build and preview the Cloudflare Workers deployment locally |
| `npm run deploy` | Build and deploy to Cloudflare Workers |

### Development workflow

1. Run `npm run dev` to start the local server.
2. Edit MDX files in `content/`. Changes appear instantly thanks to hot reload.
3. Run `npm run build` before pushing to verify there are no build errors.
4. Nextra git-timestamp warnings for new files (e.g., "Failed to get the last modified timestamp from Git") are harmless — they go away once the files are committed.

---

## 5. Adding and Editing Pages

### Adding a new page

1. Create a new `.mdx` file in the appropriate `content/` subdirectory.
2. Add an entry to the corresponding `_meta.js` file to control where it appears in the sidebar and what label it gets.

Example — adding a new example:

```js
// content/examples/_meta.js
export default {
    "epic-to-tasks": "Epic to Tasks hierarchy",
    "bug-triage": "Bug triage workflow",
    "sprint-planning": "Sprint planning template",
    "new-example": "My new example",        // ← add here
};
```

Then create `content/examples/new-example.mdx`.

### Adding a new section

1. Create a new directory under `content/` (e.g., `content/faq/`).
2. Add a `_meta.js` inside it with the page order.
3. Add the section to `content/_meta.js` so it appears in the root sidebar.

### Page structure

Every page should start with an `h1` heading (`# Page Title`). Nextra uses this as the page title. Don't add frontmatter for the title — the first heading is enough.

Use `h2` (`##`) for major sections and `h3` (`###`) for subsections. Don't skip heading levels (e.g., don't jump from `##` to `####`).

---

## 6. MDX Gotchas

MDX is Markdown with JSX support, which means some Markdown patterns can trip up the JSX parser.

### Escape `${...}` in text

MDX treats `${...}` as a JavaScript template literal expression. If you write `${parent.title}` in your prose, MDX will try to evaluate `parent` as a variable and the build will fail.

**Fix:** Escape the dollar sign with a backslash: `\${parent.title}`.

This only applies to text outside of code blocks. Inside fenced code blocks (triple backticks), `${...}` is treated as literal text and doesn't need escaping.

### Importing components

Nextra provides components like `Callout`. Import them at the top of the MDX file:

```mdx
import { Callout } from "nextra/components";
```

Only import what you actually use on the page.

### Callout component

Use `Callout` for tips, warnings, and screenshot placeholders:

```mdx
<Callout type="info">
  This is a tip.
</Callout>

<Callout type="warning">
  This is a warning.
</Callout>

<Callout type="info" emoji="🖼️">
  **Screenshot placeholder:** Description of what screenshot to take.
</Callout>
```

### Tables

Standard Markdown tables work. Keep columns aligned for readability in the source:

```md
| Column A | Column B |
|----------|----------|
| Value 1  | Value 2  |
```

### Code blocks

Use fenced code blocks with a language tag for syntax highlighting. For placeholder syntax or field references that aren't a specific language, use no language tag or `text`:

````md
```
{{System.Title}}
```
````

---

## 7. Screenshots

Screenshots are placed in `public/docs/screenshots/` and referenced in MDX:

```mdx
![Rule editor showing conditions](/docs/screenshots/rule-editor-conditions.png)
```

### Screenshot guidelines

- **Format:** PNG, optimised for web (compress before committing).
- **Naming:** Use `kebab-case` descriptive names (e.g., `rule-editor-placeholder-button.png`, `cascade-preview-panel.png`).
- **Size:** Capture at a reasonable resolution. Crop to show only the relevant UI — don't include the entire browser window unless context is needed.
- **Consistency:** Use the same Azure DevOps project and example data across screenshots so the documentation tells a coherent visual story.

### Screenshot placeholders

Pages currently have Callout-based placeholders describing what screenshot to take:

```mdx
<Callout type="info" emoji="🖼️">
  **Screenshot placeholder:** Description of what to capture.
</Callout>
```

When adding the actual screenshot, replace the Callout with an image tag. Keep the Callout description as the `alt` text for the image.

---

## 8. Deployment

The site is deployed to **Cloudflare Workers** using OpenNext.

| Command | What it does |
|---------|-------------|
| `npm run deploy` | Builds with OpenNext and deploys to Cloudflare |
| `npm run preview` | Builds and runs a local Cloudflare Workers preview |

The Cloudflare configuration is in `wrangler.jsonc`. The worker name is `automaticchildren-docs`.

### Build + deploy checklist

1. Run `npm run build` locally to verify no errors.
2. Check that all links in the sidebar render correctly.
3. Run `npm run deploy` to push to production.

---

## 9. Writing Guidelines

The documentation should feel approachable and easy to read for people who aren't necessarily technical. Think of it as explaining the extension to a teammate over coffee.

### Tone

- **Conversational and friendly.** Write like you're talking to the reader. Use "you" and "your" freely.
- **Plain language.** Avoid jargon. If you must use a technical term, explain it the first time.
- **Direct.** Get to the point. Don't pad sentences with filler words.
- **Encouraging.** Use positive framing. "You can..." rather than "You must..." where appropriate.

### Sentence structure

- Keep sentences short and clear. If a sentence has more than one comma, consider breaking it up.
- Use active voice. "The extension creates child work items" not "Child work items are created by the extension."
- Lead with the action. "Click **Add Rule** to create a new general rule" not "To create a new general rule, you need to click the Add Rule button."

### Formatting

- **Bold** for UI labels, button names, tab names, and important terms on first use. Example: Click **Add Rule**, go to the **General** tab.
- **Code formatting** (backticks) for field references, placeholder syntax, and literal values. Example: `{{System.Title}}`, `System.AreaPath`.
- **Lists** for sequences of steps (numbered) or collections of items (bulleted).
- **Tables** for structured comparisons (plans, operators, field lists).
- **Callouts** for tips, warnings, and important notes that should stand out from the flow.

### Page structure

Every concept or feature page should follow this general flow:

1. **What it is** — A short, plain-language explanation at the top.
2. **How to use it** — Step-by-step instructions with screenshot placeholders.
3. **All the options** — Detailed breakdown of every setting, field, and behaviour.
4. **Tips and edge cases** — Callouts for non-obvious things.
5. **Summary table** — A quick-reference table at the bottom.

### Examples in documentation

When describing a feature, always include a concrete example. Don't just say "you can set conditions" — show what a condition looks like:

> For example, you could add a condition where **Area Path** *equals* `MyTeam\Backend` to make the rule only apply to backend work items.

### Linking between pages

Link to related pages when they provide more depth. Use relative paths:

```mdx
See [General Rules](/concepts/general-rules) for more details.
```

Don't over-link. Link on first mention in a section, not on every occurrence.

---

## 10. Site Structure and Navigation

The documentation follows this structure:

| Section | Purpose | Pages |
|---------|---------|-------|
| **Introduction** | Welcome page, high-level overview, links to sections | `index.mdx` |
| **Getting Started** | End-to-end first-run guide: install, org settings, project settings, first rule, run | `getting-started.mdx` |
| **Concepts** | Deep-dive reference for each core feature | `general-rules.mdx`, `cascades.mdx`, `placeholders.mdx`, `licensing.mdx` |
| **Examples** | Practical, real-world scenarios users can follow | `epic-to-tasks.mdx`, `bug-triage.mdx`, `sprint-planning.mdx` |
| **Support** | Bug reports, feature requests, contact | `support.mdx` |

### What goes where

- **Getting Started** is a guided walkthrough. It should be linear and high-level — enough to get someone up and running without overwhelming them.
- **Concepts** pages are comprehensive references. Go into full detail here. Every option, every field, every validation rule. These are the pages people come back to when they need specifics.
- **Examples** are self-contained walkthroughs that show a complete, real-world use case from start to finish. Each example should be something many teams would actually use.
- **Don't duplicate content across sections.** Getting Started can reference concepts ("for more details, see General Rules") but shouldn't repeat the same deep-dive content. If something is explained in detail on a concept page, link to it rather than writing it again.

---

## 11. Terminology

Use consistent terminology throughout all documentation. These are the canonical names:

| Term | Usage | Notes |
|------|-------|-------|
| **General rule** | Always use "general rule" (not just "rule") | The two pillars of the extension are "general rules" and "cascades." Using just "rule" is ambiguous. |
| **Cascade** | Always "cascade" | A cascade chains general rules together across multiple levels. |
| **General rules and cascades** | When referring to both features together | "The two core features of the extension are general rules and cascades." |
| **Placeholder** | A `{{FieldRef}}` token in a field mapping | Describe it as "a placeholder that pulls values from the parent." |
| **Placeholder button** | The `{}` button in the rule editor | Always mention that users don't have to type placeholders manually. |
| **Field mapping** | A row that maps a child field to a value | Not "field assignment" or "field template." |
| **Trigger conditions** | The "when" part of a general rule | Not just "conditions" — "trigger conditions" is clearer. |
| **Child work item** | What the extension creates | Not "child item" or "sub-item." |
| **Side panel** | The panel that opens from a work item's context menu | Not "dialog" or "modal." |
| **Context menu** | The `…` menu on a work item | Describe it as "the **…** (context) menu." |
| **"Same as parent"** | The dropdown option for inheriting Area Path, Iteration Path, etc. | Always in quotes when referring to the UI option. |
| **"Only missing"** | The toggle to skip duplicate items | Always in quotes. |
| **Free trial** | The default license state | Not "trial mode" or "trial plan." Always mention limits: 3 general rules, 3 cascades. |
| **Licensed project** | A project assigned to a paid subscription | Not "activated project" or "subscribed project." |

### Azure DevOps terms

Use the standard Azure DevOps terminology:

- **Work item** (not "ticket" or "item").
- **Work item type** (not "type" on its own when it could be ambiguous).
- **Area Path** and **Iteration Path** (capitalised, two words).
- **Boards** (the Azure DevOps section where work items live).
- **Project Settings** and **Organization Settings** (capitalised).

### Extension UI labels

When referring to specific labels in the extension's UI, use the exact text the user sees:

- **Add Rule**, **Add Cascade**, **Add Child Item**, **Add Field**, **Add Condition**, **Add Stage**.
- **Automatic Child Items** (the context menu action name).
- **General**, **Cascades**, **Settings**, **Documentation**, **About** (the project settings tabs).
- **Run rules**, **Run a cascade** (side panel mode choices).
- **Preview cascade** (the button in cascade mode).
