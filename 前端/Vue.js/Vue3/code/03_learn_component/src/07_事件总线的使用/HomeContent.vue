<template>
  <div></div>
</template>

<script>
import emitter from './utlis/eventbus.js'

export default {
  created() {
    // 通过emitter的on方法监听自定义事件
    emitter.on('fh', (info) => {
      console.log('fh:', info)
    }),
      emitter.on('why', (info) => {
        console.log('why:', info)
      }),
      // 监听所有事件，回调函数的形参一是事件类型，其余形参是传递过来的实参
      emitter.on('*', (type, info) => {
        console.log('*:', type, info)
      })
  }
}
</script>

<style scoped></style>
