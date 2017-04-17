//打印目录树

const fs = require('fs');
const path = require('path');

//获取当前没有传入目标路径
var target = path.join(__dirname, process.argv[2] || './');

fs.readdir(target, (err, files) => {
    files.forEach(file => {
        //console.log(path.join(target, file));
        fs.stat(path.join(target, file), (err, stats) => {
            console.log(`${stats.mtime}\t${stats.size}\t${file}`);
            //打印文件修改日期、文件大小、文件名

        })
    })
})
