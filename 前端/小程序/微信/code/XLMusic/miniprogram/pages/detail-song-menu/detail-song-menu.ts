import { getDetailSongMenu } from '../../services/music'
import playerStore from '../../stores/playerStore'

Page({
  data: {
    detailData: [] as any
  },

  onLoad(options: any) {
    const id = options.id

    this.fetchDetailSongMenu(id)
  },

  async fetchDetailSongMenu(id: number) {
    const res = await getDetailSongMenu(id)
    this.setData({ detailData: res.playlist })
  },

  onSongItemTap(event: any) {
    const index = event.currentTarget.dataset.index
    playerStore.playSongIndex = index

    playerStore.playSongList = this.data.detailData.tracks
  }
})
