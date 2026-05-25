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

```
src/styles/
├── index.css              ← Entry point (import this)
├── reset.css              ← Josh Comeau's Custom CSS Reset
├── reset-overrides.css    ← Additional resets on top
├── utility.css            ← .sr-only class only
├── tokens/
│   ├── color.css          ← Colours + dark mode
│   ├── type.css           ← Font families, sizes, weights, line-heights
│   ├── spacing.css        ← Spacing scale (0.25rem → 4rem)
│   ├── border.css         ← Border radii
│   ├── shadow.css         ← Box shadows (light & dark)
│   ├── easing.css         ← Transition durations
│   ├── layout.css         ← Max-width constraints
│   └── button.css         ← Button-specific tokens
└── base/                  ← Native element defaults
    ├── body.css
    ├── typography.css
    ├── link.css
    ├── button.css         ← ⚠️ Just baseline styles, no variants
    ├── code.css
    ├── form.css
    └── table.css
```

## Usage

```bash
npm install
```

Import the styles in your project's entry point:

```css
@import 'css-starter/src/styles/index.css';
```

Or cherry-pick only what you need:

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

Theme is controlled **exclusively** via `data-theme="dark"` on the `<html>`
element. No `@media (prefers-color-scheme)` is used — this avoids the
classic duplication problem where dark mode values live in two places.

| Values | Selector |
|--------|----------|
| Light (default) | `:root { ... }` |
| Dark (override) | `:root[data-theme='dark'] { ... }` |

Dark mode values are defined in `tokens/color.css` and `tokens/shadow.css`.
Each value lives in **exactly one place**.

---

### Implementation in other projects

When you import this CSS starter into a Vue, React, or plain HTML project,
you need to sync `data-theme` with the user's system preference. There are
two complementary approaches:

#### 1. Script tag (required — sets initial theme)

Place this **before** your CSS import in `<head>`. It reads the system
preference instantly and sets `data-theme` before the first paint, so there's
no flash of wrong theme.

```html
<head>
  <script>
    if (matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.setAttribute('data-theme', 'dark')
  </script>
  <link rel="stylesheet" href="path/to/index.css" />
</head>
```

For frameworks that generate HTML (Astro, Next.js, Nuxt, etc.), inject this
script inline in the `<head>` via the framework's head management API.

#### 2. Toggle button (optional — lets user switch)

For a manual toggle, add a button that flips `data-theme` and persists the
choice:

```js
function toggleTheme() {
  const html = document.documentElement
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  html.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
}

function initTheme() {
  const saved = localStorage.getItem('theme')
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved)
  }
}
```

Call `initTheme()` on page load (after the inline script, so the saved
preference overrides the system preference).

#### Implementing in Astro

```astro
---
// src/layouts/BaseLayout.astro
---
<!doctype html>
<html lang="ca">
  <head>
    <script is:inline>
      if (matchMedia('(prefers-color-scheme: dark)').matches)
        document.documentElement.setAttribute('data-theme', 'dark')
    </script>
    <link rel="stylesheet" href="/src/styles/index.css" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

#### Implementing in Nuxt

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          innerHTML:
            "if (matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.setAttribute('data-theme', 'dark')",
          type: 'text/javascript',
        },
      ],
    },
  },
})
```

#### Implementing in Next.js

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`if (matchMedia('(prefers-color-scheme: dark)').matches)
            document.documentElement.setAttribute('data-theme', 'dark')`}
        </Script>
        <link rel="stylesheet" href="/src/styles/index.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Overriding dark tokens in your project

```css
:root[data-theme='dark'] {
  --c-primary: #818cf8;
  --c-bg: #0f172a;
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
Use the toolbar toggle to switch between light and dark mode.

## Design principles

- **`rem` for spacing and type** — respects user's font-size settings
- **`px` for borders and shadows** — decorative properties don't scale
- **All values reference tokens** — no hardcoded values in base styles
- **Dark mode via `data-theme` attribute** — single source of truth, no duplication. System-aware via inline script in production
- **`:where()` in base styles** — zero-specificity, easy for downstream to override
- **No component variants** — this is the foundation, you build the house

## Projects using this

- [Vue Starter](../vue-starter)
- [React Starter](../react-starter)

## License

MIT
