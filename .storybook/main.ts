import type { StorybookConfig } from '@storybook/html-vite'

/**
 * Storybook configuration for a plain HTML/CSS project.
 *
 * Stories showcase native HTML elements styled by the design system tokens
 * and base styles. No framework — just HTML markup rendered in a Canvas.
 *
 * Addons:
 * - `@chromatic-com/storybook` — visual regression reviews
 * - `@storybook/addon-a11y` — accessibility audits per story
 * - `@storybook/addon-docs` — auto-generated documentation
 */
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
  ],
  framework: '@storybook/html-vite',
}

export default config
