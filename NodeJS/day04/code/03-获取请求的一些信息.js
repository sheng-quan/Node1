
const http = require("http");
const url = require("url");
const port = 8081;   


const server = http.createServer((request, response)=>{
    // 想要获取请求对象相关的一些信息
    // 请求1次执行1次这里的代码

    let reqUrl = request.url    // 获取请求路径(请求报文中第一行的第二个信息)
    // 如果请求的是 http://localhost:8081/  那么上面打印出来就是 /
    
    let reqMethod = request.method  // 获取请求方式

    //获取get请求的请求参数
    let obj = url.parse(reqUrl, true); //true 把它解析成一个对象，false解析成字符串
    console.log(obj.query.curPage, obj.query.perPage);


    // console.log(reqUrl, reqMethod);  
    response.write("hello nodejs http6"); 
    response.end();
})



server.listen(port,(error)=>{
   
    console.log(`WebServer is listening at port ${port}!`);
})

