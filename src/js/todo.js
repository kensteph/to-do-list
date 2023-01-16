const toDoList = document.querySelector('.toDoList');

// My To Do list
const toDoListsArray = [
  {
    description: ' Standup team meeting',
    completed: false,
    index: 5,
  },
  {
    description: 'Program time 2',
    completed: false,
    index: 3,
  },
  {
    description: ' Program time 1',
    completed: false,
    index: 2,
  },
  {
    description: ' Morning session',
    completed: false,
    index: 1,
  },
  {
    description: ' Prep for your standup call',
    completed: false,
    index: 4,
  },
];

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

// eslint-disable-next-line import/prefer-default-export
export { displayTodos };
