

const fs = require('fs');
const path = require('path');

// console.time('async');
// fs.readFile('./module/module1.js','utf8',(error,data) => {
//     if(error)
//     throw error;
//     eval(data);
// });
// console.timeEnd('async');


// console.time('sync');
// var file = fs.readFileSync('./module/module1.js','utf8');

// eval(file);

// console.timeEnd('sync');

console.time('sync');
try {
    var data = fs.readFileSync('./module/module1.js','utf8');
    eval(data);
} catch (error) {
     throw error;
}
console.timeEnd('sync');
