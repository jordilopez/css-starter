# AI Agent Context — CSS Starter

## Project overview

A framework-agnostic CSS design system starter. Provides design tokens
(CSS custom properties), a modern CSS reset, and base element styles that
can be imported by any project (Vue, React, plain HTML, etc.) and
customised per-project via token overrides.

## Style architecture

```
src/styles/
├── index.css              ← Entry point (import order matters)
├── reset.css              ← Josh Comeau's Custom CSS Reset (verbatim)
├── reset-overrides.css    ← Project-specific reset additions
├── utility.css            ← Utility classes (.sr-only)
├── tokens/
│   ├── color.css          ← Colours + dark mode (prefers-color-scheme)
│   ├── type.css           ← Font families, sizes, weights, line-heights
│   ├── spacing.css        ← Spacing scale (0.25rem → 4rem)
│   ├── border.css         ← Border radii
│   ├── shadow.css         ← Box shadows (light + dark variants)
│   ├── easing.css         ← Transition durations
│   └── layout.css         ← Max-width constraints
└── base/
    ├── body.css           ← Body defaults
    ├── typography.css     ← Headings, paragraphs, quotes, lists, hr
    ├── link.css           ← Anchor styles
    ├── button.css         ← Button reset/base
    ├── code.css           ← Code, pre, kbd
    ├── form.css           ← Labels, inputs, textareas, selects
    └── table.css          ← Table styling
```

## Import order (must be maintained)

```
tokens/*  →  reset.css  →  reset-overrides.css  →  base/*  →  utility.css
```

## CSS conventions

### No nesting

All CSS files use **flat, top-level selectors** — no native CSS nesting.
This is intentional: all base styles target native elements directly
(`body`, `h1`, `p`, `a`, etc.), so there's nothing to nest. Downstream
projects may use nesting in their own component styles.

### Units

| Unit | Where used | Why |
|------|-----------|-----|
| `rem` | Spacing tokens (`--sp-*`), font-size tokens (`--fs-*`), layout tokens | Respects user's browser font-size setting; scales proportionally |
| `em` | `base/code.css` only (font-size, padding on code/kbd) | Scales relative to parent font, keeps code proportionally correct in any context |
| `px` | Border radii (`--radius-*`), shadow offsets, `outline`, single-pixel borders, `text-underline-offset` | Decorative/visual properties that shouldn't scale |
| `vh` | `body { min-height: 100vh }` (in reset-overrides) | Fills viewport vertically |
| `ex` | `textarea { min-height: 6ex }` | Scales with font's x-height |

### Design tokens

All design decisions go through CSS custom properties defined in
`tokens/*`. Every value used in `base/*` references a token — never
hardcoded values.

Naming patterns:
- `--c-*` — colours (e.g. `--c-primary`, `--c-text`, `--c-bg`)
- `--ff-*` — font families (`--ff-sans`, `--ff-mono`)
- `--fs-*` — font sizes (`--fs-base`, `--fs-xl`)
- `--fw-*` — font weights (`--fw-normal`, `--fw-bold`)
- `--lh-*` — line heights (`--lh-tight`, `--lh-base`)
- `--sp-*` — spacing (`--sp-1` through `--sp-10`)
- `--radius-*` — border radii
- `--shadow-*` — box shadows
- `--transition-*` — easing durations
- `--max-width-*` — layout constraints

### Dark mode

Theme is controlled **exclusively** via `data-theme="dark"` on the `<html>`
element. No `@media (prefers-color-scheme)` is used.

- **`:root`** holds light mode values (default)
- **`:root[data-theme='dark']`** holds dark mode values (single source of truth)
- **No duplication** — each value lives in exactly one place

In **Storybook**, the Theme toolbar toggle sets `data-theme` directly.

In **production**, sync with system preference via this inline script
(place before your CSS `<link>` or `@import`):

```html
<script>
  if (matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.setAttribute('data-theme', 'dark')
</script>
```

## Storybook

Storybook is used to preview all native element styles in isolation.

```
npm run storybook          # Dev server on port 6006
npm run build-storybook    # Static build to storybook-static/
```

### Stories structure

```
src/stories/
├── Typography.stories.ts   ← Headings, paragraphs, lists, quotes, hr
├── Link.stories.ts         ← Anchor elements
├── Button.stories.ts       ← Button element (default + disabled)
├── Form.stories.ts         ← Inputs, textarea, select
├── Table.stories.ts        ← Table with thead/tbody
├── Code.stories.ts         ← Inline code, pre blocks, kbd
├── AllStyles.stories.ts    ← Kitchen-sink overview page
└── Tokens.mdx              ← Design token reference tables
```

All stories are pure HTML — no framework, no JSX. They render native
elements and apply the design system styles through the global import
of `src/styles/index.css` in `.storybook/preview.ts`.

## Customising in a downstream project

```css
/* In the project's global entry point: */
@import 'css-starter/src/styles/index.css';

/* Override any token: */
:root {
  --c-primary: #your-color;
  --ff-sans: 'Your Font', sans-serif;
  --sp-4: 1.25rem;
}
```

## Naming

| Token prefix | Category       | Examples                     |
| ------------ | -------------- | ---------------------------- |
| `--c-`       | Colour         | `--c-primary`, `--c-bg`      |
| `--ff-`      | Font family    | `--ff-sans`, `--ff-mono`     |
| `--fs-`      | Font size      | `--fs-base`, `--fs-xl`       |
| `--fw-`      | Font weight    | `--fw-normal`, `--fw-bold`   |
| `--lh-`      | Line height    | `--lh-tight`, `--lh-base`    |
| `--sp-`      | Spacing        | `--sp-2`, `--sp-4`           |
| `--radius-`  | Border radius  | `--radius-sm`, `--radius-lg` |
| `--shadow-`  | Box shadow     | `--shadow-sm`, `--shadow-lg` |
| `--transition-` | Transition | `--transition-fast`          |
| `--max-width-`  | Layout     | `--max-width-wide`           |
| `--btn-`       | Button     | `--btn-padding-x`, `--btn-disabled-opacity` |

### Responsive — mobile-first

All responsive styles follow a **mobile-first** approach:

- **Base styles are for mobile** (smallest viewport). No `@media` wrapper needed.
- **Progressive enhancement** via `@media (--mq-*)` with `min-width` only.
- **Never use `max-width`** in viewport media queries.

```css
/* ✅ Mobile-first — correct */
:where(.sidebar) { display: none; }                        /* mobile: hidden */
@media (--mq-lg) { :where(.sidebar) { display: block; } }  /* ≥1024px: visible */

/* ❌ Desktop-first — avoid */
@media (max-width: 1023px) { :where(.sidebar) { display: none; } }
```

Breakpoints are defined centrally in `tokens/breakpoints.css` via
`@custom-media` and compiled by PostCSS. See the [Breakpoints story]
for a visual demo.

### Base styles use `:where()` for low specificity

All `base/*` rules use `:where()` wrappers (e.g. `:where(button)`, `:where(a)`)
so specificity is always `(0,0,0)`. This makes it trivial for downstream
component styles to override without fighting the cascade.
