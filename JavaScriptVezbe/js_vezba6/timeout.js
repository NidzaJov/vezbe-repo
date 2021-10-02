let main1 = function() {
    let message = 'Hello';

    let sayHello = function() {
        console.log(message);
    }

    setTimeout(sayHello, 3000);
}

main1();