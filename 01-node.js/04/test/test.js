var fs = require('fs')
// fs http url querystring path 
var path = require('path')

exports.test = function () {
    console.log(__filename, path.parse(__filename));

    console.table(path.parse(__filename))
    // 解析文件路径文件名
    console.log(__dirname);

    // var data =  fs.readFileSync( __dirname +'/xx.txt')

    var data =  fs.readFileSync(path.join(__dirname, './xx.txt'))
    // 拼接路径

    console.log(data.toString());

    function fibonacci(n) {
        if (n == 1 || n == 2) {
            return 1
        };
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
    console.log(fibonacci(43));

};
