let TodoListRenderer = function(ItemList, targetSelector, deleteButtonCallBack, ItemClickedCallback) {

    this.renderList = function() {
        let targetElement = document.querySelector(targetSelector);
        targetElement.innerHTML = '';

        let unorderedList = document.createElement('ul');
        unorderedList.classList.add('todo-list');

        ItemList.listOfItems.forEach(function(item) {
            let listItem = document.createElement('li');
            listItem.classList.add('todo-list-item');

            let checkbox = document.createElement('input');
            checkbox.classList.add('item-checkbox');
            checkbox.setAttribute('type', 'checkbox');
            if (item.completed) {
                checkbox.setAttribute('checked', '');
            }
            checkbox.addEventListener('click', function(event) {
                event.preventDefault();
            })

            let itemText = document.createElement('span');
            itemText.classList.add('item-text');
            itemText.textContent = item.text;

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('item-delete');
            let iElement = document.createElement('i');
            iElement.classList.add('fas', 'fa-trash');
            deleteButton.appendChild(iElement);
            deleteButton.addEventListener('click', function(event) {
               event.stopPropagation();
               deleteButtonCallBack(item)
            });
            
            listItem.appendChild(checkbox);
            listItem.appendChild(itemText);
            listItem.appendChild(deleteButton);

            listItem.addEventListener('click', function() {
                ItemClickedCallback(item);
            })
            unorderedList.appendChild(listItem);
        });

        targetElement.appendChild(unorderedList);
    };
    
};

export { TodoListRenderer };