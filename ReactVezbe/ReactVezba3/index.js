const express = require('express');
const app = express();
const port = 4000;
const usersRouterInfo = require('./routes/users')
/*
app.get('/flights/:from-:to', function(req, res) {
    const params = req.params;
    console.log('Get is called for /about!', params);
    res.status(200);
    res.send('Hello there!')
});
*/
/*
app.route('/users')
  .get(function(req, res) {
      res.send('Hello GET!')
  })
  .post(function(req, res) {
      res.send('Hello POST!')
  })
*/
/*
app.use('/users', function(req, res, next) {
    console.log('My global middleware is executing!');
    next();
})
*/

app.get('/about', function(req, res) {
    console.log('About page GET!');
    res.send('It is a server!');
})

app.use(usersRouterInfo.path, usersRouterInfo.router)

app.listen(port, function() {
    console.log(`Server listening on port ${port}`)
});