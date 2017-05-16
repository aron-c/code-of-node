var http = require('http');

http.createServer(function(request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

    // 发送响应数据 "Hello World"

    response.end(index.html);
}).listen(3000, 47.94 .82 .129);

// 终端打印如下信息
console.log('Server running at http://47.94.82.129:3000/');