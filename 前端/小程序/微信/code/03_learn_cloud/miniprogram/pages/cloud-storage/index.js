Page({
  data: {
    tempFilePath: ''
  },

  async onUploadTap() {
    // 1.上传图片
    const imageRes = await wx.chooseMedia({
      type: 'image'
    })

    // 2.获取信息
    const tempFilePath = imageRes.tempFiles[0].tempFilePath
    const imageType = tempFilePath.split('.').pop()
    const data = new Date().getTime()
    const openId = '_open-xxx'

    // 3.上传到云存储
    const imageName = openId + data + '.' + imageType
    const uploadRes = await wx.cloud.uploadFile({
      filePath: tempFilePath,
      cloudPath: 'avatar/' + imageName
    })

    console.log(uploadRes)
  },

  async onDeleteTap() {
    const res = await wx.cloud.deleteFile({
      fileList: [
        'cloud://cloud1-9gstklhq1dc79e25.636c-cloud1-9gstklhq1dc79e25-1314193309/avatar/_open-xxx1664812884554.jpg'
      ]
    })

    console.log(res)
  },

  async onDowloadTap() {
    const res = await wx.cloud.downloadFile({
      fileID:
        'cloud://cloud1-9gstklhq1dc79e25.636c-cloud1-9gstklhq1dc79e25-1314193309/avatar/_open-xxx1664813024826.jpg'
    })
    this.setData({ tempFilePath: res.tempFilePath })
  },

  async onGetTempTap() {
    const res = await wx.cloud.getTempFileURL({
      fileList: [
        'cloud://cloud1-9gstklhq1dc79e25.636c-cloud1-9gstklhq1dc79e25-1314193309/_open-xxx1664812783567.jpg'
      ]
    })

    console.log(res)
  }
})
