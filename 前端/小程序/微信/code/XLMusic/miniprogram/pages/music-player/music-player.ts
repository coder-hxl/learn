import { getLyric, getSongDetail } from '../../services/music'

const app = getApp()

Page({
  data: {
    contentHeight: app.globalData.contentHeight,
    pageTitles: ['歌曲', '歌词'],
    currentPage: 0,

    id: 0,
    songData: {},
    lyric: ''
  },

  onLoad(options: any) {
    const id = options.id
    this.data.id = id

    this.fetchSongDetail()
    this.fetchLyric()
  },

  async fetchSongDetail() {
    const res = await getSongDetail(this.data.id)
    this.setData({ songData: res.songs[0] })
    console.log(this.data.songData)
  },

  async fetchLyric() {
    const res = await getLyric(this.data.id)
    this.setData({ lyric: res.lrc.lyric })
    // console.log(this.data.lyric)
  },

  // 事件
  onSwiperChange(event: any) {
    const current = event.detail.current
    this.setData({ currentPage: current })
  },

  onTabTap(event: any) {
    const index = event.currentTarget.dataset.index
    this.setData({ currentPage: index })
  }
})
