# Todo — Release & Publish

Plan: `tasks/plan.md`

## Phase 1: Decisions (human gate)

- [x] Task 1: Release semantics — **minor**; **single PR** (decisions A, C)

## Checkpoint: Decisions
- [x] Version number chosen; PR strategy confirmed

## Phase 2: Pull requests

- [x] Task 2: Push `basics-components-split`, create **one** PR → `main`
      (PR #1: https://github.com/jordilopez/css-starter/pull/1)

## Checkpoint: PRs open
- [x] PR URL recorded; builds green

## Phase 3: Merge & release

- [x] Task 4: PR #1 merged (human-approved in GitHub)
- [x] Task 5: `npm version minor` → **v0.3.0**; `git push origin main --tags`
      (incl. stranded `v0.2.2`)

## Checkpoint: Released
- [x] New tag visible on remote

## Phase 4: Consumers

- [x] Task 6: `react-starter` + `vue-starter` → `css-starter#v0.3.0`; both
      build; `--opacity-disabled`, feature tokens, and `--c-primary`
      overrides verified in compiled CSS
- [x] Task 7a: token-doc guardrail (`npm run check:tokens`)
- [x] Task 7b: canvas `pre` — verified no change needed
- [x] Task 7c: `<th>` scope — won't-fix (documented)

## Checkpoint: Complete
- [x] Consumers build against the released tag
- [x] Ready to close out
