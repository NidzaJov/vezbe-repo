let main = function() {
    let printDone = function() {
        console.log('Done!')
    }

    let sayHello = function(callback) {
        console.log('Hello');
        callback();
    }

    sayHello(printDone);
}

main();