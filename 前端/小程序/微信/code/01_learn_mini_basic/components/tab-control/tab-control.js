// components/tab-control/tab-control.js
Component({
  properties: {
    tabTitle: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    onTabTitleTap(event) {
      const currentIndex = event.currentTarget.dataset.index
      this.setData({ currentIndex })

      this.triggerEvent('titleindexchange', { index: currentIndex })
    },
    test(index) {
      this.setData({ currentIndex: index })
    }
  }
})
