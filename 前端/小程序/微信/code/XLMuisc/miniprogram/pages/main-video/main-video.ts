import { getTopMV } from '../../services/video'

// pages/main-video/main-video.ts
Page({
  data: {
    topMV: [],
    offset: 0,
    hasMore: true
  },

  onLoad() {
    this.fetchTopMV()
  },

  async fetchTopMV() {
    // 1.获取数据
    const res = await getTopMV(this.data.offset)

    // 2.追加数据
    const newList = [...this.data.topMV, ...res.data]

    // 3.设置新数据
    this.setData({ topMV: newList as [] })
    this.data.offset = this.data.topMV.length
    this.data.hasMore = res.hasMore
  },

  onReachBottom() {
    // 1.判断是否还有数据
    if (!this.data.hasMore) return

    // 2.获取数据
    this.fetchTopMV()
  },

  async onPullDownRefresh() {
    // 1.初始化数据
    this.setData({ topMV: [] })
    this.data.offset = 0
    this.data.hasMore = true

    // 2.获取数据
    await this.fetchTopMV()

    // 3.停止下拉刷新
    wx.stopPullDownRefresh()
  }
})
