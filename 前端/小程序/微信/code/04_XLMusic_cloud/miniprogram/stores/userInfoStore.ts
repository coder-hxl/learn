import xlStore from 'xl-store'
import { loveCol, mySongMenuCol } from '../database/index'
import { verifyLogin } from '../utils/verify'

export interface ISongMenuRecord {
  _id?: string
  _openid?: string
  name: string
  description: null | string
  coverImgUrl: null | string
  creator: {
    nickname: string
    avatarUrl: string
  }
  subscribedCount: number
  shareCount: number
  tracks: any[]
}

const initData = {
  songRecord(name: string, description: string | null = null): ISongMenuRecord {
    const userInfo = wx.getStorageSync('userInfo') as WechatMiniprogram.UserInfo

    const res: ISongMenuRecord = {
      name,
      description,
      coverImgUrl: null,
      creator: {
        nickname: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl
      },
      subscribedCount: 0,
      shareCount: 0,
      tracks: []
    }

    return res
  }
}

const userInfoStore = xlStore({
  state: {
    userInfo: {} as WechatMiniprogram.UserInfo,
    loveRecord: {},
    mySongMenu: []
  },

  actions: {
    async loginActions() {
      // 1.获取用户信息
      let res: WechatMiniprogram.GetUserProfileSuccessCallbackResult | null = null
      try {
        res = await wx.getUserProfile({ desc: '获取您的头像和名称' })
      } catch (error) {
        wx.showToast({ title: '登录失败~', icon: 'error' })
        return {
          state: false
        }
      }

      // 2.保存数据
      const userInfo = res.userInfo
      wx.setStorageSync('userInfo', userInfo)
      await this.initStoreDataAction()

      return {
        state: true,
        data: userInfo
      }
    },

    async createLoveRecordAction() {
      // 1.判断是否创建过
      const res = await loveCol.get({}, null, false)

      if (res.data.length) return true

      // 2.生成初始数据
      const loveRecord = initData.songRecord('我的喜欢')
      loveRecord.coverImgUrl = '/assets/images/icons/love-activate.png'

      // 3.添加到云数据库
      loveCol.add(loveRecord)
      this.loveRecord = loveRecord
      return true
    },

    async createMySongMenuRecordAction(
      songMenuName: string,
      songMenuDes: string
    ) {
      const res = await mySongMenuCol.get({ name: songMenuName }, null, false)

      if (res.data.length) return

      const mySongMenuRecord = initData.songRecord(songMenuName, songMenuDes)
      mySongMenuRecord.coverImgUrl = '/assets/images/icons/music-box.png'

      mySongMenuCol.add(mySongMenuRecord)
      this.mySongMenu.push(mySongMenuRecord)
    },

    initStoreDataAction() {
      const userInfo = wx.getStorageSync('userInfo')
      this.userInfo = userInfo

      this.createLoveRecordAction().then(() => {
        this.getLoveRecordAction()
      })

      this.getMySongMenuAction()
    },

    async getLoveRecordAction() {
      const res = await loveCol.get({}, null, false)
      console.log('getLoveRecordAction', res.data)

      return (this.loveRecord = res.data[0])
    },

    async getMySongMenuAction() {
      const res = await mySongMenuCol.get({}, null, false)
      const mySongMenus = res.data as ISongMenuRecord[]
      for (const item of mySongMenus) {
        item.tracks.reverse()
      }
      console.log('getMySongMenuAction', mySongMenus)

      return (this.mySongMenu = mySongMenus)
    }
  }
})

verifyLogin() && userInfoStore.initStoreDataAction()

export default userInfoStore
