// pages/cloud-database/index.js

// 1.获取数据库的引用
const db = wx.cloud.database()
// 2.获取要操作的集合
const userCol = db.collection('user')
const smzhsyCol = db.collection('smzhsy')

Page({
  async onAddTap() {
    const res = await userCol.add({
      data: {
        name: 'hxl',
        age: 18,
        hobby: ['编程', '音乐']
      }
    })

    console.log(res)
  },

  onDeleteTap() {
    // 1.明确删除某条数据
    // userCol
    //   .doc('803723f4633958ec005e9b262a0ed42a')
    //   .remove()
    //   .then((res) => {
    //     console.log(res)
    //   })

    // 2.明确删除某些数据
    const cmd = db.command
    userCol
      .where({
        age: cmd.gt(20)
      })
      .remove()
      .then((res) => {
        console.log(res)
      })
  },

  onUpdateTap() {
    // 1.明确更新某条数据
    // 1.1. update局部更新数据
    // userCol
    //   .doc('c34fe31363396b9c006650f47be2686c')
    //   .update({
    //     data: { age: 19 }
    //   })
    //   .then((res) => console.log(res))

    // 1.2. set替换更新数据
    // userCol
    //   .doc('3d058b9e63396e2c0072b449586c7996')
    //   .set({
    //     data: { name: 'why', age: 18 }
    //   })
    //   .then((res) => console.log(res))

    // 2.使用cmd更新
    const cmd = db.command
    userCol
      .where({
        age: cmd.gt(20)
      })
      .update({ data: { age: 18 } })
      .then((res) => console.log(res))
  },

  onQueryTap() {
    // 1.根据id查询某条数据
    // smzhsyCol
    //   .doc('f950bb74633a84c6005a04aa75b31d97')
    //   .get()
    //   .then((res) => console.log(res.data))

    // 2.根据条件查询
    // smzhsyCol
    //   .where({
    //     nickname: '吕半仙y'
    //   })
    //   .get()
    //   .then((res) => console.log(res.data))

    // 3.根据指令过滤查询
    // const cmd = db.command
    // smzhsyCol
    //   .where({
    //     rid: cmd.lte(4690341)
    //   })
    //   .get()
    //   .then((res) => console.log(res))

    // 4.根据正则表达式查询
    // smzhsyCol
    //   .where({
    //     roomName: /上/
    //   })
    //   .get()
    //   .then((res) => console.log(res))

    // 5.获取整个集合
    // smzhsyCol.get().then((res) => console.log(res.data))

    // 6.过滤、分页、排序 查询数据
    let page = 1
    smzhsyCol
      .field({ rid: true, nickname: true, roomName: true })
      .skip(page * 5)
      .limit(5)
      .orderBy('rid', 'asc')
      .get()
      .then((res) => console.log(res.data))
  },

  onAddCODTap() {
    // 添加使命召唤手游数据
    for (let i = 0; i < 4; i++) {
      // 1.请求数据
      wx.request({
        url: 'https://m.douyu.com/api/room/list',
        data: {
          page: i + 1,
          type: 'smzhsy'
        },
        success: (res) => {
          // 2.处理数据
          this.handleCODData(res)
        }
      })
    }
  },

  onShowCODTap() {
    wx.navigateTo({
      url: '/pages/live-cod/index'
    })
  },

  handleCODData(res) {
    for (const item of res.data.data.list) {
      smzhsyCol
        .add({
          data: item
        })
        .then((res) => {
          console.log(res)
        })
    }
  }
})
