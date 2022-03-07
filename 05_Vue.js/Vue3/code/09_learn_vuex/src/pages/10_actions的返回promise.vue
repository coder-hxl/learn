<template>
  <div>
    <h2>总价格：{{ $store.state.counter }}</h2>
    <hr>
  </div>
</template>

<script>
  import { onMounted } from 'vue'
  import { useStore } from 'vuex'

  export default {
    setup() {
      const store = useStore()

      onMounted(() => {
        const promise = store.dispatch('getHomeMultidata')
        promise.then(res => {
          console.log(res);
        }).catch(err => {
          console.error(err);
        })
      })

    }
  }
</script>

<style scoped>

</style>
