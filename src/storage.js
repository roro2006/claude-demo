import { readFileSync, writeFileSync, existsSync } from 'node:fs';

export const DEFAULT_FILE = 'todos.json';

export function loadTodos(file = DEFAULT_FILE) {
  if (!existsSync(file)) return [];
  return JSON.parse(readFileSync(file, 'utf8'));
}

export function saveTodos(todos, file = DEFAULT_FILE) {
  writeFileSync(file, JSON.stringify(todos, null, 2) + '\n');
}
