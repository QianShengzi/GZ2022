var fs = require("fs");
var { createGzip } = require("zlib");

var readStream = fs.createReadStream("test.txt");

readStream.on("data", function (chunk) {
    console.log(new Date().getTime(), chunk);
});

readStream.pipe(createGzip()).pipe(fs.createWriteStream('./test.txt.gz'))
