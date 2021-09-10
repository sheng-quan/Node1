// 搭建第一后端的程序
//1、引入http模块
const http = require("http");
//2、配置服务器程序的端口号
const port = 8081;   //   mysql 3306  mongodb 27017 

//3、创建服务器对象
const server = http.createServer((requset, response)=>{
    // requset请求对象， response响应对象

    // 这里的代码什么时候执行？ 
    // 每接收到一次请求就来执行一次这里的代码
    response.write("hello nodejs http2"); // 可以网浏览器书写一些响应体内容
    response.write("hello nodejs http3"); // 可以网浏览器书写一些响应体内容
    response.write("hello nodejs http4"); // 可以网浏览器书写一些响应体内容
    response.end();//表示响应工作已经结束，这个方法后面不要再去写关于响应的一些操作了。
    // write 和end相同点，都可以传入参数表示往浏览器书写一定内容
    // write 和end不同点， write可以连续操作，end表示响应结束一般放最后
})


//4、调用服务器对象的监听方法，让服务器监听浏览器的请求
server.listen(port,(error)=>{
    // console.log(error);
    console.log(`WebServer is listening at port ${port}!`);
})


//端口已经被占用了： Error: listen EADDRINUSE: address already in use :::8080