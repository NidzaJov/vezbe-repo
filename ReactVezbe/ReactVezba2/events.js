const EventEmitter = require('events');

const myEmitter = new EventEmitter('MY_EVENT');

myEmitter.addListener('MY_EVENT', function(a, b) {
    console.log('Listener 2', a, b)
    try{
        throw 'Ooops';
    }
    catch(e) {
        myEmitter.emit('error', e);
    }
});

myEmitter.on('error', function() {
    console.log('The error has occured!');
});

myEmitter.emit('MY_EVENT', 'Hello', 'word 1!')
myEmitter.emit('MY_EVENT', 'Hello', 'word 2!')
myEmitter.emit('MY_EVENT', 'Hello', 'word 3!')