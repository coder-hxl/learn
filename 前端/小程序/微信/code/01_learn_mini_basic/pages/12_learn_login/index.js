import { xlResLoginInstace } from '../../service/index'
import { getCode } from '../../service/login'

// pages/12_learn_login/index.js
Page({
  async onLoad() {
    // 1.获取缓存的 token
    const token = wx.getStorageSync('l-token')

    // 2.验证 token 是否有效
    const auth = await xlResLoginInstace.post({
      url: '/auth',
      header: { token }
    })

    // 3.判断 token
    if (token && auth.message === '已登录') {
      console.log('发起其他请求')
    } else {
      this.handlelogin()
    }
  },
  async handlelogin() {
    // 1.获取 code
    const code = await getCode()

    // 2.根据code获取token
    const loginResult = await xlResLoginInstace.post({
      url: '/login',
      data: { code }
    })

    // 3.保存token
    const token = loginResult.token
    wx.setStorageSync('l-token', token)
  }
  // handlelogin() {
  //   // 1.获取 code
  //   wx.login({
  //     success: (res) => {
  //       const code = res.code

  //       // 2.根据code获取token
  //       wx.request({
  //         url: 'http://123.207.32.32:3000/login',
  //         method: 'POST',
  //         data: { code },
  //         success: (res) => {
  //           // 3.保存token
  //           const token = res.data.token
  //           wx.setStorageSync('l-token', token)
  //         }
  //       })
  //     }
  //   })
  // }
})
