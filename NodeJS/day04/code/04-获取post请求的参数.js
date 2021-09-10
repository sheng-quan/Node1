
const http = require("http");
const url = require("url");
const port = 8081;   


const server = http.createServer((request, response)=>{
    // 想要获取请求对象相关的一些信息
    // 请求1次执行1次这里的代码

    // 先获取用户的用户名密码：
    // 本质是在获取post请求的参数

    // 以事件的方式来接收，事件名是data，一旦接收post请求，就会触发这里的代码执行
    request.on("data",(postData)=>{
        // 这里的代码什么时候执行？
        // 一旦接收post请求，就会触发这里的代码执行
        // postData就是接收到的请求参数
        console.log(postData.toString());
        

    })

    // console.log(reqUrl, reqMethod);  
    response.write("hello nodejs http6"); 
    response.end();
})



server.listen(port,(error)=>{
    console.log(`WebServer is listening at port ${port}!`);
})

