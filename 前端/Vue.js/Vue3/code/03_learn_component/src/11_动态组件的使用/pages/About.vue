<template>
  <div>
    About组件
    <button @click="current++">{{ current }}</button>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      current: 0
    }
  },

  // 组件的生命周期
  created() {
    console.log('about created')
  },
  unmounted() {
    console.log('about unmounted')
  },
  // 进入组件
  activated() {
    console.log('about activated')
  },
  // 离开组件
  deactivated() {
    console.log('about deactivated')
  }
}
</script>

<style scoped></style>
