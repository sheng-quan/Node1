const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 8081;
let uname = "laozhuang";
let pwd = "123456";

function responseEnd(response, dirName, fileName){
    let filePath = path.join(__dirname, "assets", dirName, fileName);
    let content = fs.readFileSync(filePath)
    response.end(content)
}

const server = http.createServer((request,response)=>{
    //每来一个请求就执行一次这里的代码

    //判断浏览器需要哪个资源文件？？
    let reqUrl = request.url;
    if(reqUrl==="/" || reqUrl==="/index.html" ){
        // 读取页面内容，返回信息
        responseEnd(response,  "html", "index.html")
    }
    else if(reqUrl==="/detail.html"){
        // 读取页面内容，返回信息
        responseEnd(response,  "html", "detail.html")
    }
    else if(reqUrl==="/jquery_get.html"){
        // 读取页面内容，返回信息
        responseEnd(response,  "html", "jquery_get.html")
    }
    else if(reqUrl==="/jquery_post.html"){
        // 读取页面内容，返回信息
        responseEnd(response,  "html", "jquery_post.html")
    }
    else if(reqUrl==="/js/jquery-3.4.1.js"){
        // 读取页面内容，返回信息
        responseEnd(response,  "js", "jquery-3.4.1.js")
    }
    else if(reqUrl==="/login.html"){
        // 读取页面内容，返回信息
        responseEnd(response,  "html", "login.html")
    }
    else if(reqUrl.startsWith("/get_data")){
        // 读取页面内容，返回信息
        response.end("接收到ajax的get请求，这是响应给浏览器的数据")
    }
    else if(reqUrl==="/login_post"){
        // 来处理post请求

       
        // 事件，一旦post请求过来就会触发这个事件
        request.on("data",(postData)=>{

            //postData就是post请求传递过来的参数
            // console.log(postData);  // 是个Buffer类型
            console.log(postData.toString());
            console.log(JSON.parse(postData.toString()));  //把json格式的字符串转成对象

            //获取到浏览器传过来的数据，就是post请求传递过来的参数
            let {username, password} = JSON.parse(postData.toString());

            if(username===uname && password===pwd){

                response.end("登录成功！")
            }else{
                response.end("用户名或者密码错误， 登录失败")
            }


        })
   
       

    }
    else if(reqUrl.endsWith(".css")){
        // 读取页面内容，返回信息
        responseEnd(response,  "css", "index.css")
    }
    else if(reqUrl.endsWith(".js")){
        // 读取页面内容，返回信息
        responseEnd(response,  "js", "index.js")
    }
    else{
        // 遵循http协议，设置响应头信息
        response.setHeader("Content-type","text/html;charset=utf-8");
        response.end("404错误：该资源找不到！")
    }

})


server.listen(port,(error)=>{
    console.log(`WebServer is listening at port ${port}!`);
})