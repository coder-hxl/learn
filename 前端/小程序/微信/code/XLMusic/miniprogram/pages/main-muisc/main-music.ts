import newStore from '../../stores/newStore'
import songMenuStore from '../../stores/songMenuStore'

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
    newSongs: [],
    recommendSongMenu: [],
    choicenessSongMenu: []
  },

  // 加载
  onLoad() {
    this.fetchBanner()

    newStore.watch('newSongs', this.handleNewSongs)
    newStore.fetchNewSongsActions()

    songMenuStore.watch('recommendSongMenu', this.handleRecommendSongMenu)
    songMenuStore.fetchRecommendSongMenuAction()

    songMenuStore.watch('choicenessSongMenu', this.handleChoicenessSong)
    songMenuStore.fetchChoicenessSongMenuAction()
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
  },

  // store 回调函数
  handleNewSongs(value: any) {
    const newSongs = value.slice(0, 6)
    this.setData({ newSongs })
  },

  handleRecommendSongMenu(value: any) {
    const recommendSongMenu = value.slice(0, 6)
    const recommendSongMenuMap = recommendSongMenu.map((item: any) => {
      return { ...item, coverImgUrl: item.picUrl }
    })
    this.setData({ recommendSongMenu: recommendSongMenuMap })
  },

  handleChoicenessSong(value: any) {
    const choicenessSongMenu = value.slice(0, 6)
    this.setData({ choicenessSongMenu })
  },

  onUnload() {
    newStore.deleteWatch('newSongs', this.handleNewSongs)
  }
})
