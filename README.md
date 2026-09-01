# CSS Starter

A framework-agnostic CSS foundation. This is **not** a component library —
it provides **design tokens** and **native element defaults** that
downstream projects customise via token overrides.

Use it as the base layer for any Vue, React, Astro, or plain HTML project.

## What this IS

| Layer | What |
|-------|------|
| **Tokens** | CSS custom properties for colours, type, spacing, borders, shadows, easing — the raw materials |
| **Reset** | Josh Comeau's modern CSS reset, plus a few opinionated overrides |
| **Base styles** | Sensible defaults for native HTML elements (`<h1>`, `<p>`, `<a>`, `<button>`, `<input>`, `<table>`, etc.) |

## What this is NOT

- ❌ **No component variants** — no `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.card`, `.badge`, `.alert`
- ❌ **No utility framework** — no `.m-4`, `.flex`, `.text-center` classes
- ❌ **No JavaScript** — pure CSS, zero JS

This project gives you the **ingredients**, not the **recipes**. You build
the recipes in your own project by overriding tokens and adding your own
component styles on top.

## Why?

When every project starts from scratch, you get inconsistent spacing,
forgotten focus rings, and mismatched colours. When you vendor a
full component library, you fight its opinionated API and struggle to
make it look like *your* brand.

This starter sits in the middle: a **shared foundation** that all your
projects can import, but with **zero opinion on component variants**.
Each project overrides tokens freely and builds the component system
that fits its needs.

## What's inside

Styles are organised as **feature folders** — each feature keeps its
styles, tokens, and Storybook story together in one place:

```
src/
├── styles/
│   ├── index.css                          ← Entry point (import this)
│   ├── reset.css                          ← Josh Comeau's Custom CSS Reset
│   ├── reset-overrides.css                ← Additional resets on top
│   ├── utility.css                        ← .sr-only class only
│   ├── tokens/                            ← Shared, cross-cutting scale tokens
│   │   ├── color.css                      ← Colours + dark mode
│   │   ├── type.css                       ← Font families, sizes, weights, line-heights
│   │   ├── spacing.css                    ← Spacing scale (0.25rem → 4rem)
│   │   ├── border.css                     ← Border radii
│   │   ├── shadow.css                     ← Box shadows (light & dark)
│   │   ├── easing.css                     ← Transition durations
│   │   └── layout.css                     ← Max-width constraints
│   ├── body/                              ← Body defaults
│   ├── typography/                        ← Headings, paragraphs, lists, quotes + story
│   ├── link/                              ← Anchor styles + story
│   ├── button/                            ← Button tokens + styles + story
│   │   ├── button.tokens.css              ← Button-specific tokens (--btn-*)
│   │   ├── button.styles.css              ← ⚠️ Just baseline styles, no variants
│   │   └── button.stories.ts
│   ├── code/                              ← Code, pre, kbd + story
│   ├── form/                              ← Inputs, labels, selects + story
│   ├── table/                             ← Table styling + story
│   └── breakpoints/                       ← @custom-media breakpoints + demo story
└── stories/
    ├── AllStyles.stories.ts               ← Kitchen-sink overview page
    └── Tokens.stories.ts                  ← Design token reference tables
```

### Folder convention

Every feature lives in its own folder under `src/styles/`, with files named
`<feature>.<kind>.css`:

- `<feature>/<feature>.tokens.css` — optional; only when the feature owns
  tokens that aren't shared scales (e.g. `button.tokens.css`)
- `<feature>/<feature>.styles.css` — the feature's styles; omitted for
  tokens-only features (e.g. `breakpoints/`)
- `<feature>/<feature>.stories.ts` — Storybook story, colocated with the
  feature it previews

A folder contains only the files it needs — not every feature has all
three. Shared scales (colour, type, spacing, …) live once in `tokens/` and
are referenced directly by every feature.

## Usage

```bash
npm install
```

Import the styles in your project's entry point:

```css
@import 'css-starter';
```

Or cherry-pick only what you need (deep imports follow the folder structure
above):

```css
@import 'css-starter/src/styles/tokens/color.css';
@import 'css-starter/src/styles/reset.css';
```

## Customising tokens

Override any token in your own `:root`:

```css
:root {
  --c-primary: #6366f1;
  --c-primary-hover: #4f46e5;
  --ff-sans: 'Inter', system-ui, sans-serif;
  --btn-bg: var(--c-primary);
  --btn-color: #fff;
  --btn-radius: 9999px;
}
```

## Dark mode

Dark mode is driven **entirely** by the user's system preference via
`@media (prefers-color-scheme: dark)`. No `data-theme` attribute is needed.

| Values | Selector |
|--------|----------|
| Light (default) | `:root { ... }` |
| Dark (override) | `@media (prefers-color-scheme: dark) { :root { ... } }` |

Dark mode values are defined in `tokens/color.css` and `tokens/shadow.css`.
Each value lives in **exactly one place** — no duplication.
The browser handles everything automatically: set your OS preference to
dark/light and the design system follows suit.

### Overriding dark tokens in your project

```css
@media (prefers-color-scheme: dark) {
  :root {
    --c-primary: #818cf8;
    --c-bg: #0f172a;
  }
}
```

## Building your own button variants

This starter styles `<button>` with a neutral, subtle look. If you want
primary / secondary / ghost variants, add them in your own project:

```css
/* Your project's component styles */
.btn-primary {
  --btn-bg: var(--c-primary);
  --btn-bg-hover: var(--c-primary-hover);
  --btn-bg-active: var(--c-primary-active);
  --btn-border: var(--c-primary);
  --btn-color: var(--c-text-inverse);
}

.btn-ghost {
  --btn-bg: transparent;
  --btn-bg-hover: var(--c-primary-subtle);
  --btn-border: transparent;
  --btn-color: var(--c-primary);
}
```

Base styles use `:where()` so any class you write will naturally override
them without specificity battles.

## Storybook

Preview all styled native elements in a component explorer:

```bash
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006) with stories for
typography, links, buttons, forms, tables, code, and a kitchen-sink page.
Feature stories are colocated with their styles (e.g.
`src/styles/button/button.stories.ts`); the kitchen-sink and token
reference pages live in `src/stories/`. Dark mode follows your system
preference automatically.

## Design principles

- **`rem` for spacing and type** — respects user's font-size settings
- **`px` for borders and shadows** — decorative properties don't scale
- **All values reference tokens** — no hardcoded values in base styles
- **Dark mode via `@media (prefers-color-scheme: dark)`** — single source of truth, no duplication. Follows the user's OS preference automatically
- **`:where()` in styles** — zero-specificity, easy for downstream to override
- **Feature folders** — each feature keeps its styles, tokens, and story together
- **No component variants** — this is the foundation, you build the house

## Projects using this

- [Vue Starter](../vue-starter)
- [React Starter](../react-starter)

## License

MIT
