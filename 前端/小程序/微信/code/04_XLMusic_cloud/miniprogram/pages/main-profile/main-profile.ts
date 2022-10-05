// pages/main-profile/main-profile.ts
Page({
  data: {
    userInfo: {},
    myMusicList: [
      { name: '我的喜欢', nickName: 'love' },
      { name: '历史记录', nickName: 'history' }
    ],

    isLogin: false
  },

  onLoad() {
    this.verifyLogin()
  },

  verifyLogin() {
    const userInfo = wx.getStorageSync('userInfo')
    const isLogin = !!userInfo
    this.setData({ isLogin, userInfo })
    return !!isLogin
  },

  // ============== 事件处理 ==============
  async onUserInfoTap() {
    const isLogin = this.verifyLogin()
    if (isLogin) {
      console.log('您已登录~')
    } else {
      const res = await wx.getUserProfile({ desc: '获取您的头像和名称' })
      const userInfo = res.userInfo
      wx.setStorageSync('userInfo', userInfo)
      this.setData({ isLogin: true, userInfo })
    }
  },

  async onMyMusicItemTap(event: any) {
    const { nickName } = event.currentTarget.dataset.item
    console.log(nickName)
  }
})
