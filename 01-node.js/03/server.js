var http = require("http");

// http.createServer(function (request, response) {
//     response.writeHead(200, {
//         "Content-type": "text/json",
//     });
//     response.end(
//         JSON.stringify({
//             name: "nick",
//             age: 17,
//         })
//     );
// }).listen(8080);

var onRequest = function (request, response) {
    // 忽略了 favicon
    if (request.url !== "/favicon.ico") {

        console.log("request", request);

        response.writeHead(200, {
            "Content-type": "text/json",
        });

        if (request.url == "/about") {
            response.end(
                JSON.stringify({
                    page: 'about page'
                })
            );
        } else {
            response.end(
                JSON.stringify({
                    name: "nick",
                    age: 19,
                })
            );
        }


    }
};

http.createServer(onRequest).listen(8080);
console.log("+++++++++++++8080");

// chrome://inspect
// node --inspect server.js

// supervisor 调试node  node进程守护管理器
// npm i supervisor -g

// node --inspect server.js => supervisor --inspect server.js  web

