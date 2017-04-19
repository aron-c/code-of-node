const fs = require('fs');

fs.stat('./list.md',(err,stats) => {

    if (err) {
        console.log('文件不存在');
        fs.writeFile('./list.md',new Date(), () =>{

            // if (err) {
            //     console.log('error');
            //     return false;
            // } 
            console.log('不存在创建成功')
        })
        return false;
    }
    console.log('文件存在');
    //存在删除该文件

    fs.unlink('./list.md',(err) => {

        if (err) {
            console.log('error');
            return false;
        }
        fs.writeFile('./list.md',new Date(), () =>{

            if (err) {
                console.log('error');
                return false;
            }
            console.log('删除后创建成功')
        })
    })
})
