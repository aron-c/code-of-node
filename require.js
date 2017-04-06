//自制require

function $require(id) {
    //先沿路径找到文件
    //读取文件内容，内容为js代码
    const fs = require('fs');
    const path = require('path');
    //path模块
    const filename = path.join(__dirname, id);
    //自动拼接文件路径
    const dirname = path.dirname(filename);
    //查找到该文件之前的上级目录
    let code = fs.readFileSync(filename,'utf8');
    //阻塞该操作，直到该代码全部倒入完成，继续执行
    //fs.readFile为异步处理，fs.readFileSync为同步处理方法
    let module = { id: filename, exports:{} };
    let exports = module.exports;
    //使exports 与 module.exports指向同一地址
    code = `
    (function ($require,module,exports,__dirname,__filename) { 
            ${code} 
        })($require,module,exports,dirname,filename);`;

    eval(code);
    //执行code
    //执行代码
    return module.exports;
    //返回处理值
    
}

var m1 = $require('./module/module1.js');

m1.say('hi');