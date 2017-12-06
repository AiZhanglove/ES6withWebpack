/**
 * Created by ZhangAi on 2017/12/6.
 */
var obj = require('./tool.js');
var demo2 = {
    init: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        //var demo1 = document.getElementsByClassName('demo1')[0];
        var demo1 = obj.getDom('demo2');
        demo1.onclick = this.changeStyle;
    },
    changeStyle: function() {
        this.style.width = '400px';
        this.style.height = '400px';
        this.style.background = 'blue';
        console.log('2');
    }
}

module.exports = demo2;