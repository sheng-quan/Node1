const fs = require("fs");
const path = require("path");
const util = require("util");


let filePath1 =  path.join(__dirname, "files", "1.txt");
let filePath2 =  path.join(__dirname, "files", "22222.txt");
let filePath3 =  path.join(__dirname, "files", "3.txt");

let readFilePromise = util.promisify(fs.readFile);

async function func(){
    // 内部捕获异常
    try{
        let data1 = await readFilePromise(filePath1, "utf-8");
        let data2 = await readFilePromise(filePath2, "utf-8");
        let data3 = await readFilePromise(filePath3, "utf-8");
        console.log(data1+data2+data3);
    }catch(error){
        console.log(error);
    }finally{
        console.log("finally----");
    }

}


// 外部捕获异常
// func().catch(error=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("finally---");
// })

func()