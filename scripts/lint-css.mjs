/**
 * Guardrail: fails when `!important` appears anywhere under src/styles/.
 *
 * Policy: the css-starter design system must contain no `!important`.
 * Important declarations reverse cascade-layer precedence, which would
 * break the layer architecture documented in AGENTS.md. Resolve conflicts
 * via layer placement, `:where()` selector design, or tokens instead.
 *
 * Matching is case-insensitive and tolerates whitespace between the bang
 * and the keyword (`! important`), which the CSS tokenizer allows.
 *
 * Run via: npm run lint:css
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../src/styles', import.meta.url));

// Case-insensitive "!important" with optional whitespace after the bang.
const IMPORTANT_PATTERN = /!\s*important/i;

const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (entry.endsWith('.css')) files.push(full);
  }
})(ROOT);

const offenders = [];
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (IMPORTANT_PATTERN.test(line)) {
      offenders.push(`${relative(process.cwd(), file)}:${i + 1}: ${line.trim()}`);
    }
  });
}

if (offenders.length > 0) {
  console.error(`\n✖ lint:css failed — !important is prohibited in src/styles/ (see AGENTS.md):\n`);
  for (const o of offenders) console.error(`  ${o}`);
  console.error(`\nResolve via layer placement, :where() selectors, or tokens — never !important.\n`);
  process.exit(1);
}

console.log(`✓ lint:css passed — no !important in ${files.length} CSS files under src/styles/`);
