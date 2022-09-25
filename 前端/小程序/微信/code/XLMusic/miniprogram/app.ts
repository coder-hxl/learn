// app.ts
interface IMyAppOptions {
  globalData: {
    statusHeight: number
    navHeight: number
    contentHeight: number
  }
}

App<IMyAppOptions>({
  globalData: {
    statusHeight: 0,
    navHeight: 44,
    contentHeight: 0
  },

  onLaunch() {
    wx.getSystemInfoAsync({
      success: (res) => {
        this.globalData.statusHeight = res.statusBarHeight
        this.globalData.contentHeight =
          res.screenHeight - res.statusBarHeight - this.globalData.navHeight
      }
    })
  }
})
