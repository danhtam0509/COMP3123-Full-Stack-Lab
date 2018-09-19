
var request = require('request');

var fs = require('fs');

request('http://www.google.com', function(error, res, body) {
    console.log('body:', body);
})

const writable = fs.createWriteStream('output.html');
request('http://www.google.com').pipe(writable);