// components/song-item-v2/song-item-v2.ts
Component({
  properties: {
    order: {
      type: Number,
      value: 0
    },
    stripe: {
      type: Boolean,
      value: true
    },
    itemData: {
      type: Object,
      value: {}
    }
  }
})
