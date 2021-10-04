let request = new Request('http://api.github.com/users/bencun', {method: 'GET'/*, mode: 'no-cors'*/});

fetch(request) 
.then(function(response) {
    if (response.ok) {
        return response.json();
    }
    else {
        throw 'Response nije ok';
    }
})
.then(function(objekat) {
    console.log(objekat);
})
.catch(function(greska) {
    console.log('Greska!', greska)
});