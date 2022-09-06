// pages/06_learn_event/index.js
Page({
  data: {
    tabTitle: ['手机', '电脑', 'ipad'],
    currentIndex: 0
  },
  onOuterTap(event) {
    console.log('target: ', event.target)
    console.log('currentTarget', event.currentTarget)
  },
  onTouchesTap(event) {
    console.log('onTouchesTap: ', event)
  },
  onTouchend(evnet) {
    console.log('onTouchend: ', evnet)
  },
  onLongpress(event) {
    console.log('onLongpress: ', event)
  },
  onArgumentsTap(event) {
    const data = event.currentTarget.dataset
    console.log('onArgumentsTap: ', data)
  },
  onTabTitleTap(event) {
    const currentIndex = event.currentTarget.dataset.index
    this.setData({ currentIndex })
  }
})
