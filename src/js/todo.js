const toDoList = document.querySelector('.toDoList');

// My To Do list
const toDoListsArray = [];

const displayTodos = () => {
  // Sort the table of todos
  const sortedTodoLists = toDoListsArray.sort((a, b) => a.index - b.index);
  let myToDos = '';
  sortedTodoLists.forEach((todo) => {
    myToDos += `
    <li class="list-item" id="${todo.index}">
          <article class="status-title">
            <input class="status" type="checkbox" title="check!">
            <span class="title">${todo.description}</span>
          </article>
          <article class="verticalDots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </article>
        </li>`;
  });
  toDoList.innerHTML = myToDos;
};

const addTodo = () => {
  const toDoInput = document.querySelector('#toDoInput');
  const todo = toDoInput.value;

  if (todo.trim().length !== 0) {
    const todoId = toDoListsArray.length + 1;
    const todoObj = {
      description: todo,
      completed: false,
      index: todoId,
    };
    toDoListsArray.push(todoObj);
    toDoInput.value = '';
    displayTodos();
  }
};

export { displayTodos, addTodo };
