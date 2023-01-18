import Storage from './storage.js';
import Todo from './todo.js';

const toDoList = document.querySelector('.toDoList');

// My To Do list
let toDoListsArray = [];

const displayTodos = () => {
  // Get the todos from local storage
  toDoListsArray = Storage.getDataFromLocalStorage();
  // Sort the table of todos
  const sortedTodoLists = toDoListsArray.sort((a, b) => a.index - b.index);
  let myToDos = '';

  sortedTodoLists.forEach((todo) => {
    const checked = todo.completed ? 'checked' : '';
    const complete = todo.completed ? ' completed' : '';
    myToDos += `
    <li class="list-item" id="${todo.index}">
          <article class="status-title">
            <input data-id="${todo.index}" class="status" type="checkbox" ${checked} title="check!">
            <input data-id="${todo.index}" type="text" class="toDoEditInput ${complete}" value="${todo.description}" title="Click on '${todo.description}' to EDIT it.">
          </article>
          <article class="actions">
          <span class="material-symbols-outlined remove">delete</span>
          <span class="material-symbols-outlined verticalDots">more_vert</span>
          </article>
          
          
        </li>`;
  });
  toDoList.innerHTML = myToDos;
};

const addTodo = () => {
  const toDoInput = document.querySelector('#toDoInput');
  const todoDescription = toDoInput.value;

  if (todoDescription.trim().length !== 0) {
    const todoId = toDoListsArray.length + 1;
    const todoObj = new Todo(todoDescription, todoId);
    toDoListsArray.push(todoObj);
    // Save to local storage
    Storage.saveToLocalStorage(toDoListsArray);
    toDoInput.value = '';
    displayTodos();
  }
};

const deleteTodo = (todoId) => {
  todoId = +todoId;
  toDoListsArray = toDoListsArray.filter((book) => todoId !== book.index);
  const arrLength = toDoListsArray.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrLength; i++) {
    toDoListsArray[i].index = i + 1;
  }
  // Save to local storage
  Storage.saveToLocalStorage(toDoListsArray);
  displayTodos();
};

const editTodo = (todoId, newVal) => {
  todoId = +todoId;
  toDoListsArray = toDoListsArray.map((todo) => {
    if (todoId === todo.index) {
      return { ...todo, description: newVal };
    }
    return todo;
  });
  // Save to local storage
  Storage.saveToLocalStorage(toDoListsArray);
  displayTodos();
};

export {
  displayTodos, addTodo, deleteTodo, editTodo,
};
