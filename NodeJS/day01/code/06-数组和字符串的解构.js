let arr1 = [10, 20, 30];

// let [a,b,c] = arr1;  // 数组的解构   a,b,c就是自定义变量名

// console.log(a, b, c);

// let [b,c] = arr1;
// console.log(b);
// console.log(c);

// let [,,b] = arr1;
// console.log(b);

let arr2 = [10, 20, 30,[100, 200, 300]];
// let s = arr2[0];
// let t = arr2[1];
// let q = arr2[2];
// let x = arr2[3][0];
// let y = arr2[3][1];
// let z = arr2[3][2];
let [s, t, q,[x, y, z]] = arr2;

// console.log(s);
// console.log(t);
// console.log(q);
// console.log(x);
// console.log(y);
// console.log(z);


var str1 = "hello"

let [a, b, c] = str1;    // 字符串解构
console.log(a, b, c);  // h e l

console.log(str1[1]);  // e
str1[1] = "E";    // 改不了
console.log(str1[1]);  //e