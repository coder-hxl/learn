import { getDetailSongMenu } from '../../services/music'

Page({
  data: {
    detailData: []
  },

  onLoad(options: any) {
    const id = options.id

    this.fetchDetailSongMenu(id)
  },

  async fetchDetailSongMenu(id: number) {
    const res = await getDetailSongMenu(id)
    this.setData({ detailData: res.playlist })
  }
})
