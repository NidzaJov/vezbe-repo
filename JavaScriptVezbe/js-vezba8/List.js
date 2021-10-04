let ListItem = function(text) {
    this.text = text;
    this.completed = false;
}

let List = function() {
    this.listOfItems = [];

    this.addItem = function(item) {
        this.listOfItems.push(item);
        console.log('dodajem item', item);
    };

    this.removeItem = function(item) {
        let index = this.listOfItems.indexOf(item);
        if(index >= 0) {
            this.listOfItems.splice(index, 1)
        }
    };

};

export { ListItem, List}