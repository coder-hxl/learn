// pages/favor/favor.js
Page({
  data: {
    message: 'Hello World',
    movies: ['明日战记', '流浪地球', '新封神'],
    count: 0
  },
  // 监听的事件方法
  increament() {
    console.log('+1')
    // 直接修改不会引起页面的刷新
    // this.data.count++

    // 修改 data 后, 想要页面重新渲染, 必须使用 this.setData()
    this.setData({
      count: this.data.count + 1
    })
  },
  decrement() {
    console.log('-1')
    this.setData({
      count: this.data.count - 1
    })
  }
})
