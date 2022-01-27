<template>
  <div>
    <h2>总价格：{{ $store.getters.totalPrice }}</h2>
    <h2>总价格：{{ $store.getters.totalPriceCountGreaterN(2) }}</h2>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>