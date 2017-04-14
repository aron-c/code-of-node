//文件写入
const fs = require('fs');
const path = require('path');

// fs.writeFile()
//JSON.stringify() 序列化
//JSON.parse 反序列化
//默认覆盖源文件 
//追加使用fs.appendFile() 
fs.writeFile('./module/test.txt', JSON.stringify({ id: 9 }), (err) => {

    if (err) {
        //读文件不存在报错
        //意外错误
        //文件权限错误
        //找不到文件夹
        console.log(err);
    } else {
        console.log('成功');
    }
})

//fs.creatWriteStream()

var streamWrite = fs.createWriteStream('./module/test2.txt')
// streamWrite.write('hello',()=>{

//     console.log('+1');
// });
setInterval(() => {
    //设置1秒写入一次‘hello’ 
    streamWrite.write('hello', () => {

        console.log('+1');
    });
}, 1000)