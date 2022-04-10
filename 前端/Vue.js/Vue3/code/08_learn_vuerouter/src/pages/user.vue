<template>
  <div>
    <h2>user: {{ $route.params.username }} - {{ $route.params.id }}</h2>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  created() {
    // this.$route拿到当前的route对象
    console.log(this.$route)
  },
  setup() {
    // setup 需要引入vue-router提供的 useRoute函数
    // 调用其会返回一个route对象，对象中保存着当前路由相关的值；
    const route = useRoute()
    console.log(route)
    console.log(route.params.id)
  }
}
</script>

<style scoped></style>
