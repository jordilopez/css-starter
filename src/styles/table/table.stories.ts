import type { Meta, StoryObj } from '@storybook/html'

/**
 * Tables — &lt;table&gt;, &lt;th&gt;, and &lt;td&gt; styled via base/table.css.
 *
 * Header cells use `--fw-semibold` weight and `--c-bg-subtle` background.
 * Borders use `--c-border-light`.
 */
const meta: Meta = {
  title: 'Table',
  tags: ['autodocs'],
}

export default meta

export const SimpleTable: StoryObj = {
  render: () =>
    `<table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Role</th>
           <th>Country</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>Ada Lovelace</td>
           <td>Mathematician</td>
           <td>United Kingdom</td>
         </tr>
         <tr>
           <td>Grace Hopper</td>
           <td>Computer Scientist</td>
           <td>United States</td>
         </tr>
         <tr>
           <td>Alan Turing</td>
           <td>Computer Scientist</td>
           <td>United Kingdom</td>
         </tr>
       </tbody>
     </table>`,
}
