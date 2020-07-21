var buf = Buffer.from("hello", "ascii");
console.log(buf);
console.log(buf.toString());
console.log(buf.toString("hex"));

console.log("====");
var buf = Buffer.from("hello", "utf8");
console.log(buf);

var buf = Buffer.alloc(5);
console.log(buf, buf.toString(), "xx");

var buf = Buffer.from([1, 2, 3]);
console.log(buf, buf.toString());
console.log(JSON.stringify(buf));

console.log("====");

var buf = Buffer.alloc(5);
var len = buf.write("www.runoob.com");

console.log(buf, len, buf.toString());
console.log(buf.toString("utf8", 2));

var buf2 = Buffer.from("xx");

console.log(Buffer.concat([buf, buf2]).toString());
