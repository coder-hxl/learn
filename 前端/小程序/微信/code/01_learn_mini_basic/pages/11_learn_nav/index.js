// pages/11_learn_nav/index.js
Page({
  data: {
    message: 'Hello'
  },
  onNavigateTo() {
    wx.navigateTo({
      // 跳转的时候传递参数过去
      url: '/page2/detail/index?name=hxl&age=18',
      events: {
        hxl: (data) => {
          console.log('hxl: ', data)
        }
      }
    })
  }
})
