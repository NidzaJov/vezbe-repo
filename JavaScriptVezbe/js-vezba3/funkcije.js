var izracunajStepen = function(osnova, stepen) {
    if(typeof osnova === "undefined" || typeof osnova !== 'number') {
        return false;
    }

    if (typeof(stepen) !== 'number') {
        var kvadratOsnove = izracunajStepen(osnova, 2)
        return kvadratOsnove;
    }

    var rezultat = 1;
    for(var brojac = 0; brojac < stepen; brojac++) {
        rezultat = rezultat * osnova;
    }
    return rezultat;
};

var stepenDvojke = izracunajStepen(2, 5);
var kvadratPetice = izracunajStepen(5);
var visestrukuStepen = izracunajStepen(izracunajStepen(2, 3), 2);
console.log(stepenDvojke);
console.log(kvadratPetice);
console.log(visestrukuStepen);
