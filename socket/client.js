//建立一个客户端

const net = require('net');

var socket = net.connect({ port: 2080 }, () => {

    console.log("连上了");
    //socket.write("world");

    process.stdin.on('data', (chunk) => {
        //控制台输入

        //console.log(chunk.toString().trim());
        socket.write(chunk.toString());
        process.stdout.write('\nclient > ');

        socket.on('data', (data) => {

            console.log('\n' + data.toString());
            //socket.end();
        });
    });
});



socket.on('end', () => {
    console.log('断了');
});