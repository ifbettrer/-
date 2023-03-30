// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    TotheMoon:'/pics/To_the_moon.jpg'
  },
  // 事件处理函数
  BornAStranger:function(){
    let audio=wx.createInnerAudioContext(); //创建音频上下文
    audio.src="/audios/Born a Stranger.mp3";
    audio.play(); //播放音频
  }
})
