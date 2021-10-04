let main = function() {
    osoba = {
        ime: 'Marko',
        prezime: 'Misic'
    };

    osoba.godiste = 1993;
    osoba[55] = 'nesto';
    osoba['Ime' + ' ' + 'prezime'] = 'Pera Petrovic';

    osoba[0] = 5;
    osoba[1] = 10;

    osoba.grad = 'Nis';
    delete osoba.grad;

    console.log(osoba);
    console.log(osoba['grad']);

    let studenti = {
        "jovan@gmail.com" : {ime: 'Jovan', prezime: "Jovanovic"},
        "pera@yahoo.com": {ime: 'Marko', prezime: 'Markovic'}
    };

    console.log(studenti);
}

let main1 = function() {
    let napraviOsobu = function(imeOsobe, prezOsobe) {
        this.ime = imeOsobe;
        this['prezime'] = prezOsobe;
        this.godiste = '';
        this.grad = 'Nis';
    }

    let jovan = new napraviOsobu('Jovan', 'Jovanovic');

    console.log(jovan);
}

main();
main1();