import xlStore from 'xl-store'
import { loveCol } from '../database/index'

const initData = {
  loveRecord(userInfo: WechatMiniprogram.UserInfo) {
    return {
      name: '我的喜欢',
      description: null,
      coverImgUrl: '/assets/images/icons/love.png',
      creator: {
        nickname: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl
      },
      subscribedCount: 0,
      shareCount: 0,
      tracks: []
    }
  }
}

const databaseStore = xlStore({
  state: {
    loveRecord: {}
  },

  actions: {
    async createRecordAction() {
      const res = await loveCol.get({}, null, false)

      if (res.data.length) return

      const userInfo = wx.getStorageSync(
        'userInfo'
      ) as WechatMiniprogram.UserInfo
      const loveRecord = initData.loveRecord(userInfo)

      loveCol.add(loveRecord)
      this.loveRecord = loveRecord
    },

    async getLoveRecordAction() {
      const res = await loveCol.get({}, null, false)
      return (this.loveRecord = res.data[0])
    }
  }
})

export default databaseStore
