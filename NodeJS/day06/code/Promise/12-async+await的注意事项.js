// async function func(){

//     let data1 = await 123;


//     // data1 相当于：  new Promise((resolve,reject) =>{resolve(123)})
//     console.log("data1:", data1);   //data1: 123

//     return data1
    
// }

// let ret = func()
// console.log(ret);   //Promise { <pending> }
const fs = require("fs");
const path = require("path");
const util = require("util");


let filePath1 =  path.join(__dirname, "files", "1.txt");
let filePath2 =  path.join(__dirname, "files", "2.txt");
let filePath3 =  path.join(__dirname, "files", "3.txt");

let readFilePromise = util.promisify(fs.readFile);

async function func(){
    console.log(3);
    let data1 = await readFilePromise(filePath1, "utf-8");
    console.log(4);
    let data2 = await readFilePromise(filePath2, "utf-8");
    let data3 = await readFilePromise(filePath3, "utf-8");

    console.log(data1+data2+data3);
    
}
// async里面的await后面的是异步的，不是同步的
// 请说出这几个log的执行顺序

console.log(1);
func()
console.log(2);

// 1
// 3
// 2
// 4
