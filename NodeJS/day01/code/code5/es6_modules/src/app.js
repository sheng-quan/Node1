// import {name, age} from "./m1"   // 这种引入方式对应前2种导出方式

// 针对第3种的引入方式：
// import m1 from "./m1" 
  
import m1, {email} from "./m1"   
console.log(m1.name);
console.log(m1.age);
console.log(email);
// node引擎默认不支持es6模块化语法，报错：SyntaxError: Unexpected token {
// 