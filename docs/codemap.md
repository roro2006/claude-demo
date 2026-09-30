# Codemap
Short map of the repo so nobody has to explore it.

| Path | Purpose | Exports |
| --- | --- | --- |
| `src/cli.js` | Argument parsing, prints output | (entry point) |
| `src/todos.js` | Pure todo logic | `addTodo`, `completeTodo`, `removeTodo`, `formatTodo`, `legacyFormatTodo` |
| `src/storage.js` | Reads/writes `todos.json` | `loadTodos`, `saveTodos`, `DEFAULT_FILE` |
| `test/todos.test.js` | Tests for `src/todos.js` | |
| `.claude/` | Rules, skills, agents, hooks, session notes | |

Todos are persisted to `todos.json` in the current working directory (see `src/storage.js`).
