# Implementation Plan: Split `src/styles/` into Basics and Components

## Overview

Reorganise the design system's feature folders into two explicit categories:
**basics** (styles for native HTML elements) and **components** (styles bound
to custom class selectors). Pure path churn — no CSS logic changes. All
features move wholesale (`styles`, `tokens`, `stories`, `README` travel
together per the feature-folder convention).

## Architecture Decisions

- **Classification by selector, not by feel:** a feature is *basic* iff its
  `.styles.css` targets only native elements via `:where(<element>)`;
  *component* iff it targets custom classes (`.card`, `.picker`).
- **Breakpoints → `tokens/breakpoints/`** (default): it is a tokens-only
  feature (`@custom-media`, no styles), so it belongs with the shared scales.
  *Open question — see below.*
- **Storybook titles grouped** `Basics/…` and `Components/…` (default: yes) so
  the sidebar mirrors the folder structure.
- **Consumers unaffected:** react-starter / vue-starter import the package
  root only (verified: no deep imports). The planned future `toast` component
  would land in `components/toast/`.
- **Docs deep-import examples fixed in the same pass:** current examples
  (`css-starter/src/styles/…`) don't match the `exports: "./*" →
  "./src/styles/*"` map; rewrite as `css-starter/basics/…`,
  `css-starter/components/…`, `css-starter/tokens/…`.
- **Mechanical moves use `git mv`** to preserve file history.

## Classification (source of truth for all tasks)

| Feature      | Category   | Move to                  |
| ------------ | ---------- | ------------------------ |
| body         | Basics     | `basics/body/`           |
| typography   | Basics     | `basics/typography/`     |
| link         | Basics     | `basics/link/`           |
| button       | Basics     | `basics/button/`         |
| code         | Basics     | `basics/code/`           |
| form         | Basics     | `basics/form/`           |
| table        | Basics     | `basics/table/`          |
| card         | Components | `components/card/`       |
| picker       | Components | `components/picker/`     |
| breakpoints  | Tokens     | `tokens/breakpoints/` ⚠ open question |

## Task List

### Phase 1: Basics

- [ ] Task 1: Move `body`, `typography`, `link` into `basics/` and rewire
- [ ] Task 2: Move `button`, `code`, `form`, `table` into `basics/` and rewire

### Checkpoint: Basics
- [ ] `npm run build-storybook` succeeds
- [ ] All affected docs pages render their README token table (CDP check)
- [ ] `git status` clean after commit

### Phase 2: Components

- [ ] Task 3: Move `card`, `picker` into `components/` and rewire

### Checkpoint: Components
- [ ] Build + docs render checks pass
- [ ] Review with human before proceeding

### Phase 3: Breakpoints (pending open question A)

- [ ] Task 4: Move `breakpoints/` → `tokens/breakpoints/` and rewire
  *(skip entirely if decision A = "leave as-is")*

### Phase 4: Docs, titles, verification

- [ ] Task 5: Update `AGENTS.md` + root `README.md` (trees, conventions, deep-import examples)
- [ ] Task 6: Group Storybook titles (`Basics/Button`, `Components/Card`, …)
- [ ] Task 7: Full verification sweep

### Checkpoint: Complete
- [ ] All acceptance criteria met
- [ ] Ready for review / commit-series handoff

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Deep-import path breakage for external consumers | Med | Verified none exist today; changelog note + version bump (minor/major decision) at release time |
| Missed relative import (story `?raw`, demo css, readmeDocs depth) | Med | Task-level grep: `rg "\.\./\.\./stories|styles/(body\|typography\|…)" src` must return zero stale refs |
| `index.css` import order accidentally changed | High | Only paths may change; compare layer/order before & after with `git diff` |
| Breakpoints decision flips late | Low | Isolated as Task 4; skipping it doesn't affect Tasks 1–3, 5–7 |
| Docs tree drifts from reality | Low | Task 5 runs after all moves; verify every path mentioned in docs exists |

## Open Questions

- **A. Breakpoints placement:** `tokens/breakpoints/` (default) vs leave at
  `src/styles/breakpoints/`?
- **B. Branch strategy:** new branch `basics-components-split` off current
  `picker-card-and-readmes` HEAD (default), vs continue on the same branch?
- **C. Release semantics:** this moves public deep-import paths — treat as
  breaking (major) or minor? Decision needed only at release time.
