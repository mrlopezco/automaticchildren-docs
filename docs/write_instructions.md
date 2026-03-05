# How to Edit the Documentation

This guide explains how to **add or change the text** of the Automatic Children docs and how to **add images** to the pages. It is written for anyone editing the documentation (writers, editors, or developers) and does not assume you are changing the site code.

For technical setup (running the dev server, deployment, project structure), see [coding_guidelines.md](./coding_guidelines.md).

---

## Table of Contents

1. [Where the content lives](#1-where-the-content-lives)
2. [Editing existing text](#2-editing-existing-text)
3. [Adding or changing pages](#3-adding-or-changing-pages)
4. [Formatting and structure](#4-formatting-and-structure)
5. [Adding images to the documentation](#5-adding-images-to-the-documentation)
6. [MDX tips and gotchas](#6-mdx-tips-and-gotchas)

---

## 1. Where the content lives

All documentation **text and structure** live in **MDX files** inside the `content/` folder:

| Path | What it is |
|------|------------|
| `content/index.mdx` | Introduction / home page |
| `content/getting-started.mdx` | Getting Started guide |
| `content/support.mdx` | Support page |
| `content/concepts/*.mdx` | Concept pages (general rules, cascades, placeholders, licensing) |
| `content/examples/*.mdx` | Example workflows (epic-to-tasks, bug-triage, sprint-planning) |

- **MDX** is Markdown with support for components (e.g. callouts). You can write normal Markdown for almost everything.
- **Do not** put new documentation in `src/` or anywhere outside `content/`. Only `content/` is used for the visible docs.

---

## 2. Editing existing text

To change the wording of the docs:

1. Open the right `.mdx` file under `content/` (or the right subfolder: `content/concepts/`, `content/examples/`, etc.).
2. Edit the text as you would in any Markdown file:
   - Plain paragraphs are just text.
   - Use `**bold**` and `*italic*` where needed.
   - Use `- item` or `1. item` for lists.
   - Use `#`, `##`, `###` for headings (see [Formatting and structure](#4-formatting-and-structure)).
3. Save the file. If the dev server is running (`npm run dev`), the page will reload and show your changes.

You can use any normal Markdown: links `[text](url)`, code `` `inline` ``, tables, blockquotes, etc. For a few MDX-specific rules, see [MDX tips and gotchas](#6-mdx-tips-and-gotchas).

---

## 3. Adding or changing pages

### Adding a new page

1. **Create the file**  
   Add a new `.mdx` file in the right place under `content/`:
   - New **concept** → `content/concepts/your-topic.mdx`
   - New **example** → `content/examples/your-example.mdx`
   - New **top-level** page → `content/your-page.mdx`

2. **Add it to the sidebar**  
   Edit the `_meta.js` file in the **same folder** as the new page. The keys are file names (without `.mdx`), and the values are the labels shown in the sidebar.

   **Example** — you created `content/examples/my-workflow.mdx`. In `content/examples/_meta.js` add:

   ```js
   export default {
       "epic-to-tasks": "Epic to Tasks hierarchy",
       "bug-triage": "Bug triage workflow",
       "sprint-planning": "Sprint planning template",
       "my-workflow": "My new workflow",   // ← add this line
   };
   ```

3. **Write the page**  
   Start with a single `# Title` heading (that becomes the page title). Then use `##` and `###` for sections. See [Formatting and structure](#4-formatting-and-structure).

### Adding a new section (new group in the sidebar)

1. Create a new folder under `content/`, e.g. `content/faq/`.
2. Add a `_meta.js` inside it with the list of pages (same format as above).
3. In the **root** `content/_meta.js`, add an entry for the new section so it appears in the main sidebar, e.g. `faq: "FAQ"`.

### Renaming or reordering pages

- **Label in the sidebar:** Change the **value** in the right `_meta.js` (e.g. `"my-workflow": "Better label"`).
- **Order in the sidebar:** Reorder the entries in the same `_meta.js`. The order in the object is the order in the sidebar.
- **URL / file name:** If you rename the `.mdx` file, update the key in `_meta.js` to match, and fix any internal links that pointed to the old path.

---

## 4. Formatting and structure

### Headings

- **Every page** should start with one `#` heading — that is the page title. Do not add separate “title” frontmatter.
- Use `##` for main sections and `###` for subsections. Do not skip levels (e.g. don’t go from `##` to `####`).

Example:

```md
# Page Title

## First main section

Some text.

### Subsection

More text.

## Second main section
```

### Callouts (tips, warnings, screenshot placeholders)

The docs use a **Callout** component. You must import it at the top of the MDX file, then use it like this:

```mdx
import { Callout } from "nextra/components";

# My Page

<Callout type="info">
  This is an informational tip.
</Callout>

<Callout type="warning">
  This is a warning.
</Callout>

<Callout type="info" emoji="🖼️">
  **Screenshot placeholder:** Description of what screenshot to add here.
</Callout>
```

Use the **screenshot placeholder** callout when you want an image there later; then follow [Adding images](#5-adding-images-to-the-documentation) to add the image and optionally remove or shorten the placeholder.

### Links

- **Internal** (to another doc page): `[Link text](/concepts/licensing)` — path is the URL path (e.g. `/concepts/licensing` for `content/concepts/licensing.mdx`).
- **External**: `[Link text](https://example.com)`.

### Code and placeholders

- Inline code: `` `{{System.Title}}` ``.
- Code block with language for syntax highlighting:

  ````md
  ```json
  { "key": "value" }
  ```
  ````

- If you write `${...}` in normal text (outside a code block), MDX treats it as code. Escape it as `\${...}` or put it in a code block. See [MDX tips and gotchas](#6-mdx-tips-and-gotchas).

### Tables

Standard Markdown tables work:

```md
| Column A   | Column B   |
|------------|------------|
| Value 1    | Value 2    |
```

---

## 5. Adding images to the documentation

This section is the main reference for **adding images** (screenshots, diagrams, etc.) to the docs.

### Where to put image files

- **Screenshots and most doc images:**  
  Put files in **`public/docs/screenshots/`**.
- **Other site-wide assets** (e.g. logo, favicon):  
  They live under `public/` in other folders; for normal doc images, use `public/docs/screenshots/`.

Images in `public/docs/screenshots/` are served at the URL `/docs/screenshots/` (e.g. `my-image.png` → `https://yoursite.com/docs/screenshots/my-image.png`).

### How to show an image in a page

In the `.mdx` file, use standard Markdown image syntax. The path must start with `/docs/screenshots/` and match the file name under `public/docs/screenshots/`:

```md
![Short description of the image for accessibility](/docs/screenshots/rule-editor-conditions.png)
```

- **Alt text** (the part in square brackets) should briefly describe the image. It’s used by screen readers and when the image can’t load.
- **Path:** Always `/docs/screenshots/` + the file name (e.g. `rule-editor-conditions.png`).

Example in context:

```md
## Rule editor

Configure the conditions in the rule editor as follows:

![Rule editor showing the conditions section](/docs/screenshots/rule-editor-conditions.png)

Then add the child item definitions.
```

### Replacing a screenshot placeholder

Many pages have a callout that says something like “Screenshot placeholder: …”. To add the real image:

1. Add the image file to `public/docs/screenshots/` (see [Naming and format](#naming-and-format) below).
2. In the MDX file, add the image line **where the placeholder callout is** (or right after the paragraph it refers to):

   ```md
   ![Description matching the placeholder](/docs/screenshots/your-filename.png)
   ```

3. You can then **remove the placeholder callout** or replace it with a short caption if you prefer.

### Naming and format

- **File names:** Use **kebab-case** and a clear, descriptive name, e.g.:
  - `rule-editor-conditions.png`
  - `cascade-preview-panel.png`
  - `project-settings-general.png`
- **Format:** PNG is typical for screenshots. Compress images for the web before committing (smaller file size, faster loading).
- **Size:** Capture at a reasonable resolution and **crop** to the relevant part of the UI. Avoid full-window screenshots unless the whole window is needed.

A list of suggested screenshot names (for replacing placeholders) is in `public/docs/screenshots/README.md`.

### Summary: steps to add an image

1. Put the image file in **`public/docs/screenshots/`** with a kebab-case name (e.g. `my-feature.png`).
2. In the MDX page, add:  
   `![Brief alt text](/docs/screenshots/my-feature.png)`  
   where you want the image to appear.
3. If there was a “Screenshot placeholder” callout, remove it or turn it into a short caption once the image is in place.

---

## 6. MDX tips and gotchas

- **`${...}` in text:**  
  MDX treats `${...}` as JavaScript. In normal paragraphs, escape the dollar sign: `\${parent.title}`. Inside fenced code blocks (triple backticks), you don’t need to escape.

- **Imports:**  
  If you use `Callout`, add at the top of the file:  
  `import { Callout } from "nextra/components";`  
  Only import what that page uses.

- **First heading:**  
  The first `#` heading is the page title. Don’t add extra frontmatter for the title.

For more technical MDX and build details, see [coding_guidelines.md](./coding_guidelines.md).
