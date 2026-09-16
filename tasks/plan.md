# Implementation Plan: Release & Publish — Token Docs + Basics/Components Split

## Overview

Two feature branches are complete, verified, and unreviewed upstream. This plan
takes them through PR review, merge, release (version bump + tag), and consumer
updates (react-starter, vue-starter). No source changes except the optional
polish slice.

## Current state (verified)

- `picker-card-and-readmes` @ `ca1b3a9` — token docs via READMEs, dark-mode
  docs fix, card/picker nesting refactor. Not pushed.
- `basics-components-split` @ `0e1a85a` — folder reorganisation, story title
  grouping, review fixes (`--opacity-disabled` token, ArgsTable scoping).
  Not pushed. Contains the other branch's commits.
- Local `main` @ `6f3dd35` (tagged `v0.2.2`) — **ahead of origin/main by 1,
  and tag `v0.2.2` is not on the remote** (remote has v0.2.0, v0.2.1).
- Consumers (`react-starter`, `vue-starter`) import `css-starter` root-only;
  both have local Toast components whose CSS comments say they should migrate
  into css-starter (future `components/toast/`).

## Architecture Decisions

- **Single PR:** all work lands as one PR from `basics-components-split` →
  `main` (it already contains the `picker-card-and-readmes` commits).
- **Version = minor (`v0.3.0`)** (decision A): no known consumer uses the
  moved deep-import paths, so the reorganisation ships as a minor.
- **Polish slice included** (decision B), broken into Tasks 7a–7c below.
- **Deep-import paths moved** (`css-starter/basics/…`, `css-starter/components/…`,
  `css-starter/tokens/…`).

## Task List

### Phase 1: Decisions (human gate)

- [x] Task 1: Release semantics — **minor**; **single PR** (decisions A, C)

### Checkpoint: Decisions
- [ ] Version number chosen; PR strategy confirmed

### Phase 2: Pull requests

- [ ] Task 2: Push `basics-components-split`, create **one** PR → `main`
      (needs explicit user confirmation of the push/gh block per
      git-create-pr skill)

### Checkpoint: PRs open
- [ ] Both PR URLs recorded; CI/storybook builds green

### Phase 3: Merge & release

- [ ] Task 4: Merge PRs (human approval in GitHub), retarget/merge second
- [ ] Task 5: On updated `main`: `npm version <major|minor per Task 1>`,
      `git push origin --tags` (per AGENTS.md release flow). Note: also push
      the stranded `v0.2.2` tag if not superseded.

### Checkpoint: Released
- [ ] New tag visible on remote; `npm view`/GitHub shows release

### Phase 4: Consumers

- [ ] Task 6: Update `react-starter` and `vue-starter` to the new tag
      (`npm install css-starter@github:jordilopez/css-starter#vX.Y.Z`),
      build both, verify token overrides + dark mode still work
- [x] Task 7a: **Token-doc guardrail** — `scripts/check-token-docs.mjs` +
      `npm run check:tokens`
- [x] Task 7b: **Canvas `pre` parity** — verified no change needed: the story
      `<pre>` renders `--c-bg-muted` correctly; the `#242424` element was the
      hidden "Show code" source, not a themed story block
- [x] Task 7c: **`scope` on markdown `<th>`** — won't-fix: `markdown-to-jsx`
      emits bare `<th>` and docs.css cannot add attributes; overriding the
      docs markdown renderer is disproportionate. Simple 2–3 column tables
      associate headers fine without it

### Checkpoint: Complete
- [ ] Consumers build against the released tag
- [ ] Ready to close out

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| PRs include unrelated history (local `main` ahead of origin) | Med | PR base/diff verified before creation |
| Stranded `v0.2.2` tag confuses release | Low | Task 5 explicitly handles it |
| Consumer build breaks on new css-starter | Med | Task 6 builds both starters before close-out |
| Toast CSS comments reference old path `css-starter/src/styles/toast/` | Low | Flag in Task 6; consumers update comments to `components/toast/` |

## Open Questions

All resolved: A = minor, B = include polish, C = single PR.
