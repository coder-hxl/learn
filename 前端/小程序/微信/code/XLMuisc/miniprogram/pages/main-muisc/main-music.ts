import { newStore } from '../../stores/newStore'
import { getBanner } from '../../services/music'

import querySelect from '../../utils/query-select'
import throttle from '../../utils/throttle'
// import { throttle } from 'underscore'

const querySelectThrottle = throttle(querySelect)

Page({
  data: {
    searchValue: '',
    banners: [],
    bannerHeight: 0,
    newSongs: [] as any[]
  },

  // 加载
  onLoad() {
    this.fetchBanner()
    newStore.getNewSongs()
    newStore.watch('newSongs', (value: any[]) => {
      const newSongs = value.slice(0, 6)
      console.log('main')

      this.setData({ newSongs })
    })
  },

  async onBannerImageLoad() {
    const res = await querySelectThrottle('.banner-image')
    this.setData({ bannerHeight: res[0].height })
  },

  // 页面跳转
  onInputClick() {
    wx.navigateTo({ url: '../detail-search/detail-search' })
  },

  onRecommendMoreTap() {
    wx.navigateTo({ url: '../more-new-song/more-new-song' })
  },

  // 网络请求
  async fetchBanner() {
    const res = await getBanner(0)
    this.setData({ banners: res.banners })
  }
})
