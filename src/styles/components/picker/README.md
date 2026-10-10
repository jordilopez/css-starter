# Picker

`.picker` is a zero-JS segmented control built from native radios. The radios
stay in the DOM (keyboard + AT accessible) but are visually hidden; the visible
pill is the sibling `<span>`. Checked state rides on `:has()`. Token-driven via
`--picker-*`.

## Tokens

| Token                        | Default              | Description                     |
| ---------------------------- | -------------------- | ------------------------------- |
| `--picker-gap`               | `var(--sp-2)`        | Gap between options             |
| `--picker-option-padding-x`  | `var(--sp-3)`        | Pill horizontal padding         |
| `--picker-option-padding-y`  | `var(--sp-1)`        | Pill vertical padding           |
| `--picker-radius`            | `var(--radius-full)` | Pill corner radius              |
| `--picker-font-size`         | `var(--fs-sm)`       | Pill font size                  |
| `--picker-font-weight`       | `var(--fw-medium)`   | Pill font weight                |
| `--picker-bg`                | `var(--background)`        | Pill background (idle)          |
| `--picker-border`            | `var(--border)`    | Pill border (idle)              |
| `--picker-color`             | `var(--text-medium)` | Pill label colour (idle)   |
| `--picker-border-hover`      | `var(--brand-border-strong)`   | Pill border on hover            |
| `--picker-color-hover`       | `var(--text)`      | Pill label colour on hover      |
| `--picker-bg-checked`        | `var(--brand-background-strong)`   | Pill background when checked    |
| `--picker-border-checked`    | `var(--brand-border-strong)`   | Pill border when checked        |
| `--picker-color-checked`     | `var(--text-inverse)` | Pill label colour when checked |
| `--picker-disabled-opacity`  | `0.5`                | Opacity for disabled options    |
| `--picker-focus-ring`        | `var(--focus-ring)`| `:focus-visible` outline colour |
| `--picker-transition`        | `var(--transition-fast)` | Transition shorthand        |