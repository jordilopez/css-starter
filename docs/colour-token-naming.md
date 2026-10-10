# Colour token naming — Asana-style 4-axis convention

**Status:** Implemented on `refactor/colour-token-naming` (css-starter).
Consumers not yet migrated.

## The convention

```
<sentiment>-<usage>-<prominence>-<interaction>
```

| Axis | Values |
| --- | --- |
| sentiment | `default`, `success`, `warning`, `danger`, `info`*, `brand`*, `selected`, `upsell`, `beta` |
| usage | `background`, `text`, `icon`, `border` |
| prominence | `default`, `weak`, `medium`, `strong`, `inverse`* |
| interaction | `default`, `hover`, `active`, `disabled` |

\* extension beyond the Asana slide.

**`default` is omitted from every segment.** Only non-default parts appear in
the name, so:

| Full form | Token |
| --- | --- |
| default-text-default-default | `--text` |
| default-text-weak-default | `--text-weak` |
| default-text-default-hover | `--text-hover` |
| brand-text-strong-default | `--brand-text-strong` |
| brand-text-strong-hover | `--brand-text-strong-hover` |

Usage is always present; the sentiment prefix appears only when it is not
`default`.

## Extensions

| Gap in the slide | Decision |
| --- | --- |
| No brand/primary sentiment | `brand` sentiment. |
| No info sentiment | `info` sentiment. |
| No `inverse` prominence | `--text-inverse` uses `inverse` prominence. |
| `focus-ring` is not a usage | `--focus-ring` is a standalone interaction-level token. |

## Token set (24 tokens)

| Token | Replaces | Usage in components |
| --- | --- | --- |
| `--text` | `--c-text` | body text, headings, legend |
| `--text-medium` | `--c-text-secondary` | blockquote, card caption, typography secondary |
| `--text-weak` | `--c-text-muted` | disabled links, disabled controls, `<small>` |
| `--text-inverse` | `--c-text-inverse` | checkmark, checked picker label |
| `--background` | `--c-bg` | page, inputs, cards, pills |
| `--background-weak` | `--c-bg-subtle` | code, table header, button idle |
| `--background-medium` | `--c-bg-muted` | kbd, button hover |
| `--border` | `--c-border` | inputs, cards, code, fieldset, hr |
| `--border-weak` | `--c-border-light` | table rules, button active |
| `--brand-text-strong` | `--c-primary` (text) | link colour |
| `--brand-text-strong-hover` | `--c-primary-hover` | link hover |
| `--brand-text-strong-active` | `--c-primary-active` | link active |
| `--brand-border-strong` | `--c-primary` (border) | blockquote, focused inputs, picker hover/checked |
| `--brand-background-strong` | `--c-primary` (background) | checked checkbox/radio, picker checked |
| `--brand-background-weak` | `--c-primary-subtle` | (unused, retained) |
| `--info-icon`, `--info-border` | `--c-info` | callout info |
| `--success-icon`, `--success-border` | `--c-success` | callout success |
| `--warning-icon`, `--warning-border` | `--c-warning` | callout warning |
| `--danger-icon`, `--danger-border` | `--c-error` | callout danger |
| `--focus-ring` | `--c-focus-ring` | focus outlines |

## Known compromises

- **Cross-usage reuse.** Some sites use a token for a different CSS property
  than its usage name. Disabled checkbox/radio fills use `--border` and the
  disabled mark uses `--text-weak`. The token name describes the colour's
  role, not every property it touches.
- **Brand overrides touch several tokens.** A brand is six tokens instead of
  one. Consumers that override `--c-primary` must set the brand tokens they
  use, or add a shared base layer later.
- **Duplicated values.** `*-icon` and `*-border` share a value per status, and
  brand usages share one hex value. This keeps each usage independently
  overridable.

## Migration for consumers

| Old | New |
| --- | --- |
| `--c-primary` | `--brand-text-strong`, `--brand-border-strong`, `--brand-background-strong` |
| `--c-text` | `--text` |
| `--c-bg` | `--background` |
| `--c-error` | `--danger-icon` / `--danger-border` |
| other `--c-*` | see table above |
