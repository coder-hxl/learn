// components/menu-area/menu-area.ts
Component({
  properties: {
    storeListName: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: '标题'
    },
    menuList: {
      type: Object,
      value: {}
    }
  },

  methods: {
    handleMoreTap() {
      const storeListName = this.properties.storeListName
      wx.navigateTo({
        url: `/pages/more-song-menu/more-song-menu?storeListName=${storeListName}`
      })
    }
  }
})
