

var getCurrentDateAndTime = function() {
    var today = new Date();
    console.log(today.toUTCString());
}

function greet() {
    for (i = 0; i < 10; i++) {
        getCurrentDateAndTime();
    }
}

greet();