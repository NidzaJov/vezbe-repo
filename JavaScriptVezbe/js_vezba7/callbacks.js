let main5 = function() {
    let printHello = function(callback, x) {
        console.log('Hello');
        let rezultat = callback(x);
        console.log(rezultat);
    };

    printHello(function(broj) {
        return broj*broj;

    }, 10)

    console.log('Kraj main funkcije');

    let uradiNestoSaBrojem = function(nesto) {
        console.log(nesto);
        nesto();
    }

    uradiNestoSaBrojem(function() {
        console.log('zdravo!');
    });
}

//main5();

let main6 = function() {
    let printHello = function(nekoImeZaFunkcije) {
        console.log("Hello");
        nekoImeZaFunkcije();
    }

    printHello(function() {
        console.log('Done');
    });
}

//main6();