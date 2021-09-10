const fs = require("fs");
// fs.renameSync(旧文件名, 新文件名)
// fs.renameSync("hello.txt", "hello2.txt")
// let namelist = fs.readdirSync(__dirname)  // 获取__dirname这个路径下的文件名和目录名
// console.log(namelist);


let str1 = "hello.js";
console.log(str1.endsWith("alo"));// 判断str1字符串是否以某子串结尾
console.log(str1.startsWith("heo"));// 判断str1字符串是否以某子串开始

// 判断str1是不是js文件名
// console.log(str1.endsWith(".js"))
console.log(str1.substring(2, 4));// 从下标为2取到下表为3的字符，左闭右开区间
console.log(str1.substring(2));// 从下标为2一直取到结束