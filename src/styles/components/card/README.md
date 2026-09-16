# Card

`.card` is a generic bordered, rounded surface component for `<figure>`,
`<article>`, or `<li>`. Direct `<img>`/`<video>` children fill the card
edge-to-edge; a `.card__caption` child (e.g. `<figcaption>`) styles the
caption row. Token-driven via `--card-*`.

## Tokens

| Token                      | Default                  | Description        |
| -------------------------- | ------------------------ | ------------------ |
| `--card-bg`                | `var(--c-bg)`            | Surface background |
| `--card-border`            | `var(--c-border)`        | Border colour      |
| `--card-radius`            | `var(--radius-lg)`       | Corner radius      |
| `--card-shadow`            | `var(--shadow-sm)`       | Box shadow         |
| `--card-caption-color`     | `var(--c-text-secondary)`| Caption text colour|
| `--card-caption-font-size` | `var(--fs-sm)`           | Caption font size  |
| `--card-caption-padding`   | `var(--sp-2) var(--sp-3)`| Caption padding    |