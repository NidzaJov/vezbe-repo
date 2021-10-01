var ime = "Dejan";

var stampajIme = function() {
    console.log(ime);
    var prezime = 'Grozdanovic';
    let godiste = 2000;

    var stampajPrezime = function() {
        console.log(prezime);
        godiste = 1983;
        console.log(godiste);
    };
    stampajPrezime();
    console.log(godiste);
}

stampajIme();

var main = function() {
    let a;
    if(true) {
        a = 10;
    }
    console.log(a);

    let i;
    for (i=0; i < 10; i++) {
        console.log(i);
    }
    console.log('i ima vrednost', i);

    const x = 5;
    //x = 10;
}

main();

var main = function() {
    let i;
    for(i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i)
    }
    console.log('gotovo');
};

main();