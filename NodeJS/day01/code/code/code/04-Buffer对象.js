let buf1 = Buffer.from([97, 98, 99])  // 创建一个Buffer对象
console.log(buf1);  // <Buffer 61 62 63>这种方式我们看不懂
console.log(buf1.toString());  // abc


let buf2 = Buffer.from("nodejs");
console.log(buf2);  //<Buffer 6e 6f 64 65 6a 73>
console.log(buf2.toString());  // nodejs


// 仅做了解：
let buf3 = Buffer.alloc(10)    // 创建一个可以存放10个字符的buffer对象
buf3.write("abc");  // 往buffer对象里面写入信息，(转2进制再转16进制存起来)
console.log(buf3);
console.log(buf3.toString());

// 总结：
// 当你看到一个 <Buffer xx xx xxx xxx> 这是Buffer对象，可以把它转成我们看得懂的信息：
// buffer对象.toString()   就可以得到我们看得懂的信息