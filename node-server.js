'use strict';
'use utf8';
//开启严格模式
//V8对es6支持分三个级别：根本不支持，直接支持，严格模式支持
const http = require('http');
let count = 0;

const server = http.createServer(function(request,response){
    //此回调有用户请求时触发
    response.write(`你是第${count++}个访问用户`);
    
    response.end();
    //触发发送事件
})
server.listen(2080,(error) => {

    if (error) {
        throw error;
    }
    console.log('成功启动web服务器，端口：2080');
})