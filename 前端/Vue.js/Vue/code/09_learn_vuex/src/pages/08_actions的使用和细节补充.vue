<template>
  <div>
    <h2>总价格：{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      // actions 通过 $store.dispatch 方法触发
      // $store.dispatch：参数一：调用actions里的这个函数，参数二：调用actions里的这个函数的第二个的参数
      this.$store.dispatch('incrementActions', { coun: 100 })
    },
    decrement() {
      // 派发风格（对象类型）
      this.$store.dispatch({
        // type调用actions里的这个函数
        type: 'decrementActions'
      })
    }
  },
  mounted() {
    this.$store.dispatch('getHomeMultidata')
  }
}
</script>

<style scoped></style>
