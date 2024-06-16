//Create Web server
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        return res.end();
    }
    fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(3000);

console.log('Server running at http://localhost:3000/');