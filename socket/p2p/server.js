//创建一个socket服务端

const net = require('net');

var clients = [];
//用于存储所有的连接对象
//创建
var server = net.createServer((socket) => {
    //当有客户端发起链接的时候,socket即为当前接入的客户端

    function signIn(signal) {
        var username = signal.username;
        clients[username] = socket;
        console.log(`欢迎${socket.remoteAddress}来到2080聊天室`);
        console.log(`当前聊天室人数${Object.keys(clients).length}`);
    }

    function p2p(signal) {
        console.log(signal);
        var username = signal.from;
        var target = signal.to;
        var message = signal.message;
        // console.log(target);
        //我要发送给客户端的消息
        var send = {
            procotol: signal.procotol,
            from: username,
            message: message
        };
        clients[target].write(JSON.stringify(send));
        //[]索引
    }

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
        for (var username in clients) {

            if (clients.hasOwnProperty(username)) {

                var client = clients[username];
                client.write(JSON.stringify(send));
            }
        }
    }

    function clientData(chunk) {
        try {
            var signal = JSON.parse(chunk.toString().trim());
            var procotol = signal.procotol;

            switch (procotol) {
                case 'signIn':
                    signIn(signal);
                    break;
                case 'boardcast':
                    boardcast(signal);
                    break;

                case 'p2p':
                    p2p(signal);
                    break;
                default:
                    socket.write('无法识别你的请求！');
                    break;
            }
        } catch (error) {
            socket.write('发送格式出错了！');
        }
    }
    //监听socket有数据接入
    //有任何客户端发消息来都会触发
    //拿到username，message
    //boardcast（username ，message），通知所有客户端
    //chunk格式：boardcast||from||message
    //chunk的json格式：{“procotol“：”boardcast“，”from“：“张三”，“message”：“说啥？”}
    socket.on('data', clientData)
        .on('error', (err) => {
            var deletekey;
            for (var username in clients) {

                if (clients.hasOwnProperty(username)) {
                    var client = clients[username];
                    if (socket === client) {

                        deletekey = username;
                    }
                }
            }
            delete clients[deletekey];
            // //当摸一个socket连接断开  触发时间error
            console.log(`${socket.remoteAddress}下线了`);

            console.log(`当前聊天室人数${clients.length}`);
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