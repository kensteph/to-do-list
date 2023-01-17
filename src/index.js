import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faRefresh,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import './css/index.css';
import { displayTodos, addTodo, deleteTodo } from './js/todo.js';

// Using of the icon we want from fontawesome
library.add(faRefresh, faArrowLeft, faTrashAlt);
dom.watch();

displayTodos();

const form = document.querySelector('#addToDoForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});

const toDoList = document.querySelector('.toDoList');
// ONCLIK
toDoList.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.length === 0 || target.classList.contains('remove')) {
    // Click from delete button
    let parent = target.parentElement.parentElement.parentElement;
    if (target.classList.contains('remove')) {
      parent = target.parentElement.parentElement;
    }
    const todoId = parent.id;
    deleteTodo(todoId);
  }
});
