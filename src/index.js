import './css/index.css';
import {
  displayTodos, addTodo, deleteTodo, editTodo,
} from './modules/todo-funtionalities.js';

displayTodos();

const addIcon = document.querySelector('#addIcon');
addIcon.addEventListener('click', addTodo);

const form = document.querySelector('#addToDoForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});

const toDoList = document.querySelector('.toDoList');
// ONCLIK
toDoList.addEventListener('click', (event) => {
  const { target } = event;
  // DELETE TODO
  if (target.classList.contains('remove')) {
    // Click from delete button
    let parent = target.parentElement.parentElement.parentElement;
    if (target.classList.contains('remove')) {
      parent = target.parentElement.parentElement;
    }
    const todoId = parent.id;
    deleteTodo(todoId);
  }
});

// ONFOCUSLOST
toDoList.addEventListener('focusout', (event) => {
  const { target } = event;
  if (target.type === 'text' && !target.classList.contains('completed')) {
    const { id } = target.dataset;
    editTodo(id, target.value);
  }
});
