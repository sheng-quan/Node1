// 1、Nodejs里面没有window对象，有global对象，之前所使用的console, setTimeout这些事这个global对象下面的属性/成员

// console.log(global);
// console.log(window); //报错

// 2、Nodejs里面声明的变量，不会挂载到global里面
// let a = 30;
// console.log(global.a);


// 3、可以向global添加成员，可以再任何地方去使用
// global.a = 60;
// console.log(a);

// 4、在nodejs中执行这个 13-全局对象.js 文件,里面出现this，这个this个global不是相等的
console.log(this === global);

// (了解)this在文件中，其实指向的是这个模块(这个js文件)  

