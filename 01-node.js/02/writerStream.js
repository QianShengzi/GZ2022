var fs = require("fs");

var data = fs.readFileSync("./test.txt");

var writerStream = fs.createWriteStream("output.txt");

// writerStream.on("data", function (chunk) {
//     console.log(new Date().getTime(), chunk);
// });

writerStream.on("finish", function () {
    console.log("写入完成。");
});

writerStream.write(data, "UTF8");
writerStream.end();
