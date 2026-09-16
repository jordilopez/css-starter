# Tokens

All CSS custom properties defined in `src/styles/tokens/`. Every value in the
base styles references a token — no hardcoded values.

Toggle dark/light mode in the toolbar to see tokens adapt.

## Color (`--c-*`)

All colour tokens adapt in dark mode via `@media (prefers-color-scheme: dark)`.
No `data-theme` attribute needed — the browser honours the user's OS setting
automatically.

| Token                  | Purpose                      | Light default          |
| ---------------------- | ---------------------------- | ---------------------- |
| `--c-primary`          | Brand colour                 | `#42b883`              |
| `--c-primary-hover`    | Hover state                  | `#38a070`              |
| `--c-primary-active`   | Active state                 | `#2e8c5e`              |
| `--c-primary-subtle`   | Subtle brand bg              | `rgba(66,184,131,0.08)`|
| `--c-text`             | Body text                    | `#1a1a1a`              |
| `--c-text-secondary`   | Muted text                   | `#555`                 |
| `--c-text-muted`       | Even quieter                 | `#888`                 |
| `--c-text-inverse`     | On-dark text                 | `#fff`                 |
| `--c-bg`               | Page background              | `#fff`                 |
| `--c-bg-subtle`        | Subtle bg                    | `#f8f9fa`              |
| `--c-bg-muted`         | Muted bg                     | `#e9ecef`              |
| `--c-border`           | Borders                      | `#dee2e6`              |
| `--c-border-light`     | Lighter borders              | `#e9ecef`              |
| `--c-focus-ring`       | Focus indicator              | `rgba(66,184,131,0.35)`|
| `--c-info`             | Informational status         | `#2563eb`              |
| `--c-success`          | Success / positive status    | `#15803d`              |
| `--c-warning`          | Warning / cautionary status  | `#b45309`              |
| `--c-error`            | Error / danger status        | `#dc2626`              |

## Typography (`--ff-*`, `--fs-*`, `--fw-*`, `--lh-*`)

| Token           | Value                    |
| --------------- | ------------------------ |
| `--ff-sans`     | System sans-serif stack  |
| `--ff-mono`     | System monospace stack   |
| `--fs-xs`       | 0.75rem (12px)           |
| `--fs-sm`       | 0.85rem                  |
| `--fs-base`     | 1rem (16px)              |
| `--fs-lg`       | 1.15rem                  |
| `--fs-xl`       | 1.5rem (24px)            |
| `--fs-2xl`      | 2rem (32px)              |
| `--lh-tight`    | 1.25                     |
| `--lh-base`     | 1.6                      |
| `--lh-loose`    | 1.8                      |
| `--fw-normal`   | 400                      |
| `--fw-medium`   | 500                      |
| `--fw-semibold` | 600                      |
| `--fw-bold`     | 700                      |

## Spacing (`--sp-*`)

| Token     | Value     | Pixels |
| --------- | --------- | ------ |
| `--sp-0`  | 0         | 0      |
| `--sp-1`  | 0.25rem   | 4px    |
| `--sp-2`  | 0.5rem    | 8px    |
| `--sp-3`  | 0.75rem   | 12px   |
| `--sp-4`  | 1rem      | 16px   |
| `--sp-5`  | 1.5rem    | 24px   |
| `--sp-6`  | 2rem      | 32px   |
| `--sp-8`  | 3rem      | 48px   |
| `--sp-10` | 4rem      | 64px   |

## Border radius (`--radius-*`)

| Token           | Value   |
| --------------- | ------- |
| `--radius-sm`   | 4px     |
| `--radius-md`   | 6px     |
| `--radius-lg`   | 8px     |
| `--radius-full` | 9999px  |

## Shadow (`--shadow-*`)

| Token         | Value                        |
| ------------- | ---------------------------- |
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.06)   |
| `--shadow-md` | 0 2px 8px rgba(0,0,0,0.08)   |
| `--shadow-lg` | 0 4px 24px rgba(0,0,0,0.1)   |

Shadows darken in dark mode.

## Easing (`--transition-*`)

| Token               | Value       |
| ------------------- | ----------- |
| `--transition-fast` | 0.15s ease  |
| `--transition-base` | 0.2s ease   |
| `--transition-slow` | 0.3s ease   |

## Opacity (`--opacity-*`)

| Token                | Value |
| -------------------- | ----- |
| `--opacity-disabled` | 0.5   |

## Layout (`--max-width-*`)

| Token                | Value   |
| -------------------- | ------- |
| `--max-width-narrow` | 720px   |
| `--max-width-wide`   | 1200px  |

## Breakpoints (`--mq-*`)

Custom media queries defined in `breakpoints/breakpoints.tokens.css` and
compiled via PostCSS. Use them in any CSS file with
`@media (--mq-*) { ... }`.

| Query      | Compiles to                | Target                              |
| ---------- | -------------------------- | ----------------------------------- |
| `--mq-sm`  | `@media (width >= 640px)`  | Small viewports (>= 640px)          |
| `--mq-md`  | `@media (width >= 768px)`  | Medium viewports (>= 768px)         |
| `--mq-lg`  | `@media (width >= 1024px)` | Large viewports (>= 1024px)         |
| `--mq-xl`  | `@media (width >= 1280px)` | Extra large (>= 1280px)             |
| `--mq-2xl` | `@media (width >= 1536px)` | 2X extra large (>= 1536px)          |

Resize the browser to see when each breakpoint activates.
