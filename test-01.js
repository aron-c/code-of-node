//文件复制


const fs = require('fs');
const path = require('path');

console.time('读取耗时');


// fs.readFile('./module/太阳花3.m4a', (err, data) => {

//     if (err) {
//         throw err;
//     }
//     console.timeEnd('read');
//     console.time('write');
//     fs.writeFile('./module/副本.m4a', data, err => {

//         if (err) {
//             throw err;
//         }
//         console.log('拷贝完成');
//         console.timeEnd('write');
//     });
// });

//没有进度条

//创建文件读取流，并没有读取正式数据，开始了读取文件的任务（）
var reader = fs.createReadStream('./module/太阳花3.m4a');
//创建文件写入流
var writer = fs.createWriteStream('./module/副本2.m4a');


fs.stat('./module/太阳花3.m4a', (err, stats) => {

    if (stats) {
        //如果文件存在
        var total = 0;
        reader.on('data', (chunk) => {
            //chunk是一个buffer（字节数组）
            total += chunk.length;
            var count = parseInt(total / stats.size * 100);
            // console.log('读取进度：' + count + '%');
            // if (count == 100) {
            //     console.log('读取完成');
            //     console.timeEnd('读取耗时');
            // }
            //开始写入文件流
            writer.write(chunk, (err) => {
                console.log('写入进度：' + count + '%');
            });
        });
    }
});