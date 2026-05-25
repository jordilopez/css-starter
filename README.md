# CSS Starter

A framework-agnostic CSS design system starter. Drop-in styles for any
project — Vue, React, Astro, plain HTML, or anything else.

## What's inside

```
src/styles/
├── index.css              ← Import this and you're set
├── reset.css              ← Josh Comeau's Custom CSS Reset
├── reset-overrides.css    ← Opinionated additions on top of reset
├── utility.css            ← .sr-only helper
├── tokens/                ← Design tokens as CSS custom properties
│   ├── color.css          ← Colours + dark mode support
│   ├── type.css           ← Fonts, sizes, weights, line-heights
│   ├── spacing.css        ← Spacing scale
│   ├── border.css         ← Border radii
│   ├── shadow.css         ← Box shadows (light & dark)
│   ├── easing.css         ← Transition durations
│   └── layout.css         ← Max-width constraints
└── base/                  ← Sensible defaults for native elements
    ├── body.css
    ├── typography.css
    ├── link.css
    ├── button.css
    ├── code.css
    ├── form.css
    └── table.css
```

## Usage

```bash
npm install
```

Then import the styles in your project's entry point:

```css
@import 'css-starter/src/styles/index.css';
```

Or, if you only need certain parts:

```css
/* Just tokens + reset */
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
  --max-width-wide: 1280px;
}
```

Colour tokens automatically adapt to the user's light/dark preference.
You can override the dark values too:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --c-primary: #818cf8;
    --c-bg: #0f172a;
  }
}
```

## Storybook

Preview all styled native elements in a component explorer:

```bash
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006) with stories for
typography, links, buttons, forms, tables, code, and a kitchen-sink page.

## Design principles

- **`rem` for spacing and type** — respects user's font-size settings
- **`px` for borders and shadows** — decorative properties don't scale
- **All values reference tokens** — no hardcoded values in base styles
- **Dark mode via `prefers-color-scheme`** — no classes, no JavaScript
- **Flat selectors** — native elements styled directly, no nesting needed

## Projects using this

- [Vue Starter](../vue-starter)
- [React Starter](../react-starter)

## License

MIT
