var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("data_received", function () {
    console.log("数据接收成功");
});

// 监听事件
eventEmitter.on("connection", function () {
    console.log("连接成功");

    eventEmitter.emit("data_received");
});

setTimeout(() => {
    // 触发事件
    eventEmitter.emit("connection");
}, 1000);

console.log("程序执行完成");


// 在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。

var fs = require('fs')
fs.readFile('./test.txt', function (err, data) {
    if (err) {
        console.error(err)
    }
    console.log(data);
})