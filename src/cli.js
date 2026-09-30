#!/usr/bin/env node
import { loadTodos, saveTodos } from './storage.js';
import { addTodo, completeTodo, removeTodo, formatTodo } from './todos.js';

const USAGE = 'usage: todo <add "title" | list | done <id> | rm <id>>';

function main(argv) {
  const [command, ...args] = argv;
  const todos = loadTodos();

  switch (command) {
    case 'add':
      if (!args[0]) return console.error(USAGE);
      saveTodos(addTodo(todos, args.join(' ')));
      return;
    case 'list':
      todos.forEach((t) => console.log(formatTodo(t)));
      return;
    case 'done':
      saveTodos(completeTodo(todos, Number(args[0])));
      return;
    case 'rm':
      saveTodos(removeTodo(todos, Number(args[0])));
      return;
    default:
      console.error(USAGE);
      process.exitCode = 1;
  }
}

main(process.argv.slice(2));
