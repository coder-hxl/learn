// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // 1.生成小程序码
  const QRCodeRes = await cloud.openapi.wxacode.createQRCode({
    width: 320,
    path: '/pages/cloud-function/index'
  })

  // 2.存储到数据库
  const timestamp = new Date().getTime()
  const openId = cloud.getWXContext().OPENID
  const extension = QRCodeRes.contentType.split('/').pop()
  const cloudPath = `${timestamp}_${openId}.${extension}`
  const upLoadRes = await cloud.uploadFile({
    fileContent: QRCodeRes.buffer,
    cloudPath
  })

  return upLoadRes
}
