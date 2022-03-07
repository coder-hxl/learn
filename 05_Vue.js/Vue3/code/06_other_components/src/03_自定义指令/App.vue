<template>
  <div>
    <h2 v-format-time='"YYYY/MM/DD"'>{{timestamp}}</h2>

    <h2 v-format-time>{{timestamp}}</h2>
  </div>
</template>

<script>
  export default {
    setup() {
      const timestamp = 1642516716

      return {
        timestamp
      }
    }
  }
</script>

<style scoped>

</style>
