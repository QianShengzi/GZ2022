var http = require("http");
var url = require('url')
var querystring = require('querystring')


http.createServer(function (request, response) {
    if (request.url == "/favicon.ico") return;


    // request请求体对象
    // request.url 请求的url
    console.log('request', request);
    console.log('request.url', request.url);
    console.log('url.parse(request.url)', url.parse(request.url));
    console.log('querystring.parse(url.parse(request.url).query)', querystring.parse(url.parse(request.url).query));
    var query =  querystring.parse(url.parse(request.url).query)

    response.writeHead(200, {
        "Content-type": "text/json",
    });
    response.end(
        JSON.stringify(query)
    );
}).listen(8080);

// http://localhost:8080/search?name=nick&age=17
// http://localhost:8080/user/search?name=nick&age=17#hash
