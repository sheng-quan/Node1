let num = 10;
console.log("执行了m1.js里面的代码");

function sum1(a, b){
    return a + b
}

class Animal{
    constructor(){
        this.age = 0
    }
}


// 第一种方式：
// exports.num = num;
// exports.sum1 = sum1;
// exports.Animal = Animal;

// 第二种方式：
module.exports = {
    num,
    sum1,
    Animal
}

