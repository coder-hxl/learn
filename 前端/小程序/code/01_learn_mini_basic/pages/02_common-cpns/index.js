// pages/02_common-cpns/index.js
Page({
  data: {
    msg: '你好啊!',
    imageUrl: '',
    viewColor: ['red', 'blue', 'yellow', 'aqua', 'green']
  },
  getUserInfo(event) {
    wx.getUserProfile({
      desc: 'desc'
      // success(res) {
      //   console.log(res)
      // }
    }).then((res) => {
      console.log(res)
    })
  },
  getPhoneNumber(event) {
    console.log(event)
  },
  onChooseImage() {
    wx.chooseMedia({
      mediaType: 'image'
    }).then((res) => {
      const imageUrl = res.tempFiles[0].tempFilePath
      this.setData({
        imageUrl
      })
    })
  },

  // scroll滚动事件
  onScrolltoupper() {
    console.log('滚动到最 顶部/左边')
  },
  onScrolltolower() {
    console.log('滚动到最 底部/右边')
  },
  onScroll(event) {
    console.log(event)
  }
})
