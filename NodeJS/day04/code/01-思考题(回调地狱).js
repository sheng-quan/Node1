// 需求：现在存在三个文件 1.txt(我) 2.txt（爱） 3.txt（nodejs）
// 每个文件里面有一个字符。`使用：fs.readFile(异步) 顺序读取` 1.txt 2.txt 3.txt 里面的内容，然后组成 `我爱nodejs` 把这个字符串写入 异步的写 到 data.txt 文件里面。

const fs = require("fs");
const path = require("path");

let pathName1 = path.join(__dirname, "files", "1.txt")
let pathName2 = path.join(__dirname, "files", "2.txt")
let pathName3 = path.join(__dirname, "files", "3.txt")
let pathName4 = path.join(__dirname, "files", "data.txt")


fs.readFile(pathName1, "utf-8",(error1, data1)=>{

    if(error1){
        console.log(error1);
        return
    }
    //读取完第1个文件的数据后，继续读取第2个文件的数据
    fs.readFile(pathName2, "utf-8",(error2, data2)=>{

        if(error2){
            console.log(error2);
            return
        }
        //读取完第2个文件的数据后，继续读取第3个文件的数据

        fs.readFile(pathName3, "utf-8",(error3, data3)=>{

            if(error3){
                console.log(error3);
                return
            }
            //读取完第3个文件的数据后，异步写入到data.txt文件中
    
            console.log(data1+data2+data3);
            let str1 = data1+data2+data3;
            fs.writeFile(pathName4, str1, "utf-8", (error4)=>{
                if(error4){
                    console.log(error4);
                    return
                }
                console.log("写完啦！！");
            })
        })
    })
})


