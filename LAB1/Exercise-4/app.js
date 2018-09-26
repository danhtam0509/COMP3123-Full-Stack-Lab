var moment = require('moment');

var greet = function() {
    var wrapped = moment(new Date());
    console.log(wrapped);
    var date = wrapped.format('l');
    var time = wrapped.format('LTS')
    console.log("Date: " + date + " Time: " + time);
}

greet();

