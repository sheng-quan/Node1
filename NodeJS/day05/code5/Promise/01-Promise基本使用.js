// 回到地狱是不是错误？是不是bug？   
// 不是，没有逻辑问题，也没有语法问题，只是影响代码的可读性可维护性。代码不简洁不优雅。
// 优化的方向：把异步代码 从外观上同步化

const fs = require("fs");
const path = require("path");

let filePath1 =  path.join(__dirname, "files", "1.txt");

// 创建Promise对象
// 第一个形参resolve， 成功的时候执行的函数
// 第一个形参reject， 失败的时候执行的函数
let p1 = new Promise((resolve, reject)=>{
    // 同步的代码放在这里没有问题，但一般比较少这么做
    // console.log("123456");
   
    fs.readFile(filePath1, "utf-8", (error,data)=>{
        if(error){
            reject(error);    //调用的是p1.then的第2个函数
        }
       
        resolve(data); //成功了，调用的是p1.then的第1个函数
    })

});

p1.then((data)=>{
    console.log("成功了");
    console.log(data);
},(error)=>{
    console.log("失败了");
    console.log(error);
})