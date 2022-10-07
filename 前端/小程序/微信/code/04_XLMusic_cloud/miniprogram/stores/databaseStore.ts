import xlStore from 'xl-store'
import { loveCol, mySongMenuCol } from '../database/index'
import { verifyLogin } from '../utils/verify'

interface ISongRecord {
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
  songRecord(name: string, description: string | null = null): ISongRecord {
    const userInfo = wx.getStorageSync('userInfo') as WechatMiniprogram.UserInfo

    const res: ISongRecord = {
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

const databaseStore = xlStore({
  state: {
    loveRecord: {},
    mySongMenu: []
  },

  actions: {
    async createRecordAction() {
      const res = await loveCol.get({}, null, false)

      if (res.data.length) return

      const loveRecord = initData.songRecord('我的喜欢')
      loveRecord.coverImgUrl = '/assets/images/icons/love.png'

      loveCol.add(loveRecord)
      this.loveRecord = loveRecord
    },

    async createMySongMenuRecordAction(
      songMenuName: string,
      songMenuDes: string
    ) {
      const res = await mySongMenuCol.get({ name: songMenuName }, null, false)

      if (res.data.length) return

      const mySongMenuRecord = initData.songRecord(songMenuName, songMenuDes)
      mySongMenuRecord.coverImgUrl = '/assets/images/icons/love.png'

      mySongMenuCol.add(mySongMenuRecord)
      this.mySongMenu.push(mySongMenuRecord)
      console.log('createMySongMenuRecordAction', this.mySongMenu)
    },

    initLoginData() {
      databaseStore.getLoveRecordAction()
      databaseStore.getMySongMenuAction()
    },

    async getLoveRecordAction() {
      const res = await loveCol.get({}, null, false)
      console.log('getLoveRecordAction', res.data)

      return (this.loveRecord = res.data[0])
    },

    async getMySongMenuAction() {
      const res = await mySongMenuCol.get({}, null, false)
      console.log('getMySongMenuAction', res.data)

      return (this.mySongMenu = res.data)
    }
  }
})

verifyLogin() && databaseStore.initLoginData()

export default databaseStore
