# Button

Styles the native `<button>` element. Buttons are token-driven via `--btn-*`,
so consumers can build primary / secondary / ghost variants by overriding
these tokens in their own stylesheet without touching the base rules.

Base rules use `:where(button)`, so any unlayered consumer CSS overrides them
with zero specificity battles.

## Tokens

| Token                     | Default                | Description                              |
| ------------------------- | ---------------------- | ---------------------------------------- |
| `--btn-padding-x`         | `var(--sp-4)`          | Horizontal padding                       |
| `--btn-padding-y`         | `var(--sp-2)`          | Vertical padding                         |
| `--btn-radius`            | `var(--radius-md)`     | Corner radius                            |
| `--btn-font-weight`       | `var(--fw-medium)`     | Label weight                             |
| `--btn-line-height`       | `var(--lh-tight)`      | Label line height                        |
| `--btn-bg`                | `var(--c-bg-subtle)`   | Background (idle)                        |
| `--btn-bg-hover`          | `var(--c-bg-muted)`    | Background on hover                      |
| `--btn-bg-active`         | `var(--c-border-light)`| Background while pressed                 |
| `--btn-border`            | `var(--c-border)`      | Border (idle)                            |
| `--btn-border-hover`      | `var(--c-text-muted)`  | Border on hover                          |
| `--btn-border-active`     | `var(--c-text-secondary)` | Border while pressed                  |
| `--btn-color`             | `var(--c-text)`        | Label colour (idle)                      |
| `--btn-color-hover`       | `var(--c-text)`        | Label colour on hover                    |
| `--btn-color-active`      | `var(--c-text)`        | Label colour while pressed               |
| `--btn-disabled-opacity`  | `0.5`                  | Opacity for `:disabled`                  |
| `--btn-focus-ring`        | `var(--c-focus-ring)`  | `:focus-visible` outline colour          |
| `--btn-transition`        | `var(--transition-base)` | Transition shorthand                   |