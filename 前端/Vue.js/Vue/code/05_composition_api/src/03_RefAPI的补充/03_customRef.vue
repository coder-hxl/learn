<template>
  <div>
    <input type="text" v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import useDebounceRef from './hook/useDebounceRef.js'

export default {
  setup() {
    let message = useDebounceRef('Hello World', 1000)

    return {
      message
    }
  }
}
</script>

<style scoped></style>
