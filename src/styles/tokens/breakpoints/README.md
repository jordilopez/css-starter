# Breakpoints

Viewport breakpoints defined once as CSS `@custom-media` queries and compiled
by PostCSS (`postcss-custom-media`). Use them in any stylesheet with
`@media (--mq-*) { … }`.

The scale is **mobile-first** — every query uses `min-width`, base styles
target the smallest viewport, and each breakpoint adds or overrides
progressively. Never use `max-width` viewport queries.

## Tokens

| Token     | Compiles to                | Target                                            |
| --------- | -------------------------- | ------------------------------------------------- |
| `--mq-sm` | `@media (min-width: 640px)`  | Small viewports (mobile landscape / small tablet) |
| `--mq-md` | `@media (min-width: 768px)`  | Medium viewports (tablet portrait)                |
| `--mq-lg` | `@media (min-width: 1024px)` | Large viewports (tablet landscape / small desktop)|
| `--mq-xl` | `@media (min-width: 1280px)` | Extra large (desktop)                             |
| `--mq-2xl`| `@media (min-width: 1536px)` | 2× extra large (wide desktop)                     |