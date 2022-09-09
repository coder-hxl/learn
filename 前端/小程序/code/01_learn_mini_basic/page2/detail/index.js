// page2/detail/index.js
Page({
  data: {
    name: '',
    age: 0
  },
  onLoad(options) {
    const name = options.name
    const age = options.age

    this.setData({ name, age })
  },
  onNavigateBack() {
    // 1.返回导航
    wx.navigateBack()

    // 2.方式一: 给上一层页面传递数据
    // 2.1. 获取上一层页面实例
    // const pages = getCurrentPages()
    // const prePage = pages[pages.length - 2]
    // // 2.2. 给页面实例设置数据
    // prePage.setData({ message: '你好' })

    // 3.方式二: 回调添加在 events 的方法
    // 3.1. 获取 eventChannel
    const eventChannel = this.getOpenerEventChannel()
    // 3.2. 回调方法
    eventChannel.emit('hxl', '哈哈哈')
  },
  onUnload() {
    // 2.方式一: 给上一层页面传递数据
    // 2.1. 获取上一层页面实例
    const pages = getCurrentPages()
    const prePage = pages[pages.length - 2]
    // 2.2. 给页面实例设置数据
    prePage.setData({ message: '你好' })
  }
})
