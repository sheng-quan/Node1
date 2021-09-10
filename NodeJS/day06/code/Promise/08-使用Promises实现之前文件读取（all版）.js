const fs = require("fs");
const path = require("path");
const util = require("util");

let filePath1 =  path.join(__dirname, "files", "1.txt");
let filePath2 =  path.join(__dirname, "files", "2.txt");
let filePath3 =  path.join(__dirname, "files", "3.txt");
let filePath4 =  path.join(__dirname, "files", "data.txt");


let readFilePromise = util.promisify(fs.readFile);
let writeFilePromise = util.promisify(fs.writeFile);


let p1 = readFilePromise(filePath1, "utf-8");
let p2 = readFilePromise(filePath2, "utf-8");
let p3 = readFilePromise(filePath3, "utf-8");


Promise.all([p1,p2,p3]).then((data)=>{
    //data是一个数组，数组的每一个元素就是上面每一个Promise对象的成功时候的值
    console.log(data);  // ["我", "爱", "nodejs"]
    //数组的操作方法join方法，把数组中每一个元素按照一定格式拼接起来
    console.log(data.join(""));
    let content = data.join("");
    writeFilePromise(filePath4, content)
    
}).catch(error=>{
    console.log(error);
})