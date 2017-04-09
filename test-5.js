const args = process.argv.slice(2);
console.log(args);

if (args.length !== 3) {
    console.log("参数不合法！");
    throw new Error('参数不合法');
}

let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];

// let result = eval(`${parameter1} ${operator} ${parameter2}`);
// console.log(result);
switch (operator) {
    case '+':
        result = parseFloat(parameter1) + parseFloat(parameter2); 
        break;
    case '-':
        result = parseFloat(parameter1) - parseFloat(parameter2); 
        break;
    case '×':
    case '*':
        result = parseFloat(parameter1) * parseFloat(parameter2); 
        break;
    case '/':
    case '÷':
        result = parseFloat(parameter1) / parseFloat(parameter2); 
        break;

    default:
    throw new Error("不支持");
}
console.log(result);

