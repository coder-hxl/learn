// pages/01_register/index.js
Page({
  data: {
    banner: [],
    btns: ['red', 'blue', 'orange']
  },

  // 页面加载
  onLoad() {
    console.log('onLoad')

    // 发送网络请求
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res) => {
        const data = res.data.data
        const banner = data.banner.list
        this.setData({ banner })
      }
    })
  },

  // 事件处理
  handleBntClick() {
    console.log('btnClick')
  },
  handleColorBntClick(event) {
    console.log('handleColorBntClick', event.target.dataset.color)
  },

  // 绑定下拉刷新/达到底部/页面滚动
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  },
  onReachBottom() {
    console.log('onReachBottom')
  },
  onPageScroll(event) {
    console.log('onPageScroll', event)
  },

  // 生命周期
  onShow() {
    console.log('onShow')
  },
  onHide() {
    console.log('onHide')
  },
  onReady() {
    console.log('onReady')
  },
  onUnload() {
    console.log('onUnload')
  }
})
