import { ListItem, List } from './List.js';
import { TodoForm } from './TodoForm.js';
import { TodoListRenderer } from './TodoListRenderer.js';
import { LocalStorageObject } from './LocalStorageModule.js'
//Glavni modul
// Pravimo novi objekat List i iz Local Storage ucitavamo list of items ako vec postoji
let mainTodoList = new List();

const postojecaLista = LocalStorageObject.loadList();

if (postojecaLista) {
    mainTodoList.listofItems = postojecaLista;
} 
//Na divu sa ID-jem #todoForm pravimo input polje za text i dugme 'Add Task' 
//dodajemo event listenere za klik na dugme ili enter u polju, listener je f-ja
// ButtonClickCallback koja dodaje novi listItem u listofItems i renderuje i pamti ga u Local Storage
let todoForm = new TodoForm('#todoForm', function(itemText) {
    let ItemObject = new ListItem(itemText);
    mainTodoList.addItem(ItemObject);
    listRenderer.renderList();
    LocalStorageObject.saveList(mainTodoList.listOfItems);
});
// Na divu sa ID-ijem #todoList pravimo <ul> sa <li> elementima koji sadrze checkbox , span sa textom i dugme trash
//dugme trash ima listener za f-ju deleteButtonCallback koja uklanja item iz listItema i renderuje i pamti u LS
//element li ili checkbox iamju listenere za funkciju ItemClickedCallback koja stiklira checkbox, renderuje i pamti listu u LS
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
