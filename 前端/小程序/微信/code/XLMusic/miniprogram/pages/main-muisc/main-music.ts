import newStore from '../../stores/newStore'
import songMenuStore from '../../stores/songMenuStore'
import topListStore from '../../stores/topListStore'

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
    choicenessSongMenu: [],

    officialList: []
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

    topListStore.watch('officialList', this.handleOfficialList)
    topListStore.fetchTopListAction()
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

  onTopListMoreTap() {
    wx.navigateTo({ url: '../more-top-list/more-top-list' })
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
    const recommendSongMenu = value.length > 6 ? value.slice(0, 6) : value
    this.setData({ recommendSongMenu })
  },

  handleChoicenessSong(value: any) {
    const choicenessSongMenu = value.length > 6 ? value.slice(0, 6) : value
    this.setData({ choicenessSongMenu })
  },

  handleOfficialList(value: any) {
    this.setData({ officialList: value })
  },

  onUnload() {
    newStore.deleteWatch('newSongs', this.handleNewSongs)
    newStore.deleteWatch('recommendSongMenu', this.handleRecommendSongMenu)
    newStore.deleteWatch('choicenessSongMenu', this.handleChoicenessSong)
    newStore.deleteWatch('officialList', this.handleOfficialList)
  }
})
