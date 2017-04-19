//md文件转换

const fs = require('fs');
const path = require('path');
const marked = require('marked');
const browserSync = require('browser-sync');
//获取marked转换模块，浏览器打开brbrowserSync模块

//接收需要转换的文件路径
const target = path.join(__dirname, process.argv[2] || './list.md');
//获取实时需更改文件名，获得browser需要打开的index
var filename = target.replace('.md', '.html');
var indexpath = path.basename(filename);


//通过brbrowserSync创建一个文件服务器
browserSync({
    server: path.dirname(target),
    //服务的根目录即为当前文件所在目录
    //网址根目录
    index: indexpath
    //默认文档
});

//开启文件监听（文件，刷新时间，（前，后））
fs.watchFile(target, { interval: 200 }, (curr, prev) => {
    //console.log(`current:${curr.size};previous:${prev.size}`);
    //判断文件有无变化
    if (curr.mtime === prev.mtime) {
        return false;
        //文件修改时间发生变化，触发
    }
    //读取文件，转化为新的HTML
    fs.readFile(target, 'utf8', (err, content) => {
        if (err) {
            throw err;
        }
        var html = marked(content);
        //用模块对文件内容转换
        fs.readFile('./github.css', 'utf8', (err, css) => {
            //注入css样式
            html = template.replace('{{{content}}}', html).replace('{{{styles}}}', css);
            //此时文件已经有内容有样式
            fs.writeFile(filename, html, 'utf8', (err) => {
                //创建html文件
                browserSync.reload(indexpath);
                //重新载入文件
                console.log("updated:" + new Date);
                //查看更新时间
            });
        });
        //console.log(html);
    });
});

var template = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>{{{styles}}}</style>
</head>
<body class="markdown-body">
        {{{content}}}
</body>
</html>
`
//拼接字符串