// let 变量  值可以改变
// const 专门用于定义常量。  这种定义出来的量不允许被修改。修改就报错。

// 不能够被改变的一个量，常量
const PI = 3.141592653   // π   这种量我们不希望它会被修改， 常量
// PI = 4   //常量进行复制就会报错
console.log(PI);


// 1、这种定义出来的量不允许被修改。修改就报错。
// 2、一般的，大多数情况下，会把const定义的量用大写来书写。
// 3、引入某个模块的某个对象，也可以用const，可以进行小写命名。
// 4、对象型的常量，它的属性可以修改
// 5、数组型常量中的每一项数据可以修改
const OBJ = {
    name:"nodejs",
    age:11
}

console.log(OBJ.name);
OBJ.name = "NodeJS"
console.log(OBJ.name);

// OBJ = {
//     name:"NodeJS",
//     age:11
// }   //报错 

const ARR = [10, 20, 30]
console.log(ARR);
ARR[1] = 40
console.log(ARR);

// ARR = [10, 40, 30]   //报错