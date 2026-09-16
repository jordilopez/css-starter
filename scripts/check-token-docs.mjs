/**
 * Guardrail: keeps the Tokens README colour table in sync with the CSS.
 *
 * `src/stories/README.md` lists each `--c-*` token with its light-mode
 * default. Those values are hand-written duplicates of the declarations in
 * `src/styles/tokens/color.css`, so they can silently drift. This script
 * parses both and fails when a documented value no longer matches the CSS,
 * or when a colour token exists in the CSS but is undocumented.
 *
 * Only the colour table is checked — it is the one place where literal
 * values are duplicated (other tables use annotated/derived values).
 *
 * Run via: npm run check:tokens
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const README = fileURLToPath(new URL('../src/stories/README.md', import.meta.url));
const COLOR_CSS = fileURLToPath(new URL('../src/styles/tokens/color.css', import.meta.url));

/** Normalise a CSS value for comparison (case- and whitespace-insensitive). */
const normalise = (value) => value.toLowerCase().replace(/\s+/g, '');

/** Extract `--token: value` declarations from the first `:root` block. */
function readLightTokens(css) {
  const darkRule = css.match(/@media\s*\(prefers-color-scheme:\s*dark\)\s*\{/);
  const lightBlock = darkRule ? css.slice(0, darkRule.index) : css;
  const root = lightBlock.match(/:root\s*\{([\s\S]*?)\}/);
  if (!root) throw new Error('No :root block found in color.css');
  const tokens = new Map();
  for (const [, name, value] of root[1].matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
    tokens.set(name, value.trim());
  }
  return tokens;
}

/** Extract `| --token | … | value |` rows from the README colour section. */
function readDocumentedColors(markdown) {
  const section = markdown.match(/##\s+Color[\s\S]*?(?=\n##\s|$)/);
  if (!section) throw new Error('No "## Color" section found in README.md');
  const rows = new Map();
  for (const line of section[0].split('\n')) {
    const cells = line.match(/^\|\s*`(--[\w-]+)`\s*\|(.*)\|\s*$/);
    if (!cells) continue;
    const value = cells[2].split('|').at(-1).replace(/`/g, '').trim();
    rows.set(cells[1], value);
  }
  return rows;
}

const cssTokens = readLightTokens(readFileSync(COLOR_CSS, 'utf8'));
const documented = readDocumentedColors(readFileSync(README, 'utf8'));

const errors = [];
for (const [token, cssValue] of cssTokens) {
  if (!documented.has(token)) {
    errors.push(`undocumented: ${token} (${cssValue}) is in color.css but not the README`);
    continue;
  }
  const docValue = documented.get(token);
  if (normalise(docValue) !== normalise(cssValue)) {
    errors.push(`mismatch: ${token} — README says "${docValue}", color.css says "${cssValue}"`);
  }
}
for (const token of documented.keys()) {
  if (!cssTokens.has(token)) errors.push(`unknown: ${token} is documented but not in color.css`);
}

if (errors.length > 0) {
  console.error(`\n✖ check:tokens failed — Tokens README colour table is out of sync:\n`);
  for (const e of errors) console.error(`  ${e}`);
  console.error(`\nUpdate src/stories/README.md (or color.css) so the values match.\n`);
  process.exit(1);
}

console.log(`✓ check:tokens passed — ${cssTokens.size} colour tokens documented in sync with color.css`);