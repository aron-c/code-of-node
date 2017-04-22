//创建一个socket服务端

const net = require('net');

var clients = [];
//用于存储所有的连接对象
//创建
var server = net.createServer((socket) => {
    //当有客户端发起链接的时候
    clients.push(socket);

    console.log(`欢迎${socket.remoteAddress}来到2080聊天室`);

    function boardcast(signal) {
        //肯定有用户名和消息
        console.log(signal);
        var username = signal.from;
        var message = signal.message;

        //我要发送给客户端的消息
        var send = {
            procotol: signal.procotol,
            from: username,
            message: message
        };
        //对clients中的每一个客户端遍历，广播消息
        clients.forEach(client => {
            client.write(JSON.stringify(send));
            //传输的时候只能用字符串
        });
    }

    socket.on('data', (chunk) => {
        //监听socket有数据接入
        //有任何客户端发消息来都会触发
        //拿到username，message
        //boardcast（username ，message），通知所有客户端
        //chunk格式：boardcast||from||message
        //chunk的json格式：{“procotol“：”boardcast“，”from“：“张三”，“message”：“说啥？”}
        try {
            var signal = JSON.parse(chunk.toString().trim());
            var procotol = signal.procotol;

            switch (procotol) {
                case 'boardcast':
                    boardcast(signal);
                    break;

                    // case 'p2p':
                    //     p2p(signal);
                    //     break;
                default:
                    socket.write('无法识别你的请求！')
                    break;
            }

        } catch (error) {
            socket.write('发送格式出错了！')
        }
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