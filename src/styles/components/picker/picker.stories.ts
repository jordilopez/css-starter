import type { Meta, StoryObj } from "@storybook/html";
import readme from "./README.md?raw";
import { componentDocs } from "../../../stories/readmeDocs";

/**
 * Picker — a segmented control of native radios (`.picker` +
 * `.picker__option` + hidden input + visible span). Zero-JS: state rides on
 * :has(). Token-driven via `--picker-*` (see picker.tokens.css).
 */
const meta: Meta = {
  title: "Components/Picker",
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: componentDocs(readme) } },
  },
};

export default meta;

const options = [
  { id: "story-water", label: "Waterfall", checked: true },
  { id: "story-brick", label: "Brick", checked: false },
  { id: "story-tol", label: "Tolerance", checked: false },
];

const renderPicker = (name: string) =>
  `<fieldset class="picker">
     <legend class="sr-only">Choose a layout</legend>
     ${options
       .map(
         (o) => `<label class="picker__option" for="${o.id}">
           <input type="radio" name="${name}" id="${o.id}"${o.checked ? " checked" : ""} />
           <span>${o.label}</span>
         </label>`,
       )
       .join("")}
   </fieldset>`;

export const Default: StoryObj = {
  render: () => renderPicker("layout"),
};

export const WithDisabledOption: StoryObj = {
  render: () =>
    `<fieldset class="picker">
       <legend class="sr-only">Choose a layout</legend>
       <label class="picker__option" for="story-d-1">
         <input type="radio" name="layout-disabled" id="story-d-1" checked />
         <span>Waterfall</span>
       </label>
       <label class="picker__option" for="story-d-2">
         <input type="radio" name="layout-disabled" id="story-d-2" disabled />
         <span>Brick</span>
       </label>
     </fieldset>`,
};
