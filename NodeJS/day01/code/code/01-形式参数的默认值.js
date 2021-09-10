// function func(x){
//     var x = x || 10;   //以前形参默认值的写法
//     console.log(x);
// }
// func(100)


// function func(x=20){   // es6形参默认值的写法
//     console.log(x);
// }
// func()


function func(name="nodejs", age=11){   // 多个形参设置默认值的写法
    console.log(name, age);
}
func("javascript", 25)
// 如果传递了实际参数，就按照实际参数的值来使用，如果没有传递实参，就会使用等号后面的默认值