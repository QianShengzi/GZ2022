// var say = function (word) {
//     console.log(word);
// };
// // say('xxx')

// // 第二个参数作为了第一个参数【函数】的参数
// var exe = function (func, value) {
//     func(value);
// };

// exe(say, "hello");


var exe = function (func, value) {
    func(value);
};

exe(function (n) {
    console.log(n);
}, 'hello')