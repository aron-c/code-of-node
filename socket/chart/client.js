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
        server.on('data', (chunk) => {

            try {
                var signal = JSON.parse(chunk.toString().trim());
                var procotol = signal.procotol;

                switch (procotol) {
                    case 'boardcast':
                        console.log('\n广播');
                        console.log(signal.from + '> ');
                        console.log(signal.message);
                        rl.prompt();
                        break;

                        // case 'p2p':
                        //     p2p(signal);
                        //     break;
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
            //{“procotol“：”boardcast“，”from“：“张三”，“message”：“说啥？”}
            var send = {
                procotol: 'boardcast',
                from: name,
                message: line.toString().trim()
            };
            server.write(JSON.stringify(send));

            rl.prompt();
        }).on('close', () => {
            console.log("你退出了");
        });
    });
});