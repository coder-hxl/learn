// pages/09_learn_network/index.js
import { xlRequest, xlResInstance } from '../../service/index'

Page({
  data: {
    allCtiys: [],
    houseList: [],
    housePage: 1
  },

  async onLoad() {
    // 1.网络请求的基本使用
    // wx.request({
    //   url: 'http://codercba.com:1888/api/city/all',
    //   success: (res) => {
    //     const data = res.data.data
    //     this.setData({ allCtiys: data })
    //     // console.log('res: ', data)
    //   },
    //   fail: (err) => {
    //     console.log('err: ', err)
    //   }
    // })
    // wx.request({
    //   url: 'http://codercba.com:1888/api/home/houseList',
    //   data: {
    //     page: 1
    //   },
    //   success: (res) => {
    //     const data = res.data.data
    //     this.setData({ houseList: data })
    //     // console.log('res: ', data)
    //   },
    //   fail: (err) => {
    //     console.log('err: ', err)
    //   }
    // })

    // 2.使用封装函数
    // xlRequest({
    //   url: 'http://codercba.com:1888/api/city/all'
    // }).then((res) => {
    //   const data = res.data
    //   this.setData({ allCtiys: data })
    // })
    // xlRequest({
    //   url: 'http://codercba.com:1888/api/home/houseList',
    //   data: {
    //     page: 1
    //   }
    // }).then((res) => {
    //   const data = res.data
    //   this.setData({ houseList: data })
    // })

    // 3.async/await
    // const allCtiysRes = await xlRequest({
    //   url: 'http://codercba.com:1888/api/city/all'
    // })
    // this.setData({ allCtiys: allCtiysRes.data })

    // const houseListRes = await xlRequest({
    //   url: 'http://codercba.com:1888/api/home/houseList',
    //   data: {
    //     page: 1
    //   }
    // })
    // this.setData({ houseList: houseListRes.data })

    // 4.请求封装到单独的函数中
    this.getAllCtiys()
    this.getHouseListRes()

    // 5.使用封装的类
    xlResInstance
      .request({
        url: '/city/all'
      })
      .then((res) => {
        console.log(res)
      })
  },
  async getAllCtiys() {
    const allCtiysRes = await xlRequest({
      url: 'http://codercba.com:1888/api/city/all'
    })
    this.setData({ allCtiys: allCtiysRes.data })
  },
  async getHouseListRes() {
    const houseListRes = await xlRequest({
      url: 'http://codercba.com:1888/api/home/houseList',
      data: {
        page: this.data.housePage
      }
    })

    const lastResult = [...this.data.houseList, ...houseListRes.data]
    this.setData({ houseList: lastResult })
    this.data.housePage++
  },
  onReachBottom() {
    this.getHouseListRes()
  }
})
