# Todo — Release & Publish

Plan: `tasks/plan.md`

## Phase 1: Decisions (human gate)

- [ ] Task 1: Release semantics — major vs minor (open question A)

## Checkpoint: Decisions
- [ ] Version number chosen; PR strategy confirmed

## Phase 2: Pull requests

- [ ] Task 2: Push `picker-card-and-readmes`, create PR → `main`
- [ ] Task 3: Push `basics-components-split`, create PR → `picker-card-and-readmes`

## Checkpoint: PRs open
- [ ] Both PR URLs recorded; builds green

## Phase 3: Merge & release

- [ ] Task 4: Merge PRs (human approval in GitHub)
- [ ] Task 5: `npm version <per Task 1>`, `git push origin --tags` (incl. stranded `v0.2.2` if superseded)

## Checkpoint: Released
- [ ] New tag visible on remote

## Phase 4: Consumers

- [ ] Task 6: Update `react-starter` + `vue-starter` to new tag; build both; verify dark mode + token overrides
- [x] Task 7a: token-doc guardrail (`npm run check:tokens`)
- [x] Task 7b: canvas `pre` — verified no change needed
- [x] Task 7c: `<th>` scope — won't-fix (documented)

## Checkpoint: Complete
- [ ] Consumers build against the released tag
- [ ] Ready to close out
