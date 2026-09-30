// Stop: flag debug prints in uncommitted changes.
import { execSync } from 'node:child_process';

let diff = '';
try {
  diff = execSync('git diff HEAD -U0 -- src', { encoding: 'utf8' });
} catch {
  process.exit(0);
}

const hits = diff
  .split('\n')
  .filter((l) => l.startsWith('+') && !l.startsWith('+++'))
  .filter((l) => /console\.log\(\s*['"`]?debug|console\.log\(.*DEBUG|\bprint\(/i.test(l));

if (hits.length) {
  console.error('[stop-check] Debug prints in uncommitted changes:');
  hits.forEach((h) => console.error('  ' + h.slice(1).trim()));
}
