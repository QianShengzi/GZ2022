var path = require("path");
// 处理路径 文件名

var fs = require("fs");
// 文件操作

var url = require("url");
// 解析url链接 分离 path  query

var querystring = require("querystring");
// 解析 query 查询 name=百度&age=18 {name: 'nick',age: 17}

exports.router = function (req, res) {
    var urlParsed = url.parse(req.url);
    // url处理过之后的 url 对象

    var pathname = urlParsed.pathname;
    var query = querystring.parse(urlParsed.query);
    // 解析query查询

    console.log(urlParsed, pathname, query);

    // console.log(path.join(__dirname, "public", pathname));

    switch (pathname) {
        case "/get":
            res.end(JSON.stringify(query));
            break;
        case "/post":
            // url链接里面不存在query req请求体 默认没有开始post
            var data = "";

            // 请求体 监听 客户端数据发送事件   
            req.on("data", function (chunk) {
                // console.log('chunk', chunk.toString());
                data += chunk;
                // 二进制 流传输
            });
            // 客户端请求 发送数据已经完成
            req.on("end", function () {
                console.log("data", data.toString(), querystring.parse(data));


                // 向客户端发送响应
                res.writeHead(200, {
                    // 中文乱码
                    "Content-type": "text/json; charset=utf8",
                });
                res.end(JSON.stringify(querystring.parse(data)));
            });

            break;
        default:
            // 没有写动态路由 就查找文件 
            var filepath = path.join(__dirname, "public", pathname);
            fs.readFile(filepath, (err, data) => {
                if (err) {
                    // 找不到文件 就404
                    res.writeHead(404);
                    res.end();
                    return;
                }
                res.writeHead(200);
                res.end(data);
            });
            break;
    }
};
