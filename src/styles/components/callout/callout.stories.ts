import type { Meta, StoryObj } from "@storybook/html";
import readme from "./README.md?raw";
import { componentDocs } from "../../../stories/readmeDocs";

/**
 * Callout — a generic `.callout` status/advisory block with a component-owned
 * icon, optional `.callout__title` and `.callout__body`, tinted by a tone
 * (`--info` / `--success` / `--warning` / `--error`). Token-driven via
 * `--callout-*` (see callout.tokens.css).
 */
const meta: Meta = {
  title: "Components/Callout",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: componentDocs(readme) } },
  },
};

export default meta;

/* Inline 1em icons so css-starter carries no icon-library dependency; the
   framework wrappers render their own glyph (lucide / shared Icon) instead.
   Each uses currentColor so it picks up the tone accent from .callout__icon. */
const svg = (path: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

const ICONS = {
  info: svg(`<circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />`),
  success: svg(`<circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />`),
  warning: svg(
    `<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4.5 21h15a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4M12 17h.01" />`,
  ),
  error: svg(
    `<circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" />`,
  ),
};

type Tone = keyof typeof ICONS;

const renderCallout = (tone: Tone) =>
  `<div class="callout callout--${tone}" role="status">
     <span class="callout__icon" aria-hidden="true">${ICONS[tone]}</span>
     <div class="callout__content">
       <p class="callout__title">${tone[0].toUpperCase() + tone.slice(1)} title</p>
       <p class="callout__body">Supporting message for the ${tone} callout.</p>
     </div>
   </div>`;

export const Info: StoryObj = {
  render: () => renderCallout("info"),
};

export const Success: StoryObj = {
  render: () => renderCallout("success"),
};

export const Warning: StoryObj = {
  render: () => renderCallout("warning"),
};

export const Error: StoryObj = {
  render: () => renderCallout("error"),
};

export const BodyOnly: StoryObj = {
  render: () =>
    `<div class="callout callout--info" role="status">
       <span class="callout__icon" aria-hidden="true">${ICONS.info}</span>
       <div class="callout__content">
         <p class="callout__body">A callout with no title, just a body message.</p>
       </div>
     </div>`,
};
