# Colour token naming

Every colour token in `src/styles/tokens/color.css` is named by composing four
orthogonal axes. The name reads as a sentence, so a token says *which* semantic
role it plays, not just *what* it is.

```
<sentiment>-<usage>-<prominence>[-<interaction>]
```

| Axis | Presence | Values |
| --- | --- | --- |
| sentiment | optional | `success`, `warning`, `danger`, `info`\*, `brand`\*, `selected`, `upsell`, `beta` |
| usage | required | `background`, `text`, `icon`, `border` |
| prominence | optional | `weak`, `medium`, `strong`, `inverse`\* |
| interaction | optional | `hover`, `active`, `disabled` |

\* Extension beyond the Asana slide. The slide's sentiment set is
`default`, `success`, `warning`, `danger`, `upsell`, `selected`, `beta`; its
prominence set is `default`, `weak`, `medium`, `strong`.

**`default` is omitted from every segment.** Only non-default parts appear in
the name:

| Full form | Token |
| --- | --- |
| default-text-default-default | `--text` |
| default-text-weak-default | `--text-weak` |
| default-text-default-hover | `--text-hover` |
| success-text-default-default | `--success-text` |
| brand-text-strong-hover | `--brand-text-strong-hover` |

A name therefore ends at its last non-default segment. Usage is always
present; sentiment, prominence and interaction only appear when they are not
`default`.

## Exceptions

`--focus-ring` is deliberately outside the grid: `focus` is not a usage. The
exception is declared in `scripts/check-token-names.mjs`.

## Adding a new token

1. Decide the axes. Start from the role, not the CSS property:
   *sentiment* (is it neutral, brand, or a status?), *usage* (background, text,
   icon, border?), *prominence* (default, weak, medium, strong?), *interaction*
   (default, hover, active, disabled?).
2. Compose the name and drop every `default` segment. `brand` + `background` +
   `strong` + `default` → `--brand-background-strong`.
3. Declare it in **both** `:root` blocks in `color.css` (light and dark). The
   guardrail fails if they diverge.
4. Add it to the colour table in `src/stories/README.md` with its light value —
   `npm run check:tokens` compares the two.
5. Run `npm run check`.

## Guardrails

| Command | Enforces |
| --- | --- |
| `npm run lint:css` | no `!important` under `src/styles/` |
| `npm run check:tokens` | `stories/README.md` colour table matches `color.css` |
| `npm run check:token-names` | every token follows this convention, and light/dark agree |
| `npm run check` | all of the above (run in CI on every PR) |

## Role of the `usage` axis

`usage` describes the colour's **semantic role**, not necessarily the CSS
property it is applied to. Two deliberate compromises:

- Disabled checkbox/radio fills reference `--border`, even though they set
  `background-color`, because the fill is literally the border colour.
- The disabled control mark references `--text-weak`.

When a single colour serves several roles, it becomes several tokens that
happen to share a value (`--brand-text-strong`, `--brand-border-strong`,
`--brand-background-strong`) so each role can be overridden independently.

## Consumer overrides

Because brand is usage-scoped, overriding a brand means setting the brand
tokens a consumer actually uses:

```css
:root {
  --brand-text-strong: #6366f1;
  --brand-text-strong-hover: #4f52d6;
  --brand-text-strong-active: #4346b8;
  --brand-border-strong: #6366f1;
  --brand-background-strong: #6366f1;
  --brand-background-weak: rgba(99, 102, 241, 0.08);
}
```

If that becomes onerous, a shared base layer referenced by the usage tokens
would restore a single override point; it is intentionally not added yet.
