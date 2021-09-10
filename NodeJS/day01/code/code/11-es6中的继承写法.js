class Animal{    // 父类  基类
    constructor(name){
        this.name=name   
    }  

    showName(){
        console.log(`My name is ${this.name}`);
    }

    static eat(){  
        console.log("吃-----------");
    }
}
// 继承的格式：
// class 子类名 extends 父类名
class Cat extends Animal{   //自类   派生类
    
}

let cat = new Cat("汤姆");
console.log(cat.name);
cat.showName()
Cat.eat() // 子类名.静态方法名()   ，"吃-----------"