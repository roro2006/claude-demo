import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addTodo, completeTodo, removeTodo, formatTodo } from '../src/todos.js';

test('addTodo assigns incrementing ids', () => {
  const todos = addTodo(addTodo([], 'a'), 'b');
  assert.deepEqual(todos.map((t) => t.id), [1, 2]);
});

test('completeTodo marks only the matching todo done', () => {
  const todos = completeTodo(addTodo(addTodo([], 'a'), 'b'), 2);
  assert.deepEqual(todos.map((t) => t.done), [false, true]);
});

test('removeTodo drops the matching todo', () => {
  const todos = removeTodo(addTodo(addTodo([], 'a'), 'b'), 1);
  assert.deepEqual(todos.map((t) => t.title), ['b']);
});

test('formatTodo shows a checkbox, id and title', () => {
  assert.equal(formatTodo({ id: 3, title: 'x', done: true }), '[x] 3. x');
});
