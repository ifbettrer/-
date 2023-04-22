// pages/about/about.js
Page({
  data: {
      email: "",
      flag: true
  },
  emailInput(e){
      let that = this
      let email = e.detail.value // 获取输入框的数据
      that.setData({
          email
      })
  },
  submit:function(){
    this.setData({
      flag:false
    })
  }

})