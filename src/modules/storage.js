export default class Storage {
  // Local Storage
  static saveToLocalStorage(data) {
    localStorage.setItem('MY-TODOS', JSON.stringify(data));
  }

  static getDataFromLocalStorage() {
    try {
      const data = JSON.parse(localStorage.getItem('MY-TODOS'));
      return data || []; // If there is no data return an empty array
    } catch (error) {
      return [];
    }
  }
}
