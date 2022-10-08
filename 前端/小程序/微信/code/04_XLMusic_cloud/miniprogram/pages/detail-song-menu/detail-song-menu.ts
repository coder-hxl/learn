import { getDetailSongMenu } from '../../services/music'
import playerStore from '../../stores/playerStore'
import databaseStore from '../../stores/databaseStore'

Page({
  data: {
    detailData: {} as any
  },

  async onLoad(options: any) {
    const { id, mySongMenuIndex } = options

    if (id !== undefined) {
      this.fetchDetailSongMenu(id)
    } else if (mySongMenuIndex !== undefined) {
      const detailData = databaseStore.mySongMenu[mySongMenuIndex]
      this.setData({ detailData })
    } else {
      const detailData = databaseStore.loveRecord
      this.setData({ detailData })
      databaseStore.watch('loveRecord', this.handleLoveStore)
    }
  },

  async fetchDetailSongMenu(id: number) {
    const res = await getDetailSongMenu(id)
    this.setData({ detailData: res.playlist })
  },

  onSongItemTap(event: any) {
    const index = event.currentTarget.dataset.index
    playerStore.playSongIndex = index

    playerStore.playSongList = this.data.detailData.tracks
  },

  // ================ store ================
  handleLoveStore(key: string, value: any) {
    this.setData({ detailData: value })
  },

  onUnload() {
    databaseStore.deleteWatch('loveRecord', this.handleLoveStore)
  }
})
