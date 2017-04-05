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


// es6 "=>" 函数的意义
// var log = function(message){

//     process.stdout.write(message + '\n');
// };

// var log2 = (message) => {

//     process.stdout.write(message + '\n');
// }

//console.log 与 process.stdout.write() 区别
// `` 模板字符串

// process.stdout.write('hello');

// console.log('hello');

// console.log = {msg} => {

//     process.stdout.write('${msg}\n')
// }

// var msg = 'hello';
// process.stdout.write(`${msg}\n`)

// var size = process.stdout.getWindowSize()

// console.log(`${size}`);

// var fps = 10;
// var index = 0;
// var frames = [];

// frames[frames.length] = `
// (￣▽￣)~*
// `;
// frames[frames.length] = `
// \（￣︶￣）/
// `;
// frames[frames.length] = `
// ╰(￣▽￣)╭
// `;
// frames[frames.length] = `
// []~(￣▽￣)~*]
// `;
// frames[frames.length] = `
// (～￣▽￣)～
// `;

// var render = () => {

//     process.stdout.write('\033[0f');
//     process.stdout.write('\033[2J');

//     if (index === frames.length) {
//         index = 0;}

//     process.stdout.write(frames[index++])
// }

//  setInterval(render,1000/fps);
 
// var a = 1;
// setInterval(() => {

//     console.log(a);

//     a = a+1;
// },1000)

//接受用户输入

// process.stdin.setEncoding(utf8);

// process.stdin.on('redable',() => {

//     var chunk = process.stdin.read();
//     if (chunk !== null) {
        
//         process.stdout.write(`data:${chunk}\n`);

//     }
// })
