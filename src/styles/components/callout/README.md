# Callout

`.callout` is a generic status / advisory block: a component-owned icon, an
optional `.callout__title`, and a `.callout__body`, tinted by a tone. Apply
with `.callout` plus a tone modifier — `.callout--info` (default),
`.callout--success`, `.callout--warning`, `.callout--error`.

Markup contract:

```html
<div class="callout callout--warning" role="status">
  <span class="callout__icon" aria-hidden="true">…icon…</span>
  <div class="callout__content">
    <p class="callout__title">Safari only.</p>
    <p class="callout__body">Your supporting message.</p>
  </div>
</div>
```

The icon is **styled by the design system but supplied by the consumer**:
`.callout__icon` sizes the glyph to `--callout-icon-size` and colours it with
`--callout-accent`, but css-starter ships no icon library. Framework wrappers
react/vue/angular render their own `Icon` per tone (mirroring `Toast`). The
tone modifier overrides `--callout-accent` / `--callout-border`, so the
background tint (`color-mix` of the accent with `--c-bg`) and icon colour
follow automatically — and adapt to dark mode via the underlying `--c-*` tokens.

## Tokens

| Token                        | Default                                   | Description                      |
| ---------------------------- | ----------------------------------------- | -------------------------------- |
| `--callout-accent`           | `var(--c-info)` (overridden per tone)     | Icon + tint source colour        |
| `--callout-border`           | `var(--c-info)` (overridden per tone)     | Border colour                    |
| `--callout-color`            | `var(--c-text)`                           | Base text colour                 |
| `--callout-bg`               | `color-mix(in srgb, var(--callout-accent) 8%, var(--c-bg))` | Tinted background |
| `--callout-gap`              | `var(--sp-3)`                             | Gap between icon and content     |
| `--callout-padding-block`    | `var(--sp-3)`                             | Vertical padding                 |
| `--callout-padding-inline`   | `var(--sp-4)`                             | Horizontal padding               |
| `--callout-radius`           | `var(--radius-lg)`                        | Corner radius                    |
| `--callout-border-width`     | `1px`                                     | Border width                     |
| `--callout-icon-size`        | `1.25em`                                  | Icon font-size (glyph is `1em`)  |
| `--callout-title-font-weight`| `var(--fw-bold)`                          | Title font weight                |
| `--callout-title-color`      | `var(--c-text)`                           | Title colour                     |
