/**
 * Helpers for turning a feature's README into Storybook autodocs content.
 *
 * Feature READMEs are the single source of truth for the token tables shown
 * on each component's docs page (imported with Vite's `?raw` suffix).
 * `componentDocs` strips the leading H1 so the markdown does not duplicate
 * the component title Storybook renders above the description.
 */
export function componentDocs(readme: string): string {
  return readme.replace(/^#\s+[^\n]*\n+/, '').trim()
}