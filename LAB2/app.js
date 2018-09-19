// Exercise 1
var ft = require('./sportsteam/index.js');

// set module property
ft.teamname = 'Leafs';

// call module method
ft.Cheer();

ft.Boo();

// Exercise #2
var comp = require('./comparer')
var cal = require('./calculator/')

var num1 = 5, num2 = 10;
/*
if (comp.AreNumbersEqual(num1, num2)) {
    console.log("Numbers are equal");
    console.log("Adding two numbers");
    console.log(cal.Add(num1, num2));
}
else {
    console.log("Numbers are not equal \n Subtracting two numbers \n" + cal.Subtract(num1, num2))
}   */

// using ternary operator
var result = (comp.AreNumbersEqual(num1, num2)) ? cal.Add(num1, num2) : cal.Subtract(num1, num2);
console.log(result);

// Exercise 3
var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function() {
    console.log('call me.');
}

eventEmitter.on('call', fn);
eventEmitter.emit('call');

function fn2() {
    console.log('Alarm has been triggered!');
}

var f3 = function () {
    console.log('Call 911')
}
eventEmitter.on('alarm', fn2).on('911', f3);

eventEmitter.emit('alarm');
eventEmitter.emit('911');

// Exercise 4
