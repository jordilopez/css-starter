# Todo — Split `src/styles/` into Basics and Components

Plan: `tasks/plan.md` · Branch: `basics-components-split` (pending open question B)

## Phase 1: Basics

- [x] Task 1: Move `body`, `typography`, `link` into `basics/` and rewire
- [ ] Task 2: Move `button`, `code`, `form`, `table` into `basics/` and rewire

## Checkpoint: Basics
- [ ] `npm run build-storybook` succeeds
- [ ] CDP: docs pages for the 7 basics render their token tables
- [ ] `git status` clean after commit

## Phase 2: Components

- [ ] Task 3: Move `card`, `picker` into `components/` and rewire

## Checkpoint: Components
- [ ] Build + CDP docs render checks pass
- [ ] Review with human before proceeding

## Phase 3: Breakpoints (open question A)

- [ ] Task 4: Move `breakpoints/` → `tokens/breakpoints/` and rewire (skip if A = leave)

## Phase 4: Docs, titles, verification

- [ ] Task 5: Update `AGENTS.md` + `README.md` (trees, conventions, deep-import examples)
- [ ] Task 6: Group Storybook titles (`Basics/…`, `Components/…`)
- [ ] Task 7: Full verification sweep

## Checkpoint: Complete
- [ ] All acceptance criteria met
- [ ] Ready for review
