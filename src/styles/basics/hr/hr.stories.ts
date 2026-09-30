import type { Meta, StoryObj } from '@storybook/html'
import readme from './README.md?raw'
import { componentDocs } from '../../../stories/readmeDocs'

/**
 * Hr — the native &lt;hr&gt; element, styled as a subtle horizontal rule.
 */
const meta: Meta = {
  title: 'Basics/Hr',
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: componentDocs(readme) } },
  },
}

export default meta

export const Default: StoryObj = {
  render: () =>
    `<p>Content before the rule</p>
     <hr>
     <p>Content after the rule</p>`,
}