<template>
  <div>
    <h2>总价格：{{ $store.state.counter }}</h2>
    <button @click='$store.commit("increment")'>+1</button>
    <button @click='$store.commit("decrement")'>-1</button>
    <button @click='addTen'>+10</button>
    <hr>
  </div>
</template>

<script>
  import { INCREMENT_N } from '../store/mutation-types.js'

  export default {
    methods: {
      addTen() {
        /* 
          commit参数：
            - 参数一：调用mutations的这个函数；
            - 参数二：被调用的那个mutation的第二个形参接收；
         */
        // this.$store.commit('incrementN', 10)
        // this.$store.commit('incrementN', {n: 10, name: 'fh', age: 17})

        // 另一种提交风格：对象，整个对象会被type调用的mutation的第二个形参接收；
        this.$store.commit({
          // type：调用mutation的这个函数
          type: INCREMENT_N,
          n: 10, 
          name: 'fh',
          age: 17
        })
      }
    }
  }
</script>

<style scoped>

</style>
