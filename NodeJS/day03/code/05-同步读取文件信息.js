const fs = require("fs");
const path = require("path");
let filePath = path.join(__dirname, "hello.txt");

// 同步读取： 读取文件的时候，要等到文件读取完毕，才会执行后面的代码(sync 同步)
// fs.readFileSync(文件的路径)
const content = fs.readFileSync(filePath, "utf-8"); //同步读取文件信息， 把整个文件读取完毕之后才继续往下执行
console.log(content);

console.log("-----end");





// 异步读取： 不用等到文件读取完毕，就会执行后面的代码