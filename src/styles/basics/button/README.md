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
| `--btn-bg`                | `var(--background-weak)`   | Background (idle)                        |
| `--btn-bg-hover`          | `var(--background-medium)`    | Background on hover                      |
| `--btn-bg-active`         | `var(--border-weak)`| Background while pressed                 |
| `--btn-border`            | `var(--border)`      | Border (idle)                            |
| `--btn-border-hover`      | `var(--text-weak)`  | Border on hover                          |
| `--btn-border-active`     | `var(--text-medium)` | Border while pressed                  |
| `--btn-color`             | `var(--text)`        | Label colour (idle)                      |
| `--btn-color-hover`       | `var(--text)`        | Label colour on hover                    |
| `--btn-color-active`      | `var(--text)`        | Label colour while pressed               |
| `--btn-disabled-opacity`  | `0.5`                  | Opacity for `:disabled`                  |
| `--btn-focus-ring`        | `var(--focus-ring)`  | `:focus-visible` outline colour          |
| `--btn-transition`        | `var(--transition-base)` | Transition shorthand                   |