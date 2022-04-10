<template>
  <h2>我是Vue渲染出来的</h2>
  <h2>{{ title }}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from './HelloWorld'

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: 'Hello World，热模块更新',
      message: '哈哈哈'
    }
  }
}
</script>

<style scoped>
h2 {
  color: aqua;
}
</style>
