import type { Meta, StoryObj } from '@storybook/html'
import readme from './README.md?raw'
import { componentDocs } from '../../../stories/readmeDocs'

/**
 * List — the native &lt;ul&gt;, &lt;ol&gt;, and &lt;li&gt; elements, styled with
 * shared spacing tokens.
 */
const meta: Meta = {
  title: 'Basics/List',
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: componentDocs(readme) } },
  },
}

export default meta

export const Unordered: StoryObj = {
  render: () =>
    `<ul>
       <li>List item one</li>
       <li>List item two</li>
       <li>List item three</li>
     </ul>`,
}

export const Ordered: StoryObj = {
  render: () =>
    `<ol>
       <li>First item</li>
       <li>Second item</li>
       <li>Third item</li>
     </ol>`,
}

export const Nested: StoryObj = {
  render: () =>
    `<ul>
       <li>List item one</li>
       <li>List item two
         <ul>
           <li>Nested item one</li>
           <li>Nested item two</li>
         </ul>
       </li>
       <li>List item three</li>
     </ul>`,
}