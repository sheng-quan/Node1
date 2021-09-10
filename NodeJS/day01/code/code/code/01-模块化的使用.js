// CommonJS 的 Modules 规范：    NodeJs
// 在这个文件中使用m1模块的数据

// require(路径)
const m1 = require("./modules/m1");    // 导入 引入m1模块   相对路径的写法
// const m1 = require("D:\\Node22\\day03\\modules\\m1.js");    // 导入 引入m1模块 绝对路径的写法
// const m1 = require("D:/Node22/day03/modules/m1.js");    // 导入 引入m1模块 绝对路径的写法

console.log(m1);  //{ num: 10, sum1: [Function: sum1], Animal: [Function: Animal] }
console.log(m1.num);
console.log(m1.sum1(30, 40));

let obj = new m1.Animal()
console.log(obj.age);

// 注意要点：
// 1、CommonJS 的规范中，需要使用其他模块的数据的时候，引入的关键方法是require
// 2、require("./modules/m1.js");   参数可以是相对路径(./不能省略)，也可以是绝对路径
// 3、模块的扩展名(.js)可以不写，也可以写
// 4、导出之后一般有一个常量来接收 (const 常量名), 常量名一般和模块名一致(不一致也不会报错)
