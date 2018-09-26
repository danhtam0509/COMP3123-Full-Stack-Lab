

var getCurrentDateAndTime = function() {
    var d = new Date();
    console.log("Current Date: " + d.toLocaleDateString() + " Current Time: " + d.toLocaleTimeString())
}

getCurrentDateAndTime();