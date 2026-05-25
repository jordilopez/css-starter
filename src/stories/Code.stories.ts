import type { Meta, StoryObj } from '@storybook/html'

/**
 * Code — &lt;code&gt;, &lt;pre&gt;, and &lt;kbd&gt; elements styled via base/code.css.
 *
 * All use `--ff-mono` font family. Inline code gets a subtle background and border-radius,
 * while code blocks (pre) get padding and overflow-x scroll support.
 */
const meta: Meta = {
  title: 'Code',
  tags: ['autodocs'],
}

export default meta

export const InlineCode: StoryObj = {
  render: () =>
    `<p>To install the package, run <code>npm install</code> in your terminal.
       Inline code uses <code>--c-bg-subtle</code> background and
       <code>--radius-sm</code> border-radius.</p>`,
}

export const CodeBlock: StoryObj = {
  render: () =>
    `<pre>
       <code>function greet(name: string): string {
         return \`Hello, \${name}!\`;
       }

       console.log(greet('World'));</code>
     </pre>`,
}

export const Keyboard: StoryObj = {
  render: () =>
    `<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy, or
       <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste.
       The &lt;kbd&gt; element uses <code>--c-bg-muted</code> background,
       a border, and a subtle box-shadow.</p>`,
}
