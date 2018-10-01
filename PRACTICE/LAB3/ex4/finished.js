
var max = 50;

var callbackWait = function(counter, callback) {
    var waitTime = Math.floor(Math.random() * (max + counter));
    var timeStamp = new Date(Date.now()).toLocaleString();

    if (waitTime > max) {
        callback(new Error('WaitTime cannot be greater than Max Time'), null, null, null);
        return;
    }
    setTimeout(function() {
        callback(null, counter, waitTime, timeStamp);
    }, waitTime);
}

var handleCounter = function(err, counter, waitTime, timestamp) {
    if (err) {
        console.log('ERROR: ' + err.message);
    }
    else {
        console.log('Callback counter: ' + counter + ' Time ' + waitTime + ' ms ' + 'TimeStamp: ' + timestamp);
    }
}

for (var i = 0; i < 10; i++) {
    callbackWait(i, handleCounter);
}

