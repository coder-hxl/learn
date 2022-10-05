// components/menu-item/menu-item.ts
Component({
  properties: {
    itemData: {
      type: Object,
      value: {}
    }
  },

  methods: {
    onMenuItemTap() {
      const id = this.properties.itemData.id
      wx.navigateTo({
        url: `/pages/detail-song-menu/detail-song-menu?id=${id}`
      })
    }
  }
})
