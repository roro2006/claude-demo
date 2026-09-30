// SessionStart: load the most recent session note as context.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dir = '.claude/sessions';
let files = [];
try {
  files = readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ f, t: statSync(join(dir, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t);
} catch {
  process.exit(0);
}
if (!files.length) process.exit(0);

const latest = files[0].f;
const body = readFileSync(join(dir, latest), 'utf8');
console.log(`Latest session note (${dir}/${latest}):\n\n${body}`);
