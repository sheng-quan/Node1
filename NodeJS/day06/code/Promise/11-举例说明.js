// function func(a, b){
//     return a+b
// }

// let ret1 = func(10, 20);
// let ret2 = func(30, 40);
// let ret3 = func(50, 60);

// console.log(ret1+ret2+ret3);
//异步代码 外观上同步化的终极版
const fs = require("fs");
const path = require("path");
const util = require("util");


let filePath1 =  path.join(__dirname, "files", "1.txt");
let filePath2 =  path.join(__dirname, "files", "2.txt");
let filePath3 =  path.join(__dirname, "files", "3.txt");
let filePath4 =  path.join(__dirname, "files", "data.txt");

let readFilePromise = util.promisify(fs.readFile);
let writeFilePromise = util.promisify(fs.writeFile);

// await必须放在async function 函数内部。
// await后面放一般都放Promise对象
// async function 和我们之前的函数使用方式一致， 也是需要调用才能执行里面的代码

async function func(){
    let data1 = await new Promise((resolve, reject)=>{

        fs.readFile(filePath1, "utf-8", (error,data)=>{
            if(error){
                // 失败的时候调用reject，
                reject(error);    
            }
            // 成功的时候调用resolve， data是读取到的内容
            resolve(data); 
        })
    
    });

    console.log(data1);  // 我
}

func();