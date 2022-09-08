// 封装成函数
export function xlRequest(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      ...options,
      success: (res) => {
        resolve(res.data)
      },
      fail: reject
    })
  })
}

// 封装成类
class XlRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  request(options) {
    const { url } = options

    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.baseUrl + url,
        success: (res) => {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }

  get(options) {
    return this.request({ ...options, method: 'GET' })
  }

  post(options) {
    return this.request({ ...options, method: 'POST' })
  }
}

export const xlResInstance = new XlRequest('http://codercba.com:1888/api')
