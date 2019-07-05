import { ITodos, Action } from './todoContext';

const todosReducer = (todos: ITodos[], action: Action) => {
  const addTask = (text: string) => {
    if (text.length > 0) {
      const uuidv1 = require('uuid/v1');
      let newTask = { uuid: uuidv1(), text: text, complete: false };
      localStorage.setItem('tasks', JSON.stringify([...todos, newTask]));
      return [...todos, newTask];
    } else return todos;
  };

  const deleteTask = (id: number) => {
    const newTodos = todos.filter((_, idx) => idx !== id);
    localStorage.setItem('tasks', JSON.stringify(newTodos));
    return newTodos;
  };

  const checkTask = (id: number) => {
    const newTodos = todos.map((todo, k) =>
      k === id ? { ...todo, complete: !todo.complete } : todo)
    localStorage.setItem('tasks', JSON.stringify(newTodos));
    return newTodos
  };

  const reverseTasks = () => {
    document.getElementById('btnReverse')!.classList.toggle("colored")
    return todos.reverse().map((todo, k) => (k ? { ...todo } : todo));
  };

  const mode = (mode: string): void => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('mode', mode);
  };

  switch (action.type) {
    case 'ADD':
      return addTask(action.text);
    case 'DELETE':
      return deleteTask(action.id);
    case 'DONE':
      return checkTask(action.id);
    case 'REVERSE':
      return reverseTasks();
    case 'DARKMODE':
      action.mode ? mode("false") : mode("true");
      return todos;
    default:
      return todos;
  }
};

export default todosReducer;
