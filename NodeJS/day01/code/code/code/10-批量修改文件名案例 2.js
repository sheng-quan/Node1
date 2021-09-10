// 批量修改文件名案例---删除前缀

// 需求：把当前目录下所有js文件都删除一个前缀 [day03]
const fs = require("fs")

let namelist = fs.readdirSync(__dirname)  //获取当前目录下文件名数组
// [旧文件名1，旧文件名2，旧文件名3 ... ]


//下面这句代码要重复执行，用到遍历，遍历文件名数组
// fs.renameSync("00-xxx.js", "[day03]00-xxx.js");
let startStr = "[day03]"; //前缀

namelist.forEach(item => { 
    //item是什么？数组namelist中每一个元素，即item是每一个旧文件名

    //对每一个文件进行的操作写在这
    //对每一个js文件进行重命名
    //先判断是不是以.js结尾，如果是，就重命名
    // if(旧文件名是不是以.js结尾){
    if(item.endsWith(".js")){
        //如果是，就重命名
        fs.renameSync(item, item.substring(startStr.length));
    }
})