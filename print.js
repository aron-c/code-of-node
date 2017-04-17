//目录树递归
//先写一层的情况
//抽象递归参数
//一定找到突破点（避免死循环）
//    自己调自己，某种情况不调用
const fs = require('fs');
const path = require('path');

//获取当前没有传入目标路径
var target = path.join(__dirname, process.argv[2] || './');
function load(target, depth) {
    //depth 0 = ''
    //depth 1 = '| '
    //depth 2 = '| | '
    var prefix = new Array(depth + 1).join('| ');
    var dirinfos = fs.readdirSync(target);
    //同步读取目录文件
    var oDirs = [];//文件夹数组
    var oFiles = [];//文件数组
    dirinfos.forEach(info => {
        //便利目录内文件
        var stats = fs.statSync(path.join(target, info));
        //同步获取文件状态
        if (stats.isFile()) {
            oFiles.push(info);//推入文件夹数组
        } else {
            oDirs.push(info);//推入文件数组
        }
    });

    oDirs.forEach(dir => {

        console.log(`${prefix}├——${dir}`);
        //当前是个目录，需要深入进去

        load(path.join(target, dir), depth + 1);
        //第二次加载，depth+1
    });


    var count = oFiles.length - 1;
    //文件夹内文件数目长度
    oFiles.forEach(file => {
        var temp = count-- ? '├' : '└';
        //判断是否是该文件夹最后一个文件或空文件夹
        console.log(`${prefix}${temp}——${file}`);
    });
}

load(target, 0);
//加载逐层目录树，初始depth=0