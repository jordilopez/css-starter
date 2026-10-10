/**
 * Guardrail: fails when a colour token in `src/styles/tokens/color.css` does
 * not follow the Asana-style 4-axis naming convention.
 *
 *   <sentiment>-<usage>-<prominence>[-<interaction>]
 *
 * `default` is omitted from every segment, so only non-default parts appear
 * (e.g. `--text`, `--text-weak`, `--text-hover`). Because the vocabulary is
 * small and closed, the check simply enumerates every name the grammar can
 * produce and rejects anything else.
 *
 * Exceptions (documented, not part of the grid):
 *   - `--focus-ring` — interaction-level token; `focus` is not a usage.
 *
 * It also verifies the light and dark `:root` blocks declare the same tokens,
 * so a dark-mode value cannot be silently forgotten.
 *
 * Run via: npm run check:token-names
 * See docs/colour-token-naming.md for the convention.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const COLOR_CSS = fileURLToPath(new URL('../src/styles/tokens/color.css', import.meta.url));

const SENTIMENTS = ['success', 'warning', 'danger', 'info', 'brand', 'selected', 'upsell', 'beta'];
const USAGES = ['background', 'text', 'icon', 'border'];
const PROMINENCES = ['weak', 'medium', 'strong', 'inverse'];
const INTERACTIONS = ['hover', 'active', 'disabled'];
const EXCEPTIONS = new Set(['focus-ring']);

/** Every name the grammar can produce. */
const valid = new Set();
for (const sentiment of ['', ...SENTIMENTS]) {
  for (const usage of USAGES) {
    for (const prominence of ['', ...PROMINENCES]) {
      for (const interaction of ['', ...INTERACTIONS]) {
        valid.add([sentiment, usage, prominence, interaction].filter(Boolean).join('-'));
      }
    }
  }
}

const css = readFileSync(COLOR_CSS, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');

/** Extract the token names declared in each `:root` block, in order. */
function rootBlocks(source) {
  return [...source.matchAll(/:root\s*\{([\s\S]*?)\}/g)].map(([, body]) => {
    const tokens = [];
    for (const [, name] of body.matchAll(/(--[\w-]+)\s*:/g)) tokens.push(name);
    return tokens;
  });
}

const blocks = rootBlocks(css);
if (blocks.length < 2) {
  console.error(`\n✖ check:token-names failed — expected light and dark :root blocks in color.css.\n`);
  process.exit(1);
}

const [light, dark] = blocks;
const errors = [];

for (const token of light) {
  const name = token.slice(2);
  if (!valid.has(name) && !EXCEPTIONS.has(name)) {
    errors.push(
      `off-convention: ${token} — expected <sentiment>-<usage>-<prominence>[-<interaction>] with default omitted`,
    );
  }
}

const lightSet = new Set(light);
const darkSet = new Set(dark);
for (const token of lightSet) {
  if (!darkSet.has(token)) errors.push(`missing dark value: ${token}`);
}
for (const token of darkSet) {
  if (!lightSet.has(token)) errors.push(`dark-only token: ${token}`);
}

if (errors.length > 0) {
  console.error(`\n✖ check:token-names failed — colour tokens violate the naming convention:\n`);
  for (const e of errors) console.error(`  ${e}`);
  console.error(`\nSee docs/colour-token-naming.md for the convention and how to add a token.\n`);
  process.exit(1);
}

console.log(`✓ check:token-names passed — ${light.length} colour tokens follow the convention`);
