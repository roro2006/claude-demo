// PostToolUse (Edit|Write): normalize whitespace in the edited file.
import { readFileSync, writeFileSync } from 'node:fs';

const input = JSON.parse(readFileSync(0, 'utf8') || '{}');
const file = input.tool_input?.file_path;
if (!file || !/\.(js|mjs|json|md)$/.test(file)) process.exit(0);

try {
  const before = readFileSync(file, 'utf8');
  const after = before.replace(/[ \t]+$/gm, '').replace(/\n*$/, '\n');
  if (after !== before) writeFileSync(file, after);
  console.error(`[format] ${file}`);
} catch {
  // file may have been removed; nothing to format
}
