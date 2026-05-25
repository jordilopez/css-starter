import type { Preview } from '@storybook/html'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '../src/styles/index.css'

/**
 * Global Storybook preview configuration.
 *
 * `controls.matchers` auto-assigns colour and date controls
 * based on prop names.
 *
 * `a11y.test` is set to `'todo'` so accessibility violations
 * surface in the test UI without failing CI.
 *
 * `withThemeByDataAttribute` adds a `data-theme` attribute to `<html>`,
 * toggling between "light" and "dark". The design system's `color.css`
 * responds to `[data-theme="dark"]` on `:root` for Storybook previews,
 * while production sites still use `@media (prefers-color-scheme)`.
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
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
      attributeName: 'data-theme',
    }),
  ],
}

export default preview
