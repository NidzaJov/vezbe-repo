let main2 = function() {
    let saberi = function(x, y) {
        return x + y;
    }

    saberi.ime = "Aleksandar";
    saberi.prezime = "Bencun";
    saberi.kvadrat = function(x) {
        return x * x;
    };

    console.log(saberi(2,4));
    console.log(typeof saberi);
    console.log(saberi);
    console.log(saberi.prezime);
    console.log(saberi.kvadrat(5));
};

main2();