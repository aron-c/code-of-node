//创建一个socket服务端

const net = require('net');

//创建
var server = net.createServer( //当有客户端发起链接的时候
    function socketConnect(socket) {
        //console.log('connect.....');
        // var clientIp = socket.address();

        // console.log(clientIp.address + "connection...");
        console.log(`${socket.remoteAddress}:${socket.remotePort}进来了`);
        socket.write(`欢迎${socket.remoteAddress}:${socket.remotePort}进来`);
        socket.on('data', (chunk) => {
            //监听socket有数据接入
            console.log(chunk.toString());
            socket.write('server > 你说啥？');
        });
    });



//监听特点端口
var port = 2080;
server.listen(port, (err) => {
    //成功监听2080端口过后执行
    //如果监听失败，则端口被其他程序占用，会有err
    if (err) {
        console.log('端口被占用');
        return false;
    }
    console.log(`服务端正常监听[${port}]`);
});