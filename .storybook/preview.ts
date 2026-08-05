import type { Preview } from '@storybook/html'
import '../src/styles/index.css'
import './docs.css'

/**
 * Global Storybook preview configuration.
 *
 * Dark mode is controlled by the user's OS preference via
 * `@media (prefers-color-scheme: dark)` in the CSS tokens.
 * No theme toggle is needed — the browser handles it automatically.
 *
 * The build-in backgrounds toolbar is disabled to avoid confusion
 * with the design system's own dark mode.
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
    backgrounds: {
      disable: true,
    },
  },
}

export default preview
