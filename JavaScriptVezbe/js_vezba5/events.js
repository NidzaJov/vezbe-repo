let prvaFja = function(event) {
    console.log('1');
}

let drugaFja = function(event) {
    console.log('2');
}

let trecaFja = function(dog) {
    console.log('3 1');
}

let cetvrtaFja = function() {
    console.log('3 2');
}

let dugme = document.querySelector('#dugme');
dugme.addEventListener('click', prvaFja);

let kzb = document.querySelector("#kontejnerZaButton");
kzb.addEventListener('click', drugaFja);

let josJedanKont = document.querySelector('#josJedanKontejner');
josJedanKont.addEventListener('click', trecaFja, true);
josJedanKont.addEventListener('click', cetvrtaFja);

let x = function() {
    console.log('Ovo je x');
};

let y = x;
let z = y;
z();
