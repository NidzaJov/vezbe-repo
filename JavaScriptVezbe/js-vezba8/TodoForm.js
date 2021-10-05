let TodoForm = function(targetSelector, buttonClickCallback) {
    
    let targetElement = document.querySelector(targetSelector);

    const addItem = function (event) {
        let performEvent = function() {
            let itemText = inputField.value;
            inputField.value = '';
            buttonClickCallback(itemText);
        };

        if (event.type === 'click') {
            performEvent();
        }
        else if (event.type === 'keydown' && event.key === 'Enter') {
            performEvent();
        }
    };

    let inputField = document.createElement('input');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('placeholder', 'Enter the task...');
    inputField.classList.add('todo-input');
    inputField.addEventListener('keydown', addItem);

    let addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.classList.add('todo-button')
    
    addTaskButton.addEventListener('click', addItem);

    targetElement.appendChild(inputField);
    targetElement.appendChild(addTaskButton);
};

export { TodoForm };
