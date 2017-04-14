
//创建长度为4个字节的缓冲区
var buffer = new Buffer(4);

buffer.write('rrrrrrrrrrrrrrrrr');

console.log(buffer.toString('utf8'));
//只打印出前四位

