import type { Meta, StoryObj } from '@storybook/html'

/**
 * Typography — headings, paragraphs, inline text, blockquotes, lists, and rules.
 * All sizes reference `--fs-*` and `--lh-*` tokens.
 */
const meta: Meta = {
  title: 'Typography',
  tags: ['autodocs'],
}

export default meta

export const Headings: StoryObj = {
  render: () =>
    `<h1>Heading 1 (--fs-2xl)</h1>
     <h2>Heading 2 (--fs-xl)</h2>
     <h3>Heading 3 (--fs-lg)</h3>
     <h4>Heading 4 (--fs-base)</h4>
     <h5>Heading 5 (--fs-base)</h5>
     <h6>Heading 6 (--fs-base)</h6>`,
}

export const Paragraphs: StoryObj = {
  render: () =>
    `<p>This is a standard paragraph. It uses <strong>--fs-base</strong> for size,
       <strong>--c-text</strong> for colour, and <strong>--lh-base</strong> for line-height.
       The colour is set to <strong>--c-text-secondary</strong> to distinguish it from headings.</p>
     <p>This is a second paragraph. When a paragraph is the last child of its parent,
       its bottom margin is removed so it doesn't add extra space at the end of the container.</p>`,
}

export const InlineText: StoryObj = {
  render: () =>
    `<p>This text contains <strong>bold text</strong> (using &lt;strong&gt;, weight <strong>--fw-semibold</strong>),
       <em>italicised text</em> (using &lt;em&gt;), and <small>small text</small>
       (using &lt;small&gt;, coloured with <strong>--c-text-muted</strong>).</p>`,
}

export const Blockquote: StoryObj = {
  render: () =>
    `<blockquote>
       <p>This is a blockquote. It has a left border coloured with --c-primary,
          left padding via --sp-4, and secondary text colour.</p>
     </blockquote>`,
}

export const Lists: StoryObj = {
  render: () =>
    `<h3>Unordered list</h3>
     <ul>
       <li>List item one</li>
       <li>List item two</li>
       <li>List item three</li>
     </ul>
     <h3>Ordered list</h3>
     <ol>
       <li>First item</li>
       <li>Second item</li>
       <li>Third item</li>
     </ol>`,
}

export const HorizontalRule: StoryObj = {
  render: () =>
    `<p>Content before the rule</p>
     <hr>
     <p>Content after the rule</p>`,
}
