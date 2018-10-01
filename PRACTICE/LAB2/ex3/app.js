
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler: 
var fn = function() {
    console.log('call me.');
}

eventEmitter.on('call', fn);
// eventEmitter.emit('call');

var fn2 = function() {
    console.log('Alarm has been triggered!');
    eventEmitter.emit('911');
}

eventEmitter.on('alarm', fn2);

var fn3 = function() {
    console.log('Call 911!');
}

eventEmitter.on('911', fn3);
eventEmitter.emit('alarm');
