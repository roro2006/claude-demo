export function addTodo(todos, title) {
  const id = todos.reduce((max, t) => Math.max(max, t.id), 0) + 1;
  return [...todos, { id, title, done: false }];
}

export function completeTodo(todos, id) {
  return todos.map((t) => (t.id === id ? { ...t, done: true } : t));
}

export function removeTodo(todos, id) {
  return todos.filter((t) => t.id !== id);
}

export function formatTodo(todo) {
  return `${todo.done ? '[x]' : '[ ]'} ${todo.id}. ${todo.title}`;
}

// TODO(demo): nothing calls this anymore
export function legacyFormatTodo(todo) {
  return todo.id + ' - ' + todo.title + (todo.done ? ' (done)' : '');
}
