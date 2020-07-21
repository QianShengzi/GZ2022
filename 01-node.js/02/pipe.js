var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('test.txt');

readerStream.on('data', function (chunk) {
    console.log('读取流',chunk);
})

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// writerStream.on('data', function (chunk) {
//     console.log('写入流',chunk);
// })

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");