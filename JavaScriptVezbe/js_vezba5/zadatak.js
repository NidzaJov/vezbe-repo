let main = function() {
    let lista = document.querySelector('.namirnice');

    let klikHendler = function() {
        let sadrzi = lista.classList.contains('nevidljiv');

        if (sadrzi) {
            lista.classList.remove('nevidljiv');
        }
        else {
            lista.classList.add('nevidljiv');
        }
    };
    let dugme = document.querySelector('#dugme');
    dugme.addEventListener('click', klikHendler);

    let namirnice = ['Mleko', 'Hleb', 'Secer', 'Cvekla'];
    namirnice.forEach(function(imeNamirnice) {
        let listElement = document.createElement('li');
        listElement.textContent = imeNamirnice;
        lista.appendChild(listElement);
    })

    let dugmeDodaj = document.querySelector('#dugmeDodaj');
    let novaNamirnicaText = document.querySelector("#novaNamirnica");
    let dodajNamirnicu = function() {
        let nam = novaNamirnicaText.value;
        novaNamirnicaText.value = '';
        let namLiElement = document.createElement('li');
        namLiElement.textContent = nam;
        lista.appendChild(namLiElement);
    };
    dugmeDodaj.addEventListener('click', dodajNamirnicu);
};
main();


