// components/video-item/video-item.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoData: {
      type: Object,
      value: {}
    }
  },

  externalClasses: ['e-video-item', 'e-album', 'e-content'],

  methods: {
    onVideoItemTap() {
      // 1.获取 video 的 id
      const id = this.properties.videoData.id

      // 2.跳转到 detail-video 页面并把 id 传过去
      wx.navigateTo({
        url: `../../pages/detail-video/detail-video?id=${id}`
      })
    }
  }
})
