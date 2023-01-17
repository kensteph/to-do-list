const toDoList = document.querySelector('.toDoList');

// My To Do list
let toDoListsArray = [];

const displayTodos = () => {
  // Sort the table of todos
  const sortedTodoLists = toDoListsArray.sort((a, b) => a.index - b.index);
  let myToDos = '';
  sortedTodoLists.forEach((todo) => {
    myToDos += `
    <li class="list-item" id="${todo.index}">
          <article class="status-title">
            <input class="status" type="checkbox" title="check!">
            <input data-id="${todo.index}" type="text" class="toDoEditInput" value="${todo.description}">
          </article>
          <article class="actions">
              <i class="fa fa-trash-can remove"></i>
              <article class="verticalDots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </article>
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

const deleteTodo = (todoId) => {
  todoId = +todoId;
  toDoListsArray = toDoListsArray.filter((book) => todoId !== book.index);
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
  displayTodos();
};

export {
  displayTodos, addTodo, deleteTodo, editTodo,
};
