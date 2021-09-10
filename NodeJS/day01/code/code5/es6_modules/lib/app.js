"use strict";

var _m = require("./m1");

var _m2 = _interopRequireDefault(_m);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_m2.default.name); // import {name, age} from "./m1"   // 这种引入方式对应前2种导出方式

// 针对第3种的引入方式：
// import m1 from "./m1"   

console.log(_m2.default.age);
console.log(_m.email);
// node引擎默认不支持es6模块化语法，报错：SyntaxError: Unexpected token {
//