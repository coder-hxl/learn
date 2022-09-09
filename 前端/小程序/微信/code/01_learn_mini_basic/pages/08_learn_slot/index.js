// pages/08_learn_slot/index.js
Page({
  data: {
    isExist: true
  },
  onBtnTap() {
    this.setData({
      isExist: !this.data.isExist
    })
  }
})
