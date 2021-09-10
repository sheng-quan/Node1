const fs = require("fs");
const path = require("path");
const util = require("util");
// 需求： 读取三个文件的拼接好的内容   “我爱nodejs”

let filePath1 =  path.join(__dirname, "files", "1.txt");
let filePath2 =  path.join(__dirname, "files", "2.txt");
let filePath3 =  path.join(__dirname, "files", "3.txt");
let filePath4 =  path.join(__dirname, "files", "data.txt");


let readFilePromise = util.promisify(fs.readFile);  // 返回一个Promise对象
let writeFilePromise = util.promisify(fs.writeFile);  // 返回一个Promise对象
// 很关键---封装成函数，并且返回一个Promise对象。
// function readFilePromise(filePath){
//     return new Promise((resolve, reject)=>{

//         fs.readFile(filePath, "utf-8", (error,data)=>{
//             if(error){
//                 // 失败的时候调用reject，
//                 reject(error);    
//             }
//             // 成功的时候调用resolve， data是读取到的内容
//             resolve(data); 
//         })

//     });
// }
    
// let p1 = 后面要一个？？？？ Promise对象
let p1 = readFilePromise(filePath1); // 这个函数的调用结果就是一个Promise对象
let p2 = readFilePromise(filePath2);
let p3 = readFilePromise(filePath3);
// let p3 = readFilePromise(filePath3);


let str1 = "";  // 这个变量保存最终的字符串  "我爱nodejs"   ， str1是个全局变量

p1.then((data)=>{
    str1 += data;   // str1 = str1 + data    在这str1就是  我
    return p2
},(error)=>{
    console.log("读取文件失败", error);
}).then((data)=>{  // return p1，data就是我  return p2,data就是爱   return str1,data就是我
    str1 += data;   // str1 变成了  "我爱"
    return p3
}).then((data)=>{
    str1+=data
    // console.log(str1);
    writeFilePromise(filePath4, str1);
})
