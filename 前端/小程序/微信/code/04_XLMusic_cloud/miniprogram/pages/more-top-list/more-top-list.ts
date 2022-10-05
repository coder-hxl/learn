import topListStore from '../../stores/topListStore'

Page({
  data: {
    officialList: [] as any[],
    globalList: [] as any[]
  },

  onLoad() {
    this.initData()
  },

  initData() {
    const officialList: any[] = topListStore.officialList
    const globalList: any[] = topListStore.globalList
    this.setData({ officialList, globalList })
  },

  onGloablItemTap(event: any) {
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail-song-menu/detail-song-menu?id=${id}`
    })
  },

  onUnload() {}
})
