
var express = require('express');
var app = express();

app.listen(3000);

var requestTime = function(req, res, next) {
    req.requestTime = Date.now()
    next()
};

app.use(requestTime);

app.get('/greet', function(req, res) {
    console.log('GET received: ' + req.requestTime);
    res.send('Hello World!');
});

app.post('/greet', function(req, res) {
    console.log('POST recieved');
    res.send('Test Post Method!');
});
