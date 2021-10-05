import { ListItem, List } from './List.js';
import { TodoForm } from './TodoForm.js';
import { TodoListRenderer } from './TodoListRenderer.js';
import { LocalStorageObject } from './LocalStorageModule.js'


let mainTodoList = new List();

const postojecaLista = LocalStorageObject.loadList();

if (postojecaLista) {
    mainTodoList.listofItems = postojecaLista;
} 

let todoForm = new TodoForm('#todoForm', function(itemText) {
    letItemObject = new ListItem(itemText);
    mainTodoList.addItem(ItemObject);
    listRenderer.renderList();
    LocalStorageObject.saveList(mainTodoList.listOfItems);
});

let listRenderer = new TodoListRenderer(
    mainTodoList,
    '#todoList',
     function(item) {
         mainTodoList.removeItem(item);
         listRenderer.renderList();
         LocalStorageObject.saveList(mainTodoList.listOfItems);
     },
     function(item) {
        item.completed = !item.completed;
        listRenderer.renderList();
        LocalStorageObject.saveList(mainTodoList.listOfItems);
     });

listRenderer.renderList();
