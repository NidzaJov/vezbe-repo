var arr = ['2019-02-14', '2016-07-02', '2020-08-30', '2020-12-30', '1993-01-12'];

var nadjiMax = function(nizDatuma) {
    var maximum = 0;

    for(var index = 0; index < nizDatuma.length; index++)
    {
        var datum = new Date(nizDatuma[index]);
        var milOdDatuma = datum.getTime();
        console.log(milOdDatuma);

        if(maximum < milOdDatuma) {
            maximum = milOdDatuma;
        }
    }

    var konacniDatum = new Date(maximum);
    return konacniDatum;
}

var maximalnaVrednost = nadjiMax(arr);
console.log('Maksimalna vrednost je', maximalnaVrednost);