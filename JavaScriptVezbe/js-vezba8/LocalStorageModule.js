const LocalStorageObject = {
    saveList: function(list) {
        const objectToString = JSON.stringify(list);
        localStorage.setItem('todolist', objectToString)
    },
    loadList: function() {
        const listAsString = localStorage.getItem('todolist');
        const converted = JSON.parse(listAsString);
        return converted;
    }
};

export { LocalStorageObject }