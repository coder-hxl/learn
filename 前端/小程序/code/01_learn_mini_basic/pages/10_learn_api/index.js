// pages/10_learn_api/index.js
Page({
  // 1.弹窗
  onShowToast() {
    wx.showToast({
      title: '失败',
      icon: 'error',
      duration: 3000,
      mask: true,
      success: (res) => {
        console.log('res: ', res)
      },
      fail: (err) => {
        console.log('err: ', err)
      }
    })
  },
  onShowModal() {
    wx.showModal({
      title: '支付',
      content: '确定支付吗',
      success: (res) => {
        console.log('res: ', res)
      },
      fail: (err) => {
        console.log('err: ', err)
      }
    })
  },
  onShowAction() {
    wx.showActionSheet({
      itemList: ['上衣', '裤子', '鞋子'],
      success: (res) => {
        console.log('res: ', res)
      },
      fail: (err) => {
        console.log('err: ', err)
      }
    })
  },

  // 2.转发
  onShareAppMessage(data) {
    console.log(data)

    return {
      title: 'XL商城'
    }
  },

  // 3.获取系统信息
  onGetSystemInfo() {
    // 系统信息
    wx.getSystemInfo({
      success: (res) => {
        console.log(res)
      }
    })

    // 获取地址
    wx.getLocation({
      success: (res) => {
        console.log('res: ', res)
      }
    })
  },

  // 4.数据缓存
  onDataCache() {
    // 同步
    // wx.setStorageSync('t-id', 1)
    // wx.setStorageSync('t-books', ['vue.js教程', 'react教程'])
    // wx.removeStorageSync('t-id')
    // const books = wx.getStorageSync('t-books')
    // console.log(books)

    // 2.异步
    wx.setStorage({
      key: 't-goods',
      data: ['手机', '电脑'],
      encrypt: true,
      success: (res) => {
        wx.getStorage({
          key: 't-goods',
          encrypt: true,
          success: (res) => {
            console.log('res: ', res)
          }
        })
      }
    })

    console.log('-------')
  }
})
