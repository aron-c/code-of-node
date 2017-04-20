//node-progress进度条

var ProgressBar = require('progress');

var bar = new ProgressBar('进度[:bar]', { total: 20, width: 10, complete: "*" });
//{总量：10，展示量：5,展示方式：，}
var timer = setInterval(function() {
    bar.tick();
    //tick()中放入速度，如tick（chunk.length）
    if (bar.complete) {
        console.log('\ncomplele\n');
        clearInterval(timer);
    }
}, 100);