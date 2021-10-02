let main5 = function() {
    let message = 'zdravo';
    let sayHello = function() {
        console.log(message);
    }

    setTimeout(sayHello, 3000);
};

main5();