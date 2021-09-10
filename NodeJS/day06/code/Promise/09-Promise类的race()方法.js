const fs = require("fs");
const path = require("path");
const util = require("util");

let filePath1 =  path.join(__dirname, "files", "1.txt");
let filePath2 =  path.join(__dirname, "files", "2.txt");
let filePath3 =  path.join(__dirname, "files", "3.txt");


let readFilePromise = util.promisify(fs.readFile);


let p1 = readFilePromise(filePath1, "utf-8");
let p2 = readFilePromise(filePath2, "utf-8");
let p3 = readFilePromise(filePath3, "utf-8");

// race()方法的格式：
// Promise.race([Promise对象1,Promise对象2]).then((data)=>{
//     p1和p2只要有一个执行成功了，就执行这里的代码1次，且这里的代码只会执行1次

// })

Promise.race([p1,p2,p3]).then((data)=>{
    //p1和p2只要有一个执行成功了，就执行这里的代码1次，且这里的代码只会执行1次
    console.log(data);  //data就是执行成功的这个promise对象的值(resolve的实参)
}).catch(error=>{
    console.log(error);
})