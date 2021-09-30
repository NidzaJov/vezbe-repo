var napraviOsobu = function(imeOsobe, prezimeOsobe, gradOsobe, godisteOsobe) {
    var osoba = {};

    osoba.ime = imeOsobe;
    osoba.prezime = prezimeOsobe;

    if(typeof gradOsobe !== 'string') {
        osoba.grad = 'Nis';
    }
    else {
        osoba.grad = gradOsobe;
    }

    if(typeof(godisteOsobe !== 'number')) {
        osoba.godiste = 1993;
    }
    else {
        osoba.godiste = godisteOsobe;
    }

    return osoba;
}

var aleksandar = napraviOsobu('Aleksandar', 'Bencun', 'Nis', 1993);
var strahinja = napraviOsobu('Strahinja', 'Stamenkovic');
console.log(aleksandar);
console.log(strahinja);

var Osoba = function(imeOsobe, prezimeOsobe, gradOsobe, godisteOsobe) {
    this.ime = imeOsobe;
    this.prezime = prezimeOsobe;

    if(typeof(gradOsobe) !== 'string') {
        this.grad = 'Nis';
    }
    else {
        this.grad = gradOsobe;
    }
    if (godisteOsobe !== 'number') {
        this.godiste = 1993;
    }
    else {
        this.godiste = godisteOsobe;
    }
};

var petar = new Osoba('Petar', 'Petrovic', 'Beograd', 1998)
console.log(petar);