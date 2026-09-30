# Hr

Styles the native `<hr>` element as a subtle horizontal rule: a 1px background
line (no border) with generous vertical spacing.

All values reference the shared token scales — there are no feature-specific
`--hr-*` tokens.

## Tokens

None. This feature has no component-specific tokens; it uses shared tokens
directly:

| Token used      | Purpose                       |
| --------------- | ----------------------------- |
| `--c-border`    | Rule background colour        |
| `--sp-6`        | Vertical margin above/below   |

> The 1px `height` and `border: none` are fixed values (not tokens): the rule
> is a single-pixel decorative line per the project's unit conventions.