<template>
  <div>
    <h2>home: {{ $store.state.counter }}</h2>
    <hr>
    <h2>{{ sCounter }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
  import { mapState, useStore } from 'vuex'
  import { computed } from 'vue'

  export default {
    setup() {
      // 通过 vuex的useStore 拿到 store
      const store = useStore()
      
      const sCounter = computed(() => store.state.counter)
      // const sName = computed(() => store.state.name)
      // const sAge = computed(() => store.state.age)

      // storeStateFns -> {name: function, age: function}
      const storeStateFns = mapState(['counter', 'name', 'age'])
      // storeState -> {name: ref, age: ref}
      const storeState = {}
      Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({$store: store})
        storeState[fnKey] = computed(fn)
      })


      return {
        sCounter,
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>