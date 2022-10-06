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

  methods: {
    onSongItemTap() {
      const id = this.properties.itemData.id
      wx.navigateTo({
        url: `/packagePlayer/pages/music-player/music-player?id=${id}`
      })
    },

    async onControlTap() {
      const loveRecordRes = await cLove.get()
      const tracksIdArr: any[] = loveRecordRes.data[0].tracks.map(
        (item: any) => item.id
      )
      const isInTracks = tracksIdArr.includes(this.data.itemData.id)

      let itemList = null
      if (isInTracks) {
        itemList = ['删除喜欢', '添加到歌单']
      } else {
        itemList = ['添加喜欢', '添加到歌单']
      }

      let res = null
      try {
        res = await wx.showActionSheet({ itemList })
      } catch (error) {
        console.log(error)
      }

      const tapIndex = res?.tapIndex
      if (tapIndex === undefined) return

      this.handleTracks(isInTracks, tapIndex)
    },

    async handleTracks(isInTracks: boolean, tapIndex: number) {
      const currentSong = this.data.itemData

      let handleRes = null

      switch (tapIndex) {
        case 0:
          // 添加/删除 喜欢
          if (isInTracks) {
            // 1.获取追踪的歌曲, 选出不被删除的
            const loveRecordRes = await cLove.get()
            const newTracks: any[] = loveRecordRes.data[0].tracks.filter(
              (item: any) => item.id !== currentSong.id
            )

            // 2.更新到追踪
            handleRes = await cLove
              .where({})
              .update({ data: { tracks: newTracks } })

            // 3.更新封面图片
            const coverImgUrl = newTracks.length
              ? newTracks.pop().al?.picUrl ?? currentSong.picUrl
              : '/assets/images/icons/love.png'
            cLove.where({}).update({ data: { coverImgUrl } })
          } else {
            // 1.添加歌曲
            handleRes = await cLove.where({}).update({
              data: { tracks: cmd.push(currentSong) }
            })

            // 2.更新封面图片
            const coverImgUrl = currentSong.al?.picUrl ?? currentSong.picUrl
            cLove.where({}).update({ data: { coverImgUrl } })
          }

          break

        case 1:
          break
      }

      const msg = handleRes.errMsg.split(':').pop()
      if (msg === 'ok') {
        databaseStore.getLoveRecordAction()
        wx.showToast({ title: `操作成功~` })
      } else {
        wx.showToast({ title: `操作失败~` })
      }
    }
  }
})
