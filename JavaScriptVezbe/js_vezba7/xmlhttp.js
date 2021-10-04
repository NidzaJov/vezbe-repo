let zahtev = new XMLHttpRequest();

let loadHendler = function() {
    console.log(zahtev);

    if (zahtev.status === 200) {
        let contentType = zahtev.getResponseHeader('content-type');

        if(contentType.indexOf('application/json') >= 0) {
            let responseOdServera = JSON.parse(zahtev.response);
            console.log(responseOdServera.avatar_url);
        }
    }
    else if (zahtev.status === 404) {
        alert('Doslo je do greske');
    }
    else {
        alert('Nepoznata greska');
    }
}

zahtev.addEventListener('load', loadHendler)

zahtev.open('GET', 'http://api.github.com/users/bencun')


zahtev.send();