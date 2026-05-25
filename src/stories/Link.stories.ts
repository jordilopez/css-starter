import type { Meta, StoryObj } from '@storybook/html'

/**
 * Links — anchor elements styled via base/link.css.
 *
 * Colours reference `--c-primary`, `--c-primary-hover`, and `--c-primary-active` tokens.
 * Transition uses `--transition-fast`.
 */
const meta: Meta = {
  title: 'Link',
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj = {
  render: () =>
    `<p>This is a paragraph with <a href="#">a sample link</a> inside it.
       Links use <strong>--c-primary</strong> colour, underline decoration,
       and a <strong>2px text-underline-offset</strong>.</p>`,
}

export const InNavigation: StoryObj = {
  render: () =>
    `<nav>
       <ul style="display:flex; gap: var(--sp-4); list-style:none; padding:0;">
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Contact</a></li>
       </ul>
     </nav>`,
}
