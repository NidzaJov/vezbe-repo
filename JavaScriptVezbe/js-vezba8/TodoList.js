import {mainToDoList, renderedList} from './main.js';

let ToDoList = function(ItemList, targetSelector) {

    this.renderList = function() {
        let targetElement = document.querySelector(targetSelector);
        targetElement.innerHTML = '';

        let unorderedList = document.createElement('ul');
        ItemList.listOfItems.forEach(function(item) {
            let listItem = document.createElement('li');
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            let itemText = document.createElement('span');
            itemText.textContent = item.text;
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', function() {
                mainToDoList.removeItems(item);
                renderedList.renderList();
            });
            listItem.appendChild(checkbox);
            listItem.appendChild(itemText);
            listItem.appendChild(deleteButton);
            unorderedList.appendChild(listItem);
        });

        targetElement.appendChild(unorderedList);
    };
    
};

export { ToDoList };