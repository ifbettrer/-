// pages/tri-color-flag/tri-color-flag.js
Page({
  createColor:function(){
    var color = []; //定义数组
    var letters = '0123456789ABCDEF'; //定义16进制颜色字符集
    for (var i = 0; i < 3; i++){  //随机三种颜色
      var c = '#';
      for (var j = 0; j < 6; j++){  //创建由六个随机字母构成的随机颜色
        c += letters[Math.floor(Math.random() * 16)];
      }
      color.push(c); //加入颜色数组
    }
    console.log(color); //控制面板显示颜色值

    this.setData({
      color0: color[0],
      color1: color[1],
      color2: color[2]
    })
  },
  
  onLoad(e) {
    this.createColor();
  },

  changeColor: function(){
    this.createColor();
  }
})