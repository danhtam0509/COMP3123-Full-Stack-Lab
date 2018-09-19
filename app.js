
/* function greet() {
    console.log("Hello world!");
}
*/ 

/*
var greet = function() {
    for (i=0; i<10; i++) {
        console.log('Hello world!!');
    }
    for (i=0; i<10; i++) {
        console.log(getCurrentDateAndTime());
    }
}
*/

/* 
greet();

function getCurrentDateAndTime(){
    var currentDay = new Date();
    return "Current Date:" + currentDay.toLocaleDateString() + " Current Time:" + currentDay.toLocaleTimeString();
}
*/


var moment = require('moment');

var greet = function () {
    var wrapped = moment(new Date());
    console.log(wrapped);
}

greet();
