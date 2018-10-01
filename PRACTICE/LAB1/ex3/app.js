
var getCurrentDateAndTime = function() {
    var today = new Date();
    var date = today.toLocaleDateString();
    var time = today.toLocaleTimeString();
    console.log("Current Date: " + date + " Current Time: " + time);
}

getCurrentDateAndTime();