<template>
  <div>
    <h2>root: {{ $store.state.rootCounter }}</h2>
    <h2>home: {{ $store.state.home.homeCounter }}</h2>
    <h2>user: {{ $store.state.user.userCounter }}</h2>
    <hr>
  </div>
</template>

<script>

  export default {
    setup() {
    }
  }
</script>

<style scoped>

</style>
