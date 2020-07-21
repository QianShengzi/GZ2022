var fs = require("fs");
var readerStream = fs.createReadStream("test.txt");

var body = "";
// console.log(readerStream);
readerStream.on("data", function (chunk) {
    console.log("============");
    console.log(chunk);
    console.log("============");

    body += chunk;
});

readerStream.on("end", function () {
    // console.log(body);
});
