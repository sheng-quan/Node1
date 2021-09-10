let a = 10;
// exports.a = a; 

// module.exports = {
//     a
// }
// exports = module.exports   //了解

console.log(exports)  //{}
console.log(module.exports)  //{}
console.log(exports===module.exports);  // true
console.log("-------------------------------");
console.log("this的值：", this);  // this的值： {}
console.log(this === exports);  // true


// exports是module.exports的引用，文件中才有exports，交互模式下没有exports
// 在js文件中， this 指向这个模块导出的这个对象 module.exports
// this===global在交互模式下成立 （交互模式下，this指向全局变量global）
// 导出的格式，放在文件最后面去写，this一般也不会导出后面出现，this，指向这个模块