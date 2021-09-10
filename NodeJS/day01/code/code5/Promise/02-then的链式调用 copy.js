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

// then链式调用的特点：
// 1、第一个then执行完毕后(不管成功还是失败)，会执行第二个then里函数的代码
// 2、then的函数里面可以有返回值，被下一个then的形参接收
// 3、(最重要的一个)如果返回的是一个Promise对象，下一个then的形参接收到的不是这个Promise对象，而是这个Promise对象内部的resolve函数的实际参数

p1.then((data)=>{
    console.log("成功了");
    return p1
},(error)=>{
    console.log("失败了");
    return 456
}).then((data)=>{
    console.log("第二个then", data);
    return "222222"
}).then((data)=>{
    console.log("第3个then", data);
})