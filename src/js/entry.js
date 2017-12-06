/**
 * Created by ZhangAi on 2017/12/6.
 */

//引入css
require('../index.css');


//引入js
var demo1 = require('../js/demo1.js');
var demo2 = require('../js/demo2.js');

demo1.init();
demo2.init();
console.log('12345')

//引入img
var oImg = new Image();
oImg.src = require('../img/1.png');
document.body.appendChild(oImg)