import type { Preview } from '@storybook/html'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '../src/styles/index.css'

/**
 * Global Storybook preview configuration.
 *
 * `withThemeByDataAttribute` adds a `data-theme` attribute to `<html>`,
 * toggling between "light" and "dark". The design system's `color.css`
 * responds to `[data-theme="dark"]` on `:root` for Storybook previews,
 * while production sites still use `@media (prefers-color-scheme)`.
 *
 * The built-in backgrounds toolbar is disabled — use the **Theme** toggle
 * (paintbrush icon) in the toolbar instead. It switches both the background
 * colour and all design tokens between light and dark mode.
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
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
}

export default preview
