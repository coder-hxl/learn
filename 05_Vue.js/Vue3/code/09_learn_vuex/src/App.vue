<template>
  <home />

  <!-- 通过$store拿取到创建仓库 -->
  <h2>app:{{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import Home from './pages/home'

export default {
  name: "App",
  components: {
    Home
  },
  methods: {
    increment() {
      // 改变store里的状态要通过提交commit
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
