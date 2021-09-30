var dodajMinute = function(nekiDatum, brojMinuta) {
    var timestamp = nekiDatum.getTime();
    var minUMs = 60000*brojMinuta;
    var zbir = timestamp + minUMs;
    var konacniDatum = new Date(zbir);
    return konacniDatum;
}

var mojDatum = new Date(2020, 01, 13, 20, 00)
var mojDatumPlusPetMinuta = dodajMinute(mojDatum, 5);

console.log(mojDatumPlusPetMinuta);