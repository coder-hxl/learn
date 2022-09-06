// pages/06_learn_event/index.js
Page({
  data: {
    tabTitle: ['手机', '电脑', 'ipad'],
    currentNum: 0
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
  onTabTap(event) {
    const currentNum = event.currentTarget.dataset
    this.setData({ currentNum })
  }
})
