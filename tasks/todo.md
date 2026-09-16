# Todo — Split `src/styles/` into Basics and Components

Plan: `tasks/plan.md` · Branch: `basics-components-split` (pending open question B)

## Phase 1: Basics

- [x] Task 1: Move `body`, `typography`, `link` into `basics/` and rewire
- [x] Task 2: Move `button`, `code`, `form`, `table` into `basics/` and rewire

## Checkpoint: Basics
- [x] `npm run build-storybook` succeeds
- [x] CDP: docs pages for the 7 basics render their token tables
- [x] `git status` clean after commit

## Phase 2: Components

- [x] Task 3: Move `card`, `picker` into `components/` and rewire

## Checkpoint: Components
- [x] Build + CDP docs render checks pass
- [x] Review with human before proceeding

## Phase 3: Breakpoints (open question A)

- [x] Task 4: Move `breakpoints/` → `tokens/breakpoints/` and rewire (skip if A = leave)

## Phase 4: Docs, titles, verification

- [x] Task 5: Update `AGENTS.md` + `README.md` (trees, conventions, deep-import examples)
- [x] Task 6: Group Storybook titles (`Basics/…`, `Components/…`)
- [x] Task 7: Full verification sweep

## Checkpoint: Complete
- [x] All acceptance criteria met
- [x] Ready for review
