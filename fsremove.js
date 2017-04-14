//文件移动和重命名

const fs = require('fs');
const path = require('path');

var currentPath = path.join(__dirname,'/module/test2.txt');
var targetPath = path.join(__dirname,'/test4.txt');

fs.rename(currentPath,targetPath);