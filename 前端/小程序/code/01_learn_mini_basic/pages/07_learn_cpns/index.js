// pages/07_learn_cpns/index.js
Page({
  data: {
    digitalTitle: ['手机', '电脑', 'iPad']
  },
  onTitleTap(event) {
    console.log('onTitleTap: ', event.detail)
  },
  onTitleIndexChange(event) {
    const index = event.detail.index
    console.log(this.data.digitalTitle[index], '被点击')
  },
  changeTitleIndex() {
    // 获取子组件实例
    const tabControl = this.selectComponent('.tab-control')
    tabControl.test(2)
  }
})
