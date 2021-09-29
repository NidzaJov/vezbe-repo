var osoba = {
    ime: 'Aleksandar',
    prezime: 'Bencun'
};

osoba.godiste = 1993;

osoba.adresa = {
    ulica: 'Ne znate moju ulicu',
    broj: 55
};

osoba.adresa.broj = 50;

//console.log(osoba);

var student = {
    ime: 'Marko',
    prezime: 'Jovic',
    adresa: {
        ulica: 'Maksima Gorkog 9',
        broj: '9'
    }
};

var noviStudent = student;
var najnovijiStudent = noviStudent;
noviStudent.ime = 'Srdjan';
student = null;

console.log(student);
console.log(noviStudent);
console.log(najnovijiStudent);