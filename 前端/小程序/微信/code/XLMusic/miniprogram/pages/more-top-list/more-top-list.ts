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

  onUnload() {}
})
