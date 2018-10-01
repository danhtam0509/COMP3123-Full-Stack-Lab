const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

var amount = 0;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Slot Machine.\n');

    var urlParse = url.parse(req.url, true);

    if (urlParse.pathname === '/play') {
        var queryData = urlParse.query;
        this.amount = queryData.amount;
        console.log('Playing...amount: ' + this.amount);
    }
    else if (urlParse.pathname === '/spin') {
        console.log('spinning..');
        if(this.amount === 'max') {
            console.log('Jackpot!!!');
        }
        else {
            console.log('Amount lost:' + this.amount);
        }
        this.amount = 0;
    }
    else {
        console.log('Please play or spin.');
    }
});

server.listen(port, hostname, () => {
    
})