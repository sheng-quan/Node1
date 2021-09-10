// 第1种导出方式：
// export let name = "nodejs";
// export let age = 12;
export let email = "nodejs@163.com";

// 第2种导出方式：
// let name = "nodejs";
// let age = 13;
// export {name,age}


// 第3种导出方式：
let name = "nodejs";
let age = 14;
export default {name,age}    //这种导出的语法，一个js文件中只能写1次
