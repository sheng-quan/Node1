const fs = require("fs");
const path = require("path");

let filePath1 =  path.join(__dirname, "files", "1.txt");


let p1 = new Promise((resolve, reject)=>{
    
    fs.readFile(filePath1, "utf-8", (error,data)=>{
        if(error){
            reject(error);   
        }
       
        resolve(data); 
    })

});

// p1.then((data)=>{
//     console.log("成功了");
//     console.log(data);
// },(error)=>{
//     console.log("失败了");
//     console.log(error);
// })

p1.then(data=>{
    console.log("成功了");
    console.log(data);
}).catch(error=>{
    console.log(error);
}).finally(()=>{
    // 这里的代码不管成功与否都会执行
    console.log("承诺成功和失败都会执行");
})