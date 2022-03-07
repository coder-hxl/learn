<template>
  <div>
    <h2>总价格：{{ $store.state.counter }}</h2>
    <button @click='increment'>+1</button>
    <button @click='add'>add</button>
    <button @click='decrement'>-1</button>
    <button @click='increment_n({n: 10})'>+10</button>
    <hr>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { INCREMENT_N } from '../store/mutation-types.js'

  export default {
    // mutations辅助函数mapMutations
    methods: { 
      // ...mapMutations(['increment', 'decrement', INCREMENT_N]),
      // ...mapMutations({
      //   add: 'increment'
      // }),
    },
    setup() {
      const storeMutations = mapMutations(['increment', 'decrement', INCREMENT_N])

      return {
        ...storeMutations
      }
    }
  }
</script>

<style scoped>

</style>
