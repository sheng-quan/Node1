const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8081;

const server = http.createServer((request,response)=>{
    //每来一个请求就执行一次这里的代码

    //判断浏览器需要哪个资源文件？？
    let reqUrl = request.url;
    if(reqUrl==="/" || reqUrl==="/index.html" ){
        // 读取页面内容，返回信息
        let filePath = path.join(__dirname, "assets", "html", "index.html");
        let content = fs.readFileSync(filePath)
        response.end(content)
    }
    else if(reqUrl==="/detail.html"){
        // 读取页面内容，返回信息
        let filePath = path.join(__dirname, "assets", "html", "detail.html");
        let content = fs.readFileSync(filePath)
        response.end(content)
    }
    else if(reqUrl.endsWith(".css")){
        // 读取页面内容，返回信息
        let filePath = path.join(__dirname, "assets", "css", "index.css");
        let content = fs.readFileSync(filePath)
        response.end(content)
    }else{
        // 遵循http协议，设置响应头信息
        response.setHeader("Content-type","text/html;charset=utf-8");
        response.end("404错误：该资源找不到！")
    }

})


server.listen(port,(error)=>{
    console.log(`WebServer is listening at port ${port}!`);
})