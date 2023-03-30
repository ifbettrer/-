// index.js

Page({
  isLeapYear: function(e){
    var year, ans;
    var year = e.detail.value;
    if((year % 4 == 0 && year % 100)|| year % 400 == 0){
      ans = 'yes';
    }else{
      ans = 'no'
    }
    
    this.setData({
      Y:ans
    })
  }
})
