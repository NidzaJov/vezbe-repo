let main8 = function() {
    let message = 'zdravo!';
    let mojInterval, brojac = 0, brojPonavljanja = 10;

    let sayHello = function() {
        brojac += 1;
        console.log(message, brojac);

        if (brojac === brojPonavljanja) {
            clearInterval(mojInterval);
        }
    };

    mojInterval = setInterval(sayHello, 1000);
}

//main8();