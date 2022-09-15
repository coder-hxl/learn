import { getBanner } from '../../services/music'
import querySelect, { IQuerySelectRes } from '../../utils/query-select'
import throttle from '../../utils/throttle'

const querySelectThrottle = throttle<IQuerySelectRes>(querySelect)

Page({
  data: {
    searchValue: '',
    bannerList: [],
    bannerHeight: 127.77
  },

  onLoad() {
    this.fetchBanner()
  },

  async onBannerImageLoad() {
    const res = await querySelectThrottle('.banner-image')
    this.setData({ bannerHeight: res[0].height })
    console.log(res)
  },

  onInputClick() {
    wx.navigateTo({ url: '../detail-search/detail-search' })
  },

  async fetchBanner(type = 0) {
    const res = await getBanner(type)
    this.setData({ bannerList: res.banners })
  }
})
