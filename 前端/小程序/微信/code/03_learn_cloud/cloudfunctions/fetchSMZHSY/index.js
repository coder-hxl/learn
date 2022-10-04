// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()

  let res = null
  if (event.type === 1) {
    // 获取使命召唤数据
    const smzhsyColl = db.collection('smzhsy')
    res = await smzhsyColl.get()
  } else if (event.type === 2) {
    // 获取LOL数据
  }

  return res.data
}
