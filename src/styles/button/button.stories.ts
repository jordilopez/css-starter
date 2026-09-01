import type { Meta, StoryObj } from '@storybook/html'

/**
 * Buttons — the native &lt;button&gt; element styled via base/button.css.
 *
 * Base styles reset appearance (no border, no background) and add cursor pointer.
 * Interactive transitions use `--transition-base`.
 */
const meta: Meta = {
  title: 'Button',
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj = {
  render: () =>
    `<button type="button">Click me</button>`,
}

export const Disabled: StoryObj = {
  render: () =>
    `<button type="button" disabled>Disabled button</button>`,
}
