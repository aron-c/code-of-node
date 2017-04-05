function isEvenOrOdd(number,callback) {
    
    if (typeof number === 'number') {

        if (number % 2) {
            //奇数
            callback(null,'当前传入是奇数')
        }else{
            //偶数
            callback(null,'当前传入是偶数')
        }
        
    }else{

        callback(new Error('你传的不是数字'))
    }
}

//约定将错误信息作为回调的第一个参数
isEvenOrOdd(10,(error,data) =>{

    if (error) {
        throw error;
    }
    console.log(data);
})

isEvenOrOdd(11,(error,data) =>{

    if (error) {
        throw error;
    }
    console.log(data);
})

isEvenOrOdd(asdas,(error,data) =>{

    console.log('你传的不是数字');
    if (error) {
        throw error;
    }
    console.log('你传的不是数字');
})