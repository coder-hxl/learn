// pages/04_learn_wxml/index.js
Page({
  data: {
    message: 'Hello World',
    firstname: 'H',
    lastname: 'XL',
    date: new Date().toLocaleDateString(),
    score: 80,
    isHidden: false,

    books: [
      { id: 1000, name: '你不知道的JavaScript', price: 99 },
      { id: 1001, name: 'JavaScript百炼成钢', price: 88 },
      { id: 1002, name: 'JavaScript程序设计', price: 89 }
    ]
  },
  changeIsHidden() {
    this.setData({
      isHidden: !this.data.isHidden
    })
  }
})
