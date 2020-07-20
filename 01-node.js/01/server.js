var http = require("http");
// 引入http模块

// console.log(http);

// http.createServer 创建服务器方法 需要带一个函数作为参数
// 这个参数函数 需要两个参数request 请求体对象  response 响应体对象
var server =  http.createServer(function (request, response) {
    
    response.writeHead(200, {
        "Content-type": 'text/plain'
        // "Content-type": 'text/html'
    })
    // 发送 响应头 200 状态码

    response.end('hello world')
    // response.end(JSON.stringify({name: 'nick', age: 17}))
    // 发送响应内容

})

console.log(server);
// server 服务器实例对象

// server实例 监听端口8080
server.listen(8080)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8080/');
// http://localhost:8080/