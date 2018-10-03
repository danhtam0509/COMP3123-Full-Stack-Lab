
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
const writestream = fs.createWriteStream('output.txt.gz');
const readstream  = fs.createReadStream('output.txt');

readstream.pipe(gzip).pipe(writestream);