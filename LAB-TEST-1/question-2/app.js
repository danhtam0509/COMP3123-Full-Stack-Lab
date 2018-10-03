

var fs = require('fs');

const readstream = fs.createReadStream('data.txt');
const writestream = fs.createWriteStream('output.txt');

readstream.on('data', function(data) {
    console.log(data);
    console.log(data.toString());
    writestream.write(data);
})

readstream.on('end', function() {
    writestream.end();
    console.log('write is completed!');
})