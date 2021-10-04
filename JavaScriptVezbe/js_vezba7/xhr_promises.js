
let myPromise1 = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        let stvariKojeMiTrebaju = {
            status: request.status,
            response: request.response,
            contentType: request.getResponseHeader('content-type')
        };
        resolve(stvariKojeMiTrebaju)
    });
    request.open('GET', 'http://api.github.com/users/bencun');
    request.send();
})

myPromise1.then(function(detaljiRequesta) {
    if (detaljiRequesta.status === 200) {
        return detaljiRequesta;
    }
    else{
        throw 'Request nije uspeo';
    }
})
.then(function(detaljiRequesta) {
    if (detaljiRequesta.contentType.indexOf('application/json' >= 0)) {
        return detaljiRequesta.response;
    }
    else {
        throw 'Nije JSON!';
    }
})
.then(function(response) {
    let objekat = JSON.parse(response);
    console.log(objekat);
    return objekat;
})
.catch(function(greska) {
    console.log('Doslo je do greske', greska);
});
