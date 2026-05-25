import type { Meta, StoryObj } from '@storybook/html'

/**
 * Forms — labels, inputs, textareas, and selects styled via base/form.css.
 *
 * Inputs reference `--c-border`, `--c-primary`, and `--c-focus-ring` tokens.
 * Focus uses a 3px box-shadow ring for a visible, accessible focus indicator.
 */
const meta: Meta = {
  title: 'Form',
  tags: ['autodocs'],
}

export default meta

export const TextInput: StoryObj = {
  render: () =>
    `<label for="name">Full name</label>
     <input id="name" type="text" placeholder="Enter your name" />`,
}

export const EmailInput: StoryObj = {
  render: () =>
    `<label for="email">Email address</label>
     <input id="email" type="email" placeholder="you@example.com" />`,
}

export const Textarea: StoryObj = {
  render: () =>
    `<label for="message">Message</label>
     <textarea id="message" placeholder="Write your message here…"></textarea>`,
}

export const Select: StoryObj = {
  render: () =>
    `<label for="country">Country</label>
     <select id="country">
       <option>Choose one…</option>
       <option>Spain</option>
       <option>France</option>
       <option>Italy</option>
     </select>`,
}

export const AllFormElements: StoryObj = {
  render: () =>
    `<form style="display:flex; flex-direction:column; gap:var(--sp-4); max-width:400px;">
       <div>
         <label for="f-name">Name</label>
         <input id="f-name" type="text" placeholder="Your name" style="width:100%;" />
       </div>
       <div>
         <label for="f-email">Email</label>
         <input id="f-email" type="email" placeholder="you@example.com" style="width:100%;" />
       </div>
       <div>
         <label for="f-topic">Topic</label>
         <select id="f-topic" style="width:100%;">
           <option>General inquiry</option>
           <option>Support</option>
           <option>Feedback</option>
         </select>
       </div>
       <div>
         <label for="f-msg">Message</label>
         <textarea id="f-msg" placeholder="Your message…" style="width:100%;"></textarea>
       </div>
     </form>`,
}
