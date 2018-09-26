
var event = require('events');
var eventEmitter = new event.EventEmitter();

var fn = function() {
    console.log('call  me.');
}

eventEmitter.on('call', fn);
eventEmitter.emit('call');

