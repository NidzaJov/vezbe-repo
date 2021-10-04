let myPromise = new Promise(function(resolve, reject) {
    resolve({ime: 'Jovan', prezime: 'Jov'});
});

// return === resolve
// throw === reject

myPromise.then(function(osoba) {
    console.log('Uspesan promise', osoba);
    let punoImeIPrezime = osoba.ime + ' ' + osoba.prezime;
    if (punoImeIPrezime.length > 10) {
        throw 'Ime i prezime je predugacko'
    }
    else {
        return punoImeIPrezime;
    }
})
.then(function(ImeiPrez) {
    console.log(ImeiPrez)
})
.catch(function(greska) {
    console.log("Neuspesan promise!", greska)
});

let uradiNesto = function(nekaDrugaFja) {
    nekaDrugaFja(
        function() {
            console.log('zdravo')
        },
        function() {
            console.log('svima')
        }
    );
};

uradiNesto(function(x, y) {
    x();
    y();
})