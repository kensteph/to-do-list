import Storage from './storage.js';

const completeTodo = (todoId) => {
  todoId = +todoId;
  // Get todos from Local Storage
  let toDoListsArray = Storage.getDataFromLocalStorage();
  toDoListsArray = toDoListsArray.map((todo) => {
    if (todoId === todo.index) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  // Save the changes in local Storage
  Storage.saveToLocalStorage(toDoListsArray);
};

const clearAllcompleteTodo = () => {
  // Get todos from Local Storage
  let toDoListsArray = Storage.getDataFromLocalStorage();
  toDoListsArray = toDoListsArray.filter((todo) => todo.completed === false);
  // Reindexing
  const arrLength = toDoListsArray.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrLength; i++) {
    toDoListsArray[i].index = i + 1;
  }
  // Save the changes in local Storage
  Storage.saveToLocalStorage(toDoListsArray);
};

export { completeTodo, clearAllcompleteTodo };