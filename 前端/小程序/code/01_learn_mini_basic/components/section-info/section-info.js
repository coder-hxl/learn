// components/section-info/section-info.js
Component({
  properties: {
    title: {
      type: String,
      value: '默认标题'
    },
    content: {
      type: String,
      value: '默认内容'
    }
  },
  externalClasses: ['info'],
  methods: {
    onTitleTap(event) {
      console.log('titleTap')
      this.triggerEvent('titletap', 111)
    }
  }
})
