// pages/cloud-function/index.js

Page({
  data: {
    QRCodeUrl: ''
  },

  async onTestTap() {
    const res = await wx.cloud.callFunction({ name: 'test' })
    console.log(res)
  },

  async onGetOpenidTap() {
    const res = await wx.cloud.callFunction({ name: 'fetchOpenid' })
    console.log(res)
  },

  async onGetSMZHSYTap() {
    const res = await wx.cloud.callFunction({
      name: 'fetchSMZHSY',
      data: { type: 1 }
    })
    console.log(res)
  },

  async onGetSongMenuTap() {
    const res = await wx.cloud.callFunction({ name: 'fetchSongMenu' })
    console.log(res)
  },

  async onGetQRCode() {
    const res = await wx.cloud.callFunction({ name: 'fetchQRCode' })
    console.log(res)
    this.setData({ QRCodeUrl: res.result.fileID })
  }
})
