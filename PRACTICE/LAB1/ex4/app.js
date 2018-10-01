

var moment = require('moment');

var greet = function() {
    var wrapped = moment(new Date());
    console.log(wrapped);
}

greet();

