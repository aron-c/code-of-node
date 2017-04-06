const args = process.argv.slice(2);
console.log(args);

if (args.length !== 3) {
    console.log("参数不合法！");
    throw new Error('参数不合法');
}

let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

//const calc = require('./module/calculator.js');
//console.log(__dirname);
//引入自定义模块
//const require = require('fs')
//引入子带模块
const calc = require(__dirname + '/module/calculator.js')
//绝对路径使用

// let result = eval(`${parameter1} ${operator} ${parameter2}`);
// console.log(result);
let result;
switch (operator) {
    case '+':
        result = calc.add(parameter1,parameter2);
        break;
    case '-':
        result = calc.subtract(parameter1,parameter2); 
        break;
    case '×':
    case '*':
        result = calc.mutiply(parameter1,parameter2); 
        break;
    case '/':
    case '÷':
        result = calc.divide(parameter1,parameter2); 
        break;

    default:
    throw new Error("不支持");
}
console.log(result);
