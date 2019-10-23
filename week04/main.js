import { qs } from '/ToDos.js';
import ToDos from '/ToDos.js';

const myToDos = new ToDos(qs('#taskList'), 'task');

myToDos.addToDo();
