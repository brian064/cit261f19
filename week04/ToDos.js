let liveToDos = [
  {todo: 'Do Stuff'}
];

function readFromLS(key) {
  return localStorage.getItem(JSON.parse(key));
}

function writeToLS(key) {
  return localStorage.setItem(key, JSON.stringify(liveToDos));
}

function bindTouch(elementSelector, callback) {
  const element = qs(elementSelector);
  element.addEventListener('touchend', event => {
    event.preventDefault();
    callback();
  });
  element.addEventListener('click', callback);
}

export function qs(className) {
  return document.querySelector(className);
}

class ToDos {
  constructor(listElement, key) {
    this.listElement = listElement;
    this.key = key;
    bindTouch('#addButton', this.addToDo)
  }

  addToDo() {
    const input = qs('#taskInput');
    console.log(input.value);
  }

  listToDos() {

  }

}

export default ToDos;
