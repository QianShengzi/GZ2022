var http = require("http");


var { router } = require("./router");

// console.log(router);

http.createServer(function (req, res) {
    if (req.url == "/favicon.ico") {
        return;
    }
    // console.log(req.url);

    

    router(req, res);
}).listen(8080);
console.log("=======8080======");
