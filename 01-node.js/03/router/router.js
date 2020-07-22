var fs =require('fs')

exports.router = function (pathname, res) {
    // console.log('pathname', pathname);
    switch (pathname) {
        case "/home":
            res.writeHead(200, { "Content-Type": "text/html" });
            // res.end("home page");
            fs.readFile('./home.html', function (err, data) {
                res.write(data)
                res.end()
            })
            break;

        case "/about":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("about page");
            break;

        default:
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("hello page");
            break;
    }
};
