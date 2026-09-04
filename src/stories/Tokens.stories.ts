import type { Meta, StoryObj } from '@storybook/html'

/**
 * Design tokens reference.
 *
 * All CSS custom properties defined in `src/styles/tokens/`.
 * Every value in the base styles references a token — no hardcoded values.
 *
 * Toggle dark/light mode in the toolbar to see tokens adapt.
 */
const meta: Meta = {
  title: 'Tokens',
  tags: ['autodocs'],
}

export default meta

const TABLE_STYLE = 'width:100%;border-collapse:collapse;font-family:var(--ff-mono);font-size:var(--fs-sm)'
const TH_STYLE = 'padding:var(--sp-2) var(--sp-3);text-align:left;border-bottom:1px solid var(--c-border);font-weight:var(--fw-semibold);background:var(--c-bg-subtle)'
const TD_STYLE = 'padding:var(--sp-2) var(--sp-3);text-align:left;border-bottom:1px solid var(--c-border-light);color:var(--c-text-secondary)'
const CODE_STYLE = 'font-family:var(--ff-mono);padding:0.15em 0.3em;background:var(--c-bg-subtle);border-radius:var(--radius-sm);font-size:0.9em'

function table(headers: string[], rows: string[][]): string {
  return `
    <table style="${TABLE_STYLE}">
      <thead>
        <tr>${headers.map(h => `<th style="${TH_STYLE}">${h}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${rows.map(r => `<tr>${r.map(c => `<td style="${TD_STYLE}"><code style="${CODE_STYLE}">${c}</code></td>`).join('')}</tr>`).join('')}
      </tbody>
    </table>
  `
}

function heading(text: string): string {
  return `<h2 style="margin-top:var(--sp-6);margin-bottom:var(--sp-3)">${text}</h2>`
}

function paragraph(text: string): string {
  return `<p style="margin-bottom:var(--sp-4);color:var(--c-text-secondary)">${text}</p>`
}

export const Overview: StoryObj = {
  render: () => `
    <div style="max-width:var(--max-width-wide);margin:0 auto;padding:var(--sp-6)">
      ${heading('Color (—c-*)')}
      ${paragraph('All colour tokens adapt in dark mode via <code>@media (prefers-color-scheme: dark)</code>. No <code>data-theme</code> attribute needed — the browser honours the user\'s OS setting automatically.')}
      ${table(
        ['Token', 'Purpose', 'Light default'],
        [
          ['--c-primary', 'Brand colour', '#42b883'],
          ['--c-primary-hover', 'Hover state', '#38a070'],
          ['--c-primary-active', 'Active state', '#2e8c5e'],
          ['--c-primary-subtle', 'Subtle brand bg', 'rgba(66,184,131,0.08)'],
          ['--c-text', 'Body text', '#1a1a1a'],
          ['--c-text-secondary', 'Muted text', '#555'],
          ['--c-text-muted', 'Even quieter', '#888'],
          ['--c-text-inverse', 'On-dark text', '#fff'],
          ['--c-bg', 'Page background', '#fff'],
          ['--c-bg-subtle', 'Subtle bg', '#f8f9fa'],
          ['--c-bg-muted', 'Muted bg', '#e9ecef'],
          ['--c-border', 'Borders', '#dee2e6'],
          ['--c-border-light', 'Lighter borders', '#e9ecef'],
          ['--c-focus-ring', 'Focus indicator', 'rgba(66,184,131,0.35)'],
          ['--c-info', 'Informational status', '#2563eb'],
          ['--c-success', 'Success / positive status', '#15803d'],
          ['--c-warning', 'Warning / cautionary status', '#b45309'],
          ['--c-error', 'Error / danger status', '#dc2626'],
        ]
      )}

      ${heading('Typography (—ff-*, —fs-*, —fw-*, —lh-*)')}
      ${table(
        ['Token', 'Value'],
        [
          ['--ff-sans', 'System sans-serif stack'],
          ['--ff-mono', 'System monospace stack'],
          ['--fs-xs', '0.75rem (12px)'],
          ['--fs-sm', '0.85rem'],
          ['--fs-base', '1rem (16px)'],
          ['--fs-lg', '1.15rem'],
          ['--fs-xl', '1.5rem (24px)'],
          ['--fs-2xl', '2rem (32px)'],
          ['--lh-tight', '1.25'],
          ['--lh-base', '1.6'],
          ['--lh-loose', '1.8'],
          ['--fw-normal', '400'],
          ['--fw-medium', '500'],
          ['--fw-semibold', '600'],
          ['--fw-bold', '700'],
        ]
      )}

      ${heading('Spacing (—sp-*)')}
      ${table(
        ['Token', 'Value', 'Pixels'],
        [
          ['--sp-0', '0', '0'],
          ['--sp-1', '0.25rem', '4px'],
          ['--sp-2', '0.5rem', '8px'],
          ['--sp-3', '0.75rem', '12px'],
          ['--sp-4', '1rem', '16px'],
          ['--sp-5', '1.5rem', '24px'],
          ['--sp-6', '2rem', '32px'],
          ['--sp-8', '3rem', '48px'],
          ['--sp-10', '4rem', '64px'],
        ]
      )}

      ${heading('Border radius (—radius-*)')}
      ${table(
        ['Token', 'Value'],
        [
          ['--radius-sm', '4px'],
          ['--radius-md', '6px'],
          ['--radius-lg', '8px'],
          ['--radius-full', '9999px'],
        ]
      )}

      ${heading('Shadow (—shadow-*)')}
      ${table(
        ['Token', 'Value'],
        [
          ['--shadow-sm', '0 1px 2px rgba(0,0,0,0.06)'],
          ['--shadow-md', '0 2px 8px rgba(0,0,0,0.08)'],
          ['--shadow-lg', '0 4px 24px rgba(0,0,0,0.1)'],
        ]
      )}
      ${paragraph('Shadows darken in dark mode.')}

      ${heading('Easing (—transition-*)')}
      ${table(
        ['Token', 'Value'],
        [
          ['--transition-fast', '0.15s ease'],
          ['--transition-base', '0.2s ease'],
          ['--transition-slow', '0.3s ease'],
        ]
      )}

      ${heading('Layout (—max-width-*)')}
      ${table(
        ['Token', 'Value'],
        [
          ['--max-width-narrow', '720px'],
          ['--max-width-wide', '1200px'],
        ]
      )}

      ${heading('Breakpoints (—mq-*)')}
      ${paragraph('Custom media queries defined in breakpoints/breakpoints.tokens.css and compiled via PostCSS. Use them in any CSS file with <code>@media (--mq-*) { ... }</code>.')}
      ${table(
        ['Query', 'Compiles to', 'Target'],
        [
          ['--mq-sm', '@media (width ≥ 640px)', 'Small viewports (≥640px)'],
          ['--mq-md', '@media (width ≥ 768px)', 'Medium viewports (≥768px)'],
          ['--mq-lg', '@media (width ≥ 1024px)', 'Large viewports (≥1024px)'],
          ['--mq-xl', '@media (width ≥ 1280px)', 'Extra large (≥1280px)'],
          ['--mq-2xl', '@media (width ≥ 1536px)', '2X extra large (≥1536px)'],
        ]
      )}
      ${paragraph('Resize the browser to see when each breakpoint activates.')}
    </div>
  `,
}
