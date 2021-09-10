let obj = {
    name:"nodejs",
    age:11,
    email:"nodejis@163.com"
}
// 解构格式： let {name,age} = obj

function func({name,age}){   // 等效于{name,age} = obj    解构的格式
    //  name和age的值就是obj中的属性的值
    console.log(name,age);
}
func(obj)  



let obj2 = {
    name:"javascript",
    age:25,
    email:"js@163.com"
}
func(obj2)

// 注意事项：
//调用func这个函数的时候，传来的对象必须有name和age属性，如果没有，则name和age的值是undefined
// func()   //{name,age} = null  就会报错
func({})  //{name,age} = {}   undefined  undefined