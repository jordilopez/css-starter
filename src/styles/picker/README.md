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
| `--picker-bg`                | `var(--c-bg)`        | Pill background (idle)          |
| `--picker-border`            | `var(--c-border)`    | Pill border (idle)              |
| `--picker-color`             | `var(--c-text-secondary)` | Pill label colour (idle)   |
| `--picker-border-hover`      | `var(--c-primary)`   | Pill border on hover            |
| `--picker-color-hover`       | `var(--c-text)`      | Pill label colour on hover      |
| `--picker-bg-checked`        | `var(--c-primary)`   | Pill background when checked    |
| `--picker-border-checked`    | `var(--c-primary)`   | Pill border when checked        |
| `--picker-color-checked`     | `var(--c-text-inverse)` | Pill label colour when checked |
| `--picker-disabled-opacity`  | `0.5`                | Opacity for disabled options    |
| `--picker-focus-ring`        | `var(--c-focus-ring)`| `:focus-visible` outline colour |
| `--picker-transition`        | `var(--transition-fast)` | Transition shorthand        |