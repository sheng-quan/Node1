const fs = require("fs");
const path = require("path");
// 需求： 读取三个文件的拼接好的内容   “我爱nodejs”

let filePath1 =  path.join(__dirname, "files", "1.txt");
let filePath2 =  path.join(__dirname, "files", "2.txt");
let filePath3 =  path.join(__dirname, "files", "3.txt");

let p1 = new Promise((resolve, reject)=>{

    fs.readFile(filePath1, "utf-8", (error,data)=>{
        if(error){
            // 失败的时候调用reject，
            reject(error);    
        }
        // 成功的时候调用resolve， data是读取到的内容
        resolve(data); 
    })

});

let p2 = new Promise((resolve, reject)=>{

    fs.readFile(filePath2, "utf-8", (error,data)=>{
        if(error){
            // 失败的时候调用reject，
            reject(error);    
        }
        // 成功的时候调用resolve， data是读取到的内容
        resolve(data); 
    })

});

let p3 = new Promise((resolve, reject)=>{

    fs.readFile(filePath3, "utf-8", (error,data)=>{
        if(error){
            // 失败的时候调用reject，
            reject(error);    
        }
        // 成功的时候调用resolve， data是读取到的内容
        resolve(data); 
    })

});

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
    console.log(str1);
})
