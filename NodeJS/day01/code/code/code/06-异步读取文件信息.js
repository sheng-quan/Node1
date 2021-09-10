const fs = require("fs");
const path = require("path");
let filePath = path.join(__dirname, "hello2.txt");

// 同步读取： 读取文件的时候，要等到文件读取完毕，才会执行后面的代码(sync 同步)
// fs.readFileSync(文件的路径)
// const content = fs.readFileSync(filePath, "utf-8"); //同步读取文件信息， 把整个文件读取完毕之后才继续往下执行
// console.log(content);
// console.log("-----end");

// 异步读取： 不用等到文件读取完毕，就会执行后面的代码
// 异步读取文件的时候需要有第三个参数，回调函数。
fs.readFile(filePath, "utf-8", (error, data)=>{
    // 读取文件信息完毕的时候执行这里的代码(回调函数)

    // console.log(error); // error是错误信息，如果读取没发生错误，就为null
    // console.log(data); // data读取到的内容,当出现错误的时候data就是undefined
    if(error){
        console.log(error);
        return
    }

    console.log(data);
})
console.log("-----end");