//建立一个客户端

const net = require('net');
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('请问您的用户名是（请用英文）：\n', (name) => {

    name = name.trim();
    if (!name) {
        throw new Error('不输入用户名不能进入聊天室');
    }
    //创建服务端连接
    var server = net.connect(2080, () => {
        console.log("欢迎来到2080聊天室");
        //监听服务端的数据
        var user = {
            procotol: 'signIn',
            username: name
        }
        server.write(JSON.stringify(user));

        server.on('data', (chunk) => {
            //监听服务端的数据
            try {
                var signal = JSON.parse(chunk.toString().trim());
                var procotol = signal.procotol;
                console.log(signal);
                switch (procotol) {
                    case 'boardcast':

                        console.log('\n广播[' + signal.from + '] > ' + signal.message);
                        rl.prompt();
                        break;

                    case 'p2p':

                        console.log('\np2p[' + signal.from + '] > ' + signal.message);
                        rl.prompt();
                        break;
                    default:
                        server.write('无法识别你的请求！')
                        break;
                }

            } catch (error) {
                server.write('发送格式出错了！')
            }
        });

        rl.setPrompt(name + '> ');
        rl.prompt();

        rl.on('line', (line) => {
            //line事件触发时间为 控制台敲入回车
            //{“procotol“：”boardcast“，”from“：“张三”，“message”：“说啥？”}

            line = line.toString().trim();

            var temp = line.split(':');
            var send;
            if (temp.length === 2) {
                //p2p
                send = {
                    procotol: 'p2p',
                    from: name,
                    to: temp[0],
                    message: temp[1]
                };

            } else {
                //广播消息
                send = {
                    procotol: 'boardcast',
                    from: name,
                    message: line.toString().trim()
                };

            };
            //序列化之后通过socket发送给服务端
            server.write(JSON.stringify(send));

            rl.prompt();
        }).on('close', () => {
            console.log("你退出了");
        });
    });
});