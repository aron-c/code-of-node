
// define(function(require, module,exports) {
//     'use strict';

console.log(__dirname);
//打印当前正在使用模块目录
console.log(__filename);
//打印当前所使用模块目录地址

    function convert(input) {
        return parseFloat(input);
    }
    function add(a,b) {
        return convert(a) + convert(b);
    }

    function subtract(a,b) {
        return convert(a) - convert(b);
    }
    
    function mutiply(a,b) {
        return convert(a) * convert(b);
    }

    function divide(a,b) {
        return convert(a) / convert(b);
    }

    module.exports = {

        add, subtract, mutiply, divide
    };
    //module.exports 快速导出一个输出值
    //es6
    // module.exports = {

    //     add:add, subtract:subtract, mutiply, divide
    // };
// });