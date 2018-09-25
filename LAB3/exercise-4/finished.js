
var max = 50;

var handleCounter = function (err, counter, waitTime, timestamp) {
    if (err) console.log(err)
    else {
        console.log("Callback counter: " + counter + " Time: " + waitTime + " ms TimeStamp: " + timestamp);
    }
};

var callbackWait = function(counter, callback) {
    var waitTime = Math.floor((Math.random()*60) + 1);
    var timestamp = new Date();
    if (waitTime > max) {
       var error = Error("ERROR: WaitTime cannot be greater than Max Time");
       callback(error.message, counter, waitTime, timestamp);
    }
    else {
        setTimeout(callback, waitTime, "", counter, waitTime, timestamp.toUTCString());
    }
}

for (var i=0; i < 10; i++) {
    callbackWait(i, handleCounter);    
}