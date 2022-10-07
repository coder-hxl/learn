// components/song-item-v2/song-item-v2.ts
import databaseStore from '../../stores/databaseStore'

const db = wx.cloud.database()
const cmd = db.command
const cLove: any = db.collection('c_love')

Component({
  properties: {
    order: {
      type: Number,
      value: 0
    },
    stripe: {
      type: Boolean,
      value: true
    },
    itemData: {
      type: Object,
      value: {}
    }
  },

  data: {
    isInLoveTracks: null as null | boolean
  },

  lifetimes: {
    async attached() {
      const itemData = this.data.itemData
      // 1.判断当前歌曲是否存在于喜欢列表中
      const upLoveRecordLength = Object.keys(databaseStore.loveRecord).length
      const loveRecord = upLoveRecordLength
        ? databaseStore.loveRecord
        : await databaseStore.getLoveRecordAction()
      const tracksIds: number[] = loveRecord.tracks.map((item: any) => item.id)
      const isInTracks = tracksIds.includes(itemData.id)

      this.data.isInLoveTracks = isInTracks
    }
  },

  methods: {
    onSongItemTap() {
      const id = this.properties.itemData.id
      wx.navigateTo({
        url: `/packagePlayer/pages/music-player/music-player?id=${id}`
      })
    },

    async onControlTap() {
      // 1.判断当前歌曲是否存在于喜欢列表中
      let itemList = null
      this.data.isInLoveTracks
        ? (itemList = ['删除喜欢', '添加到歌单'])
        : (itemList = ['添加喜欢', '添加到歌单'])

      // 2.获取用户点击的结果
      let res = null
      try {
        res = await wx.showActionSheet({ itemList })
      } catch (error) {
        console.log(error)
      }

      // 3.根据结果做出对应处理
      const tapIndex = res?.tapIndex
      if (tapIndex === undefined) return

      this.handleLoveTracks(tapIndex)
    },

    async handleLoveTracks(tapIndex: number) {
      let handleRes = null

      switch (tapIndex) {
        // 删除/添加 喜欢
        case 0:
          handleRes = await this.handleLoveRecord()

          break

        // 处理添加到歌单
        case 1:
          break
      }

      const msg = handleRes.errMsg.split(':').pop()
      if (msg === 'ok') {
        wx.showToast({ title: `操作成功~` })
      } else {
        wx.showToast({ title: `操作失败~` })
      }
    },

    async handleLoveRecord() {
      const currentSong = this.data.itemData
      const isInLoveTracks = this.data.isInLoveTracks
      let handleRes = null

      // 删除/添加 喜欢
      if (isInLoveTracks) {
        // 1.获取追踪的歌曲, 选出要保留的
        const loveRecord = databaseStore.loveRecord
        const newTracks: any[] = loveRecord.tracks.filter(
          (item: any) => item.id !== currentSong.id
        )

        // 2.更新到追踪
        handleRes = await cLove
          .where({})
          .update({ data: { tracks: newTracks } })

        // 3.更新封面图片
        const shiftTracks = newTracks.shift()
        const coverImgUrl = newTracks.length
          ? shiftTracks.al?.picUrl ?? shiftTracks.picUrl
          : '/assets/images/icons/love.png'
        await cLove.where({}).update({ data: { coverImgUrl } })

        this.data.isInLoveTracks = false
      } else {
        // 1.添加歌曲
        handleRes = await cLove.where({}).update({
          data: { tracks: cmd.unshift(currentSong) }
        })

        // 2.更新封面图片
        const coverImgUrl = currentSong.al?.picUrl ?? currentSong.picUrl
        await cLove.where({}).update({ data: { coverImgUrl } })

        this.data.isInLoveTracks = true
      }

      // 获取最新结果
      databaseStore.getLoveRecordAction()

      return handleRes
    }
  }
})
