//pipe读取写入管道

const fs = require('fs');
const path = require('path');
const ProgressBar = require('progress');

//创建文件读取流，并没有读取正式数据，开始了读取文件的任务（）
var reader = fs.createReadStream('./module/太阳花3.m4a');
//创建文件写入流
var writer = fs.createWriteStream('./module/副本2.m4a');
//创建进度条
var bar = new ProgressBar('进度[:bar]', { total: 20, width: 10, complete: "*" });

var oOhunk = reader.on('data', chunk);

var timer = setInterval(function() {
    bar.tick(chunk.length);
    //tick()中放入速度，如tick（chunk.length）
    if (bar.complete) {
        clearInterval(timer);
    }
}, 100);

reader //读取流
    .pipe(writer);
pipe支持链式编程

// writer.on('pipe', (src) => {

//     console.log(src);
// });