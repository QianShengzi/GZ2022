var fs = require('fs')
// 跟http一样 都是 node自带模块
// console.log(fs);


console.log('代码开始');
// 异步读取
var data = fs.readFileSync('./readme.txt')
// console.log('同步读取data',data);
console.log('同步读取data',data.toString());

console.log('代码结束');
