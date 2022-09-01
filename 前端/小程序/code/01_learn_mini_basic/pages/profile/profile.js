// pages/profile/profile.js
Page({
  data: {
    listCount: 50
  },
  // 监听下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新~')

    setTimeout(() => {
      this.setData({
        listCount: 50
      })

      // API: 结束下拉刷新
      wx.stopPullDownRefresh({
        success: (res) => {
          console.log('停止下拉刷新成功~', res)
        },
        fail: (err) => {
          console.log('停止下拉刷新失败~', err)
        }
      })
    }, 1000)
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log('快到底部了~')

    this.setData({
      listCount: this.data.listCount + 30
    })
  }
})
