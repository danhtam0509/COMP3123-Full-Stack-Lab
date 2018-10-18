
var express = require('express');

var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


var requestTime = function (req, res, next) {
    req.requestTime = Date.now() 
    next()
}

app.use(requestTime)

app.get('/greet', function(req, res) {
    res.send('<html> <head></head> <body> <form action="./users" method="post"> <input name="firstname" type="text"/><input name="lastname" type="text"/><input type="submit" value="Submit"/></form></body></html>');
})

app.post('/users', function(req, res) {
    console.log('First name: ' + req.body.firstname);
    console.log('Last name: ' + req.body.lastname);
    res.send('Hello there')
})

app.listen(3000);


