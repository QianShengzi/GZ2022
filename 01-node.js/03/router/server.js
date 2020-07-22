var http = require("http");
var url = require("url");

exports.start = function (route) {
    http.createServer(function (req, res) {
        var pathname = url.parse(req.url).pathname;
        // console.log(pathname);

        route(pathname, res)

        // res.writeHead(200, { "Content-Type": "text/plain" });
        // res.end("Hello World");
    }).listen(8080)
    console.log('服务器开启8080');
};
