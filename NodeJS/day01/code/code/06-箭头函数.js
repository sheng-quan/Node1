// 箭头函数是es6中新的定义函数的一种方式

// function func(){
//     console.log("hello");
// }

// let func = () => {   // 等效于上面书写的函数
//     console.log("hello");
// }

// func()

// 常规写法：
// let func = (x1) => {
//     console.log(x1)
// };


// 化简的写法
let func = x1 => console.log(x1);


let ret = func(10);  //获取这个函数的返回值
console.log(ret);  //undefined


// let func2 = () => 999+1;  相当于下面这个函数
let func2 = () => {
    return 999+1;
}

let ret2 = func2()
console.log(ret2); // 1000


let func3 = () => {
    return {a:10, b:20}
}
console.log(func3());

// 注意点：
// 1、书写箭头函数，形参依旧放在小括号中，多个形参以及默认值的书写格式和之前相同
// 2、如果只有1个形参，并且没有带默认值，可以省略小括号不写
// 3、如果函数体(大括号)里面只有一个语句，可以省略大括号不写
// 4、第3点的基础之上，会返回一个值，给到函数的调用结果(函数最终返回=>后面的这个语句)
// 5、如果函数体有多条语句，不可以省略大括号。
// 6、如果函数体(大括号)里面只有一个语句，且返回值是一个对象，建议：不要写简写的方式