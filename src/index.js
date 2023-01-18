import './css/index.css';
import { completeTodo } from './modules/status.js';
import {
  displayTodos,
  addTodo,
  deleteTodo,
  editTodo,
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

  // COMPLETE TODO
  if (target.type === 'checkbox' && target.classList.contains('status')) {
    const todoId = target.dataset.id;
    // Get the input description
    const inputText = target.nextElementSibling;
    // Get the valu of checkd
    const isCheck = target.checked;
    if (isCheck) {
      // Set it read only
      inputText.setAttribute('readonly', true);
      // Set the text decoration line through
      inputText.classList.add('completed');
    } else {
      // Set it read only
      inputText.setAttribute('readonly', false);
      // Remove text decoration line through
      inputText.classList.remove('completed');
    }
    completeTodo(todoId);
    displayTodos();
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
