<template>
  <div>
    <h2>root: {{ $store.state.rootCounter }}</h2>
    <h2>home: {{ $store.state.home.homeCounter }}</h2>
    <h2>user: {{ $store.state.user.userCounter }}</h2>
    <hr />
    <h2>{{ $store.getters['home/doubleHomeCounter'] }}</h2>

    <button @click="increment">home+1</button>
    <button @click="incrementActions">home+1</button>
    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('home/increment')
    },
    incrementActions() {
      this.$store.dispatch('home/incrementActions')
    }
  }
}
</script>

<style scoped></style>
