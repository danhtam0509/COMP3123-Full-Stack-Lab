
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler: 
var myEventHandler = function () {
    console.log('Alarm has been triggered!');
    eventEmitter.emit('call');
}

var callHandler = function() {
    console.log('Call 911!');
}

// Assign the eventhandler to an event
// eventEmitter.on('alarm', myEventHandler);
// eventEmitter.on('call', callHandler);

// event chaning
eventEmitter
    .on('alarm', myEventHandler)
    .on('call', callHandler);

// Fire the 'scream' event:
eventEmitter.emit('alarm');