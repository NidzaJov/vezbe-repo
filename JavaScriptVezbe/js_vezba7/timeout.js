let main7 = function() {
    let message = 'zdravo!';

    let sayHello = function() {
        console.log(message);
    };

    setTimeout(sayHello, 3000);

    setTimeout(function() {
        console.log(message)
    }, 3000)
}

//main7();