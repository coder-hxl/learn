// pages/category/category.js
Page({
  data: {
    userInfo: {}
  },

  onLoad() {
    // 获取共享的数据, App 实例中的数据
    // 1.获取 app 实例对象
    const app = getApp()

    // 2.从 app 实例对象中获取数据
    const token = app.globalData.token
    const userInfo = app.globalData.userInfo

    // 3.保存数据到当前 data
    this.setData({ userInfo })
  }
})
