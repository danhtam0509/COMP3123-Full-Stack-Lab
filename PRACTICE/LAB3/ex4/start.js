

var handleCounter = function (result) {
    console.log('The callback count is ' + result);
}

var callbackLoop = function(counter, callback) {
    for ( i = 0; i < counter; i++ ) {
        callback(i);
    }
    console.log('*** Exiting callbackLoop ****');
};

callbackLoop(5, handleCounter);
callbackLoop(2, handleCounter);
callbackLoop(7, handleCounter);
