var x = 10;
let y = 20;

global.x = 10;
// 不要这样做

console.log(x, y);

// console.log(window);

// console.log(global);
console.log(global.x);
console.log(global.y);

// console.log(__filename);
// console.log(__dirname);

console.time('testtime')

var { test } = require("./test/test");
// console.log(test);
test();

console.timeEnd('testtime')


