// pages/05_learn_wxs/index.js
Page({
  data: {
    books: [
      { id: 1000, name: '你不知道的JavaScript', price: 99 },
      { id: 1001, name: 'JavaScript百炼成钢', price: 88 },
      { id: 1002, name: 'JavaScript程序设计', price: 89 }
    ],
    playCount: 150250225,
    duration: 255,
    currentTiem: 150
  },
  formatPrice(price) {
    return '￥' + price
  }
})
