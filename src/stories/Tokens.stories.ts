import type { Meta, StoryObj } from '@storybook/html'
import readme from './README.md?raw'
import { componentDocs } from './readmeDocs'

/**
 * Design tokens reference.
 *
 * All CSS custom properties defined in `src/styles/tokens/`.
 * Every value in the base styles references a token — no hardcoded values.
 *
 * Docs-only page: the token tables live in README.md (the single source of
 * truth, same as the feature folders) and render in the docs description.
 * The `Overview` story is a no-op anchored by the `!dev` tag — it never
 * renders in the canvas, so the tables aren't duplicated.
 */
const meta: Meta = {
  title: 'Tokens',
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: { description: { component: componentDocs(readme) } },
  },
}

export default meta

export const Overview: StoryObj = {
  render: () => '',
}
