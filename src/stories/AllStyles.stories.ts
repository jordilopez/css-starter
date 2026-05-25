import type { Meta, StoryObj } from '@storybook/html'

/**
 * All styles — a kitchen-sink page showcasing every styled element together.
 * Useful for a visual overview of the full design system.
 */
const meta: Meta = {
  title: 'All Styles',
  tags: ['autodocs'],
}

export default meta

export const KitchenSink: StoryObj = {
  render: () => `
    <h1>Design System Preview</h1>
    <p>This page shows all styled native elements together, so you can see
       how they look as a cohesive system.</p>

    <hr />

    <h2>Typography</h2>

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <p>This is a paragraph with <strong>bold</strong>, <em>italic</em>,
       and <small>small</small> text. It also contains an inline
       <a href="#">link</a> and some <code>inline code</code>.</p>
    <blockquote>
      <p>This is a blockquote. It stands out with a coloured left border.</p>
    </blockquote>

    <hr />

    <h2>Lists</h2>
    <ul>
      <li>Unordered item one</li>
      <li>Unordered item two</li>
      <li>Unordered item three</li>
    </ul>
    <ol>
      <li>Ordered item one</li>
      <li>Ordered item two</li>
      <li>Ordered item three</li>
    </ol>

    <hr />

    <h2>Code</h2>
    <p>Keyboard shortcut: <kbd>Ctrl</kbd> + <kbd>S</kbd></p>
    <pre><code>// A code block
const msg = 'Hello, world!';
console.log(msg);</code></pre>

    <hr />

    <h2>Buttons</h2>
    <p>
      <button type="button">Default button</button>
      <button type="button" disabled>Disabled button</button>
    </p>

    <hr />

    <h2>Form</h2>
    <form style="display:flex; flex-direction:column; gap:var(--sp-4); max-width:400px;">
      <div>
        <label for="s-name">Name</label>
        <input id="s-name" type="text" placeholder="Your name" style="width:100%;" />
      </div>
      <div>
        <label for="s-email">Email</label>
        <input id="s-email" type="email" placeholder="you@example.com" style="width:100%;" />
      </div>
      <div>
        <label for="s-msg">Message</label>
        <textarea id="s-msg" placeholder="Write something…" style="width:100%;"></textarea>
      </div>
      <div>
        <label for="s-topic">Topic</label>
        <select id="s-topic" style="width:100%;">
          <option>General</option>
          <option>Support</option>
          <option>Feedback</option>
        </select>
      </div>
    </form>

    <hr />

    <h2>Table</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Ada Lovelace</td><td>Mathematician</td><td>1843</td></tr>
        <tr><td>Grace Hopper</td><td>Computer Scientist</td><td>1952</td></tr>
        <tr><td>Tim Berners-Lee</td><td>Computer Scientist</td><td>1989</td></tr>
      </tbody>
    </table>
  `,
}
