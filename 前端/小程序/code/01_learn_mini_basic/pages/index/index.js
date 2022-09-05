Page({
  data: {
    pages: [
      { name: '01_注册页面', path: '/pages/01_register-page/index' },
      { name: '02_常见组件', path: '/pages/02_common-cpns/index' },
      { name: '03_学习WXSS', path: '/pages/03_learn_wxss/index' }
    ]
  },
  handleBtnClick(event) {
    const path = event.target.dataset.item.path
    wx.navigateTo({
      url: path
    })
  }
})
