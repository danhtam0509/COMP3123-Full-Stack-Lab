
var moment = require('moment');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var counter = 0; 
var ping = function() {
    var wrapper = moment(new Date())
    var time = wrapper.format('LTS');

    if (counter >= 15) {
        console.log('Game Over!');
    }
    else {
        console.log('Ping!-- Count: ' + counter + '-- Time: ' + time);
        counter++;
        setTimeout(function() {
            eventEmitter.emit('Pong')
        }, 1000);

    }
}

var pong = function() {
    var wrapper = moment(new Date());
    var time = wrapper.format('LTS');

    console.log('Pong!-- Count: ' + counter + '-- Time: ' + time);
    counter++;
    setTimeout(function() {
        eventEmitter.emit('Ping')
    }, 1000);
}

eventEmitter.on('Ping', ping);
eventEmitter.on('Pong', pong);

eventEmitter.emit('Ping');