// app.js
App({
  // 共享数据不是响应式的, 通常用来保存固定的数据
  globalData: {
    token: '',
    userInfo: {}
  },

  onLaunch(option) {
    // 0.从本地获取数据
    let token = wx.getStorageSync('token')
    let userInfo = wx.getStorageSync('userInfo')

    // 1.登录操作(判断逻辑)
    if (!token || !userInfo) {
      // 进行登录
      token = 'token'
      userInfo = { name: 'hxl', age: 18 }
      wx.setStorageSync('token', token)
      wx.setStorageSync('userInfo', userInfo)
    }

    // 2.保存数据
    this.globalData.token = token
    this.globalData.userInfo = userInfo

    // 3.发送网络请求, 获取必要的数据
    wx.request({
      url: 'url'
    })
  },

  onShow(option) {
    console.log('onShow', option)
  },

  onHide() {
    console.log('onHide')
  }
})
