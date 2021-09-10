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

// all()方法的格式：
// Promise.all([Promise对象1,Promise对象2]).then((data)=>{
//     //data是一个数组，数组的每一个元素就是上面每一个Promise对象的成功时候的值

// })

Promise.all([p1,p2,p3]).then((data)=>{
    //在所有promise对象执行成功之后，执行这里的代码，也是只执行1次
    //data是一个数组，数组的每一个元素就是上面每一个Promise对象的成功时候的值
    console.log(data);  // ["我"]
    //数组的操作方法join方法，把数组中每一个元素按照一定格式拼接起来
    console.log(data.join(""));
    
}).catch(error=>{
    console.log(error);
})