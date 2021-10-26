const express = require('express');
const app = express();
const port = 4000;

app.get('/', function(req, res) {
    console.log('Get is called');
    res.end();
});

app.listen(port, function() {
    console.log(`Server listening on port ${port}`)
});