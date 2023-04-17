// index.js

var rand, x, s;
function createRand(){
  rand = [];  //初始化数组变量
  x = s = 0;
  for (var i = 0; i < 3; i++){
    var t = (Math.random() * 20 - 10).toFixed(0) * 1; //产生随机数
    rand.push(t);
    console.log(rand[i]); //在控制台显示数组元素
  }
}

function calc(){
  var a = rand[0], b = rand[1], c = rand[2];
  //var a = 1, b = 2, c = 1;
  s = b * b - 4 * a * c;
  if(a == 0){
    x = "该方程不为一元二次方程。";
  }else if(s < 0){
    x = "该方程无实数根。";
  }else if(s == 0){
    x = (-b) / (2 * a);
  }else{
    var x1, x2;
    x1 = (-b + Math.sqrt(s))/(2 * a);
    x2 = (-b - Math.sqrt(s))/(2 * a);
    x = "x1 = " + x1 + "，" + "x2 = " + x2;
  }
  console.log(x);
}

var num = 0, timerID;
Page({
  data:{
    hidden: false,
    num: num
  },

  onLoad() {
    createRand();
    calc();
    this.setData({
      rand:rand,
      x:x
    })
  },
  
  calcNew: function(){
    createRand();
    calc();
    this.setData({
      rand: rand,
      x: x
    })
  },

  start: function(){
    var that = this;  //回调函数可能会改变this的值
    timerID = setInterval(() => {that.timer()}, 1000); //每隔一秒调用一次timer函数
  },

  stop: function(){
    clearInterval(timerID);
  },

  reset: function(){
    num = 0;
    this.setData({
      num: num
    })
    console.log(num);
  },

  timer: function(){
    var that = this;
    console.log(num);
    if(num >= 0 && num <= 120){
      that.setData({
        num: num++
      })
    }else{
      that.setData({
        num: 120
      })
    }
  }
})
