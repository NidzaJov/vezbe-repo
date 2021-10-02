let main3 = function() {
    let x = 5;
    let rezerva;

    let y = 10, z = 20;

    let saberi = function(prvi, drugi) {
        let zbir = prvi + drugi;
        if (zbir > 30) {
            throw {greska: 'Zbir je veci od 30', zbir: zbir};
        } 

        return zbir;
    }

    y = saberi(y, z);

    try {
        x = saberi(x, y);
        console.log('X je jednako', x);
    }
    catch(greska) {
        console.log("Doslo je do greske", greska);
        rezerva = x + y;
    }

    console.log('Nastavljamo...', rezerva);

}

main3();