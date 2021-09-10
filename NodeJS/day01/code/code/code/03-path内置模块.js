const path = require("path");  //引入内置模块path

console.log(__dirname);  // D:\Node22\day03 得到当前执行的文件的绝对路径，不包括文件名
console.log(__filename);    //得到当前执行的文件的绝对路径，包括文件名


let extname = path.extname(__filename)  // 获取文件的扩展名(后缀名)
let basename = path.basename(__filename)  // 获取文件名(包含后缀名)
let dirname = path.dirname(__filename)  // 获取指定文件当前所在路径
let parseObj = path.parse(__filename)  //把路径解析成一个对象(所在盘符，所在路径，文件名后缀名)

console.log(parseObj);

//拼接操作
// let fullpath = path.join('path.js');
// let fullpath = path.join(__dirname, '01-模块化的使用.js');  //获取01这个文件的完整路径
let fullpath = path.join(__dirname,'modules', 'm1.js');  //获取m1.js这个文件的完整路径(一层目录就是一个参数)
console.log(fullpath);

