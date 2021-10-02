let main = function() {
    let textualnoPolje = document.querySelector('#broj');
    let pocniBrojanjeDugme = document.querySelector('#pocniBrojanje');

    let vrednostBrojaca = 0;

    let listenerZaDugme = function() {
        let vrednostPolja = textualnoPolje.value;
        vrednostPolja = parseInt(vrednostPolja);

        if (isNaN(vrednostPolja)) {
            alert('Niste uneli ispravan broj!');
            textualnoPolje.value = '';
        }
        else{
            zapocniBrojanje(vrednostPolja);

            pocniBrojanjeDugme.removeEventListener('click', listenerZaDugme);
            textualnoPolje.setAttribute('disabled', '');
            pocniBrojanjeDugme.setAttribute('disabled', '');
        }

        console.log(typeof vrednostPolja, vrednostPolja)
    }

    let zapocniBrojanje = function(OdKoliko) {
        vrednostBrojaca = OdKoliko;
        let intervalBrojanja = setInterval(function() {
            let brojacParagraf = document.querySelector("#brojac");
            brojacParagraf.textContent = vrednostBrojaca;

            vrednostBrojaca--;
            if (vrednostBrojaca === -1) {
                clearInterval(intervalBrojanja);

                pocniBrojanjeDugme.addEventListener('click', listenerZaDugme);
                textualnoPolje.removeAttribute('disabled');
                pocniBrojanjeDugme.removeAttribute('disabled');
            }
        }, 1000);
    };

    pocniBrojanjeDugme.addEventListener('click', listenerZaDugme);
}

main();