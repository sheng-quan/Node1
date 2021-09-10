const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "hello.txt");

// fs.writeFile(文件路径文件名, 写入的内容, "utf-8", 回调函数 )
fs.writeFile(filePath, "hello write", "utf-8", (error)=>{
    if(error){
        console.log(error);
        return
    }
    console.log("写完啦！");
})
console.log("------end");
