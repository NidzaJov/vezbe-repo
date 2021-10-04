import { ListItem }  from'./List.js';
import { mainTodoList, renderedList } from './main.js';

let TodoForm = function(targetSelector) {
    let targetElement = document.querySelector(targetSelector);

    let inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('placeholder', 'Enter the task...');

    let addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.addEventListener('click', function() {
        let itemText = inputField.value;
        let itemObject = new ListItem(itemText);
        mainTodoList.addItem(itemObject);
        renderedList.renderList();
    });

    targetElement.appendChild(inputField);
    targetElement.appendChild(addTaskButton);
};

export { TodoForm };
