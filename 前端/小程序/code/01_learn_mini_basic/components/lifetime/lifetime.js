// components/c-lifetime/lifetime.js
Component({
  lifetimes: {
    created() {
      console.log('created, 组件实例刚创建完成')
    },
    attached() {
      console.log('attached, 组件实例进入页面节点树')
    },
    detached() {
      console.log('detached, 组件实例从页面节点树移除')
    }
  },
  pageLifetimes: {
    show() {
      console.log('show')
    },
    hide() {
      console.log('hide')
    }
  }
})
