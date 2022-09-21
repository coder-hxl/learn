import songMenuStore from '../../stores/songMenuStore'

Page({
  data: {
    songMenu: []
  },

  onLoad(options: any) {
    const storeListName = options.storeListName
    const value = songMenuStore[storeListName]
    console.log(storeListName, value)
  }
})
