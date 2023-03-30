// index.js
// 获取应用实例

var a, b, c, s, area;

Page({
  data: {
    flag: true
  },
  // 事件处理函数
  
  InputA:function(e){
    a = parseInt(e.detail.value);
  },
  InputB:function(e){
    b = parseInt(e.detail.value);
  },
  InputC:function(e){
    c = parseInt(e.detail.value);
  },

  Judege:function(x, y, z){
    if(x + y <= z || x + z <= y || y + z <= x){
      return true;
    }
  },

  Calculate:function(){
    if(a == null||b == null||c == null){
      return;
    }else if(this.Judege(a, b, c)){
      area = "两边之和不大于第三边，不能组成三角形！";
      this.setData({
        flag :false,
        ans: area
      });
    }else{
      s = (a + b + c) / 2;
      area = Math.sqrt(s *(s - a) *(s - b) *(s - c));
      var ans = "任意两边之和大于第三边，该三角形面积为：" + area;
      this.setData({
        flag:false,
        ans: ans
      });
    }
  }
})
