
var getCurrentDateAndTime = function() {
    var d = new Date();
    console.log(d.toLocaleString())
}

var greet = function() {
    for (i = 0; i < 10; i++) {
        console.log("Hello World!!");
        getCurrentDateAndTime();
    }
}

greet();



