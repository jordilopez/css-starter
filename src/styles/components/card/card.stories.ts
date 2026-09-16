import type { Meta, StoryObj } from "@storybook/html";
import readme from "./README.md?raw";
import { componentDocs } from "../../../stories/readmeDocs";

/**
 * Card — a generic `.card` surface component with optional media and
 * `.card__caption`. Token-driven via `--card-*` (see card.tokens.css).
 */
const meta: Meta = {
  title: "Components/Card",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: componentDocs(readme) } },
  },
};

export default meta;

const placeholderImg = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><rect width="100%" height="100%" fill="#d4f0e2"/></svg>`,
)}`;

export const Default: StoryObj = {
  render: () =>
    `<figure class="card" style="max-width: 320px">
      <img src="${placeholderImg}" alt="" width="320" height="200" />
      <figcaption class="card__caption">A caption for the card</figcaption>
    </figure>`,
};

export const MediaOnly: StoryObj = {
  render: () =>
    `<figure class="card" style="max-width: 320px">
      <img src="${placeholderImg}" alt="" width="320" height="200" />
    </figure>`,
};
