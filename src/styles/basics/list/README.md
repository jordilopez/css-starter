# List

Styles the native `<ul>`, `<ol>`, and `<li>` elements: restores default
markers (disc bullets for unordered, decimal numbers for ordered) that are
stripped by the reset layer, plus shared left padding and vertical rhythm.

All values reference the shared token scales — there are no feature-specific
`--list-*` tokens.

## Tokens

None. This feature has no component-specific tokens; it uses shared tokens
directly:

| Token used | Purpose                              |
| ---------- | ------------------------------------ |
| `--sp-5`   | List left padding (indent)           |
| `--sp-4`   | List bottom margin                   |
| `--sp-1`   | Vertical spacing between list items  |

> `list-style` is set to the browser defaults (`disc` / `decimal`) here —
> not as a token — because `css-starter.reset-overrides` strips it; this
> layer outranks the reset, restoring markers for all consumers. Opt out
> per-list with `list-style: none` in your own (unlayered) CSS.