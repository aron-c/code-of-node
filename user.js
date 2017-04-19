var q1 = '请输入用户名：';
var q2 = '请输入密码：';
var users = {
    'admin':'123',
    'user1':'321',
    'user2':'213',
    //用户名：密码
};
//var i = 0;
//计数器
var isInputUsername = true;//设置标志位
var username = ''; 

process.stdout.write(q1);//提示用户输入

process.stdin.on('data',(input) => {

    //console.log(i++);
    //此时要知道用户输入的是用户名还是密码

    //process.stdout.write(`[${input}]`);
    // 可以看到，这里的字符串多打了一个\n 
    //输入最后是一个回车符
     input = input.toString().trim();
     //input是输入流，二进制数组
     //input不是字符串 。先toString()转换字符串。再trim()去掉空白字符
     //process.stdout.write(`[${input}]`);
if (isInputUsername) {
    
    if (Object.keys(users).indexOf(input) === -1) {
        //’-1‘没有找到
        process.stdout.write('用户名不存在:' + input + '\n');

        process.stdout.write(q1 + '\n');//提示用户输入

        isInputUsername = true;

        username = '';

    }else{
        //用户名存在
        var pwd = users;
        console.log('存在');
        isInputUsername = false;
        process.stdout.write(q2+ '\n');

        username = input ;
    }
    //获取键值对集合所有的键
}else{
    //用户名正确后输入密码
     
    //console.log("mima");
    if (input === users[username]) {
        process.stdout.write("成功"+ '\n');
    }else{
        process.stdout.write('密码不正确，'  + q2 + '\n');
    }
}
})//接收用户输入

