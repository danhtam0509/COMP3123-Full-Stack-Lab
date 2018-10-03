const http = require('http');
var osinfo = require('./osinfo');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json'});

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('No data found');
    }
    else if(req.url === '/api/systeminfo') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var systemInfo = osinfo.systemInfo.getSysteminfo();
        console.log(systemInfo);
        res.end(JSON.stringify(systemInfo));
    }
    else if(req.url === '/api/userinfo') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var userInfo = osinfo.systemInfo.getUserInfo();
        console.log(userInfo);
        res.end(JSON.stringify(userInfo));
    }
    else if(req.url === '/api/firewall') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var status = osinfo.firewall.getStatuses();
        console.log(status);
        res.end(JSON.stringify(status));
    }
    else {
        // request not found, send back 404
        var errorMessage = 'Error- page not found';
        res.writeHead(404, errorMessage);
        res.end(errorMessage);
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});