<template>
  <div>
    <h2 ref="title">{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello fuhuan'
    }
  },
  methods: {
    changeMessage() {
      this.message = '你好 浮幻'
    }
  },

  // 组件的声明周期
  // 创造之前
  beforeCreate() {
    console.log('home beforeCreate')
  },
  // 创造完成
  created() {
    console.log('home created')
  },
  // 挂载之前
  beforeMount() {
    console.log('home beforeMount')
  },
  // 挂载完成
  mounted() {
    console.log('home mounted')
  },
  // 卸载之前
  beforeUnmount() {
    console.log('home beforeUnmount')
  },
  // 卸载完成
  unmounted() {
    console.log('home unmounted')
  },
  // 更新之前
  beforeUpdate() {
    console.log(this.$refs.title.innerHTML)
    console.log('home beforeUpdate')
  },
  // 更新之后
  updated() {
    console.log(this.$refs.title.innerHTML)
    console.log('home updated')
  }
}
</script>

<style scoped></style>
