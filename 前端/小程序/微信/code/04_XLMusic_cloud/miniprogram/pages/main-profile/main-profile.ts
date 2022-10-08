// pages/main-profile/main-profile.ts
import databaseStore from '../../stores/databaseStore'
import { verifyLogin } from '../../utils/verify'

Page({
  data: {
    userInfo: {},
    myMusicList: [
      { name: '我的喜欢', nickName: 'love' },
      { name: '历史记录', nickName: 'history' }
    ],

    iptSongMenuName: '',
    iptSongMenuDes: '',

    mySongMenu: [],

    isLogin: false,
    isShowDialog: false
  },

  onLoad() {
    this.getLoginInfo()

    const mySongMenu = databaseStore.mySongMenu
    this.setData({ mySongMenu })
    databaseStore.watch('mySongMenu', this.fetchMySongMenu)
  },

  getLoginInfo() {
    const isLogin = verifyLogin()
    if (isLogin) {
      const userInfo = wx.getStorageSync('userInfo')
      this.setData({ isLogin, userInfo })
    } else {
      this.setData({ isLogin })
    }
  },

  // ============== 事件处理 ==============
  async onUserInfoTap() {
    const isLogin = verifyLogin()
    if (isLogin) {
      console.log('您已登录~')
    } else {
      const res = await wx.getUserProfile({ desc: '获取您的头像和名称' })
      const userInfo = res.userInfo
      wx.setStorageSync('userInfo', userInfo)
      this.setData({ isLogin: true, userInfo })
      databaseStore.createRecordAction()
    }
  },

  async onMyMusicItemTap(event: any) {
    if (!verifyLogin()) {
      await this.onUserInfoTap()
      await databaseStore.initLoginData()
    }

    const { nickName } = event.currentTarget.dataset.item
    if (nickName === 'love') {
      wx.navigateTo({ url: '/pages/detail-song-menu/detail-song-menu' })
    }
  },

  async onCreateSongMenuTap() {
    this.setData({ isShowDialog: true })
  },

  onDialogConfirmTap() {
    const { iptSongMenuName, iptSongMenuDes } = this.data

    databaseStore.createMySongMenuRecordAction(iptSongMenuName, iptSongMenuDes)
  },

  onMySongMenuItemTap(event: any) {
    const mySongMenuIndex: number = event.currentTarget.dataset.index
    console.log('onMySongMenuItemTap', mySongMenuIndex)
    wx.navigateTo({
      url: `/pages/detail-song-menu/detail-song-menu?mySongMenuIndex=${mySongMenuIndex}`
    })
  },

  onSongMenuIptTap() {},

  onSongMenuDesIptTap() {},

  // ============== store 处理 ==============
  fetchMySongMenu(key: string, mySongMenu: any) {
    this.setData({ mySongMenu })
  },

  onUnload() {
    databaseStore.deleteWatch('mySongMenu', this.fetchMySongMenu)
  }
})
