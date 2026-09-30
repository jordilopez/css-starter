import type { Meta, StoryObj } from '@storybook/html'
import readme from './README.md?raw'
import { componentDocs } from '../../../stories/readmeDocs'

/**
 * Blockquote — the native &lt;blockquote&gt; element, styled as an inset quote
 * with a coloured left border.
 */
const meta: Meta = {
  title: 'Basics/Blockquote',
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: componentDocs(readme) } },
  },
}

export default meta

export const Default: StoryObj = {
  render: () =>
    `<blockquote>
       <p>This is a blockquote. It has a left border coloured with --c-primary,
          left padding via --sp-4, and secondary text colour.</p>
     </blockquote>`,
}

export const MultiParagraph: StoryObj = {
  render: () =>
    `<blockquote>
       <p>The blockquote uses --c-primary for the left border accent and
          --c-text-secondary for the text colour, keeping it visually distinct
          from regular paragraphs.</p>
       <p>Multiple paragraphs inside a blockquote render naturally.</p>
     </blockquote>`,
}