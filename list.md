##常用内置模块
- path 处理文件路径
- fs 操作文件系统
- child_process 新建子进程
- util 提供一些列实用工具
- http 提供HTTP服务器功能
- url 解析url
- querystring 解析url中的查询字符串
- cryto 提供加密和解密功能

##buffer(二进制缓冲区)
readFile的确也是使用buffer，但是是一次性读取。
##文件写入

```js
fs.writeFile(file,data[,option],callback(err))
//异步文件写入
fs.writeFileSync(file,data[,option])
//同步文件写入
fs.creatWriteStream(path[,option])
//流式文件写入
```
###文件追加

```js
fs.appendFile(file,data[,options],callback(err))
//异步追加
fs.appendFileSync(file,data[,options])
//同步追加
```
###重命名或移动
```js
var currentPath = path.join(__dirname,'/module/test2.txt');
var targetPath = path.join(__dirname,'/test4.txt');

fs.rename(currentPath,targetPath);
```





