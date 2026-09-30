// PreToolUse (Bash): remind to use tmux for long-running test/build commands.
import { readFileSync } from 'node:fs';

const input = JSON.parse(readFileSync(0, 'utf8') || '{}');
const cmd = input.tool_input?.command ?? '';

if (/\b(npm (run )?(test|build)|node --test)\b/.test(cmd) && !process.env.TMUX) {
  console.error('[tmux] Test/build commands can run long. Consider running inside tmux.');
}
