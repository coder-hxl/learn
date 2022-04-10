<template>
  <div>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
import emitter from './utlis/eventbus.js'

export default {
  methods: {
    btnClick() {
      console.log('About按钮被点击')
      // 通过emitter的emit方法发送自定义事件及参数
      emitter.emit('fh', { name: 'fh', age: 17 })
      // emitter.emit('why', {name: 'why', age: 18})
    }
  }
}
</script>

<style scoped></style>
