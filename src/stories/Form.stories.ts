import type { Meta, StoryObj } from '@storybook/html'

/**
 * Forms — labels, inputs, textareas, selects, checkboxes, and radios
 * styled via base/form.css.
 *
 * Inputs reference `--c-border`, `--c-primary`, and `--c-focus-ring` tokens.
 * Focus uses a 3px box-shadow ring for a visible, accessible focus indicator.
 *
 * Checkboxes and radios are custom-styled with `appearance: none` and CSS
 * pseudo-elements for the checked / indeterminate states.
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

/** Checkbox variants — unchecked, checked, indeterminate, and disabled states. */
export const Checkbox: StoryObj = {
  render: () =>
    `<div style="display:flex; flex-direction:column; gap:var(--sp-2);">
       <label>
         <input type="checkbox" />
         Subscribe to newsletter
       </label>
       <label>
         <input type="checkbox" checked />
         Accept terms &amp; conditions
       </label>
       <label>
         <input type="checkbox" indeterminate />
         Select all (indeterminate)
       </label>
       <label>
         <input type="checkbox" disabled />
         Disabled unchecked
       </label>
       <label>
         <input type="checkbox" disabled checked />
         Disabled checked
       </label>
     </div>`,
}

/** Radio button group wrapped in a fieldset, including disabled options. */
export const Radio: StoryObj = {
  render: () =>
    `<fieldset>
       <legend>Shipping method</legend>
       <div style="display:flex; flex-direction:column; gap:var(--sp-2); margin-top:var(--sp-2);">
         <label>
           <input type="radio" name="shipping" />
           Standard (5–7 days)
         </label>
         <label>
           <input type="radio" name="shipping" checked />
           Express (2–3 days)
         </label>
         <label>
           <input type="radio" name="shipping" />
           Overnight (next day)
         </label>
         <label>
           <input type="radio" name="shipping-disabled" disabled />
           Disabled option
         </label>
         <label>
           <input type="radio" name="shipping-disabled" disabled checked />
           Disabled selected
         </label>
       </div>
     </fieldset>`,
}

/** Fieldset grouping text inputs with a descriptive legend. */
export const FieldsetAndLegend: StoryObj = {
  render: () =>
    `<fieldset>
       <legend>Contact details</legend>
       <div style="display:flex; flex-direction:column; gap:var(--sp-3); margin-top:var(--sp-3);">
         <div>
           <label for="fi-name">Name</label>
           <input id="fi-name" type="text" placeholder="Your name" style="width:100%;" />
         </div>
         <div>
           <label for="fi-email">Email</label>
           <input id="fi-email" type="email" placeholder="you@example.com" style="width:100%;" />
         </div>
       </div>
     </fieldset>`,
}

/** Full form combining all element types: text inputs, select, checkboxes, radios, and textarea. */
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
       <fieldset>
         <legend>Preferences</legend>
         <div style="display:flex; flex-direction:column; gap:var(--sp-2); margin-top:var(--sp-2);">
           <label>
             <input type="checkbox" />
             Email notifications
           </label>
           <label>
             <input type="checkbox" checked />
             SMS notifications
           </label>
         </div>
       </fieldset>
       <fieldset>
         <legend>Plan</legend>
         <div style="display:flex; flex-direction:column; gap:var(--sp-2); margin-top:var(--sp-2);">
           <label>
             <input type="radio" name="f-plan" />
             Free
           </label>
           <label>
             <input type="radio" name="f-plan" checked />
             Pro
           </label>
           <label>
             <input type="radio" name="f-plan" />
             Enterprise
           </label>
         </div>
       </fieldset>
       <div>
         <label for="f-msg">Message</label>
         <textarea id="f-msg" placeholder="Your message…" style="width:100%;"></textarea>
       </div>
     </form>`,
}
