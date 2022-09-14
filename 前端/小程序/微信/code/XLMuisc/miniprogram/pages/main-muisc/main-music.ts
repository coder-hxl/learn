// pages/main-muisc/main-music.ts
Page({
  data: {
    searchValue: ''
  },

  onClickInput() {
    wx.navigateTo({ url: '../detail-search/detail-search' })
  }
})
