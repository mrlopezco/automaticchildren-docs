# Screenshots for documentation

Screenshot images are organized in subfolders that mirror where they are used in the docs:

- **concepts/cascades/** — Images for the Cascades concept page
- **concepts/general-rules/** — Images for the General Rules concept page
- **concepts/placeholders/** — Images for the Placeholders concept page (shared images may live in `general-rules`)
- **concepts/licensing/** — Images for the Licensing concept page
- **getting-started/** — Images for the Getting Started guide
- **examples/bug-triage/**, **examples/epic-to-tasks/**, **examples/sprint-planning/** — Images for each example page

Reference images in MDX using the full path, e.g.:

```md
![Alt text](/docs/screenshots/concepts/cascades/cascade-overview.png)
```

Suggested filenames (from the docs placeholder list):

- `marketplace-install.png` — Marketplace page, Install button
- `project-settings-general.png` — Project Settings > Automatic Children, General tab, rules/cascades list
- `rule-editor-conditions.png` — Rule editor, conditions section
- `rule-editor-children.png` — Rule editor, child item definitions
- `cascades-list-editor.png` — Cascades list and cascade editor (master + stages)
- `context-menu-automatic-child-items.png` — Work item context menu with "Automatic Child Items"
- `dialog-preview-rules.png` — Side panel: Run rules vs Run cascade, preview list, duplicate warnings
- `project-settings-about.png` — About tab
- `project-settings-settings-tab.png` — Settings tab (Export/Import, Refresh cache)
- `org-settings-plans.png` — Organization Settings, plans table and Licensed projects

Replace the "Screenshot placeholder" callouts in the docs with the corresponding image once added.
