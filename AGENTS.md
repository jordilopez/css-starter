# AI Agent Context — CSS Starter

## Project overview

A framework-agnostic CSS design system starter. Provides design tokens
(CSS custom properties), a modern CSS reset, and base element styles that
can be imported by any project (Vue, React, plain HTML, etc.) and
customised per-project via token overrides.

## Style architecture

The tree is organised as **feature folders** (see
[Feature folders — naming convention](#feature-folders--naming-convention)
below) plus a few shared/global files:

```
src/
├── styles/
│   ├── index.css                          ← Entry point (import order + @layer statement)
│   ├── reset.css                          ← Josh Comeau's Custom CSS Reset (verbatim)
│   ├── reset-overrides.css                ← Project-specific reset additions
│   ├── utility.css                        ← Utility classes (.sr-only)
│   ├── tokens/                            ← Shared, cross-cutting scale tokens only
│   │   ├── color.css                      ← Colours + dark mode (prefers-color-scheme)
│   │   ├── type.css                       ← Font families, sizes, weights, line-heights
│   │   ├── spacing.css                    ← Spacing scale (0.25rem → 4rem)
│   │   ├── border.css                     ← Border radii
│   │   ├── shadow.css                     ← Box shadows (light + dark variants)
│   │   ├── easing.css                     ← Transition durations
│   │   └── layout.css                     ← Max-width constraints
│   ├── body/
│   │   └── body.styles.css                ← Body defaults
│   ├── typography/
│   │   ├── typography.styles.css          ← Headings, paragraphs, quotes, lists, hr
│   │   └── typography.stories.ts          ← Storybook story (colocated)
│   ├── link/
│   │   ├── link.styles.css                ← Anchor styles
│   │   └── link.stories.ts
│   ├── button/
│   │   ├── button.tokens.css              ← Button-specific tokens (--btn-*)
│   │   ├── button.styles.css              ← Button reset/base
│   │   └── button.stories.ts
│   ├── code/
│   │   ├── code.styles.css                ← Code, pre, kbd
│   │   └── code.stories.ts
│   ├── form/
│   │   ├── form.styles.css                ← Labels, inputs, textareas, selects
│   │   └── form.stories.ts
│   ├── table/
│   │   ├── table.styles.css               ← Table styling
│   │   └── table.stories.ts
│   └── breakpoints/
│       ├── breakpoints.tokens.css         ← @custom-media --mq-* definitions
│       ├── breakpoints-demo.css           ← Demo-only stylesheet for the story
│       └── breakpoints.stories.ts
└── stories/
    ├── AllStyles.stories.ts               ← Kitchen-sink overview (global, not feature-owned)
    └── Tokens.stories.ts                  ← Design token reference tables (global)
```

## Feature folders — naming convention

Every feature (element, concern, or group of related styles) lives in its
own dedicated folder under `src/styles/`. **Use a dedicated folder whenever
possible** — only truly global or cross-cutting files stay at the root
(`index.css`, `reset.css`, `reset-overrides.css`, `utility.css`) or in
`tokens/` (shared scales used by many features).

Inside a feature folder, files are named `<feature>.<kind>.css`:

| File | Required? | Purpose |
|------|-----------|---------|
| `<feature>/<feature>.tokens.css` | Optional | Feature-specific design tokens (e.g. `button.tokens.css` defines `--btn-*`). Only when the feature owns tokens that aren't shared scales. |
| `<feature>/<feature>.styles.css` | For styling features | The feature's element/component styles. Features that are tokens-only (e.g. `breakpoints/`) omit this. |
| `<feature>/<feature>.stories.ts` | When previewable | Storybook story colocated with the feature. Discovered automatically by the recursive glob in `.storybook/main.ts`. |

Rules:

- **A folder does not need all three file kinds** — pick the subset that
  applies (`button/` has tokens + styles + story; `body/` has styles only;
  `breakpoints/` has tokens + demo + story but no styles).
- **Shared scale tokens stay in `tokens/`** — colour, type, spacing, border,
  shadow, easing, and layout tokens are consumed by many features, so they
  live once in `src/styles/tokens/`. Only tokens owned by a single feature
  go in that feature's folder.
- **Feature styles may reference shared tokens directly** — CSS custom
  properties are global, so `form.styles.css` using `--c-*`/`--sp-*` is
  expected; no duplication or re-export needed.
- **Global overview stories stay in `src/stories/`** — cross-feature pages
  (kitchen-sink, token reference) are not owned by any single feature.
- **Feature-owned demo assets colocate too** — e.g.
  `breakpoints/breakpoints-demo.css` sits next to the story that imports it.

## Import order (must be maintained)

```
tokens/*  →  <feature>/<feature>.tokens.css  →  reset.css  →  reset-overrides.css  →  <feature>/<feature>.styles.css  →  utility.css
```

Note: a feature's tokens and styles live in the same folder but are imported
in two passes (all tokens before reset, all styles in the base pass). Folder
location does not change cascade-layer assignment — `index.css` decides which
layer each import lands in.

## Cascade layers (namespaced)

All design-system CSS is placed into namespaced cascade layers via
`@import ... layer(...)` in `src/styles/index.css`. The layer order is
fixed once by a single `@layer` statement at the top of the entry point:

```
@layer css-starter.reset, css-starter.reset-overrides, css-starter.base, css-starter.tokens, css-starter.utilities;
```

Layer precedence for **normal** declarations (lowest → highest):

```
css-starter.reset  <  css-starter.reset-overrides  <  css-starter.base  <  css-starter.tokens  <  css-starter.utilities
```

Key implications:

- **Unlayered consumer CSS beats every `css-starter.*` layer** for normal
  declarations, regardless of specificity. Any rule a consumer writes
  outside a layer wins — this is intentional and makes the design system
  trivially overrideable without specificity wars.
- **Consumer `:root` token overrides remain valid**: `:root { --c-primary: … }`
  in an unlayered consumer stylesheet overrides `--c-*` values declared in
  `css-starter.tokens`.
- **`reset-overrides.css` stays in its own layer** (`css-starter.reset-overrides`),
  separate from `css-starter.reset`, so it can override the reset without
  specificity tricks.
- **The `:where()` convention is still required.** Layers rank above
  specificity, but within a layer, specificity still applies — keep using
  `:where()` wrappers in feature styles (e.g. `:where(button)`) so rule order
  (not specificity) decides.
- **Utilities are intentionally overrideable**: `css-starter.utilities` is
  the highest-priority design-system layer, but any unlayered consumer CSS
  still beats it.
- The source **import order is independent of layer order** and must still
  be maintained (see section above). The `@layer` statement only appears
  once, at the top of `index.css` — later `@layer` statements would only
  append to the order.

### No `!important` — policy

**The design system must contain zero `!important` declarations.**

Important declarations **reverse** cascade-layer precedence (a lower layer
with `!important` beats a higher layer's normal declaration), which would
break the layer architecture above. Conflicts must be resolved via layer
placement, `:where()` selector design, or tokens — never `!important` and
never specificity escalation.

Audit locally before committing changes under `src/styles/`:

```bash
rg -n '!important' src/styles/   # must output no matches
npm run lint:css                 # scripted guardrail (CI-able, exits non-zero)
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
| `em` | `code/code.styles.css` only (font-size, padding on code/kbd) | Scales relative to parent font, keeps code proportionally correct in any context |
| `px` | Border radii (`--radius-*`), shadow offsets, `outline`, single-pixel borders, `text-underline-offset` | Decorative/visual properties that shouldn't scale |
| `vh` | `body { min-height: 100vh }` (in reset-overrides) | Fills viewport vertically |
| `ex` | `textarea { min-height: 6ex }` | Scales with font's x-height |

### Design tokens

All design decisions go through CSS custom properties — shared scales in
`tokens/*`, feature-owned ones in `<feature>/<feature>.tokens.css`. Every
value used in feature styles references a token — never hardcoded values.

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

Dark mode is driven **entirely** by the user's system preference via
`@media (prefers-color-scheme: dark)`. No `data-theme` attribute is needed.

- **`:root`** holds light mode values (default)
- **`@media (prefers-color-scheme: dark) { :root { ... } }`** holds dark mode values (single source of truth)
- **No duplication** — each value lives in exactly one place

Storybook follows the system preference automatically. No toggle needed.

Production sites need no inline script — the browser handles it natively.

## Storybook

Storybook is used to preview all native element styles in isolation.

```
npm run storybook          # Dev server on port 6006
npm run build-storybook    # Static build to storybook-static/
```

### Stories structure

Feature stories are **colocated with their feature folder**
(`src/styles/button/button.stories.ts`, `src/styles/form/form.stories.ts`,
etc. — see the tree in [Style architecture](#style-architecture)). The
glob in `.storybook/main.ts` (`../src/**/*.stories.*`) is recursive, so
no configuration change is needed when adding a colocated story.

Only cross-feature stories live in the top-level `src/stories/`:

```
src/stories/
├── AllStyles.stories.ts    ← Kitchen-sink overview page
└── Tokens.stories.ts       ← Design token reference tables
```

All stories are pure HTML — no framework, no JSX. They render native
elements and apply the design system styles through the global import
of `src/styles/index.css` in `.storybook/preview.ts`.

## Customising in a downstream project

```css
/* In the project's global entry point: */
@import 'css-starter';

/* Override any token: */
:root {
  --c-primary: #your-color;
  --ff-sans: 'Your Font', sans-serif;
  --sp-4: 1.25rem;
}
```

Cherry-picking individual files is also possible via deep imports
(path-sensitive — follows the folder structure above):

```css
@import 'css-starter/src/styles/tokens/color.css';
@import 'css-starter/src/styles/button/button.styles.css';
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

Breakpoints are defined in `breakpoints/breakpoints.tokens.css` via
`@custom-media` and compiled by PostCSS. See the Breakpoints story
(`src/styles/breakpoints/breakpoints.stories.ts`) for a visual demo.

### Feature styles use `:where()` for low specificity

All feature style rules use `:where()` wrappers (e.g. `:where(button)`,
`:where(a)`) so specificity is always `(0,0,0)`. This makes it trivial for
downstream component styles to override without fighting the cascade.
