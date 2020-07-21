var fs = require('fs')

console.log('代码开始');
// 异步写法
fs.readFile('./readme.txt', function (err, data) {
    if (err) {
        throw err
    }
    console.log(data)

    var data2 = fs.readFileSync('./xx.txt')

    console.log(Buffer.concat([data, data2]).toString());
})
console.log('代码结束');



// 阻塞与非阻塞调用的不同

// 阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内。