# Session: todo CLI persistence

## Worked
- Split logic (`src/todos.js`) from disk I/O (`src/storage.js`). `npm test` passes, 4/4.
- `add`, `list`, `done`, `rm` commands work end to end via `src/cli.js`.
- Added CLAUDE.md rules, hooks, and agents; all committed.

## Failed
- Tried storing todos in `~/.todos.json`. Broke tests because they wrote to the real home directory. Reverted to `todos.json` in the current working directory.
- Tried a `--json` output flag inside `cli.js` directly. Made the switch unreadable; should live in a formatter in `todos.js` instead.

## Left to do
1. Add a `--verbose` flag to the CLI.
2. Add a function that counts completed todos, with a test.
3. Add a due-date field to todos (planned for the `feature` worktree).
