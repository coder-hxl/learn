// pages/live-cod/index.js

const db = wx.cloud.database()
const smzhsyCol = db.collection('smzhsy')

Page({
  data: {
    list: [],
    offset: 0
  },

  onLoad() {
    this.fetchCODData()
  },

  onReachBottom() {
    this.fetchCODData()
  },

  async onItemDeleteTap(event) {
    const { item, index } = event.currentTarget.dataset

    await smzhsyCol.doc(item._id).remove()
    this.setData({ list: [], offset: 0 })
    this.fetchCODData()
  },

  async fetchCODData() {
    const res = await smzhsyCol.skip(this.data.offset).limit(10).get()

    const list = [...this.data.list, ...res.data]
    this.setData({ list })
    this.data.offset = list.length
  }
})
