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

export { completeTodo };