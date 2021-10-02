/*
let main = function() {
    osoba = {
        ime: 'Marko',
        prezime: 'Misic'
    };

    osoba.godiste = 1993;

    osoba['godiste'] = 1993;
    osoba[55] = 'nesto';
    osoba['Ime' + ' ' + 'prezime'] = 'Pera Petrovic';

    osoba[0] = 5;
    osoba[1] = 10;

    osoba.grad = 'Nis';
    delete osoba.grad;

    console.log(osoba);
    console.log(osoba['grad'])
}

main();
*/

let main = function() {
    let napraviOsobu = function(imeOsobe, prezOsobe) {
        //let osoba = {};
        this.ime = imeOsobe;
        this['prezime'] = prezOsobe;
        this.godiste = '';
        this.grad = 'Nis';

        //return osoba
    }

    let jovan =  new napraviOsobu('Jovan', 'Jovanovic');

    console.log(jovan);

    let studenti = {
        'jovangmail.om': {ime: 'Jovan', prezime: 'Jovanovic'},
        'pera@yahoo.com' : {ime: 'Marko', prezime: 'Markovic'}
    };

    console.log(studenti);
}

main();