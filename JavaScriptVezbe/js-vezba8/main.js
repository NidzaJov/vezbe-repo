import { ListItem, List } from './List.js';
import { TodoForm } from './TodoForm.js';
import { TodoList } from './TodoList.js';


let mainTodoList = new List();

mainTodoList.addItem(new ListItem('Kupi hleb'));
mainTodoList.addItem(new ListItem('Kupi mleko'));
mainTodoList.addItem(new ListItem('Izbaci smece'));

let TodoForm = new TodoForm('#todoForm');
let renderedList = new TodoList(mainTodoList, '#todoList');
renderedList.renderList();

export { mainTodoList, renderedList };