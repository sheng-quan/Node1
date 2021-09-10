console.log(__dirname); // 当前执行的文件绝对路径，不包含文件名
const path = require("path");
// let fullPath1 = path.join("__dirname"'path.js');
let fullPath1 = path.join(__dirname,'aaa\\path.js');
let fullPath2 = path.join(__dirname,'aaa', 'path.js');
console.log(fullPath1);
console.log(fullPath2);
