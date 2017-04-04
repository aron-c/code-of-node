// var a = 1;

// console.log(a);

// var argv = process.argv;

// console.log(argv);//前两个参数没有用 都是运行的文件地址！！

// var argvs = process.argv.slice(2);//slice(start,over),剪切

// switch(argvs[0]){

//     case'init':
//         console.log('需要安装');
//         break;
//     case'install':
//         var installPackgeName = argvs[1];
//         console.log('正在安装' + installPackgeName);
//         break;
//     case'uninstall':
//         console.log('卸载');
//         break;
// }

// console.log(argvs.toString());


// // es6 "=>" 函数的意义
// var log = function(message){

//     process.stdout.write(message + '\n');
// };

// var log2 = (message) => {

//     process.stdout.write(message + '\n');
// }

//console.log 与 process.stdout.write() 区别
// `` 模板字符串

exports.log = function() {
    process.stdout.write(format.apply(this, arguments) + '\n');
};