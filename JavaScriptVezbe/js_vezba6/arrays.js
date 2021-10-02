let main2 = function() {
    let niz = ['a', 'b', 'c'];
    niz[20] = 'z';
    niz[21] = 'z';

    niz['ime'] = 'Milos';
    console.log(niz);
}

main2();