import type { Preview } from '@storybook/html'
import '../src/styles/index.css'

/**
 * Global Storybook preview configuration.
 *
 * `controls.matchers` auto-assigns colour and date controls
 * based on prop names.
 *
 * `a11y.test` is set to `'todo'` so accessibility violations
 * surface in the test UI without failing CI.
 */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
