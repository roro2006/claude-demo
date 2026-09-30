# cc-course-lab

Small Node (ESM) todo CLI. Entry: `src/cli.js`. Pure logic: `src/todos.js`. Disk I/O: `src/storage.js`. Tests: `test/`.

## Commands
- Run tests: `npm test`
- Run the CLI: `node src/cli.js <add|list|done|rm>`

## Rules
- Never commit debug prints (`console.log` used for debugging, `print(`). CLI output in `src/cli.js` is the only allowed `console.log`.
- Every behavior change ships with a test in `test/` in the same change.
- Keep logic in `src/todos.js` as pure functions; only `src/storage.js` touches the disk.
- Prefer small, named functions over inline logic in `cli.js`.
- Run `npm test` before saying a task is done.

More detail lives in `.claude/rules/` (testing, git, security).
