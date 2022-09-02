Page({
  data: {
    pages: [{ name: '01_注册页面', path: '/pages/01_register-page/index' }]
  },
  handleBtnClick(event) {
    const path = event.target.dataset.item.path
    wx.navigateTo({
      url: path
    })
  }
})
