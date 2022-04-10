<template>
  <div>
    <h2>总价格：{{ $store.state.counter }}</h2>
    <button @click="incrementActions">+1</button>
    <button @click="decrementActions">-1</button>
    <button @click="add">-1</button>
    <button @click="sub">-1</button>
    <hr />
  </div>
</template>

<script>
// actions的辅助函数mapActions
import { mapActions } from 'vuex'

export default {
  methods: {
    // ...mapActions(['incrementActions', 'decrementActions']),
    // ...mapActions({
    //   add: 'incrementActions',
    //   sub: 'decrementActions'
    // })
  },
  setup() {
    const actions = mapActions(['incrementActions', 'decrementActions'])
    const actions2 = mapActions({
      add: 'incrementActions',
      sub: 'decrementActions'
    })

    return {
      ...actions,
      ...actions2
    }
  }
}
</script>

<style scoped></style>
